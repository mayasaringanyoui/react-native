/**
 * © You i Labs Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

// jest.mock('../Focusable', () => props => props.children({ focused: true }));
jest.mock('../buttonBackground', () => props => props.children);

const Button = require('../testButton').default;

it('renders correctly', () => {
    const tree = renderer.create(<Button title="Test" onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  