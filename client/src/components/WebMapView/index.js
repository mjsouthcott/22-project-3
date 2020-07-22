import React, { useEffect, useRef, useState } from 'react';
import { loadModules } from 'esri-loader';
import API from '../../utils/API'


export const WebMapView = () => {
    const mapRef = useRef();

    const [mapSymbols, setMapSymbols] = useState([])

    useEffect(() => {
      API.getVehicles()
        .then(res => {
          setMapSymbols(res.data)
        })
    }, [])

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules(['esri/Map', 
                    'esri/views/MapView', 
                    'esri/Graphic', 
                    'esri/layers/GraphicsLayer',
                    'esri/widgets/BasemapToggle', 
                    'esri/widgets/CoordinateConversion',
                    'esri/widgets/Legend'], { css: true })
        .then(([ArcGISMap, MapView, Graphic, GraphicsLayer, BasemapToggle,CoordinateConversion,Legend]) => {
          const map = new ArcGISMap({
            basemap: 'hybrid'
          });

          // load the map view at the ref's DOM node
          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-75.54, 45.45],
            zoom: 11
          });

          let pointGraphics = []
            
            mapSymbols.forEach(symbolObj => {

            if (symbolObj.role === "Maintenance Manager" && symbolObj.location !== undefined)
            {

              let registrationNumber = symbolObj.registrationNumber
              let callSign = symbolObj.callSign
              let userName = `${symbolObj.occupant.firstName} ${symbolObj.occupant.lastName}`
              let rank = symbolObj.occupant.rank
              let vehicleType = symbolObj.type

              let point = {
                type: "point", // autocasts as new Point()
                longitude: symbolObj.location.longitude,
                latitude: symbolObj.location.latitude
              };

              let symbol = {
                type: "simple-marker",  // autocasts as new PictureMarkerSymbol()
                color: 'blue',
                size: "15px",
                style: 'square'
              }

              let graphic = new Graphic({
                geometry: point,
                symbol: symbol});

              graphic.popupTemplate = {
                title : "Maintenance Manager Location",
                content:`<ul><li>Vehicle Registration Number: ${registrationNumber}</li>` +
                        `<li>Vehicle CallSign: ${callSign}</li>` +
                        `<li>Manager Name: ${userName}</li>` +
                        `<li>Manager Rank: ${rank}</li>` +
                        `<li>Vehicle Type: ${vehicleType}</li><ul>`}
                      
              pointGraphics.push(graphic)    
            }



            if (symbolObj.repairRequests!== 0){
              let callSign = symbolObj.callSign
              let registrationNumber = symbolObj.registrationNumber
              let userName = ''
              let occupation = ''
              let rank = ''
              let vehicleType = symbolObj.type

              if (symbolObj.occupant)
              {
                userName = `${symbolObj.occupant.firstName} ${symbolObj.occupant.lastName}`
                occupation = symbolObj.occupant.occupation
                rank = symbolObj.occupant.rank
              }

              symbolObj.repairRequests.forEach(element =>{
                
                let point = {
                  type: "point", // autocasts as new Point()
                  longitude: element.location.longitude,
                  latitude: element.location.latitude
                };
                

                let color = 'green'
                if (element.status === 'Work In Progress') color = 'gold'
                else if (element.status === 'Open') color = 'red'


                let symbol = {
                  type: "simple-marker",  // autocasts as new PictureMarkerSymbol()
                  color: color,
                  size: "15px"
                }
                
                element.localTacticalSituation === 'Safe' ? symbol.style = 'circle' : symbol.style = 'triangle'

                let graphic = new Graphic({
                  geometry: point,
                  symbol: symbol});

                

                graphic.popupTemplate = {
                title : "Repair Request Details",
                content:`<ul><li>Vehicle Registration Number: ${registrationNumber}</li>` +
                        `<li>Vehicle CallSign: ${callSign}</li>` +
                        `<li>Vehicle Type: ${vehicleType}</li>` +
                        `<li>Operator Name: ${userName}</li>` +
                        `<li>Operator Occupation: ${occupation}</li>` +
                        `<li>Operator Rank: ${rank}</li>` +
                        `<li>Estimated Condition Class: ${element.estimatedConditionClass}</li>` +
                        `<li>Can Be Moved By: ${element.vehicleCanBeMovedBy}</li>` +
                        `<li>Local Tactical Situation: ${element.localTacticalSituation}</li>` +
                        `<li>Crew Remained With Vehicle: ${element.crewRemainedWithVehicle}</li><ul>`}
    
                pointGraphics.push(graphic)
              })
            }
            
          });

          let graphicLayer = new GraphicsLayer({
            graphics: pointGraphics
          });
          map.add(graphicLayer)

          let toggle = new BasemapToggle({
            // 2 - Set properties
            view: view, // view that provides access to the map's 'hybrid' basemap
            nextBasemap: "topo-vector" // allows for toggling to the 'topo' basemap
          });

          view.ui.add(toggle, "top-left");

          let ccWidget = new CoordinateConversion({
            view: view
          });

          view.ui.add(ccWidget, "bottom-left");

          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
        });
      }
    );

    return <div className="webmap" ref={mapRef} style={{height:"100%", width:"100%"}}/>;

};