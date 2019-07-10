import React, { Component } from "react";
import renderBarChart from "../utils/barChart";
import renderPieChart from "../utils/pieChart";

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
  render() {
    return (
      <>
        <div
          id="chartArea"
          style={{ position: "relative", width: "1000px", height: "500px" }}
        />
      </>
    );
  }
}

export default Chart;
