type PlacesAttr = {
  placesPremium: boolean;
  placesImgUrl: string;
  placesCost: number;
  placesName: string;
  placesType: string;
}

function CitiesCard(places: PlacesAttr): JSX.Element {
  return (
    <article className="cities__card place-card">
      {places.placesPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : '' }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#todo">
          <img className="place-card__image" src={places.placesImgUrl} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{places.placesCost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#todo">{places.placesName}</a>
        </h2>
        <p className="place-card__type">{places.placesType}</p>
      </div>
    </article>
  );
}

export {CitiesCard};
