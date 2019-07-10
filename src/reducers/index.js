import data from '../utils/data';
import {combineReducers} from 'redux';

const barChartData =(state=null,action) => {
    console.log(action);
    switch(action.type){
        case 'FETCH_DATA':
            let payload = action.payload;
            return  {...state,...payload};
        case 'LOADING':
             return {isLoading:true};    
        default:
              return state;
    }
   
}

const rootReducer = combineReducers({
    barChartData
})

export default rootReducer;