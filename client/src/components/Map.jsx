import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [47.21133, -1.547447];

function Map() {
  return (
    <MapContainer
      center={center}
      zoom={19}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>Wild Code School</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
