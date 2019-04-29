import React, { Component } from 'react';
import { MenuOption } from 'react-native-popup-menu';
import { Text, View } from 'react-native';
import styles from './styles/MenuTitle.style';

export default class MenuTitle extends Component {
	render() {
		const { title } = this.props;
		return (
			<MenuOption value={99} customStyles={styles.menuOptionStyle}>
				<View style={styles.titleContainer}>
					<Text style={styles.textStyle}>{title}</Text>
				</View>
			</MenuOption>
		);
	}
}
