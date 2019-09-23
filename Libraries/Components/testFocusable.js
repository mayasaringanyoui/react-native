/**
 * © You i Labs Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

class Focusable extends Component {
  buttonRef = React.createRef();

  state = {
    focused: false,
  };

  _onPress = event => {
    this.props.onPress && this.props.onPress(event);
  };

  _onFocus = event => {
    this.props.onFocus && this.props.onFocus(event);
    this.setState({
      focused: true,
    });
  };

  _onBlur = event => {
    this.props.onBlur && this.props.onBlur(event);
    this.setState({
      focused: false,
    });
  };

  render() {
    // We use TouchableHighlight with disabled highlight effect because TouchableWithoutFeedback
    // doesn't work well: RN-2222
    return (
      <TouchableHighlight
        ref={this.buttonRef}
        activeOpacity={1}
        underlayColor="transparent"
        style={this.props.style}
        testID={this.props.testID}
        onPress={this._onPress}
        onFocus={this._onFocus}
        onBlur={this._onBlur}
        accessible={this.props.accessible}
        accessibilityLabel={this.props.accessibilityLabel}
      >
        {this.props.children(this.state)}
      </TouchableHighlight>
    );
  }
}

Focusable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  onPress: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  testID: PropTypes.string,
};

Focusable.defaultProps = {
  testID: 'Focusable',
};

export default Focusable;
