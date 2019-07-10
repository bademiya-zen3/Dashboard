export const  option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: 'Leave Percentage',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: 'Leave'}]
        }
    ]
};
