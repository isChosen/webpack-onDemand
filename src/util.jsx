import React, { Component, PureComponent, createElement } from 'react';

const getAsyncComponent = (load) => (
  class AsyncComponent extends PureComponent {
    componentDidMount() {
      load().then(({default: component}) => {
        this.setState({
          component
        })
      })
    }
    render() {
      const {component} = this.state || {};
      return component ? createElement(component): null;
    }
  }
)

function asyncComponent (importComponent) {
  class AsyncComponent2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent2;
}

export {
  getAsyncComponent,
  asyncComponent
}
