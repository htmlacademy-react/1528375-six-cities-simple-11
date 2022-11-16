import leafleat from 'leaflet';
import {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/useMap';
import { City, OffersType } from '../../types/types';

type MapPropsType = {
  selectedCity: City;
  offers: OffersType[];
  selectedOffer: OffersType | undefined;
  height: string;
  classname: string;
}

function Map({selectedCity, offers, selectedOffer, height, classname}: MapPropsType) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedCity);
  map?.setView([selectedCity.lat, selectedCity.lng], 12);

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
          lat: offer.location.latitude,
          lng: offer.location.longitude
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
