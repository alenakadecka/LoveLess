import { MapItem } from './MapItem';

interface LocationMapsProps {
  items: MapItem[];
}

export function LocationMap({ items }: LocationMapsProps) {
  //komponenta obsahuje logiku pre mapu

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
