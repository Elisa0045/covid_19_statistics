import React from "react";
import { Cards, Chart, CountryPicker } from "./components"; //set up Api
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    ); //setup api
  }
}
export default App;
