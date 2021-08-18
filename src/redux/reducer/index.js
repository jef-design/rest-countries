import {combineReducers} from 'redux';
import {countryReducer} from './countryReducer'
import {selectedCountryReducer} from './selectedCountryReducer'

const allReducers = combineReducers({
    allcountry: countryReducer,
    selectedcountry: selectedCountryReducer
})

export default allReducers;