import { challengeInitialState } from "context/initialValue";
import { ChallengeState } from "typings/challengeState";

export type Action =
  | { type: "reset challenge state" }
  | { type: "filter by colors", payload: string }
  | { type: "filter by range" }
  | { type: "filter by category"; payload: string };

const ChallengeReducer = (
  stateChallenge: ChallengeState,
  action: Action,
): ChallengeState => {
  switch (action.type) {
    case "reset challenge state": {
      return { ...challengeInitialState };
    }
    case "filter by category": {
      if (action.payload === "All items") {
        return {
          ...stateChallenge,
          allAunctions: challengeInitialState.allAunctions,
        };
      } else {
        const filteredAunctions = challengeInitialState?.allAunctions?.filter(
          (aunction) => aunction.type === action.payload
        );
        return {
          ...stateChallenge,
          allAunctions: filteredAunctions,
        };
      }
    }
    case "filter by colors": {
      if (action.payload === "All colors") {
        return {
          ...stateChallenge,
          allAunctions: challengeInitialState.allAunctions,
        };
      } else {
        const filteredAunctionsByColor = challengeInitialState?.allAunctions?.filter(
          (aunction) => aunction.attributes.color === action.payload
        );
        return {
          ...stateChallenge,
          allAunctions: filteredAunctionsByColor,
        };
      }
    }
    
    default:
      return challengeInitialState;
  }
};

export default ChallengeReducer;
