import { OfferCard } from '../../components/offer-card/offer-card';
import { OffersType } from '../../types/types';

type OffersListType = {
  cityOffers: OffersType[];
  onOfferHover: (offerId: number) => void;
}


function OffersList({cityOffers, onOfferHover}: OffersListType): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        cityOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onOfferHover={onOfferHover}
          />
        ))
      }
    </div>
  );
}

export {OffersList};
