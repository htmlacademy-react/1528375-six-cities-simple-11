import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { CommentsDataType } from '../../types/types';
import { fetchCommentsAction } from '../actions/api-actions';

const initialState: CommentsDataType = {
  comments: [],
  isCommentsLoading: true,
};

const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsLoading = false;
      });
  },
});

export {commentsData};
