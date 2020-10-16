import { User } from './User';
import { Company } from './Company';


export interface Mappable {
  location: {
    lat: number,
    lng: number
  },
  info(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      map: this.googleMap
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.info()
      });

      infoWindow.open(this.googleMap, marker);
    })
  };
}