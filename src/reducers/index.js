import data from '../utils/data';
import {combineReducers} from 'redux';

const barChartData =(state={data:null,isFetching:false},action) => {
    console.log(action);
    switch(action.type){
        case 'FETCH_DATA':
            let payload = action.payload;
            let data=  {...state,...payload};
            return  {data,isFetching:false};
        case 'FETCHING':
             return {isFetching:true};    
        default:
              return state;
    }
   
}

const rootReducer = combineReducers({
    barChartData
})

export default rootReducer;