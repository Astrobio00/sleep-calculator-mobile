import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {
    return(
        <View>
            <Text style={styles.headerh1}>Calculadora do sono</Text>
            <Text style={styles.headerh2}>De que horas quero acordar?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerh1:{
        paddingTop: 40,
        paddingLeft: 15,
        fontSize: 25,
        fontWeight: 'bold',
        color:'#e8e9f3',
      },
      headerh2:{
        paddingBottom: 15,
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color:'#e8e9f3',
      },
})

export default Header