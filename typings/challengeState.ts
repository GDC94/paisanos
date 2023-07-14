import { NFPAISANO } from "./responses";

// CHALLENGE STATE
export interface ChallengeState {
  userKey: string;
  ethPriceInfo: {
    eth: string;
    usd: string;
  };
  allAunctions: NFPAISANO[];
  mostPopularAunctions: NFPAISANO[];
  filteredAunctions: NFPAISANO[];
  filteredAunctionsByColor: NFPAISANO[];
  filteredAunctionsByRange: NFPAISANO[];
}

export interface PriceRange {
  minPrice: number;
  maxPrice: number;
}
