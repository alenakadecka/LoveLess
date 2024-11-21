import { useState } from 'react';
import { LocationMap } from '../../Components/LocationMap/LocationMap';
import { MapItem } from '../../Components/LocationMap/MapItem';
import { locationsData } from './dataLocationMap';

export function ShopsAroundPage() {
  //stranka definovane data ale nebudem nic zobrazovat

  const allCities: string[] = Array.from(
    new Set(locationsData.map((record) => record.city)),
  );

  const [city, setCity] = useState('Praha');

  const filteredItems = locationsData.filter((item) => item.city === city);

  return (
    <div>
      <LocationMap
        items={locationsData}
        filteredItems={filteredItems}
      ></LocationMap>
      {allCities.map((city) => {
        return (
          <button
            onClick={() => {
              setCity(city);
            }}
          >
            {city}
          </button>
        );
      })}
    </div>
  );
}
