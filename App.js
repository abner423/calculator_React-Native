import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './src/Botao';
import Display from './src/Display'

const initialState = {
    displayValue: '0',
    operation: null,
    values: [0,0],
    current: 0
}

export default function App() {
  const [state,setState] = useState({
    displayValue: '0',
    operation: null,
    values: [0,0],
    clearDisplay:false,
    current: 0 
  });

  const addDigito = (numero) => {
    if(numero === '0' && state.displayValue ==='0'){
      return 
    }
    if(state.operation && state.clearDisplay === true && numero === '.'){
      return setState({displayValue:'0'+numero,
        values:state.values,
        operation:state.operation,
        clearDisplay:false,
        current:state.current})
    }
    if(numero === '.' && state.displayValue.includes('.')){
      return 
    }
    if(numero === '.' && state.displayValue === '0'){
      return setState({displayValue:state.displayValue+numero,
        values:state.values,
        operation:state.operation,
        clearDisplay:state.clearDisplay,
        current:state.current})
    }
    if(state.displayValue === '0'){
      return setState({displayValue:numero,
                       operation:state.operation,
                       values:[state.values],
                       current:state.current})
    }
    if(state.operation && state.clearDisplay === true && numero !== '.'){
      return setState({displayValue:numero,
                       values:state.values,
                       operation:state.operation,
                       clearDisplay:false,
                       current:state.current})
    }
    setState({displayValue:state.displayValue+numero,
              values:state.values,
              operation:state.operation,
              clearDisplay:state.clearDisplay,
              current:state.current})
  }

  const limpaDisplay = () => {
    setState({...initialState})
  }

  const setOperation = (operation) => {
    const numero =  parseFloat(state.displayValue)
    //SOMA
    if(state.current === 1 && state.operation === '+'){
      return setState({displayValue:state.values[0] + numero,
                operation:operation,
                values:[state.values[0] + numero,0],
                clearDisplay:true,
                current:1})
    }
    //SUBTRACAO
    if(state.current === 1 && state.operation === '-'){
      return setState({displayValue:state.values[0] - numero,
                operation:operation,
                values:[state.values[0] - numero,0],
                clearDisplay:true,
                current:1})
    }
    //MULTIPLICACAO
    if(state.current === 1 && state.operation === '*'){
      return setState({displayValue:[state.values[0] * numero,0],
                operation:operation,
                values:[state.values[0] * numero,0],
                clearDisplay:true,
                current:1})
    }
    //DIVISAO
    if(state.current === 1 && state.operation === '/'){
      let valor = state.values[0] / numero
      if(numero === 0){
        valor = 0
      }
      return setState({displayValue:valor,
                operation:operation,
                values:[valor,0],
                clearDisplay:true,
                current:1})
    }
    setState({displayValue:state.displayValue,
              operation:operation,
              values:[numero,0],
              clearDisplay:true,
              current:1})
    
  }

  
  const resultado = () => {
    const numero =  parseFloat(state.displayValue)

    if(state.current === 1 && state.operation === '+'){
      return setState({displayValue:state.values[0] + numero,
        operation:state.operation,
        values:[state.values[0] + state.values[1],0],
        current:0})
    }
    if(state.current === 1 && state.operation === '-'){
      return setState({displayValue:state.values[0] - numero,
        operation:state.operation,
        values:[state.values[0] - state.values[1],0],
        current:0})
    }
    if(state.current === 1 && state.operation === '*'){
      return setState({displayValue:state.values[0] * numero,
        operation:state.operation,
        values:[state.values[0] * state.values[1],0],
        current:0})
    }
    if(state.current === 1 && state.operation === '/'){
      let valor = state.values[0] / numero
      if(numero === 0){
        valor = 0
      }
      setState({displayValue:valor,
        operation:state.operation,
        values:[valor,0],
        current:0})
    }
  }

  return (
    <View style={styles.container}>
      <Display value = {state.displayValue}/>
      <View style = {styles.botao}>
        <Botao  label = 'AC' triple onClick = {() => limpaDisplay()}/>
        <Botao  label = '/' operation onClick = {() => setOperation('/')}/>
        <Botao  label = '7' onClick = {() => addDigito('7')}/>
        <Botao  label = '8' onClick = {() => addDigito('8')}/>
        <Botao  label = '9' onClick = {() => addDigito('9')}/>
        <Botao  label = '*' operation onClick = {() => setOperation('*')}/>
        <Botao  label = '4' onClick = {() => addDigito('4')}/>
        <Botao  label = '5' onClick = {() => addDigito('5')}/>
        <Botao  label = '6' onClick = {() => addDigito('6')}/>
        <Botao  label = '-' operation onClick = {() => setOperation('-')}/>
        <Botao  label = '1' onClick = {() => addDigito('1')}/>
        <Botao  label = '2' onClick = {() => addDigito('2')}/>
        <Botao  label = '3' onClick = {() => addDigito('3')}/>
        <Botao  label = '+' operation onClick = {() => setOperation('+')}/>
        <Botao  label = '0' double onClick = {() => addDigito('0')}/>
        <Botao  label = '.' onClick = {() => addDigito('.')}/>
        <Botao  label = '=' operation onClick = {() => resultado()}/>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botao: {
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'#000'
  }
});
