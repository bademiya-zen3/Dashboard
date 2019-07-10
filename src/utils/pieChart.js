import echarts from 'echarts';
export default ()=>{
var dom = document.getElementById("chartArea");
var myChart = echarts.init(dom);
var app = {};
let option = null;
option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    series : [
        {
            name: 'SalarySlip Requests',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:15, name:'JAN'},
                {value:22, name:'FEB'},
                {value:20, name:'MAR'},
                {value:44, name:'APR'},
                {value:20, name:'MAY'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
}