/**
 * © You i Labs Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import Focusable from './testFocusable';
import ButtonBackground from './buttonBackground';

class  Button extends PureComponent {
  render() {
    return (
      <Focusable style={this.props.style} onPress={this.props.onPress}>
        {({ focused }) => (
          <ButtonBackground focused={focused} testID={this.props.testID}>
            <Text style={styles.label}>{this.props.title}</Text>
          </ButtonBackground>
        )}
      </Focusable>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: '#f1f1f1',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});

Button.propTypes = {
  testID: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default  Button;
