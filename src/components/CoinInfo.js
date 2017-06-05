import React, { Component } from 'react';

export default class CoinInfo extends Component {

  constructor() {
    super()
    this.state = {
      selected: false
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

  render() {
    return (
      <div>
      <a href="#" onClick={this.showDescription.bind(this)}><p style={{fontWeight: this._selectedItem()}}>{this.props.coin.Name}</p></a>
      {this.state.selected && (
        <div>
          <p>Volume : {this.props.coin.Volume_24h}</p>
          <p>Price GBP : {this.props.coin.Price_gbp}</p>
        </div>
        )
      }
      </div>
    )
  }
}
