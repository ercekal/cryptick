import React, { Component } from 'react';

export default class CoinInfo extends Component {

  constructor() {
    super()
    this.state = {
      selected: false,
      amount: "",
      averageCost: ""
    }
  }

  showDescription() {
    this.setState({
      selected: !this.state.selected
    })
  }

  _selectedItem() {
    if (this.state.selected === true) {
      return "bold"
    } else {
      return "normal"
    }
  }

  onAmountChange(event) {
    this.setState({
      amount: parseFloat(event.target.value) || ""
    })
  }

  onAverageCostChange(event) {
    this.setState({
      averageCost: parseFloat(event.target.value) || ""
    })
  }

  showTotalAmount() {
    if (this.state.amount !== "") {
      return this.state.amount * this.props.coin.Price_btc
    }
  }

  showProfitAmount() {
    if (this.state.amount !== "" && this.state.averageCost !== "") {
      return (this.state.amount * (this.props.coin.Price_btc - this.state.averageCost))
    }
  }

  showProfitRate() {
    if (this.state.amount !== "" && this.state.averageCost !== "") {
      return ((this.showTotalAmount()) - (this.state.amount * this.state.averageCost)) / (this.showTotalAmount())
    }
  }

  render() {
    return (
      <div>

      <a href="#" onClick={this.showDescription.bind(this)}><p style={{fontWeight: this._selectedItem()}}>{this.props.coin.Name}</p></a>
      {this.state.selected && (
        <div>
          <p>Volume : {this.props.coin.Volume_24h}</p>
          <p>Price GBP : {this.props.coin.Price_gbp}</p>
          <p>Price BTC : {this.props.coin.Price_btc}</p>
          <input
            placeholder="How many coins you have?"
            value={this.state.amount}
            onChange={this.onAmountChange.bind(this)}
          />
          <input
            placeholder="What's your average coin cost in BTC?"
            value={this.state.averageCost}
            onChange={this.onAverageCostChange.bind(this)}
          />
          <p>Total amount BTC: {this.showTotalAmount()}</p>
          <p>Total amount GBP: {(this.showTotalAmount() * this.props.btc['Price_btc'] || "")}</p>
          <p>Profit amount BTC: {this.showProfitAmount()}</p>
          <p>Profit amount GBP: {(this.showProfitAmount() * this.props.btc['Price_gbp'] || "")}</p>
          <p>Profit rate BTC % : {this.showProfitRate()}</p>
        </div>
        )
      }
      </div>
    )
  }
}
