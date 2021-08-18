import {ActionTypes} from '../constant/action-types'

export const setCountry = (fetchcountries) =>{
    return{
        type: ActionTypes.SET_COUNTRIES,
        payload: fetchcountries
    }
}
export const selectedCountry = (country) =>{
    return{
        type: ActionTypes.SELECTED_COUNTRY,
        payload: country,
       
    }
}

export const searchedCountry = (searchedcountry) =>{
    return{
        type: ActionTypes.SEARCHED_COUNTRY,
        payload: searchedcountry
    }
}
export const searchedText = (text) =>{
    return{
        type: ActionTypes.SEARCHED_TEXT,
        payload: text
    }
}
export const removesearchedText = () =>{
    return{
        type: ActionTypes.REMOVE_SEARCHED_TEXT,
       
    }
}
export const removeselectedCountry = (country) =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_COUNTRY,
        payload: country,
    }
}