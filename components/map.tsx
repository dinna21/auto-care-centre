"use client";

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type MapProps = {
  lat: number;
  lng: number;
};

const markerIcon = L.divIcon({
  className: "shop-marker-wrapper",
  html: '<div class="shop-marker"><span class="shop-marker__shine"></span><span class="shop-marker__dot"></span></div>',
  iconSize: [42, 52],
  iconAnchor: [21, 52],
  popupAnchor: [0, -46],
});

export default function Map({ lat, lng }: MapProps) {
  const position: [number, number] = [lat, lng];

  return (
    <div className="location-map">
      <MapContainer
        center={position}
        zoom={17}
        zoomControl={false}
        scrollWheelZoom={false}
        dragging
        touchZoom
        doubleClickZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            <div className="location-popup">
              <span className="location-popup__eyebrow">AUTO CARE CENTER</span>
              <strong>203 St Joseph&apos;s Street</strong>
              <span>Negombo · Open daily from 7:30 AM</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      <div className="location-map__place-card">
        <span className="location-map__status">
          <span className="location-map__status-dot" />
          Open today
        </span>
        <strong>Auto Care Center</strong>
        <span>203 St Joseph&apos;s Street, Negombo</span>
      </div>

      <div className="location-map__hint" aria-hidden="true">
        Drag to explore
      </div>
    </div>
  );
}
