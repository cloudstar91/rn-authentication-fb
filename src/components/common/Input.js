import React from "react";
import { View, Text, TextInput } from "react-native";

const styles={
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    },
    labelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    containerStyle:{
        flex:1,
        height:40,
        flexDirection:'row',
        alignItems:'center'
    }
}

const Input = ({label,value,onChangeText}) => {
    const {inputStyle,labelStyle,containerStyle}=styles
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput style={inputStyle}
        onChangeText={onChangeText}
        value={value}
        
      />
    </View>
  );
};

export { Input };