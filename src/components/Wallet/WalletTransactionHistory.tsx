import { View, Text, FlatList, Pressable, } from 'react-native'
import React from 'react'
import { Transaction, recentTransactions, } from '../../utils/data'
import moment from 'moment'
import { useTheme } from '@react-navigation/native'
import { Theme } from '../../utils/theme'
import { Ionicons } from '@expo/vector-icons';


const WalletTransactionHistory = () => {
    const theme = useTheme()
    return (
        <FlatList
            data={recentTransactions}
            renderItem={({ item }) => RecentTransaction(item, theme as Theme)}
            style={{}}
            keyExtractor={item => item.id + ''}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default WalletTransactionHistory


export const RecentTransaction = (data: Transaction, theme: Theme) => {
    const { colors } = theme as Theme

    return (
        <Pressable
            android_ripple={{ color: data.type === 'credit' ? colors.incomeBackground : colors.expenseBackground, borderless: false, foreground: false }}
            style={{
                flexDirection: 'row',
                paddingHorizontal: 8,
                paddingVertical: 16,
                backgroundColor: colors.card,
                borderColor: colors.placeholder,
                borderTopLeftRadius: data.id === 0 ? 8 : 0,
                borderTopRightRadius: data.id === 0 ? 8 : 0,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                borderBottomWidth: 0.5,
            }}>

            <View style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: data.type === 'credit' ? colors.incomeBackground : colors.expenseBackground,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Ionicons name='wallet' size={24} color={
                    data.type === 'credit' ? colors.income : colors.expense
                } />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', marginLeft: 16 }}>
                <Text style={{
                    color: colors.text,
                    fontSize: 16,
                    fontWeight: '500'
                }}>{data.description}</Text>
                <Text style={{
                    color: colors.descriptionText,
                    fontSize: 16,
                    fontWeight: '400'
                }}>{moment(data.date).format('dddd [at] h:mm A')}</Text>
            </View>

            <View style={{
                alignSelf: 'center',
                paddingVertical: 4,
                paddingHorizontal: 8,
                borderRadius: 8,
                backgroundColor: data.type === 'credit' ? colors.incomeBackground : colors.expenseBackground
            }}>
                <Text style={{
                    color: data.type === 'credit' ? colors.income : colors.expense,
                    fontSize: 16,
                    fontWeight: '600'
                }}>{data.amount}</Text>
            </View>
        </Pressable>
    )
}