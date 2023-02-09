import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export class ColumnOEE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "PRODUCT A",
          data: [
            {
              x: "",
              y: 120,
              fillColor: "#006400",
            },
            {
              x: "",
              y: 80,
              fillColor: "#e10f0f",
            },
            {
              x: "",
              y: 60,
              fillColor: "#e10f0f",
            },
            {
              x: "",
              y: 70,
              fillColor: "#e10f0f",
            },
            {
              x: "",
              y: 100,
              fillColor: "#e10f0f",
            },
          ],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) {},
          },
        },

        plotOptions: {
          bar: {
            columnWidth: "55%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            ["Chhindwara"],
            ["Dapada"],
            ["Haridwar"],
            ["Pondicherry"],
            ["Sumerpur"],
          ],
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
      },
    };
  }

  componentDidMount() {
    console.clear();
    this.getOeeDashboard();
  }

  getOeeDashboard = () => {
        const passHeader = {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzU5NDU1MzgsIm5iZiI6MTY3NTk0NTUzOCwiZXhwIjoxNjc1OTQ5NDM4LCJhaW8iOiJBVlFBcS84VEFBQUFscVd1NjNxS2Vtc3NnS0RVdUNWTDVuK21kN0dFUkowOHBkd3VTSkNxaS9jTmlsUmxEOEVKQUlnVWs3Y2MxZVh5YWpSTXk0bXViTmJWKzAxT3VCQUp0eXdWaFlZK3hIZ2lrWDNQUDVMeTlEYz0iLCJuYW1lIjoiaXQsIGRhcGFkYSIsIm5vbmNlIjoiMTU1ZjZkOTItNzI3Mi00Njc2LWJmMTMtYjNkYjJiOGVhZmFlIiwib2lkIjoiNDk3YTNhODQtZDc0MS00ZjIyLTk5OTItMjgyYmRmOTVhNDg3IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFwYWRhLml0QHVuaWxldmVyLmNvbSIsInJoIjoiMC5BUXdBQXE1djlqWmRXMG1fNEhpbV81LU9ic2QwdXd0LVpUMU9wcjFPY1ZRSzRnSU1BQncuIiwic3ViIjoiVXRwTjVhUERyR21CQjU1MW5xUG9EM2FYbldldVRIWDVIVmd1V242LWc4RSIsInRpZCI6ImY2NmZhZTAyLTVkMzYtNDk1Yi1iZmUwLTc4YTZmZjlmOGU2ZSIsInV0aSI6Inlyb1duNFloUmt5cDN3LUtNeTlOQUEiLCJ2ZXIiOiIyLjAifQ.lqC4o2iMcNMDPG7RvFtGkSOW80ndxREuuAg5vTT5k3-hmXbofsBwCAbSMPyD7OoVno4n584gUg6hJvDSebZKheuPA5SMn1_li3C_6DysPuzO8FPh833s9y7gEYJPYV0MKOuXtKjVsxaPpbWvXpJU-yYoZx-8tGtMaYIbTgCeAUSt_d8hJa1RtMbRHEJ4XNPwOf1R4CKwksruImI6xiXgM1yfyDBAW3xUjz1h83Oj69g3gc1TjAY9NzyJN64km__et36WFQVecDrhWYwjgAmCdEZUJ0jC_gha2yD4OCZ7v_C7XJL5BuL4DE1w4PkegXloCBKPaW9C10A4b9VW26YcOg",
            Accept: "application/json",
            "Content-Type": "application/json",
          };
             axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetOEEDashboard?duration=monthly` , {
        headers: passHeader,
      }).then((response) =>{
            var data = response.data;
            // var data1 = {
            //   lastUpdate: "01/31/2023",
            //   overAllTargetValue: 75.8,
            //   factories: [
            //     {
            //       factoryID: 1,
            //       name: "Dapada",
            //       latitude: 20.1863,
            //       longitude: 73.0196,
            //       oee: 75.05,
            //       lineCount: 8,
            //       targetValue: 77.1,
            //     },
            //     {
            //       factoryID: 2,
            //       name: "Pondicherry",
            //       latitude: 11.916064,
            //       longitude: 79.812325,
            //       oee: 71.47,
            //       lineCount: 8,
            //       targetValue: 74.3,
            //     },
            //     {
            //       factoryID: 3,
            //       name: "Chhindwara",
            //       latitude: 22.0574,
            //       longitude: 78.9382,
            //       oee: 76.8,
            //       lineCount: 7,
            //       targetValue: 75.0,
            //     },
            //     {
            //       factoryID: 4,
            //       name: "Haridwar",
            //       latitude: 29.9457,
            //       longitude: 78.1642,
            //       oee: 69.69,
            //       lineCount: 7,
            //       targetValue: 76.7,
            //     },
            //     {
            //       factoryID: 5,
            //       name: "Sumerpur",
            //       latitude: 25.152645,
            //       longitude: 73.08228,
            //       oee: 74.76,
            //       lineCount: 4,
            //       targetValue: 75.7,
            //     },
            //   ],
            // };
            var Chhindwara = data.factories.find((item) => item.name == "Chhindwara");
            var Dapada = data.factories.find((item) => item.name == "Dapada");
            var Haridwar = data.factories.find((item) => item.name == "Haridwar");
            var Pondicherry = data.factories.find((item) => item.name == "Pondicherry");
            var Sumerpur = data.factories.find((item) => item.name == "Sumerpur");
        
            let current = this;
            current.setState({
              series: [
                {
                  name: "OEE",
                  data: [
                    {
                      x: "",
                      y: `${Chhindwara.oee}`,
                      fillColor:
                        `${Chhindwara.oee}` > `${Chhindwara.targetValue}`
                          ? "#006400"
                          : "#e10f0f",
                    },
                    {
                      x: "",
                      y: `${Dapada.oee}`,
                      fillColor:
                        `${Dapada.oee}` > `${Dapada.targetValue}`
                          ? "#006400"
                          : "#e10f0f",
                    },
                    {
                      x: "",
                      y: `${Haridwar.oee}`,
                      fillColor:
                        `${Haridwar.oee}` > `${Haridwar.targetValue}`
                          ? "#006400"
                          : "#e10f0f",
                    },
                    {
                      x: "",
                      y: `${Pondicherry.oee}`,
                      fillColor:
                        `${Pondicherry.oee}` > `${Pondicherry.targetValue}`
                          ? "#006400"
                          : "#e10f0f",
                    },
                    {
                      x: "",
                      y: `${Sumerpur.oee}`,
                      fillColor:
                        `${Sumerpur.oee}` > `${Sumerpur.targetValue}`
                          ? "#006400"
                          : "#e10f0f",
                    },
                  ],
                },
              ],
            });

            
      }).catch((err)=>{
        console.log("--err-");
        console.log(err)
      });
  }


  render() {
    return (
      <>
        <div id="chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="activeinactive">
          <p>
            <span className="achieved"></span>Target Achieved
          </p>
          <p>
            <span className="notachieved"></span>Not Achieved
          </p>
        </div>
      </>
    );
  }
}

export default ColumnOEE;
