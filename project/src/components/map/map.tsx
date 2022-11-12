import leafleat from 'leaflet';
import {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/useMap';
import { City, OffersType } from '../../types/types';

type MapPropsType = {
  city: City[];
  offers: OffersType[];
  selectedOffer: OffersType | undefined;
  height: string;
  classname: string;
  selectedCity: City;
}

function Map({city, offers, selectedOffer, height, classname, selectedCity}: MapPropsType) {

  const targetCity = city.find((item) => (item.title === selectedCity.title)) as City;

  const mapRef = useRef(null);
  const map = useMap(mapRef, targetCity);

  const defaultMapPin = leafleat.icon({
    iconUrl: '../../../img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });

  const activeMapPin = leafleat.icon({
    iconUrl: '../../../img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.coord.lat,
          lng: offer.coord.lng
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? activeMapPin
              : defaultMapPin
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section className={`${classname} map`}
      style={{height: `${height}`}}
      ref={mapRef}
    >

    </section>
  );
}

export {Map};
