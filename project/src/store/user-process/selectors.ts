import { NameSpace } from '../../constants';
import { State } from '../../types/types';

export const getUserData = (state: State) => state[NameSpace.User].userData;
export const getAuthStatus = (state: State) => state[NameSpace.User].authorizationStatus;
