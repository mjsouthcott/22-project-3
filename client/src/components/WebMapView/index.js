import React, { useEffect, useRef, useMemo, useState } from 'react';
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

    useMemo(
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
            center: [-75.48, 45.46],
            zoom: 12
          });

          let pointGraphics = []
            
            mapSymbols.forEach(symbolObj => {

            if (symbolObj.repairRequests!= 0){
              let callSign = symbolObj.callSign
              let registrationNumber = symbolObj.registrationNumber
              let userName = `${symbolObj.occupant.firstName} ${symbolObj.occupant.lastName}`
              let occupation = symbolObj.occupant.occupation
              let rank = symbolObj.occupant.rank

              symbolObj.repairRequests.forEach(element =>{
                
                let point = {
                  type: "point", // autocasts as new Point()
                  longitude: element.location.longitude,
                  latitude: element.location.latitude
                };
                

                let color = 'green'
                if (element.status == 'Work In Progress') color = 'yellow'
                else if (element.status = 'Open') color = 'red'


                let symbol = {
                  type: "simple-marker",  // autocasts as new PictureMarkerSymbol()
                  color: color,
                  size: "15px"
                }
                
                element.localTacticalSituation === 'Safe' ? symbol.style = 'circle' : symbol.style = 'square'

                let graphic = new Graphic({
                  geometry: point,
                  symbol: symbol});

                

                graphic.popupTemplate = {
                title : "Repair Request Details",
                content:`<ul><li>Vehicle Registration Number: ${registrationNumber}</li>` +
                        `<li>Vehicle CallSign: ${callSign}</li>` +
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