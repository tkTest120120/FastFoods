import { StyleSheet, Dimensions, StatusBar } from "react-native"

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const item_CT_width = 210;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight + 5,
    },

    flatList: {
        marginBottom: 5,
    },


    item: {
        borderBottomWidth: 1,
        borderColor: "grey",
        padding: 10,
        marginRight: 3,
        marginBottom: 3,
        // marginVertical: 8,
        // marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: WIDTH
    },

    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
        marginRight: 8
    },

    item_CT: {
        flexDirection: "column",
        // backgroundColor : "red",
        width: item_CT_width,
        // flex : 1,
        // flexWrap : "wrap",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    foodName: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-start",
    },

    price: {
        color: "red",
        fontSize: 14,
        // marginTop : 15,
    },

    footer: {
        // justifyContent : "center",
        // alignItems : "center",
    },

    btn_TT: {
        padding: 10,
        backgroundColor: "green"
    },

    btn_text: {
        color: "#fff",
        fontSize: 16,
        width: WIDTH,
        textAlign: "center"
    },

    tien_TT: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },

    btn_Delete: {
        alignSelf: "center",
    },

    amount: {
        marginTop : 10,
        width : item_CT_width,
        flexDirection: "row",
        // justifyContent : "space-between",
        // alignItems : "center",
        // backgroundColor : "red"
    },

    amount_text : {
        fontSize : 16,
        marginHorizontal : 10,
    },
});

export default styles;