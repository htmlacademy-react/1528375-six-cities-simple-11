import { MouseEvent } from 'react';
import { cityNames } from '../../constants';
import { selectCityAction } from '../../store/actions/action';
import { store } from '../../store/store';

type citiesListPropType = {
  selectedCity: string;
}

function CitiesList({selectedCity}: citiesListPropType): JSX.Element {

  const cities = Object.values(cityNames);

  const activeCityClass = 'tabs__item--active';

  function handleCityClick(evt: MouseEvent) {
    evt.preventDefault();
    const city = ((evt.target as HTMLLIElement).textContent) as string;
    store.dispatch(selectCityAction(city));
  }

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">

        {
          cities.map((item) => (
            <li className="locations__item" key={item}>
              <a className={`locations__item-link tabs__item ${item === selectedCity ? activeCityClass : ''}`} href="#todo"
                onClick={handleCityClick}
              >
                <span>{item}</span>
              </a>
            </li>
          ))
        }

      </ul>
    </section>
  );
}

export {CitiesList};
