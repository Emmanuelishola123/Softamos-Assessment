import { View, StyleSheet, Image, TouchableOpacity, TextInput, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { ScreenWrapper } from '../components'
import { avatar } from '../../assets'
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from '../context';
import fetchAddressInfo from '../services/geocodingApi';
import { useNavigation, useTheme } from '@react-navigation/native';
import { RootStackScreenProps } from '../navigations/types';


const UserLocationScreen = ({ navigation }: RootStackScreenProps<"RegisterScreen">) => {
  const themeContext = useContext(ThemeContext)
  const [address, setAddress] = useState('')
  const [longLat, setLongLat] = useState<{ long: string, lat: string, address: string } | undefined>(undefined)

  const { colors: { text } } = useTheme()

  if (!themeContext) {
    throw new Error('An error occured.');
  }

  const searchAddress = async () => {
    if (address) {
      const res = await fetchAddressInfo(address)
      setLongLat({ long: res[0].lon, lat: res[0].lat, address: res[0].address_line1 + ' ' + res[0].address_line2 })
    }
  }


  return (
    <ScreenWrapper>
      {/* Header */}
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.navigate('FirstIntroScreen')}>
          <Image source={avatar} style={style.avatar} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => themeContext.setIsDarkTheme(current => {
            return !current
          })}
        >
          {themeContext.isDarkTheme ?
            <Feather name="sun" size={24} color="white" /> :
            <Feather name="moon" size={24} color="black" />}
        </TouchableOpacity>
      </View>

      {/* Search Box */}
      <View style={style.searchBox}>
        <TextInput
          placeholder='Search any place on earth'
          value={address}
          onChangeText={setAddress}
          style={style.inputText} />
        <TouchableOpacity onPress={searchAddress} style={style.searchBtn}>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* Searched Response */}
      {longLat ? <View style={style.searchedResult}>
        <Text style={{ color: text, fontSize: 18, textAlign: 'center' }}> The Longitude & Latitude for the address {longLat?.address}</Text>
        <Text style={{ color: text, fontSize: 18, textAlign: 'center' }}> Longitude: {longLat?.long}</Text>
        <Text style={{ color: text, fontSize: 18, textAlign: 'center' }}> Latitude: {longLat?.lat}</Text>
      </View> :
        <Text style={{ color: text, fontSize: 18, textAlign: 'center' }}>Start searching for any address to get the exact Longitude and Latitude of it.</Text>
      }
    </ScreenWrapper>

  )
}

export default UserLocationScreen



const style = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: 'grey',
  },
  searchBtn: {
    width: 'auto',
    height: 'auto',
    borderRadius: 4,
    padding: 4,
    overflow: 'hidden',
    backgroundColor: '#9ca3af'

  },
  inputText: {
    flex: 1,
    color: 'white',
    fontWeight: '500',
    fontSize: 18
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  searchedResult: {
    padding: 8,
    width: '100%',
    marginTop: 80,
    alignItems: 'center',
    gap: 8
  }
})