import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';

const styles = StyleSheet.create ({
    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        alignItems: 'flex-end',
        backgroundColor: '#000'
    },
    diplayValue: {
        fontSize:60,
        color:'#fff',
    }
});

export default (props) => {
    return (
        <View style = {styles.display}>
            <Text style = {styles.diplayValue}>{props.value}</Text>
        </View>
    )
}