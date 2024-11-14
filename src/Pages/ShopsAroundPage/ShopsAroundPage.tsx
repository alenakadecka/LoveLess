import { LocationMap } from '../../Components/LocationMap/LocationMap';
import { locationsData } from './dataLocationMap';

export function ShopsAroundPage() {
  //stranka definovane data ale nebudem nic zobrazovat
  return (
    <div>
      <LocationMap items={locationsData}></LocationMap>
    </div>
  );
}
