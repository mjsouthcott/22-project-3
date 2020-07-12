import React, { useEffect, useRef, useMemo  } from 'react';
import { loadModules } from 'esri-loader';

export const WebMapView = () => {
    const mapRef = useRef();


    const mockupJson = {
      "requests" :[
        {
          operatorName : 'Matthew Southcott',
          type: 'Medium Logistic Vehicle, Command Post',
          registrationNumber: '19000',
          callSign: '88A',
          icon: 'assets/images/medium-logistic-vehicle-command-post.png',
          location:{
            latitude: 45.4801785,
            longitude: -75.472925
          }
        },
        {
          operatorName : 'Max Guo',
          type: 'Medium Logistic Vehicle, Gun Tractor',
          registrationNumber: '19000',
          callSign: '88A',
          icon: 'assets/images/medium-logistic-vehicle-gun-tractor.png',
          location:{
            latitude: 45.482142,
            longitude: -75.475700
          }
        },
        {
          operatorName : 'Mila Mamata',
          type: 'Armoured Patrol Vehicle',
          registrationNumber: '19000',
          callSign: '88A',
          icon: 'assets/images/armoured-patrol-vehicle.png',
          location:{
            latitude: 45.489154,
            longitude: -75.477379
          }
        }
      ]

    }



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
          pointGraphics = mockupJson['requests'].map(element => {

            let point = {
              type: "point", // autocasts as new Point()
              longitude: element.location.longitude,
              latitude: element.location.latitude
            };
  
            let iconSymbol = {
              type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
              url: element.icon,
              width: "40px",
              height: "32px"
            }
  
            let pointGraphic = new Graphic({
              geometry: point,
              symbol: iconSymbol,
              popupTemplate : {
                title : "Armoured-recovery-vehicle",
                content:`<ul><li>Operator Name: ${element.operatorName}</li>` +
                        `<li>Vehicle Type: ${element.type}</li>` +
                        `<li>Registration Number: ${element.registrationNumber}</li>` +
                        `<li>CallSign: ${element.callSign}</li><ul>`
              }
            });

            return pointGraphic
            
          });

          let graphicLayer = new GraphicsLayer({
            graphics: pointGraphics
          });
          map.add(graphicLayer)

          let toggle = new BasemapToggle({
            // 2 - Set properties
            view: view, // view that provides access to the map's 'topo' basemap
            nextBasemap: "topo-vector" // allows for toggling to the 'hybrid' basemap
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

    return <div className="webmap" ref={mapRef} style={{height:"427px", width:"1250px"}}/>;
};