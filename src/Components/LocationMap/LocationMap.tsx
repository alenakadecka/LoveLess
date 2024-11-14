import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import { MapItem } from './MapItem';

interface LocationMapsProps {
  items: MapItem[];
}

export function LocationMap({ items }: LocationMapsProps) {
  //komponenta obsahuje logiku pre mapu
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '90vh', width: '90vw' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>
            {item.city}, {item.state}
          </p>
          <p>
            Coordinates: {item.coordinates.lat}, {item.coordinates.lng}
          </p>
        </div>
      ))}
    </div>
  );
}
