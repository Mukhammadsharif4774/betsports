import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BetSportsHeader from '../components/BetSportsHeader';
import BackgroundImage from '../assets/main_background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BetSportsHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'UEFA',
          '10.02 21:00',
          'Paris Saint-Germain ' + ' Bayern Munich',
        )}
        {renderBroadcast(
          'NFL',
          '18.03 20:15',
          'Kansas City Chiefs ' + ' Tampa Bay Buccaneers',
        )}
        {renderBroadcast(
          'MLB',
          '25.04 19:30',
          'New York Yankees ' + ' Boston Red Sox',
        )}
        {renderBroadcast(
          'NHL',
          '15.05 22:00',
          'Edmonton Oilers ' + ' Vancouver Canucks',
        )}
        {renderBroadcast(
          'NBA',
          '30.06 00:45',
          'Golden State Warriors ' + ' Brooklyn Nets',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.placeholder,
    textAlign: 'left',
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.regular,
    fontSize: 17,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
  },
});
