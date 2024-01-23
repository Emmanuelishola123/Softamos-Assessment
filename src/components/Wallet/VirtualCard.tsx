import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { CardPattern } from '../../../assets'

interface CardProps {
    cardHolderName: string,
    cardBalance: number,
    cardNumber: number
}

const VirtualCard = ({ cardBalance, cardHolderName, cardNumber }: CardProps) => {

    const secureCardNumber = (cn: string): string => {
        let start = cn.slice(0, 4)
        let end = cn.slice(cn.length - 5, cn.length)
        return start + "********" + end
    }
    return (
        <ImageBackground source={CardPattern} resizeMode="cover" style={style.bgImage}>
            <View style={style.card}>
                <Text style={style.cardText}> {cardHolderName}</Text>
                <Text style={style.cardText}> {secureCardNumber(cardNumber.toString())}</Text>
                <Text style={style.cardText}> ${cardBalance}.00</Text>
            </View>
        </ImageBackground>
    )
}

export default VirtualCard



const style = StyleSheet.create({
    bgImage: {
        flex: 1,
        width: '100%',
        height: 220,
        borderRadius: 8,
        overflow: 'hidden',
    },
    card: {
        width: '100%',
        height: 220,
        borderRadius: 8,
        backgroundColor: 'rgba(46, 204, 113, 0.75)',
        padding: 24,
        justifyContent: 'space-between'

    },
    cardText: {
        fontSize: 24
    }
})