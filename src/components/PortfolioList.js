import React, { Component } from 'react';
import PortfolioInfo from './PortfolioInfo'
import { connect } from 'react-redux';

class PortfolioList extends Component {

  calculate(){
    let TotalBtc = 0
    let SpentBtc = 0
    let TotalGBP = 0
    let SpentGBP = 0
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
