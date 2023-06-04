import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import Mission from "../assets/Images/missionmarker.png";
import { useEffect, useRef, useState } from "react";
import "./Map.css";
import ChangeMapType from "./Layers/ChangeMapType";
import MarkInfo from "./MarkInfo/MarkInfo.js";
import processedData from "../assets/Data/processedData.json"

const Map = (props) => {
  const { isLoaded } = props;
  const [selectedMarker, setSelectedMarker] = useState("");

  const containerStyle = {
    width: "90vw",
    height: "90vh",
  };

  const center = {
    lat: 1.290270,
    lng: 103.851959,
  };

  // use processed data for the Marks
  const markers = processedData
  console.log(markers)

  const [changeMyTypeID, setToggleChangeMyTypeID] = useState(1);
  const mapRef = useRef(null);

  // Map Instance Setting
  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
  };
  console.log("mapRefCurrent", mapRef.current);

  const MapType = {
    roadmap: "roadmap",
    satellite: "satellite",
    hybrid: "hybrid",
    terrain: "terrain",
  };
  const handleMapToggle = () => {
    if (changeMyTypeID === 0) {
      setToggleChangeMyTypeID(1);
    } else if (changeMyTypeID === 1) {
      setToggleChangeMyTypeID(2);
    } else if (changeMyTypeID === 2) {
      setToggleChangeMyTypeID(3);
    } else if (changeMyTypeID === 3) {
      setToggleChangeMyTypeID(4);
    } else if (changeMyTypeID === 4) {
      setToggleChangeMyTypeID(1);
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      if (changeMyTypeID === 1) {
        mapRef.current.setMapTypeId(MapType.roadmap);
      } else if (changeMyTypeID === 2) {
        mapRef.current.setMapTypeId(MapType.terrain);
      } else if (changeMyTypeID === 3) {
        mapRef.current.setMapTypeId(MapType.satellite);
      } else if (changeMyTypeID === 4) {
        mapRef.current.setMapTypeId(MapType.hybrid);
      }
    }
  }, [changeMyTypeID]);


   // App
  
  return (
    isLoaded && (
      <div className = "MapSection">
        <div className = "GoogleMap">
        <GoogleMap 
          
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onMapLoad}
        >v=
          {markers.map((marker) => {
            return (
              <div key={marker.name}>
                <Marker
                  position={marker.location}
                  options={{
                    icon:Mission
                  }}
                  onClick={() => {
                    setSelectedMarker(marker);
                  }}
                />
              </div>
            );
          })}

          {selectedMarker && (
            <InfoWindow 
              position={selectedMarker.location}
              options={{
                pixelOffset: new window.google.maps.Size(0, -40),
              }}
            >
              <div>
                <h1>Project -{selectedMarker.name}</h1>
                <button onClick={() => setSelectedMarker("")}>close</button>
              </div>
            </InfoWindow>
          )}

          <ChangeMapType handleMapToggle={handleMapToggle} />
        </GoogleMap>
        </div>
        
        <div className = "MarkInfo">
        <MarkInfo 
          selectedMarker = {selectedMarker}  />
        </div>

      </div>
    )
  );
};

export default Map;
