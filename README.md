![npm downloads total](https://img.shields.io/npm/dt/spinner-material.svg) ![npm version](https://img.shields.io/npm/v/spinner-material.svg) ![npm license](https://img.shields.io/npm/l/spinner-material.svg)

# spinner-material
A flashy material-design inspired spinner with a custom element and css.

![Example of Spinner](https://raw.githubusercontent.com/icarus-sullivan/spinner-material/master/example.gif)

### Installation
```
npm install --save spinner-material
```
or
```
yarn add spinner-material
```

### Attributes
|Name|Type|Default|
|-----|-----|-----|
|radius |Number |40 
|color |String |#333333 
|stroke |Number |5 
|visible|Boolean |true 

### Import
The module registers a custom element on the window. To use that custom element, the module needs to be imported at least once somewhere in your stack. 

### Usage

```html
<div>
  <spinner-material stroke="4" color="purple" radius="40" />
</div>
```

