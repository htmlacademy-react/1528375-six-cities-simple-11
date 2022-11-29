import { memo, MouseEvent } from 'react';
import { CITIES } from '../../constants';
import { useAppDispatch } from '../../hooks/useDispatch';
import { selectCityAction } from '../../store/ui-actions/ui-actions';
import { City } from '../../types/types';

type citiesListPropType = {
  selectedCity: City;
}

function CitiesList({selectedCity}: citiesListPropType): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCityClass = 'tabs__item--active';

  function handleCityClick(evt: MouseEvent) {
    evt.preventDefault();
    const cityName = ((evt.target as HTMLLIElement).textContent) as string;
    const city = CITIES.find(({title}) => title === cityName) as City;
    dispatch(selectCityAction(city));
  }

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">

        {
          CITIES.map(({title}) => (
            <li className="locations__item" key={title}>
              <a className={`locations__item-link tabs__item ${title === selectedCity.title ? activeCityClass : ''}`} href="#todo"
                onClick={handleCityClick}
              >
                <span>{title}</span>
              </a>
            </li>
          ))
        }

      </ul>
    </section>
  );
}

export default memo(CitiesList);
