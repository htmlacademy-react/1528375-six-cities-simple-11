import { NameSpace } from '../../constants';
import { State } from '../../types/types';

export const getSelectedCity = (state: State) => state[NameSpace.Ui].selectedCity;
export const getSortType = (state: State) => state[NameSpace.Ui].sortType;
