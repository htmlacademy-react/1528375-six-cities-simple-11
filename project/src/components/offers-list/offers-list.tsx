import { OfferCard } from '../../components/offer-card/offer-card';
import { OffersType } from '../../types/types';

type OffersListType = {
  offers: OffersType[];
}


function OffersList(props: OffersListType): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        props.offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
          />
        ))
      }
    </div>
  );
}

export {OffersList};
