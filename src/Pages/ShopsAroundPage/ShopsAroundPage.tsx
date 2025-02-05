import { useState } from 'react';
import { LocationMap } from '../../Components/LocationMap/LocationMap';

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
      <div className="mb-3">
        <label htmlFor="cityDropdown" className="form-label">
          Select a City
        </label>
        <select
          id="cityDropdown"
          className="form-select"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          {allCities.map((cityOption) => (
            <option key={cityOption} value={cityOption}>
              {cityOption}
            </option>
          ))}
        </select>
      </div>

      <LocationMap
        items={locationsData}
        filteredItems={filteredItems}
      ></LocationMap>
    </div>
  );
}
