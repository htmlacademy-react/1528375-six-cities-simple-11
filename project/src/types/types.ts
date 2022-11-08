export type OffersType = {
  id: number;
  bedrooms: number;
  cityname: string;
  description: string;
  images: string[];
  isPremium: boolean;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  coord: {
    lat: number;
    lng: number;
  };
};

export type City = {
  title: string;
  lat: number;
  lng: number;
}

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
