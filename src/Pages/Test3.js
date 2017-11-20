import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const PersonIcon = require('../../src/resources/wode.png');

export default class Test3 extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        tabBarOnPress: (({route, index}, jumpToIndex) => {
            // console.log(route);
            // alert(index);
            jumpToIndex(index);
        }),
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Test3!
                </Text>
                <Text style={styles.instructions}>
                    当前页面的Tabbar是在Routers.js中定义的，通过封装一些方法实现。
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,

    },
    instructions: {
        marginTop: 10,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 18
    },
});
