import { CitiesList } from '../../components/cities-list/cities-list';
import { OffersType, City } from '../../types/types';
import { OffersList } from '../../components/offers-list/offers-list';
import { Map } from '../../components/map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useSelector';
import { SortList } from '../../components/sort-list/sort-list';

type MainPageProps = {
  offers: OffersType[];
  city: City[];
}

function MainPage({offers, city}: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<OffersType | undefined>(undefined);

  const onOfferHover = (offerId: number) => {
    const currentOffer = offers.find((offer) => offer.id === offerId) as OffersType;
    setSelectedOffer(currentOffer);
  };

  const selectedCity = useAppSelector((state) => state.selectedCity);
  const cityOffers = offers.filter((item) => item.cityname === selectedCity.title);

  const sortingTypeName = useAppSelector((state) => state.sortType);

  const sortedOffers = () => {
    switch (sortingTypeName) {
      case 'Price: low to high':
        return cityOffers.sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return cityOffers.sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return cityOffers.sort((a, b) => b.rating - a.rating);
      default:
        return cityOffers;
    }
  };


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
