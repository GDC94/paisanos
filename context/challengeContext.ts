import { createContext, useContext } from "react";
import { Action } from "reducers/challengeReducer";
import { ChallengeState, PriceRange } from "typings/challengeState";

export type Dispatch = (action: Action) => void;

const ChallengeContext = createContext<
  | {
      challengeState: ChallengeState;
      resetState: () => void;
      filterByCategory: (category: string) => void;
      filterByColor: (color: string) => void;
      filterByRange: ({ maxPrice, minPrice }: PriceRange) => void;
    }
  | undefined
>(undefined);

export default ChallengeContext;

export const useChallengeState = () => {
  const context = useContext(ChallengeContext);
  if (context === undefined) {
    throw new Error("Error on 'challenge context'");
  }
  return context;
};
