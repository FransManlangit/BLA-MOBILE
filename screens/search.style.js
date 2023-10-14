import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";




const styles = StyleSheet.create({

    searchContainer: {
        flexDirection: "row",
        justifyContent: "center", 
        alignContent: "center",
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
      },
      
      searchIcon: {
      marginHorizontal: 10,
      color: COLORS.gray,
      marginTop: SIZES.small
      },
      
      searchWrapper: {
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
      },
      
      SearchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small,
      },
    
    searchBtn:{
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary
    }


});

export default styles;