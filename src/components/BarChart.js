import React, { Component } from 'react';
import renderBarChart from '../utils/barChart';
import renderPieChart from '../utils/pieChart';

class BarChart extends Component {
    constructor(props){
        super(props);
        console.log('CHART');
        console.log(JSON.stringify(this.props));
    }
    componentWillReceiveProps(newProps){
      
        console.log('component will receive props');
        console.log(JSON.stringify(newProps));
        if(newProps.chartType==='pie'){
            console.log("rendering pie")
            renderPieChart();
        }
       if(newProps.chartType==='bar'&&this.props.data!==null){
           console.log("rendering bar");
           renderBarChart(this.props.data);
       }
    }
    componentDidMount(){
        console.log("component did mount")
        console.log(this.props.chartType)
     if(this.props.chartType==='pie'){
         console.log("rendering pie")
         renderPieChart();
     }
    if(this.props.chartType==='bar'&&this.props.data!==null){
        console.log("rendering bar");
        renderBarChart(this.props.data);
    }
      
    }
    render() {
        console.log('inside render of chart comp')
        return (
            <>
            <div id='chartArea' style={{position:'relative',width:'1000px',height:'500px'}}>
                
            </div>
          
            </>
        );
    }
}

export default BarChart;