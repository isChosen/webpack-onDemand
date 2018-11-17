import React, { Component } from 'react';
import 'weui';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h4>Home wechat-css</h4>
        <hr />
        <br />
        <div
          className="icon-box"
          style={{
            padding: '5px',
            borderRadius: '3px',
            border: '1px solid #FF9800'
          }}
        >
            <i className="weui-icon-success weui-icon_msg" style={{fontSize: '22px'}}></i>
            <div className="icon-box__ctn">
                <h3 className="icon-box__title">成功</h3>
                <p className="icon-box__desc">用于表示操作顺利达成</p>
            </div>
        </div>
      </div>
    )
  }
}
