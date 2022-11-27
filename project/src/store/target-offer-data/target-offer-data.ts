import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../constants";
import { OffersType, TargetOfferType } from "../../types/types";
import { fetchNearbyOffersAction, fetchTargetOfferAction } from "../actions/api-actions";

const initialState: TargetOfferType = {
  targetOffer: {} as OffersType,
  isTargetLoading: true,
  nearbyOffers: [],
}

const targetOfferData = createSlice({
  name: NameSpace.TargetOffer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTargetOfferAction.pending, (state) => {
        state.isTargetLoading = true;
      })
      .addCase(fetchTargetOfferAction.fulfilled, (state, action) => {
        state.targetOffer = action.payload;
        state.isTargetLoading = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
  },
})

export {targetOfferData};
