import { ActionTypes } from "../constant/action-types";

const iniTialState = {
    fetchcountries: [],
    searchedcountry: [],
    text: [],
};

export const countryReducer = (state = iniTialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_COUNTRIES:
            return { ...state, fetchcountries: payload };
        case ActionTypes.SEARCHED_COUNTRY:
            return { ...state, searchedcountry: payload };
        case ActionTypes.SEARCHED_TEXT:
            return { ...state, text: payload };
        case ActionTypes.REMOVE_SEARCHED_TEXT:
             return {};
        default:
            return state;
    }
};

