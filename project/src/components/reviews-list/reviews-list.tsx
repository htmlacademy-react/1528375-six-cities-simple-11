import { memo, useEffect } from 'react';
import { MAX_REVIEW_COUNT } from '../../constants';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { fetchCommentsAction } from '../../store/actions/api-actions';
import { getCommentLoadingStatus, getComments } from '../../store/comments-data/selectors';
import { Loading } from '../loading/loading';
import { Review } from '../review/review';

type reviewListPropsType = {
  offerId: number;
}

function ReviewList({offerId}: reviewListPropsType): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCommentsAction(offerId));
  }, [offerId, dispatch]);

  const reviews = useAppSelector(getComments);
  const sortedReviews =
    reviews
      .slice()
      .sort((a, b) => Number(b.date) - Number(a.date))
      .slice(0, MAX_REVIEW_COUNT);

  const isCommentsLoading = useAppSelector(getCommentLoadingStatus);

  if (isCommentsLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortedReviews.map((review) => (
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

export default memo(ReviewList);
