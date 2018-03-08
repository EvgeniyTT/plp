// FILTER
export const FILTER_COLOR = 'FILTER_COLOR';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';


// export const resetVisitedSubsidyEstimateIfNeeded = productType =>
//   (dispatch, getState) => {
//     const subsidyConfig = (getState().workflow.subsidyEstimate || {})[productType] || {};
//     if (subsidyConfig.enabled && subsidyConfig.always) {
//       dispatch(workflowVisitedSubsidyEstimate(productType, false));
//     }
//   }
// ;

// export const tagEvent = id =>
//   (dispatch, getState) =>
//     dispatch({ type: TAG_EVENT, id, storeState: getState() })
//   ;

// export const receiveCartPlanEffectiveDates = (productType, cartPlan, effectiveDates) => ({
//   type: RECEIVE_CART_PLAN_EFFECTIVE_DATES,
//   productType,
//   cartPlan,
//   effectiveDates
// });

// export const requestTermLength = () => ({
//   type: REQUEST_TERM_LENGTH
// });

export const filterColor = color => ({
  type: FILTER_COLOR,
  color
});

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS
});

export const filterCategory = category => ({
  type: FILTER_CATEGORY,
  category
});

