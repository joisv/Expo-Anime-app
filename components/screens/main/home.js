import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../../constant'

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
        <View>
            <Text>Halo dunia</Text>
        </View>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary,
        
    }
})