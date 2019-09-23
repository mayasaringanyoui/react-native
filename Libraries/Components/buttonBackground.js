/**
 * © You i Labs Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PureComponent } from 'react';
import { Image, View, StyleSheet } from 'react-native';


class ButtonBackground extends PureComponent {
  render() {
    return (
      <View style={styles.container} testID={this.props.testID}>
        <View
          style={[
            styles.unfocusedOutline,
            { borderColor: this.props.active ? '#f1f1f1' : '#303030', opacity: this.props.focused ? 0 : 1 },
          ]}
        />
        <Image
          style={[styles.focusedGradient, { opacity: this.props.focused ? 1 : 0 }]}
          source={{ uri: 'res://drawable/default/nav_bar_gradient.png' }}
        />
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:20,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unfocusedOutline: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: 20,
    bottom:20,
    height: 20,
    borderRadius: 20,
    borderWidth:20,
    backgroundColor: 'rgba(24, 24, 24, 0.2)',
  },
  focusedGradient: {
    position: 'absolute',
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
});

export default ButtonBackground;
