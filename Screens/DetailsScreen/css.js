import {StyleSheet, Dimensions} from "react-native"

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // width : WIDTH,
    },

    input : {
        borderWidth : 1,
        width : 250,
        borderRadius : 20,
        paddingLeft : 20,
        paddingVertical : 4,
        marginBottom : 20
    },

    btn_payment : {
        // flex : 1,
        // width : 10,
        paddingVertical : 10,
        paddingHorizontal : 50,
        borderRadius : 20,
        backgroundColor : "blue"
    },

    btn_text : {
        color : '#fff',
        textAlign : "center"
    },

    payment : {
        position : "absolute",
        bottom : 0,
        width : WIDTH,
        flexDirection : "row",
        alignSelf : "flex-start",
        justifyContent : "space-between",
        alignItems : "center",
        padding : 10
    },

});

export default styles;