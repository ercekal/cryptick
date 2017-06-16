import React, { Component } from 'react';

export default class CoinInfo extends Component {

  constructor() {
    super()
    this.state = {
      selected: false,
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

  showTotalAmount() {
    return this.props.coin.Total * this.props.coin.Price_btc
  }

  showProfitAmount() {
    return (this.props.coin.Total * (this.props.coin.Price_btc - this.props.coin.Average))
  }

  showProfitRate() {
    return ((this.showTotalAmount()) - (this.props.coin.Total * this.props.coin.Average)) / (this.showTotalAmount())
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
          <p>Amount : {this.props.coin.Total}</p>
          <p>Average Cost BTC : {this.props.coin.Average}</p>
          <p>Total spent BTC : {this.props.coin.Average * this.props.coin.Total}</p>
          <p>Total amount BTC: {this.showTotalAmount()}</p>
          <p>Total amount GBP: {(this.showTotalAmount() * this.props.btc['Price_gbp'] || "")}</p>
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
