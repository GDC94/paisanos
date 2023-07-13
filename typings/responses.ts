export interface EthPriceInfoResponse {
  eth: string;
  usd: string;
}

export interface PostApiKeyResponse {
  message: string;
  key: string;
}

export interface NFPAISANO {
  id: number;
  instantPrice: string;
  highestBid: string;
  author: string;
  authorAvatar: string;
  type: string;
  stock: number;
  likes: number;
  createdAt: string;
  endsAt: string;
  media: {
    id: number;
    image: string;
    image2x: string;
  };
  attributes: {
    id: number;
    color: string;
    type: string;
  };
  bidUsers: SingleBidUser[];
}

export interface SingleBidUser {
  id: number;
  name: string;
  avatar: string;
}

export enum Type {
  Art = "Art",
  Photography = "Photography",
}
