import data from '../utils/data';
export default (state=null,action) => {
    console.log(action);
    switch(action.type){
        case 'FETCH_DATA':
            let payload = action.payload;
            return  {...state,...payload};
        default:
              return state;
    }
   
}
