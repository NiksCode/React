import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from "../../config";

class Post extends Component {


    constructor(){
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        };

    }


    likeToggled(){
        this.setState({
            liked: !this.state.liked
        })
    }


    render(){

        const imageHeight = Math.floor(this.state.screenWidth *1.1);
        const imageSelection = (this.props.item%2===0) ?  "https://lh3.googleusercontent.com/NJhekFO2ke7e5skvO3EIxGEhGuYor4WqMaGCOA8XZ-9FdGWJctS7psVD4_wczoZBdj0mGhB7mMT3jmpq8dQuUOCnW1s"
        : "https://lh3.googleusercontent.com/URzfzXSMUAW6o9TNPbji1R6-Nb3nKMpziAPf4PfY7ElQ5EYedaiFa__WthKC1oZ_JlIhhht7Tz9uFI9tAulStuo8IA"
        const imageUri=
           imageSelection +
            "=s" +
            imageHeight +
            "-c";


        const heartIconColor = (this.state.liked) ? "rgb(252,61,57)": null;


        return(

            <View style={{ flex: 1, width: 100 + "%" }}>
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
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {

                        this.likeToggled()

                    }}
                >
                    <Image
                        style={{ width: this.state.screenWidth, height: 400 }}
                        source={{
                            uri: imageUri
                        }}
                    />
                </TouchableOpacity>

                <View style={styles.iconBar}>
                    <Image
                        style={[styles.icon, {height:40, width: 40, tintColor: heartIconColor}
                        ]}
                        source={config.images.heartIcon}/>
                    <Image style={[styles.icon, {height:36, width: 36}]}
                           source={config.images.chatIcon}/>
                    <Image
                        resizeMode="stretch"
                        style={[styles.icon, {height:40, width: 40}]}
                        source={config.images.arrowIcon}
                    />
                </View>

                <View style={styles.iconBar}>
                    <Image
                        style={[styles.icon, {height:27, width: 27}
                        ]}
                        source={config.images.heartIcon}/>
                    <Text>128 Likes</Text>
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
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 8,
        justifyContent: "space-between"
    },

    userPic: {
        height:40,
        width: 40,
        borderRadius:20
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor:"rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems:"center"
    },
    icon:{
        marginLeft: 5
    }
});




export default Post;
