import React, {PropTypes as T} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import GitHubForkRibbon from 'react-github-fork-ribbon'

let GoogleApiWrapper;
if (__IS_DEV__) {
  GoogleApiWrapper = require('../src/index').GoogleApiWrapper
} else {
  GoogleApiWrapper = require('../dist').GoogleApiWrapper
}

import styles from './styles.module.css'

export const Container = React.createClass({

  propTypes: {
    children: T.element.isRequired
  },

  contextTypes: {
    router: T.object
  },

  renderChildren: function() {
    const {children} = this.props;
    if (!children) return;

    const sharedProps = {
      google: this.props.google,
      loaded: this.props.loaded
    }
    return React.Children.map(children, c => {
      return React.cloneElement(c, sharedProps, {

      });
    })
  },

  render: function() {
    const {routeMap, routeDef} = this.props;
    const {router} = this.context;

    const map = this.renderChildren();
    return (
      <div className={styles.container}>

        <div className={styles.header}>
          <h1>Hello World</h1>
        </div>     

        <div className={styles.wrapper}>

          <div className={styles.list}>
            <h1>Sidebar</h1>
          </div>
          <div className={styles.content}>
            {map}
          </div>
          
        </div>
      </div>
    )
  }
})

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
