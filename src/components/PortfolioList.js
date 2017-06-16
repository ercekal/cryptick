import React, { Component } from 'react';
import PortfolioInfo from './PortfolioInfo'
import { connect } from 'react-redux';

class PortfolioList extends Component {

  calculate() {
    let portfolio = this.props.portfolio
    let TotalBtc = 0
    let SpentBtc = 0
    let TotalGBP = 0
    for (let i = 0; i < portfolio.length; i++) {
      TotalBtc = TotalBtc + (portfolio[i].Total * portfolio[i].Price_btc)
      SpentBtc = SpentBtc + (portfolio[i].Average * portfolio[i].Total)
      TotalGBP = TotalGBP + (portfolio[i].Total * portfolio[i].Price_gbp)
    }
    console.log('total btc = '+ TotalBtc + ', spent BTC = ' + SpentBtc + ', total GBP = ' + TotalGBP)
  }
  render() {
    if(!this.props.portfolio) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <div>
          {this.props.portfolio.map((coin) => {
            return <PortfolioInfo
                    coin={coin}
                    key={coin.Label}
                    btc={this.props.btc}
                    eth={this.props.eth}
                    />
          })}
        {this.calculate()}          
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    search: state.search.searchTerm,
  }
}

export default connect(mapStateToProps)(PortfolioList);
