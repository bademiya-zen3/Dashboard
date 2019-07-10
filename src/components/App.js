import React, { Component } from "react";
import {connect} from 'react-redux';
import fetchData from '../actions/fetchData';
import Chart from "./ChartTemplate";
import Loading from './Loading';

class App extends Component{
   constructor(props){
   super(props);
   this.fetchDataHandler = this.fetchDataHandler.bind(this);
   this.state={
     chartType:'bar'
   }
   }
   fetchDataHandler(){
    const {dispatch} =this.props;
    dispatch(fetchData());
   }

  setChartType(type){

    if(this.props.data===null){
      const {dispatch} =this.props;
      dispatch(fetchData());
    }
    this.setState({chartType:type});
  }
  render() {

    return (
    <div className='container'>
    <div className='options'>
    <button  id='btn-fetch' onClick={this.fetchDataHandler}><span>Fetch Data</span></button>
    <button id='btn-bar' onClick={()=>this.setChartType('bar')}>Bar</button>
    <button id='btn-pie'  onClick={()=>this.setChartType('pie')}>Pie</button>
    </div>
    <div className='chart-main'>
      {this.props.isFetching ? <Loading /> : <div className='chart-container'><Chart data={this.props.data} chartType={this.state.chartType}/></div>}
    </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  console.log("app map"+JSON.stringify(state));
  return { data:state.barChartData.data,isFetching:state.barChartData.isFetching};
}

export default connect(mapStateToProps)(App);
