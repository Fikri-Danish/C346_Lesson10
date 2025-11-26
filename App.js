import {Button, ScrollView, SectionList, StyleSheet, Text, View, Image} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const pokemonsData = [
  {
    type: 'ELECTRIC',
    data: [
      {name: 'Pikachu', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png'},
      {name: 'Raichu', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_26-2x.png'}
    ],
    bgColor: 'yellow',
    fontColor: 'orange'
  },
  {
    type: 'FIRE',
    data: [
      {name: 'Charizard', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png'},
      {name: 'Magmar', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_126-2x.png'}
    ],
    bgColor: 'orange',
    fontColor: 'red',
  },
  {
    type: 'WATER',
    data: [
      {name: 'Blastoise', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9-2x.png'},
      {name: 'Seadra', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_117-2x.png'}
    ],
    bgColor: 'skyblue',
    fontColor: 'purple'
  },
]

const renderPokemon = ({item}) => {
  return (
    <View style={styles.itemList}>
        <Text style={styles.eachItem}>{item.name}</Text>
        <Image source={{uri: item.image}} style={[styles.image, styles.eachItem]} resizeMode="contain" />
    </View>
  )
}

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonBorder}>
        <Button title="ADD POKEMON"/>
      </View>
      <View style={styles.list}>
        <SectionList
          sections={pokemonsData}
          renderItem={renderPokemon}
          renderSectionHeader={({section: {type, bgColor, fontColor}}) => (
            <Text style={[styles.listHeader, {color: fontColor, backgroundColor: bgColor}]}>
              {type}
            </Text>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonBorder: {
    borderWidth: 1,
    height: 105,
    justifyContent: 'flex-end',
    padding: 15,
  },
  image: {
    borderWidth: 0,
    width: 150,
    height: 200,
  },
  list: {
    padding: 20,
    borderWidth: 1,
    flexDirection: 'column',
    height: 805
  },
  itemList: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  eachItem: {
    flex: 1,
    fontWeight: 'bold',
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
  }
});

export default App;