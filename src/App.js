import React from "react";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getDate() {
    let date = new Date().toISOString();
    return date.substr(0, 10);
  }

  componentDidMount() {
    const URI = `https://covid-193.p.rapidapi.com/history?day=${this.getDate()}&country=indonesia`;

    Axios.get(URI, {
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "241b4fb1damsh4f5de9c2eb1f72dp168c22jsn5e1f0c1e8c46",
        useQueryString: true,
      },
    })
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data.response });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <h1>Cek COVID</h1>
          <p>CEK COVID LOKAL</p>
          {console.log(this.state)}
        </header>
      </div>
    );
  }
}

export default App;
