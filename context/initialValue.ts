import { ChallengeState } from "typings/challengeState";
import * as MockedResponses from "../data";

export const challengeInitialState: ChallengeState = {
  userKey: "",
  ethPriceInfo: {
    eth: MockedResponses.ethPriceData.eth,
    usd: MockedResponses.ethPriceData.usd,
  },
  allAunctions: MockedResponses.aunctionsResponse,
  mostPopularAunctions: MockedResponses.aunctionsResponse,
  filteredAunctions: [],
  filteredAunctionsByColor: [],
  filteredAunctionsByRange: []
};
