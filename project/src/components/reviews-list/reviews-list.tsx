import { Reviews } from '../../types/types';
import { Review } from '../review/review';

type reviewListPropsType = {
  reviews: Reviews[];
}

function ReviewList({reviews}: reviewListPropsType): JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => (
            <Review
              key={review.id}
              review={review}
            />
          ))
        }
      </ul>
    </>
  );
}

export { ReviewList };
