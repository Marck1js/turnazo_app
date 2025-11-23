import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Board = () => {
  return (
    <View style={styles.boardContainer}>
      <Text style={[styles.textSize, {flex: 1, textAlign: 'left'}]}>PPP</Text>
      <Text style={[styles.textSize, {flex: 1, textAlign: 'right'}]}>Point to Point</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  boardContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    height: 'auto',
    minHeight: 40,
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  textSize: {
    fontSize: 24
  }
})

export default Board