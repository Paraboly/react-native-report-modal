import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import MyIcon from '../../../custom-icon/MyIcon';
import Divider from '../../../common/Divider';
import { bottomBarTheme } from '../../../../styles/colors';

const { width } = Dimensions.get("window");

const styles = {
	container: {
		flexDirection: "column",
	},
	iconTextContainer: {
		flexDirection: "row",
		top: 8,
		left: 16,
	},
	itemTextStyle: {
		bottom: 8,
		alignSelf: "center",
		justifyContent: "center",
	},
	dividerStyle: {
		margin: 8,
		top: 8,
	}
};

export default class MenuOptionAnalysis extends Component {
	render() {
		const {
			item,
			index,
			length
		} = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.iconTextContainer}>
					<View style={{ right: 0, bottom: 8, }}>
						<MyIcon
							name={item.iconName}
							size={50}
							color={item.color}
						/>
					</View>
					<View style={{
						flex: 1,
						top: 8,
						flexDirection: "column",
					}}>
						<Text style={[styles.itemTextStyle, {
							fontSize: 12,
							fontFamily: "Metropolis-Regular",
							color: bottomBarTheme.default.buttonColor,
						}]}>{item.text}</Text>
						<Text style={[styles.itemTextStyle, {
							fontSize: 20,
							lineHeight: 32,
							color: item.color,
							fontFamily: "Metropolis-Medium",
						}]}>{item.valueText || ""}</Text>
					</View>
				</View>
				{index !== length - 1 && <Divider style={styles.dividerStyle} dividerWidth={width * 0.65} />}
			</View>
		);
	}
}
