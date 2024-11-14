import { LocationMap } from '../../Components/LocationMap/LocationMap';

export function ShopsAroundPage() {
  //stranka definovane data ale nebudem nic zobrazovat
  return (
    <div>
      <LocationMap
        items={[
          {
            state: 'Slovakia',
            city: 'Bratislava',
            name: 'Bezobalovo',
            coordinates: { lng: 17.122779, lat: 48.1555187 },
          },
          {
            state: 'Slovakia',
            city: 'Bratislava',
            name: 'U Vážky',
            coordinates: { lng: 17.1273546, lat: 48.1467209 },
          },
        ]}
      ></LocationMap>
    </div>
  );
}
