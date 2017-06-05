import React, { Component } from 'react';
import CoinInfo from './CoinInfo'
import { connect } from 'react-redux';

class CoinsList extends Component {

  renderFiltered(array) {
    if (array.length > 0) {
      return array.map((item) => {
        return <CoinInfo item={coin} key={coin.id} />
      })
    }
  }
  render() {
    console.log(this.props.coins);
    if(!this.props.coins) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <div>
          {this.renderFiltered(this.props.coins)}
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

export default connect(mapStateToProps)(CoinsList);
