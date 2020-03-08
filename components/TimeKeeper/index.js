import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';



import ResultScreen from '../ResultScreen/'


function TimeKeeper() {
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [result, setResult] = useState([])

    function calculate(hour, min) {
        if (parseInt(hour) >= 25) {
             alert('Insira um valor válido', 'Erro', {text: 'Ok'}, {cancelable: false}) 
             hour = 0
             min = 0
        }
        let results = [parseInt(hour) - 6, parseInt(hour) - 7, parseInt(hour) - 9]
        for (let index = 0; index < results.length; index++) {
            if (results[index] <= 0) {
                results[index] = results[index] + 12
            }
        }
        
        if (min == 0) {
            results[0] = results[0] + ':00' 
            results[1] = (results[1] - 1) + ':30'
            results[2] = results[2] + ':00'
        }
          if (min > 0 && min < 10) {
            results[0] = results[0] + ':0' + min 
            results[2] = results[2] + ':0' + min
          }
          if (min >=10) {
            results[0] = results[0] + ':' + min 
            results[2] = results[2] + ':' + min
          }
          
          if (min < 30 && min != 0) {
            results[1] = (results[1] - 1) + ':' + (parseInt(min) + 30)
          }
          if (min > 30 && min < 40) {
            results[1] = results[1] + ':0' + (min - 30)
          }
          if (min == 30) {
            results[1] = results[1] + ':00'
          }
          if (min >= 40) {
            results[1] = results[1] + ':' + (min - 30)
          }

          if (min == '' && min != 0) { 
              results[1] = (results[1] - 1) + ':30'
          }

        setResult(results)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='horas' 
                    keyboardType='numeric' 
                    style={styles.inputNumber} 
                    maxLength={2} 
                    placeholderTextColor='#e8e9f3'
                    onChangeText={setHours}/>
                <Text style={styles.dots}>:</Text>
                <TextInput 
                    placeholder='minutos' 
                    keyboardType='numeric' 
                    style={styles.inputNumber} 
                    maxLength={2}
                    placeholderTextColor='#e8e9f3'
                    onChangeText={setMinutes}/>
            </View>
            <TouchableOpacity style={styles.inputButton} onPressOut={ () => calculate(hours, minutes)}>
                <Text style={styles.inputButtonText}>Calcular</Text>
            </TouchableOpacity>
            <ResultScreen resultValue={result}/>
        </View>    
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 30,
      
    },
    inputContainer:{
        flexDirection: 'row',
    },
    inputNumber:{
        backgroundColor: '#272d2d',
        fontSize: 25,
        padding: 10,
        borderRadius: 5,
        color: '#e8e9f3',
        margin: 5,
    },
    inputButton:{
        backgroundColor: '#85c7f2',
        marginTop: 30,
        fontSize: 25,
        padding: 15,
        borderRadius: 5,
        color: '#85c7f2',
        margin: 5,
    },
    inputButtonText:{
        fontSize: 20,
        color: 'white',
    },
    dots: {
        color: '#e8e9f3',
        fontSize: 40,
    }
})

export default TimeKeeper