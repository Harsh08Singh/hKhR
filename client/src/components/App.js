import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

class App extends Component {
  state = { walletInfo: {} };

  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`)
      .then((response) => response.json())
      .then((json) => this.setState({ walletInfo: json }));
  }

  render() {
    const { address, balance } = this.state.walletInfo;

    return (
      <div className="App">
        <img className="logo" src={logo} alt="logo" />
        <br />
        <div>
          <h1>
            Welcome to <span className="highlight">hKhR</span> Blockchain...
          </h1>
        </div>
        <br />
        <div className="button-container">
          <Link to="/blocks" className="button">
            Blocks
          </Link>
          <Link to="/conduct-transaction" className="button">
            Conduct a Transaction
          </Link>
          <Link to="/transaction-pool" className="button">
            Transaction Pool
          </Link>
        </div>
        <br />
        <div className="WalletInfo">
          <div>Address: {address}</div>
          <div>Balance: {balance}</div>
        </div>
      </div>
    );
  }
}

export default App;
