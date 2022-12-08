import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { ReviewValid } from '../../constants';
import { useAppDispatch } from '../../hooks/useDispatch';
import { postCommentAction } from '../../store/actions/api-actions';
import { Stars } from './stars';

type reviewListPropsType = {
  offerId: number;
}

function ReviewForm({offerId}: reviewListPropsType): JSX.Element {

  const dispatch = useAppDispatch();
  const [review, setReview] = useState({
    comment: '',
    rating: NaN,
  });

  const resetReview = () => {
    setReview({rating: NaN, comment:''});
  };

  const formChangeHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setReview({
      ...review,
      [name]: value
    });
  };


  const submitReview = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const id = offerId;
    const comment = review.comment;
    const rating = review.rating;
    dispatch(postCommentAction({id, comment, rating}));
    resetReview();
  };

  const rating = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

  const {MAX_LENGTH: maxLength, MIN_LENGTH: minLength} = ReviewValid;
  const reviewIsValid = review.rating && review.comment.length > minLength && review.comment.length < maxLength;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitReview}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {
          rating.reverse().map((item, count) => (
            <Stars
              key={item}
              item={item}
              count={count}
              rating={rating}
              formChangeHandle={formChangeHandle}
            />
          ))
        }

      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" value={review.comment} onChange={formChangeHandle}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        {
          reviewIsValid
            ?
            <button className="reviews__submit form__submit button" type="submit">Submit</button>
            :
            <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        }

      </div>
    </form>
  );
}

export {ReviewForm};
