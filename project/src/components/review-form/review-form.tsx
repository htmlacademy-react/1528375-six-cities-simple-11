import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { postCommentAction } from '../../store/actions/api-actions';

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
    setReview({rating: 0, comment:''});
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

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitReview}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value={5} id="5-stars" type="radio" onChange={formChangeHandle}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value={4} id="4-stars" type="radio" onChange={formChangeHandle} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value={3} id="3-stars" type="radio" onChange={formChangeHandle}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value={2} id="2-stars" type="radio" onChange={formChangeHandle}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value={1} id="1-star" type="radio" onChange={formChangeHandle}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" value={review.comment} onChange={formChangeHandle}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export {ReviewForm};
