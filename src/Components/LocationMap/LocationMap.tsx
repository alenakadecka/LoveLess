import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { marker, featureGroup } from 'leaflet';
import { useEffect } from 'react';
import { MapItem } from './MapItem';

interface LocationMapsProps {
  items: MapItem[];
  filteredItems: MapItem[];
}

function LocationMapInner({ items, filteredItems }: LocationMapsProps) {
  const map = useMap();

  useEffect(() => {
    const markerArray = filteredItems.map((item) =>
      marker([item.coordinates.lat, item.coordinates.lng]),
    );
    map.invalidateSize();
    const group = featureGroup(markerArray);

    map.fitBounds(group.getBounds());
  }, [map, filteredItems]);

  return (
    <>
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
    </>
  );
}

export function LocationMap({
  items,

  filteredItems,
}: LocationMapsProps) {
  //komponenta obsahuje logiku pre mapu
  return (
    <>
      <MapContainer
        center={[0, 0]}
        zoom={0}
        scrollWheelZoom={false}
        style={{ height: '90vh', width: '90vw' }}
      >
        <LocationMapInner items={items} filteredItems={filteredItems} />
      </MapContainer>
    </>
  );
}
