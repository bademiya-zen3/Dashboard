import data from '../utils/data'
export default () => {
    console.log("fetching...");
    
  return (dispatch)=>{
    dispatch({type: 'FETCHING'});
     return new Promise((resolve,reject)=>{
         setTimeout(function(){
             dispatch({type:'FETCH_DATA',payload:data})
         },1000)
     })
  } 

}
