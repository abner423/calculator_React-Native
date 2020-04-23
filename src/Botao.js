import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    botao:{
        fontSize:40,
        //borderColor:'#888',
        borderWidth:1,
        borderRadius:50,
        width:Dimensions.get('window').width/4,
        height:Dimensions.get('window').width/4,
       // backgroundColor:'#f0f0f0',
        backgroundColor: '#2E2E2E',
        textAlign:'center',
        padding:20,
        alignItems:'center',
        color:'#fff'
    },
    botaoDuplo: {
        width:Dimensions.get('window').width/4*2
    },
    botaoTriplo: {
        width:Dimensions.get('window').width/4*3
    },
    botaoOperacao: {
        backgroundColor:'#FF8000',
        color: '#fff'
    }
})

export default (props) => {
    const stylesButton = [styles.botao]
    if(props.double)
        stylesButton.push(styles.botaoDuplo)
    if(props.triple)
        stylesButton.push(styles.botaoTriplo)
    if(props.operation)
        stylesButton.push(styles.botaoOperacao)
    return (
        <TouchableOpacity onPress = {props.onClick}>
            <Text style = {stylesButton}>{props.label}</Text>
        </TouchableOpacity>
    )
}