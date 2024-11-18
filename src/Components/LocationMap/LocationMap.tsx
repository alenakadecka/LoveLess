import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { MapItem } from './MapItem';

interface LocationMapsProps {
  items: MapItem[];
}

export function LocationMap({ items }: LocationMapsProps) {
  //komponenta obsahuje logiku pre mapu
  return (
    <>
      <div className="introduction">
        {
          'Here are the most visited and best rated zero waste shops in the City.'
        }
      </div>
      <div className="buttons">
        <button>Bratislava</button>
        <button>Brno</button>
        <button>Praha</button>
      </div>
      <MapContainer
        center={[48.1503816, 17.1061185]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '90vh', width: '90vw' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {items.map((item, index) => (
          <Marker
            key={index}
            position={[item.coordinates.lat, item.coordinates.lng]}
          >
            <Popup>
              <strong>{item.name}</strong>
              <br />
              {item.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
