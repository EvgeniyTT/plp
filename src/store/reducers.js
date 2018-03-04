import {
  FILTER_COLOR,
  FILTER_CATEGORY
} from './actions';

const initialReducer = {
  drugs: [],
  drugsPrice: [],
  hasPreferences: false,
  healthData: [],
  isFetching: 0,
  isSaving: 0,
  isUnhandledChange: true,
  providers: [],
  received: false,
  messages: {
    isShown: false,
    actionItems: {
      add: [],
      update: [],
      delete: [],
      fail: []
    }
  },
  userProgress: {
    guideFlowSteps: [],
    isPreferenceModalShown: false
  },
  questions: []
};

export const reducer = (state = initialReducer, action, storeState) => {
  switch (action.type) {

    case FILTER_COLOR:
      return { ...state, ...action.uiconfig.reducer };

    case FILTER_CATEGORY:
      return {
        ...state,
        drugs: state.drugs.map(drug => ({
          ...drug,
          formularies: ((action.drugs.find(scoreDrug => scoreDrug.drug.ndc === drug.ndc) || {}).drug || {}).formularies
        }))
      };

    // case REQUEST_ALPHABETICAL_PRESCRIPTIONS:
    //   return {
    //     ...state,
    //     isFetching: state.isFetching + 1,
    //     messages: {
    //       ...state.messages,
    //       isShown: false
    //     }
    //   };

    // case RECEIVE_ALPHABETICAL_PRESCRIPTIONS:
    //   return { ...state, isFetching: state.isFetching - 1 };


    default:
      return state;
  }
};

export default reducer;
