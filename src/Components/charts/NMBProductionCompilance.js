import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'
import axios from "axios";


export class NMBProductionCompilance extends Component {
  constructor(props) {
    super(props);
    this.state = {
       grafChart:null,
    }
  }

  componentDidMount(){
    let current = this;

        const passHeader = {
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzU5NDA1NDcsIm5iZiI6MTY3NTk0MDU0NywiZXhwIjoxNjc1OTQ0NDQ3LCJhaW8iOiJBVlFBcS84VEFBQUFhNFAzRm9QZHpoNENMcGY0ZzVCN2E4emtxWEcwdVdPbE0zeld1VS9ORFhWS1pMMVpqOC9tdW5JM1h4TTBmaWlrTTZxbEdzeTJhOXdBYi9zMDc1WktTa2xFNDVPa3dKWXRIV0VtU1ZJamZ2WT0iLCJuYW1lIjoiaXQsIGRhcGFkYSIsIm5vbmNlIjoiOWU0NjYyYmMtYzNkMS00YzU0LTg5MzctODAwYzIzNjI1MTRkIiwib2lkIjoiNDk3YTNhODQtZDc0MS00ZjIyLTk5OTItMjgyYmRmOTVhNDg3IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFwYWRhLml0QHVuaWxldmVyLmNvbSIsInJoIjoiMC5BUXdBQXE1djlqWmRXMG1fNEhpbV81LU9ic2QwdXd0LVpUMU9wcjFPY1ZRSzRnSU1BQncuIiwic3ViIjoiVXRwTjVhUERyR21CQjU1MW5xUG9EM2FYbldldVRIWDVIVmd1V242LWc4RSIsInRpZCI6ImY2NmZhZTAyLTVkMzYtNDk1Yi1iZmUwLTc4YTZmZjlmOGU2ZSIsInV0aSI6IjdwMmFGNlJKR2tlc2JfNmlmQmlVQUEiLCJ2ZXIiOiIyLjAifQ.E1Sok2oBioGm50fmeYVem_5EokdYL6xVMoWqNvSZJdrNMCdAUx765ajNRRsJW8u8C3j8o2sExz-5zLd6e-xDpQHISGcaIO3MxNIAIetGZPz_5ls2ajsYWr1lL3PQefASYhw8CtGHLMjyGEBLnsbFCjUJ6cH08TraHPNz5p7zNjvhHSHFPq82-wvLwI8tYMWCKS5e37gFSWoG4RNNoktvFi-5mZI0O9bE0nmEhuIrydDgMyHPWwZS9G6CNqM5mAheLy0LLjujZHoHiC63vKxnVoq7ADVMoxw7tVT0H7cfOvybGrbeYIdqQJ_m9nRqLSaN1JKU2tGrSnCE1CLyiTvtig",
          Accept: "application/json",
            "Content-Type": "application/json",
              };
      axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetProdComplianceDataForAllFactory?duration=yearly&startDate=2/8/2023&endDate=2/8/2023` , {
            headers: passHeader,
      }).then((response) =>{
          current.setState({
            grafChart:response.data
            
          },function(){
            var graphValue = current.state.grafChart.prodComplianceDataForAllFactoryResponseDataList[0].proComplianceVal;
            var _percent = Number("."+graphValue.toString().replaceAll(".",''));
            current.setState({percent:_percent})});

      }).catch((err)=>{
                console.log("--err-");
                console.log(err)
              });

  }

  render() {
    return (
      <>
        <GaugeChart 
            id="gauge-chart2"
            colors={['#e22f2f', '#F5CD19', '#008000']}
            percent={this.state.percent}
            textColor="#000"
         />
      </>
    )
  }
}

export default NMBProductionCompilance