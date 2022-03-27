import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import carSide from "../../assets/images/car-side-solid.svg";
import OtherUserComponent from "../../components/ThirdPage/OtherUserComponent";
import ProfileDropdownComponent from "./ProfileDropdownComponent";

function MapComponent({dropdown, setDropdown, toggleDropDownComponent}) {
  const defaultPos = [50.60116334932464, 3.126393213660998];
  const firstUserPos = defaultPos;
  const secondUserPos = [50.60094149677515, 3.1215948689332027];

  const userMarker = new L.Icon({
    iconUrl: carSide,
    iconSize: [30, 30],
  });

  return (
    <MapContainer center={defaultPos} zoom={14}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker 
      position={firstUserPos} 
      icon={userMarker}
      eventHandlers= {{
        click: () => {
          toggleDropDownComponent(<OtherUserComponent/>);
        }
      }}
      ></Marker>
      <Marker 
      position={secondUserPos} 
      icon={userMarker}
      eventHandlers= {{
        click: () => {
          toggleDropDownComponent(<ProfileDropdownComponent/>);
        }
      }}
      ></Marker>
    </MapContainer>
  );
}

export default MapComponent;
