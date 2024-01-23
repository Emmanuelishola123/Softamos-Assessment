import React from 'react'
import { View, useWindowDimensions } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
    const theme = useTheme()
    const dimensions = useWindowDimensions()
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: theme.colors.card,
                minHeight: dimensions.height,
            }}
        >
            <View style={{
                paddingHorizontal: 16,
                paddingVertical: 16,
                gap: 16
            }}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default ScreenWrapper