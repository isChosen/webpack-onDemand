import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    const  { state } = this.props.location
    return (
      <div>
        <h3>书名： {state.bookName}</h3>
        <p>id： {state.bookId}</p>
        <p>分类：{state.bookCategory}</p>
      </div>
    );
  }
}

export default ProductDetail;