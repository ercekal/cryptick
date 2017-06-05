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
      console.log('hello');
      const options = [
      { label: "One", value: 1 },
      { label: "Two", value: 2 },
      { label: "Three", value: 3, disabled: true }
      // And so on...
    ]

      console.log(this.props.coins)
      console.log(this.props.coins.Markets)
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
