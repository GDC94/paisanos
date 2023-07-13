import { createContext, useContext } from "react";
import { Action } from "reducer/challengeReducer";
import { ChallengeState } from "typings/challengeState";


export type Dispatch = (action: Action) => void;
const ChallengeContext = createContext<| {challengeState: ChallengeState} | undefined>(undefined);
export default ChallengeContext;


export const useUser = () => {
  const context = useContext(ChallengeContext);
  if (context === undefined) {
    throw new Error("Error on 'User context'");
  }
  return context;
};
