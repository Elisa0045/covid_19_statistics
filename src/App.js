import React from "react";
import { Cards, Chart, CountryPicker } from "./components"; //set up Api
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    ); //setup api
  }
}
export default App;
