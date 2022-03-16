import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input : {
        borderWidth : 1,
        width : 250,
        borderRadius : 20,
        paddingLeft : 20,
        paddingVertical : 4,
        marginBottom : 20
    },

    btn_login : {
        backgroundColor : 'blue',
        padding : 10,
        borderRadius : 20,
        width : 250,
    },

    btn_text : {
        color : '#fff',
        textAlign : "center"
    },

});

export default styles;