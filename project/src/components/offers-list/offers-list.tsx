import { memo } from 'react';
import { OfferCard } from '../../components/offer-card/offer-card';
import { OffersType } from '../../types/types';

type OffersListType = {
  cityOffers: OffersType[];
  onOfferHover: (offer: OffersType) => void;
}


function OffersList({cityOffers, onOfferHover}: OffersListType): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        cityOffers.map((offer) => (
          <article
            className='cities__card place-card'
            key={offer.id}
            onMouseEnter={() => onOfferHover(offer)}
          >
            <OfferCard
              offer={offer}
            />
          </article>
        ))
      }
    </div>
  );
}

export default memo(OffersList);
