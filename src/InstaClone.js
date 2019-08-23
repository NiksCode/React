//1:41:33

import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

class InstaClone extends Component {


    constructor(){
        super();
            this.state = {
                screenWidth: Dimensions.get("window").width
        };

    }



    render(){

        const imageHeight = Math.floor(this.state.screenWidth *1.1);

        const imageUri=
            "https://lh3.googleusercontent.com/URzfzXSMUAW6o9TNPbji1R6-Nb3nKMpziAPf4PfY7ElQ5EYedaiFa__WthKC1oZ_JlIhhht7Tz9uFI9tAulStuo8IA" +
            "=s" + imageHeight + "-c";


        return(

            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
                <View style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                <View style={styles.userBar} >
                <View style={{ flexDirection: "row", alignItems: "center"}}>
                   <Image
                       style={styles.userPic }
                       source={{
                          uri:
                           "https://lh3.googleusercontent.com/i2BlFqtNuUcjLNjzgQDZnAlmvMJr2tXBRo-x1JE_aTdWL6oDljn--QoQ4c9kuZwr6kkC3PwGis7wq1r6GPx9VCA"
                   }}
                   />
                   <Text style={{ marginLeft: 10 }}>Suzan Smith</Text>
                </View>
                <View  style={{alignItems:"center"}}>
                    <Text style={{fontSize: 30}}>...</Text>
               </View>
                </View>
                <Image
                    style={{ width: this.state.screenWidth, height: 400 }}
                    source={{
                       uri: imageUri
                    }}
                />

                <View>

                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
   tempNav: {
       width: 100 + "%",
       height: 50,
       marginTop: 2,
       backgroundColor:'rgb(250,250,250)',
       borderBottomColor:"rgb(233,233,233)",
       borderBottomWidth: StyleSheet.hairlineWidth,
       justifyContent: "center",
       alignItems: "center"
   },

    userBar: {
        width: 100 + "%",
        height: 50,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 8,
        justifyContent: "space-between"
    },

    userPic: {
       height:40,
        width: 40,
        borderRadius:20
    }

});




export default InstaClone;

