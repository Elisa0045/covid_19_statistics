import React from "react";
import { Cards, Chart, CountryPicker } from "./components"; //set up Api
import styles from "./App.module.css";
class App extends React.Component {
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
