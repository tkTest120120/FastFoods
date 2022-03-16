import { StyleSheet , Dimensions, StatusBar } from "react-native"

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop : StatusBar.currentHeight + 5,
    },

    flatList: {
        // marginHorizontal: 4
    },


    item: {
        borderBottomWidth : 1,
        borderColor : "grey",
        padding: 10,
        marginRight: 3,
        marginBottom : 3,
        // marginVertical: 8,
        // marginHorizontal: 16,
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "flex-start",
        width: WIDTH
    },

    image : {
        width : 90,
        height : 90,
        borderRadius : 10,
        marginRight : 8
    },

    item_CT: {
        flexDirection : "column",
        // backgroundColor : "red",
        width : 220,    
        marginLeft : 5,
        // justifyContent : "space-between",
        alignItems : "flex-start",
    },

    foodName : {
        fontSize : 18,
        fontWeight : "bold"
    },

    price : {
        color : "red",
        fontSize : 14,
        marginTop : 15,
    },
});

export default styles;