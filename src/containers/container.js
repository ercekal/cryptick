import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions/index';
import { bindActionCreators } from 'redux';
import CoinInfo from '../components/CoinInfo'

class Container extends Component {

  componentWillMount() {
    this.props.fetchCoins()
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
      console.log('hello');
      console.log(this.props.coins);
      return (
        <div>
          {this.props.coins.Markets.map((coin) => {
            return (
              <CoinInfo key={coin.Name} coin={coin} />
            )
          })}
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
