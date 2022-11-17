import { store } from '../store/store';

export type OffersType = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: [string];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: [string];
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type City = {
  title: string;
  lat: number;
  lng: number;
};

export type Reviews = {
  id: number;
    comment: string;
    date: string;
    rating: number;
    user: {
        avatarUrl: string;
        id: number;
        isPro: boolean;
        name: string;
    };
}


export type State = ReturnType<typeof store.getState>;
