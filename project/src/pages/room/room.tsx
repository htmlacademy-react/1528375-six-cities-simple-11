import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { OffersType } from '../../types/types';
import { offers } from '../../mocks/offers';
import { CITY } from '../../mocks/city';
import { reviews } from '../../mocks/reviews';
import { ReviewForm } from '../../components/review-form/review-form';
import { OfferCard } from '../../components/offer-card/offer-card';
import { Map } from '../../components/map/map';
import { ReviewList } from '../../components/reviews-list/reviews-list';

const calcRating = (rating: number): number => Math.floor((rating * 100) / 5);

function Room(): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<OffersType | undefined>(undefined);
  const onOfferHover = (offerId: number) => {
    const currentOffer = offers.find((offer) => offer.id === offerId) as OffersType;
    setSelectedOffer(currentOffer);
  };

  const params = useParams();

  const offer = offers.find((item) => item.id === Number(params.id)) as OffersType;

  const otherOffers = offers.filter((item) => item.id !== Number(params.id));

  const { isPremium, price, title, type, rating, bedrooms, maxAdults } = offer;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src="img/room.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">

            {isPremium
              ?
              <div className="property__mark">
                <span>Premium</span>
              </div>
              : ''}

            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${calcRating(rating)}%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">4.8</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                <li className="property__inside-item">
                    Wi-Fi
                </li>
                <li className="property__inside-item">
                    Washing machine
                </li>
                <li className="property__inside-item">
                    Towels
                </li>
                <li className="property__inside-item">
                    Heating
                </li>
                <li className="property__inside-item">
                    Coffee machine
                </li>
                <li className="property__inside-item">
                    Baby seat
                </li>
                <li className="property__inside-item">
                    Kitchen
                </li>
                <li className="property__inside-item">
                    Dishwasher
                </li>
                <li className="property__inside-item">
                    Cabel TV
                </li>
                <li className="property__inside-item">
                    Fridge
                </li>
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                </div>
                <span className="property__user-name">
                    Angelina
                </span>
                <span className="property__user-status">
                    Pro
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">

              <ReviewList reviews={reviews}/>
              <ReviewForm />

            </section>
          </div>
        </div>

        <Map city={CITY} offers={otherOffers} selectedOffer={selectedOffer} height={'579px'} classname={'property__map'} />


      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">

            {
              otherOffers.map((otheroffer) => (
                <OfferCard
                  key={otheroffer.id}
                  offer={otheroffer}
                  onOfferHover={onOfferHover}
                />
              ))
            }

          </div>
        </section>
      </div>
    </main>
  );
}

export {Room};
