import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from "react-native-dynamic-vector-icons";
import styles from './styles/MenuTriggerButton.style';

export default class MenuTriggerButton extends Component {
	render() {
		const {
			iconName,
			iconType,
			iconSize,
			iconColor
		} = this.props;
		return (
			<View style={styles.buttonStyle}>
				<View>
					<Icon
						size={iconSize || 20}
						color={iconColor || "orange"}
						type={iconType || "FontAwesome"}
						name={iconName || "exclamation-triangle"}
					/>
				</View>
			</View>
		);
	}
}
