// importimi i actions type
import { GET_PACINETI, GET_PACINETS, CREATE_PACINETI, DELETE_PACIENTI, GET_PACIENTI_COUNT, PACINETS_SEARCH_FAIL, PACINETS_SEARCH_REQUEST, PACINETS_SEARCH_SUCCESS } from "../actions/type";
//definimi i inialState
const inialState = {
    pacinets: [],
    pacinet: {},
    count: 0,
    loading: false,
    error: null,
}

export default function InfermieriReducer (state= inialState , action){
    switch(action.type){
        case GET_PACINETS:
            return{
                ...state,//copy gjendjen dhe endryshon nje pjes
                pacinets: action.payload
            };
        case CREATE_PACINETI:
            return{
                ...state,
                pacinet:action.payload
            };
        case GET_PACINETI:
            return{
                ...state,//copy gjendjen dhe endryshon nje pjes
                pacinet: action.payload
            }; 
        case DELETE_PACIENTI:
            return{
                ...state,
                pacinets: state.pacinets.filter((pacinet) => pacinet.id !== action.payload)
            };
        case GET_PACIENTI_COUNT:
            return{
                ...state,
                count: action.payload
            };
            case PACINETS_SEARCH_REQUEST:
                return { ...state, loading: true, error: null };
            case PACINETS_SEARCH_SUCCESS:
            return { ...state, loading: false, pacinets: action.payload, error: null };
            case PACINETS_SEARCH_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;        
    }
}