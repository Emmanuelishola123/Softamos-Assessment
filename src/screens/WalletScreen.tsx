import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { ScreenWrapper, TransactionHistory, VirtualCard } from '../components'
import { ThemeContext } from '../context'
import { useTheme } from '@react-navigation/native'

const WalletScreen = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('An error occured.');
  }
  const { colors: { text } } = useTheme()


  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false} >
        {/* Wallet Virtual Card */}
        <View style={{ display: 'flex', gap: 8 }} >
          <Text style={[style.cardText, { color: text }]}>
            Wallet Card
          </Text>
          <VirtualCard cardBalance={10000.00} cardHolderName='Emmanuel Ishola A' cardNumber={55930987889432} />
        </View>

        {/* Transaction History */}
        <View style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <Text style={[style.cardText, { color: text }]}>
            Transaction History
          </Text>
          <TransactionHistory />
        </View>
      </ScrollView>
    </ScreenWrapper>

  )
}

export default WalletScreen



const style = StyleSheet.create({
  cardText: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 2,

  },
  cardOperations: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  cardOperationItem: {
    width: 55,
    height: 55,
    borderRadius: 55,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8

  }
})