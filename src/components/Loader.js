/* eslint-disable react/prefer-stateless-function */
/* eslint-disable arrow-parens */
import React, { Component } from "react";

const isEmpty = prop => !prop || !prop.main;

const Loader = loaderProps => WrappedComponent => {
  return class Loader extends Component {
    render() {
      //debugger;
      return isEmpty(this.props[loaderProps]) ? (
        <div>Loading...</div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default Loader;
