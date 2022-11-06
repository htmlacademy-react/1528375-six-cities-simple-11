import { OfferCard } from '../../components/offer-card/offer-card';
import { OffersType } from '../../types/types';

type OffersListType = {
  offers: OffersType[];
  onOfferHover: (offerId: number) => void;
}


function OffersList({offers, onOfferHover}: OffersListType): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
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
