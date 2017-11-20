import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';
const {width, height} = Dimensions.get('window');

// 自定义Header，覆盖系统提供的
export default class NavStyle extends Component {
    static defaultProps = {
        backgroundColor: '#4ECBFC'
    };

    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
                <Text style={styles.leftStyle} onPress={() => this.props.leftClick()}>
                    返回
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15
    },
    leftStyle: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 18,
    }
});

