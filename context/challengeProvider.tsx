import React, { useMemo, useReducer } from "react";
import * as MockedResponses from "../data";
import { challengeInitialState } from "./initialValue";
import challengeReducer from "reducers/challengeReducer";
import ChallengeContext from "./challengeContext";

type UserProviderProps = {
  children: React.ReactNode;
};

const ChallengeProvider = ({ children }: UserProviderProps) => {
  const [stateChallenge, dispatch] = useReducer(
    challengeReducer,
    challengeInitialState,
  );
  /* const { userKey } = useGetUserKey(); */

  const challengeState = useMemo(() => {
    const userData = {
      challengeState: {
        ...stateChallenge,
        userKey: MockedResponses?.apiKey?.key,
      },
      resetState: () => dispatch({ type: "reset challenge state" }),
      filterByCategory: (category: string) => {
        dispatch({ type: "filter by category", payload: category });
      },
    };
    return userData;
  }, [stateChallenge]);

  return (
    <ChallengeContext.Provider value={challengeState}>
      {children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
