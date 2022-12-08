import { ChangeEvent } from 'react';

type StarsPropsType = {
  item: string;
  count: number;
  rating: string[];
  formChangeHandle: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Stars(props: StarsPropsType): JSX.Element {
  const {item, count, rating, formChangeHandle} = props;
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={rating.length - count} id={`${rating.length - count}-stars`} type="radio" onChange={formChangeHandle}/>
      <label htmlFor={`${rating.length - count}-stars`} className="reviews__rating-label form__rating-label" title={item}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export {Stars};
