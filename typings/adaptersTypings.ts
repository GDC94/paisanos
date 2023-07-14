export interface AdaptedNFPaisanosData {
  id: number;
  instantPrice: string;
  highestBid: string;
  author: string;
  authorAvatar: string;
  type: string;
  stock: number;
  likes: number;
  auctionCreatedAt: {
    day: string;
    time: string;
  };
  auctionEndsAt: {
    day: string;
    time: {
        hours: string;
        mins: string;
        secs: string;
      };
  };
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
