import React from "react";
import Card from "./Card";
import Layout from "./Layout";

class BrookCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/ud4g-9x9z.json?$$app_token=iyTGvDggNXuzGenPvvZjEM0gH&borough=Brooklyn"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="BrookCards">
        <Layout />
        <div className="grid">
          {console.log(this)}
          {this.state.data.map((data) => (
            <Card data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default BrookCards;
