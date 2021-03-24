/*===== SHOW NAVBAR  =====*/
const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

  // Validate that all variables exist
  if (toggle && nav && bodypd && headerpd) {
    toggle.addEventListener('click', () => {
      // show navbar
      nav.classList.toggle('show')
      // change icon
      toggle.classList.toggle('bx-x')
      // add padding to body
      bodypd.classList.toggle('body-pd')
      // add padding to header
      headerpd.classList.toggle('body-pd')
    })
  }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')


/*======= CHART CODE ========*/

$(document).ready(function() {
  addStackedBarCHart();

  addGaugeChart("gaugeChart1", 78);
  addGaugeChart("gaugeChart2", 95);
  addGaugeChart("gaugeChart3", 59);
});

function addStackedBarCHart() {
  let employerData = [],
    employeeData = [],
    totalInterestData = [];

  for (let i = 1; i <= 37; i += 3) {
    let obj = {};

    let color = 'blue';
    switch (i % 3) {
      case 0:
        color = "#2119BC"; //dark
        break;

      case 1:
        color = "#9EC9FF";
        break;

      case 2:
        color = "#634EFF"; //faint
        break;

      default:
        break;
    }

    obj.y = i * 10;
    // obj.color = color;

    employerData.push(obj);
  }

  for (let i = 2; i <= 38; i += 3) {
    let obj = {};

    let color = 'blue';
    switch (i % 3) {
      case 0:
        color = "#2119BC";
        break;

      case 1:
        color = "#9EC9FF";
        break;

      case 2:
        color = "#634EFF";
        break;

      default:
        break;
    }

    obj.y = i * 10;
    // obj.color = color;
    employeeData.push(obj);
  }

  for (let i = 3; i <= 39; i += 3) {
    let obj = {};

    let color = 'blue';
    switch (i % 3) {
      case 0:
        color = "#2119BC";
        break;

      case 1:
        color = "#9EC9FF";
        break;

      case 2:
        color = "#634EFF";
        break;

      default:
        break;
    }

    obj.y = i * 10;
    // obj.color = color;
    totalInterestData.push(obj);
  }

  // console.log('>>',employerData);
  // console.log('>>',employeeData);
  // console.log('>>',totalInterestData);

  var stackedBarChartOpt = {
    chart: {
      type: 'column',
      height: 250
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['20', '', '25', '', '30', '', '35', '', '40', '', '60', '', '65'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        formatter: function() {
          return '$' + this.value;
        }
      }
    },
    tooltip: {
      valueSuffix: ' '
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      },
      series: {
        stacking: 'normal'
      }
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      itemMarginTop: 0,
      itemMarginBottom: 0
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    series: [{
        name: 'Employer',
        color: "#2119BC", //dark
        data: employerData
      },
      {
        name: 'Employee',
        color: "#634EFF",
        data: employeeData
      },
      {
        name: 'Total Interest',
        color: "#9EC9FF",
        data: totalInterestData
      }
    ]
  }

  $('#stackedBarChart').highcharts(stackedBarChartOpt);
}

function addGaugeChart(containerId, gaugeValue) {
  var gaugeOptions = {

    chart: {
      type: 'solidgauge',
      height: 100,
      width: 100,
      margin: [0, 0, 0, 0],
      events: {
        load: alignLabel,
        redraw: alignLabel
      }
    },

    credits: {
      enabled: false
    },

    exporting: {
      enabled: false
    },

    title: {
      text: '',
      style: {
        fontSize: '12px'
      }
    },

    tooltip: {
      enabled: false,
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '8px'
      },
      valueSuffix: '%',
      pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
      positioner: function(labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: (this.chart.plotHeight / 2) - 10
        };
      }
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{ // Track for Average
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: Highcharts.color("#26D2A8")
          .setOpacity(0.3)
          .get(),
        borderWidth: 0
      }]
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true
      }
    },

    series: [{
      name: 'Average',
      data: [{
        color: "#26D2A8",
        radius: '112%',
        innerRadius: '88%',
        y: 80
      }]
    }]
  }

  $("#" + containerId).highcharts(gaugeOptions);

  var grossLabel;

  function alignLabel() {
    var chart = this;

    if (grossLabel) {
      grossLabel.destroy();
    }

    grossLabel = chart.renderer.text(gaugeValue + '%', (chart.plotWidth / 3) + 5, (chart.plotHeight / 2) + 10)
      .css({
        color: '#000',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '12pt',
        fontWeight: "bold"
      }).add();
  }
}


/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
  if (linkColor) {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
  }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))



$(document).ready(function() {
  $(".my-dropdown").mouseover(function(e) {
    if ($(e.target).parents('.my-dropdown').length > 0) {
      $("#wantBtn").addClass("active");
      $("#menu").addClass("open");
    }

  })

  $(".my-dropdown").mouseout(function(e) {
    // myLog(e.target);
    // myLog("parents",$(e.target).parents('.my-dropdown'));
    if ($(e.target).parents('.my-dropdown').length > 0) {
      $("#wantBtn").removeClass("active");
      $("#menu").removeClass("open");
    }
  })

  function myLog(p1, p2 = "") {
    console.log(">>", p1, p2);
  }
});
