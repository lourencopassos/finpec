import { CPRF } from "../api/api.types";

export type CPRFContextType = {
  cprf: CPRF[];
};

export enum ActionTypes {
  SET_CPRF = "SET_CPRF",
  INITIALIZE_CPRF = "INITIALIZE_CPRF",
  SAVE_CPRF = "SAVE_CPRF",
}

export const initialState: IInitialState = {
  cprf: [],
  originalCPRFList: [],
};

export interface IInitialState {
  cprf: CPRF[];
  originalCPRFList: CPRF[];
}

export const Actions = {
  SET_CPRF: ActionTypes.SET_CPRF,
  INITIALIZE_CPRF: ActionTypes.INITIALIZE_CPRF,
  SAVE_CPRF: ActionTypes.SAVE_CPRF,
};

export const reducer = (state: IInitialState, action: any): any => {
  switch (action.type) {
    case Actions.SET_CPRF:
      return {
        ...state,
        cprf: action.payload,
      };
    case Actions.INITIALIZE_CPRF:
      return {
        ...state,
        originalCPRFList: action.payload,
        cprf: action.payload,
      };
    case Actions.SAVE_CPRF:
      return {
        ...state,
        cprf: [...state.cprf, action.payload],
      };
    default:
      break;
  }
};
