![npm downloads total](https://img.shields.io/npm/dt/spinner-material.svg) ![npm version](https://img.shields.io/npm/v/spinner-material.svg) ![npm license](https://img.shields.io/npm/l/spinner-material.svg)

# spinner-material
A flashy material-design inspired spinner using purely css and custom element.

![Example of Spinner](https://raw.githubusercontent.com/icarus-sullivan/spinner-material/master/example.gif)

### Installation
```
npm install --save spinner-material
```
or
```
yarn add spinner-material
```

### PropTypes
|Name|Type|Default|Description|
|-----|-----|-----|-----|
|size |Number |40 |The width and height of the spinner |
|spinnerColor |String |#333333 |The color of the spinner |
|spinnerWidth |Number |5 |The width of the spinner's circle |
|visible|Boolean |true |Whether to show the spinner or not|

### Usage
Example:
```
import Spinner from 'spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
  return (
      <div>
        <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
      </div>
    );
  }
}
```

