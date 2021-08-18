import { ActionTypes } from "../constant/action-types";
const selectedState = {
    country: []
}
export const selectedCountryReducer = (state = selectedState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_COUNTRY:
            return { ...state, country: payload };
        case ActionTypes.REMOVE_SELECTED_COUNTRY:
             return {};
        default:
            return state;
    }
};