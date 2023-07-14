
// CHALLENGE STATE
export interface ChallengeState {
  userKey: string;
  ethPriceInfo: {
    eth: string,
    usd: string,
  };
  allAunctions: object;
  mostPopularAunctions: object;
}
