import React, { useMemo, useReducer } from "react";
import { challengeInitialState } from "./initialValue";
import challengeReducer from "reducers/challengeReducer";
import ChallengeContext from "./challengeContext";

type UserProviderProps = {
  children: React.ReactNode;
};

const ChallengeProvider = ({ children }: UserProviderProps) => {
  const [stateChallenge, dispatchUser] = useReducer(
    challengeReducer,
    challengeInitialState,
  );
  /* const { userKey } = useGetUserKey(); */

  const userKey = "aca va la user key";
  const message = "Bienvenido";
  const challengeState = useMemo(() => {
    const userData = {
      challengeState: {
        ...stateChallenge,
        message,
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
