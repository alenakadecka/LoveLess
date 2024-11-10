export interface MapItem {
  state: string;
  city: string;
  name: string;
  coordinates: {
    lng: number;
    lat: number;
  };
}
