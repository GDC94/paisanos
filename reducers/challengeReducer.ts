import { challengeInitialState } from "context/initialValue";
import { ChallengeState } from "typings/challengeState";

export type Action =
  | { type: "reset challenge state" }
  | { type: "filter by colors" }
  | { type: "filter by range" }
  | { type: "filter by category" };

const ChallengeReducer = (
  stateChallenge: ChallengeState,
  action: Action,
): ChallengeState => {
  switch (action.type) {
    case "reset challenge state": {
      return { ...challengeInitialState };
    }
    default:
      return challengeInitialState;
  }
};

export default ChallengeReducer;
