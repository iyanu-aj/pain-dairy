// Importing components

import React from 'react';
import { Platform, TextInput, StyleSheet,View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'; 
import colors from '../config/colors';


function AppTextInput({icon, height = 50, ...otherProps}) {
    return (
        // settting up props 

        <View style={[styles.container, { height }]}>

            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.secondary}
            style={styles.icon}/>}
            
            <TextInput style={styles.textInput} {...otherProps}/> 

        </View>
    );
}

// Styling 
 
const styles = StyleSheet.create({
   container: {
       backgroundColor: colors.offwhite,
       borderRadius: 25,
       flexDirection: "row",
       width: '90%',
       alignSelf: 'center',
       padding: 15,
       marginVertical: 10,
       borderRadius: 5
    },
    textInput: {
        fontSize : 18,
        // fontFamily: "default",
        color: colors.dark,
        width: '100%',
    },
    icon:{
        marginRight: 10,
    }
})

export default AppTextInput;