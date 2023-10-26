import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	ScrollView,
	FlatList,
	Alert,
	Modal,
	TouchableOpacity,
} from 'react-native';
import ListItem from './Components/ListItem';

export default function App() {
	const [openModal, setOpenModal] = useState(false);
	const [openMenue, setOpenMenue] = useState(false);
	const [products, setProducts] = useState([
		{
			name: 'Iced Latte',
		},
		{
			name: 'Doubleshot Iced Coffee',
		},
		{
			name: 'Doubleshot Vanilla Iced Coffee',
		},
		{
			name: 'Caramel Macchiato',
		},
		{
			name: 'Iced Caramel Macchiato',
		},
		{
			name: 'Iced Cappuccino',
		},
		{
			name: 'Ristretto Bianco',
		},
		{
			name: 'Cold Brew Latte',
		},
		{
			name: 'Mocha',
		},
		{
			name: 'Iced Mocha',
		},
		{
			name: 'Americano',
		},
		{
			name: 'Iced Americano',
		},
		{
			name: 'Café Filtre',
		},
		{
			name: 'Café Filtre Glacé',
		},
		{
			name: 'Chocolat Viennois Signature',
		},
		{
			name: 'Chocolat Viennois Signature Glacé',
		},
	]);

	// Alert.prompt('Attention', 'Souhaitez vous vraiment supprimer ce mesage ?', [
	// 	{
	// 		text: 'Non',
	// 		style: 'cancel',
	// 	},
	// 	{
	// 		text: 'Oui, Supprimer',
	// 		style: 'destructive',
	// 	},
	// ]);

	let menu = products.map((bucks, index) => {
		return (
			<View style={styles.card} key={index}>
				<Text style={styles.cardTitle}> {bucks.name} </Text>
			</View>
		);
	});

	return (
		<View style={styles.container}>
			{openModal && (
				<Modal
					transparent={true}
					style={{ borderRadius: 5 }}
					visible={openModal}
					animationType="fade"
				>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'rgba(0,0,0, .5)',
						}}
					>
						<View
							style={{
								backgroundColor: 'white',
								padding: 15,
								borderRadius: 5,
							}}
						>
							<Text style={{ padding: 10 }}>
								ceci est mon premier modal
							</Text>
							<TouchableOpacity
								onPress={() => setOpenModal(false)}
								style={{
									padding: 10,
									margin: 5,
									backgroundColor: 'green',
									borderRadius: '5,',
								}}
								activeOpacity={0.5}
							>
								<Text
									style={{
										textAlign: 'center',
										color: 'white',
									}}
								>
									Fermer le bouton
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			)}
			<View
				style={{
					position: 'absolute',
					backgroundColor: 'green',
					width: 50,
					height: 50,
					bottom: 90,
					right: 20,
					borderRadius: 25,
				}}
			>
				<Text
					style={{
						textAlign: 'center',
						fontSize: 45,
						color: 'white',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					+
				</Text>
			</View>
			<Image
				source={require('./assets/starbuks.png')}
				style={{ width: 100, height: 100 }}
			/>
			<Text style={styles.title}>STARBUKS</Text>
			<Text>
				{' '}
				{openMenue
					? 'Passez votre Commande'
					: 'Ouvrez le menue afin de passez votre commande'}{' '}
			</Text>

			{openMenue && (
				<FlatList
					style={{ width: '100%' }}
					data={products}
					renderItem={({ item }) => {
						return <ListItem item={item.name} />;
					}}
				/>
			)}

			<Pressable
				// onPress={() => setOpenMenue((prevState) => !prevState)}
				onPress={() => setOpenModal(true)}
				style={styles.pressable}
			>
				<Text style={{ color: 'white', fontSize: 19 }}>
					{openMenue ? 'Caché le Menu' : ' Afficher le Menu'}
				</Text>
			</Pressable>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		margin: 10,
		color: 'green',
		fontSize: 32,
		fontWeight: 'bold',
	},
	pressable: {
		backgroundColor: 'green',
		padding: 10,
		borderRadius: 4,
		marginTop: 15,
		marginBottom: 35,
	},
	card: {
		width: '100%',
		padding: 15,
		borderBottomWidth: 1,
		borderColor: 'green',
	},
});
