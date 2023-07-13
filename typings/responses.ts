//ETH price

export interface EthPriceInfo {
  eth: string;
  usd: string;
}

// Post Obtains API KEY

export interface PostApiKey {
  message: string;
  key: string;
}

//Aunctions

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
  bidUsers: BidUser[];
}

export interface BidUser {
  id: number;
  name: string;
  avatar: string;
}

export enum Type {
  Art = "Art",
  Photography = "Photography",
}
