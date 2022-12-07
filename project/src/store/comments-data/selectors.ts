import { NameSpace } from '../../constants';
import { State } from '../../types/types';

export const getCommentLoadingStatus = (state: State) => state[NameSpace.Comments].isCommentsLoading;
export const getComments = (state: State) => state[NameSpace.Comments].comments;
