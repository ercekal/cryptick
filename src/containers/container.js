import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions/index';
import { bindActionCreators } from 'redux';
import CoinInfo from '../components/CoinInfo'
import VirtualizedSelect from 'react-virtualized-select'

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class Container extends Component {

  constructor() {
    super()
    this.state = {
      selectValue: null,
      showResults: false
    }
  }

  componentWillMount() {
    this.props.fetchCoins()
  }

  displayCoins() {
    this.setState({
      showResults: !this.state.showResults
    })
  }

  // renderItemList() {
  //   let allItems = this.props.items
  //   let selectedItems = []
  //   if (this.props.selectedCategory !== "" && typeof(allItems) !== "undefined" && allItems.length > 0) {
  //     selectedItems = allItems.filter((item) => {
  //       return item.categories.find((ele) => {
  //         return ele.title === this.props.selectedCategory
  //       })
  //     })
  //     return <ItemList selectedCategoryTitle={this.props.selectedCategory} items={selectedItems} />
  //   }
  // }

  render() {
    if (!this.props.coins) {
      return(
        <div>
          Loading...
        </div>
      )
    } else {

      const BTC = this.props.coins.Markets.filter(function( obj ) {
        return obj.Name == "Bitcoin";
      });

      return (
        <div>
          <VirtualizedSelect
            labelKey="Name"
            valueKey="Name"
            multi={true}
            options={this.props.coins.Markets}
            onChange={(selectValue) => this.setState({ selectValue }, console.log(this.state))}
            value={this.state.selectValue}
          />

        <button onClick={this.displayCoins.bind(this)}>Display coins</button>
        {this.state.showResults &&
          this.state.selectValue.map((coin) => {
            return <CoinInfo coin={coin} key={coin.Label} btc={BTC[0]}/>
          })
        }
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoins }, dispatch)
}

function mapStateToProps(state) {
  return {
    coins: state.coins.coins,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
