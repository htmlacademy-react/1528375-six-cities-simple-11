import { sortingItems } from '../../constants';
import { MouseEvent, useState } from 'react';
import { store } from '../../store/store';
import { getSortingTypeAction } from '../../store/actions/action';


function SortList(): JSX.Element {
  const sortingArr = Object.values(sortingItems);

  const [isListOpened, setIsListOpened] = useState(false);
  const [sortType, setSortType] = useState(sortingItems.POPULAR);

  function handleListOpen() {
    setIsListOpened(!isListOpened);
  }

  function handleSortType(evt: MouseEvent) {
    setSortType((evt.target as HTMLLIElement).textContent as string);
    setIsListOpened(!isListOpened);
  }

  store.dispatch(getSortingTypeAction(sortType));

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleListOpen}>
        {sortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isListOpened ? 'places__options--opened' : ''}`} >

        {
          sortingArr.map((item) => (
            <li className="places__option" tabIndex={0} key={item} onClick={handleSortType}>{item}</li>
          ))
        }

      </ul>
    </form>
  );
}

export { SortList };
