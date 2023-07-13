import { challengeInitialState } from "context/initialValue";
import { ChallengeState } from "typings/challengeState";


export type Action = { type: "reset challenge state" };

const challengeReducer = (stateChallenge: ChallengeState, action: Action) => {
  switch (action.type) {
    case "reset challenge state": {
      return { ...challengeInitialState };
    }
    default:
      return challengeInitialState;
  }
};

export default challengeReducer;
