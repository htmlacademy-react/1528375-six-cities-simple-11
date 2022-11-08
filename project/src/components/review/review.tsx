import { Reviews } from '../../types/types';
import dayjs from 'dayjs';

type reviewPropsType = {
  review: Reviews;
}

const calcRating = (rating: number): number => Math.floor((rating * 100) / 5);

function Review({review}: reviewPropsType): JSX.Element {
  const { comment, date, rating, user } = review;

  const modDate = dayjs(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${calcRating(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={modDate.format('YYYY-MM-DD')}>{modDate.format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export { Review };
