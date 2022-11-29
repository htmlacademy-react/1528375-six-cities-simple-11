import CitiesList from '../../components/cities-list/cities-list';
import { OffersType } from '../../types/types';
import OffersList from '../../components/offers-list/offers-list';
import { Map } from '../../components/map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useSelector';
import SortList from '../../components/sort-list/sort-list';
import { Loading } from '../../components/loading/loading';
import { sortItemsList } from '../../constants';
import { getSelectedCity, getSortType } from '../../store/ui-actions/selectors';
import { getOffersLoadingStatus } from '../../store/offers-data/selectors';

type MainPropsType = {
  offers: OffersType[];
}


function MainPage(props: MainPropsType): JSX.Element {

  const { offers } = props;

  const [selectedOffer, setSelectedOffer] = useState<OffersType | undefined>(undefined);

  const onOfferHover = (offerId: number) => {
    const currentOffer = offers.find((offer) => offer.id === offerId) as OffersType;
    setSelectedOffer(currentOffer);
  };

  const selectedCity = useAppSelector(getSelectedCity);
  const cityOffers = offers.filter((item) => item.city.name === selectedCity.title);

  const sortingTypeName = useAppSelector(getSortType);

  const sortedOffers = () => {
    switch (sortingTypeName) {
      case sortItemsList.PRICE_DOWN:
        return cityOffers.sort((a, b) => a.price - b.price);
      case sortItemsList.PRICE_UP:
        return cityOffers.sort((a, b) => b.price - a.price);
      case sortItemsList.RATING_DOWN:
        return cityOffers.sort((a, b) => b.rating - a.rating);
      default:
        return cityOffers;
    }
  };

  const isOffersLoading = useAppSelector(getOffersLoadingStatus);

  if (isOffersLoading) {
    return (
      <Loading />
    );
  }


  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">

        <CitiesList selectedCity={selectedCity} />

      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cityOffers.length} places to stay in {selectedCity.title}</b>

            <SortList />

            <OffersList cityOffers={sortedOffers()} onOfferHover={onOfferHover}/>

          </section>
          <div className="cities__right-section">

            <Map selectedCity={selectedCity} offers={offers} selectedOffer={selectedOffer} height={'836px'} classname={'cities__map'} />

          </div>
        </div>
      </div>
    </main>
  );
}

export {MainPage};
