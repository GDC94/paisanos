import React, { useMemo, useReducer } from "react";

import { challengeInitialState } from "./initialValue";

import useGetUserKey from "services/hooks/useGetUserKey";
import challengeReducer from "reducer/challengeReducer";
import ChallengeContext from "./challengeContext";

type UserProviderProps = {
  children: React.ReactNode;
};

const ChallengeProvider = ({ children }: UserProviderProps) => {
  const [stateChallenge, dispatchUser] = useReducer(
    challengeReducer,
    challengeInitialState,
  );
  const { userKey } = useGetUserKey();

  const challengeState = useMemo(() => {
    const userData = {
      challengeState: {
        ...stateChallenge,
        userKey,
      },
      resetState: () => dispatchUser({ type: "reset challenge state" }),
    };
    return userData;
  }, [stateChallenge, userKey]);

  return (
    <ChallengeContext.Provider value={challengeState}>
      {children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
