import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import styles from "./style.js";

export default function Search(){
    return(
        <View style={styles.containerSearch}>
            <TextInput placeholder="Digite o filme desejado" 
            style = {styles.inputSearch}
            >
            </TextInput>
        </View>
    );
}
