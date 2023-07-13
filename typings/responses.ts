export interface Popular {
  id: number;
  instantPrice: string;
  highestBid: string;
  author: string;
  authorAvatar: string;
  type: string;
  stock: number;
  likes: number;
  createdAt: Date;
  endsAt: Date;
  media: Media;
  attributes: Attributes;
  bidUsers: BidUser[];
}

export interface Attributes {
  id: number;
  color: string;
  type: string;
}

export interface BidUser {
  id: number;
  name: string;
  avatar: string;
}

export interface Media {
  id: number;
  image: string;
  image2X: string;
}

//ETH price

export interface EthPrice {
  eth: string;
  usd: string;
}

// Post Obtains API KEY

export interface PostApiKey {
  message: string;
  key: string;
}

//Aunctions

export interface Aunctions {
  id: number;
  instantPrice: string;
  highestBid: string;
  author: string;
  authorAvatar: string;
  type: Type;
  stock: number;
  likes: number;
  createdAt: Date;
  endsAt: Date;
  media: Media;
  attributes: Attributes;
  bidUsers: BidUser[];
}

export interface Attributes {
  id: number;
  color: string;
  type: string;
}

export interface BidUser {
  id: number;
  name: string;
  avatar: string;
}

export interface Media {
  id: number;
  image: string;
  image2X: string;
}

export enum Type {
  Art = "Art",
  Photography = "Photography",
}
