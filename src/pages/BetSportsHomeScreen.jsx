import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {AppContext} from '../components/AppContext';
import BetSportsHeader from '../components/BetSportsHeader';
import BetSportsMenuComponent from '../components/BetSportsMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {betebetProducts} from '../helpers/betebetProducts';
import BackgroundImage from '../assets/main_background.png';

const categories = [
  {label: 'Традиционные'},
  {label: 'Десерты'},
  {label: 'Закуски'},
  {label: 'Оригинальные'},
];

const OnwSportCategoryButton = ({label, active, onPress, image}) => (
  <TouchableOpacity onPress={onPress} style={styles.categoryButton}>
    <Text style={active ? styles.categoryActive : styles.category}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function () {
  const [category, setCategory] = useState(0);
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);

  const handleCategoryChange = index => {
    setCategory(index);
    toggleRefresh(!shouldRefresh);
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BetSportsHeader />

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <OnwSportCategoryButton
            key={index}
            label={item.label}
            active={category === index}
            onPress={() => handleCategoryChange(index)}
            image={item?.image}
          />
        ))}
      </View>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {betebetProducts[category].map((product, index) => (
          <BetSportsMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width,
    marginVertical: 15,
  },
  categoryButton: {
    width: '48%',
    marginTop: 10,
  },
  category: {
    fontFamily: FONTS.regular,
    color: COLORS.main,
    fontSize: 15,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  categoryActive: {
    fontFamily: FONTS.bold,
    color: COLORS.red,
    fontSize: 17,
    textAlign: 'center',
    verticalAlign: 'middle',
    textDecorationLine: 'underline',
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
});
