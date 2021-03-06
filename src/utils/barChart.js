import echarts from "echarts";
export default function renderChart({ legend, series }) {
  var dom = document.getElementById("chart-container");
  var myChart = echarts.init(dom);
  var app = {};
  var option = null;
  var posList = [
    "left",
    "right",
    "top",
    "bottom",
    "inside",
    "insideTop",
    "insideLeft",
    "insideRight",
    "insideBottom",
    "insideTopLeft",
    "insideTopRight",
    "insideBottomLeft",
    "insideBottomRight"
  ];
  app.config = {
    rotate: 90,
    align: "left",
    verticalAlign: "middle",
    position: "insideBottom",
    distance: 15,
    onChange: function() {
      console.log("change detected");
      var labelOption = {
        normal: {
          rotate: app.config.rotate,
          align: app.config.align,
          verticalAlign: app.config.verticalAlign,
          position: app.config.position,
          distance: app.config.distance
        }
      };
      myChart.setOption({
        series: [
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          }
        ]
      });
    }
  };

  var labelOption = {
    normal: {
      show: true,
      position: app.config.position,
      distance: app.config.distance,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      rotate: app.config.rotate,
      formatter: "{c}  {name|{a}}",
      fontSize: 10,
      rich: {
        name: {
          textBorderColor: "#fff"
        }
      }
    }
  };

  let formattedSeries = series.map(obj => {
    return Object.assign({}, obj, { type: "bar", label: labelOption });
  });

  option = {
    color: ["#003366", "#006699", "#4cabce", "#e5323e"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ""
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center",
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: legend
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: formattedSeries
  };
  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
}
