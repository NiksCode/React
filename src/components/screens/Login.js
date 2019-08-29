import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


class Login extends Component {

    login() {
        this.props.navigation.navigate("main")
    // Navigate to main app
    }


    render() {
        return (
            <TouchableOpacity
                style={{
                    height: 100 + "%",
                    width: 100 + '%',
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onPress={() => { this.login()
                }}
            >
                <Text>LOGIN PAGE</Text>
            </TouchableOpacity>
        );
    }
}

export default Login;