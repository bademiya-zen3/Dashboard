import React, { Component } from "react";
import renderBarChart from "../utils/barChart";
import renderPieChart from "../utils/pieChart";
//import ReactEcharts from 'echarts-for-react';
//import {option} from '../utils/guageChartOption';

class Chart extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(newProps) {
    this.renderChart(newProps);
  }
  componentDidMount() {
    this.renderChart(this.props);
  }
  renderChart(props) {
    if (props.chartType === "pie") {
      renderPieChart();
    }
    if (props.chartType === "bar" && this.props.data !== null) {
      renderBarChart(this.props.data);
    }
  }
  // getOption(){
  //   return option;
  // }
  render() {
   
    return (
      <>
      </>
    );
  }
}

export default Chart;
