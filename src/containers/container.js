import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions/index';
import { bindActionCreators } from 'redux';
import CoinsList from '../components/CoinsList'

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
      console.log(this.props);
      return (
        <div>
          {this.props.coins.map((coin) => {
            return (
              <CoinList key={coin.Name} coin={coin} />
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
