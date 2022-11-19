import { useAppSelector } from '../../hooks/useSelector';
import { fetchCommentsAction } from '../../store/actions/api-actions';
import { store } from '../../store/store';
import { Review } from '../review/review';

type reviewListPropsType = {
  offerId: number;
}

function ReviewList({offerId}: reviewListPropsType): JSX.Element {

  store.dispatch(fetchCommentsAction(offerId));
  const reviews = useAppSelector((state) => state.comments);

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
