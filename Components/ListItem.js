import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

const ListItem = (props) => {
	function alertOption() {
		Alert.alert(
			'Désolé',
			"Désolé cette option n'est pas encore disponible",
			[
				{
					text: "D'accord",
				},
			]
		);
	}
	return (
		<TouchableOpacity activeOpacity={0.5} onPress={alertOption}>
			<View style={styles.card}>
				<Text style={styles.cardTitle}> {props.item} </Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		width: '100%',
		padding: 15,
		borderBottomWidth: 1,
		borderColor: 'green',
	},
});

export default ListItem;
