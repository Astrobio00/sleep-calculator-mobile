import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ResultScreen(props) {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Procure dormir ás: </Text>
            </View>
            <View style={styles.resultConteiner}>
                <Text style={styles.resultText}>{props.resultValue[0]}</Text>
                <Text style={styles.resultText}>{props.resultValue[1]}</Text>
                <Text style={styles.resultText}>{props.resultValue[2]}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        margin: 30,
    },
    headerText: {
        fontSize: 17,
        color: '#e8e9f3'
    },
    resultConteiner: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center'
    },
    resultText:{
        padding: 15,
        fontSize: 20,
        color: '#272d2d'
    }
})
export default ResultScreen