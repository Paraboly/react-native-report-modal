<img alt="Paraboly React Native Report Modal" src="https://github.com/Paraboly/react-native-report-modal/blob/master/assets/op_logo.png" width="1050"/>

Customizable Report Modal via Paraboly for React Native.

[![npm version](https://img.shields.io/npm/v/@paraboly/react-native-report-modal.svg)](https://www.npmjs.com/package/@paraboly/react-native-report-modal)
[![npm](https://img.shields.io/npm/dt/@paraboly/react-native-report-modal.svg)](https://www.npmjs.com/package/@paraboly/react-native-report-modal)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Report Modal" src="https://github.com/Paraboly/react-native-report-modal/blob/master/assets/Screenshots/example.png" width="49.7%"/>
</p>


## Installation

Add the dependency:

```ruby
npm i @paraboly/react-native-report-modal
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```
"react": ">= 16.x",
"react-native": ">= 0.55.x",
"react-native-vector-icons": ">= 6.x.x",
"@paraboly/react-native-modal-box": ">= x.x.x"
```

## Basic Usage

```js
<ReportModal />
```


## Advanced Usage

```js
<ReportModal
  title="Sorun Bildiriniz"
  buttonText="Gönder"
  iconConfig={IcomoonConfig}
  menuOptions={this.menuOptions}
  onPress={selectedItems => {
    this.onPress(selectedItems);
  }}
/>
```

### Configuration - Props


| Property              |    Type     |         Default         | Description                                                               |
| --------------------- | :---------: | :---------------------: | ------------------------------------------------------------------------- |
| isOpen                |   boolean   |          false          | use this to open modal directly                                           |
| backdrop              |   boolean   |          false          | use this to add a backdrop for the modal                                  |
| title                 |   string    |     Report Problem      | change the title of the modal                                             |
| buttonText            |   string    |         Report          | change the button text of the modal                                       |
| menuOptions           |    array    | check the usage section | set your own data array for the generation of multiple selection bar      |
| refName               |   string    |       reportmodal       | use this to set the ref of the modal                                      |
| onPress               |  function   |          null           | use this to handle the onPress of the right bottom button aka send button |
| iconConfig            |    json     |         icomoon         | use this to set your own icomoon sets for the icons                       |
| modalWidth            |   number    |      width * 0.75       | change the modal's width                                                  |
| modalHeight           |   number    |           350           | change the modal's height                                                 |
| dividerWidth          |   number    |      width * 0.62       | change the divider's width                                                |
| titleStyle            |    style    |     check the code      | set your own style for button                                             |
| buttonStyle           |    style    |     check the code      | set your own style for button                                             |
| buttonTextColor       |    color    |     check the code      | change the button's text color                                            |
| buttonFontFamily      | font family |         default         | set your own font family for the button text                              |
| buttonRippleColor     |    color    |     check the code      | change the button's ripple color                                          |
| buttonShadowColor     |    color    |     check the code      | change the button's shadow color                                          |
| buttonBackgroundColor |    color    |     check the code      | change the button's background color                                      |
| optionFontFamily      | font family |         default         | set your own font family for the each option's font family                |
| backgroundColor       |    color    |         #a092d6         | use this to set background color for the header part of the modal         |
| customIconComponent   |  component  |          null           | use this to set your own custom icon component for the generated buttons  |
| onOpened              |  function   |          null           | use this to set your own onOpened function                                |
| onClosed              |  function   |          null           | use this to set your own onClosed function                                |


## Generated Menu Options Usage
Okey, Report Modal is able to automatically generate each report menu options to do that we must follow this format. "menuOptions" prop accepts an array and it must be like this : (You can check the example)

```js
menuOptions = [
    {
      id: 0,
      iconSize: 40,
      isSelect: false,
      color: "#b2b6c4",
      text: "Işık Hatası",
      iconName: "feedback_junction_alt1"
    },
    {
      id: 1,
      iconSize: 40,
      isSelect: false,
      color: "#b2b6c4",
      text: "Trafik Kazası",
      iconName: "feedback_accident_alt1"
    },
    {
      id: 2,
      iconSize: 40,
      isSelect: false,
      color: "#b2b6c4",
      text: "Kavşak Arızası",
      iconName: "feedback_light_alt1"
    },
    {
      id: 3,
      iconSize: 40,
      isSelect: false,
      color: "#b2b6c4",
      text: "Yaya Butonu Arızası",
      iconName: "feedback_pedestrian_alt1"
    }
  ];
```

## Author

FreakyCoder, kuray.ogun@paraboly.com || kurayogun@gmail.com

## License

React Native Report Modal Library is available under the MIT license. See the LICENSE file for more info.
