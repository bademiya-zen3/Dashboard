import React, { Component } from "react";
import {connect} from 'react-redux';
import fetchData from '../actions/fetchData';
import BarChart from "./BarChart";
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
    console.log("executing chart type")
    this.setState({chartType:type});
  }
  render() {
   console.log('In Appr render() fetching:' + this.props.isFetching)
    return (
    <div className='container'>
    <div className='options'>
    <button  id='btn-fetch' onClick={this.fetchDataHandler}>Fetch Data</button>
    <button id='btn-bar' onClick={()=>this.setChartType('bar')}>Bar</button>
    <button id='btn-pie'  onClick={()=>this.setChartType('pie')}>Pie</button>
    </div>
    <div className='chart-container'>
      {this.props.isFetching ? <Loading /> : <BarChart data={this.props.data} chartType={this.state.chartType}/>}
    </div>
    </div>
    )
  }
}

// const renderChart = (type,data)=>{
//   return(
//     type==='bar'?<BarChart data={data} type={type}/>:<div>Pie</div>
//   )
// }
function mapStateToProps(state){
  console.log("app map"+JSON.stringify(state));
  // if(state.barChartData.isFetching&&state.barChartData.isFetching===true){
  //   return {isFetching:state.isFetching,data:null}
  // }
  return { data:state.barChartData.data,isFetching:state.barChartData.isFetching};
}

export default connect(mapStateToProps)(App);
