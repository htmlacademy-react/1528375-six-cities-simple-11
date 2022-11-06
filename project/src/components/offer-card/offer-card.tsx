import { Link } from 'react-router-dom';
import { OffersType } from '../../types/types';
import {MouseEvent} from 'react';

type OfferCardProps = {
  offer: OffersType;
  onOfferHover: (offerId: number) => void;
};

const calcRating = (rating: number): number => Math.floor((rating * 100) / 5);

function OfferCard({offer, onOfferHover}: OfferCardProps): JSX.Element {
  const {id, previewImage, isPremium, price, title, type, rating } = offer;

  const listOfferHoverHandler = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    onOfferHover(offer.id);
  };


  return (
    <article
      className="cities__card place-card"
      onMouseEnter={listOfferHoverHandler}
    >
      {isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${calcRating(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export {OfferCard};
