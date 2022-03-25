import React,{Component} from "react";
import {Text, View, StyleSheet} from "react-native";

export default class MentalActivity extends Component{
    render(){
        return(
            <View style={styles.container}>
              <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Mental Activity</Text>
                    </View>
            </View>

        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "red"
    }
})
