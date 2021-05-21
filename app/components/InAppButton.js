import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../config/colors';

function InAppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            
        
            <Text style={styles.text}>
                {title}
            </Text> 
 
        </TouchableOpacity>


    );
}



const styles = StyleSheet.create({
    button:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: 45,
            bottom: 108,
            position: "absolute",
            // width: 305,
            height: 45,
          
            bottom: "35%",
            backgroundColor: colors.primary,
            borderRadius: 5,
    }, 

    text:   {
        color: colors.white,
        fontSize: 18,


    },

})

export default  InAppButton;