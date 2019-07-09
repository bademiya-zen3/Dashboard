import React, { Component } from "react";
import {connect} from 'react-redux';
import fetchData from '../actions/fetchData';
import BarChart from "./BarChart";
class App extends Component {
 
  render() {
    console.log("app render" + JSON.stringify(this.props));
    const {dispatch} =this.props;
    
    return (
    <>
    <button onClick={() => dispatch(fetchData())}>Fetch Data</button>
    {this.props.data!==null ? <BarChart data={this.props.data}/> : null}
    </>
    )
  }
}
function mapStateToProps(state){
  console.log("app map"+JSON.stringify(state))
  return { data:state};
}

export default connect(mapStateToProps)(App);
