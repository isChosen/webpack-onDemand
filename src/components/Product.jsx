import React, { Component } from 'react';
import { Link } from 'react-router';
import Item from 'antd/lib/list/Item';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {name: 'javascript 权威指南', uid: 1, category: 'javascript'},
        {name: 'javascript 语言精粹', uid: 2, category: 'javascript'},
        {name: 'Java 编程思想', uid: 3, category: 'java'},
        {name: 'mysql 必知必会', uid: 4, category: 'db'}
      ],
      style: {
        display: 'block',
        width: '300px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        borderRadius: '3px',
        marginBottom: '10px',
        border: '1px solid rgba(255, 87, 34, 0.65)'
      }
    }
  }
  render() {
    const { list, style } = this.state;
    return (
      <div>
        {
          list.map((item, index) => (
            <Link
              key={index}
              style={style}
              to={{
                pathname: `/product/${item.uid}`,
                state: {
                  bookName: item.name,
                  bookId: item.uid,
                  bookCategory: item.category
                }
              }}
            >
              {item.name} - {item.category}
            </Link>
          ))
        }
      </div>
    );
  }
}

export default Product;