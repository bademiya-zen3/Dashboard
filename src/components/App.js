import React, { Component } from "react";
import {connect} from 'react-redux';
import fetchData from '../actions/fetchData';
import fetching from '../actions/fetching';
import BarChart from "./BarChart";
import Loading from './Loading';

class App extends Component{
   constructor(props){
   super(props);
   this.fetchDataHandler = this.fetchDataHandler.bind(this);
   }
   fetchDataHandler(){
    const {dispatch} =this.props;
    dispatch(fetchData());
   }

   showChart(){

     return(
      <BarChart data={this.props.data}/>
     )
   }
  
  render() {

    return (
    <>
    <button onClick={this.fetchDataHandler}>Fetch Data</button>
    {this.props.data!==null ? <BarChart data={this.props.data}/>: null}
    </>
    )
  }
}
function mapStateToProps(state){
  console.log("app map"+JSON.stringify(state))
  return { data:state.barChartData};
}

export default connect(mapStateToProps)(App);
