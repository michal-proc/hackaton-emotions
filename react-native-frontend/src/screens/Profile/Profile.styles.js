import { StyleSheet } from 'react-native';
import theme from '../../css/theme';

export const styles = StyleSheet.create({
    avatar: {
        width: 150,
        borderRadius: 75,
        backgroundColor: theme.accent1,
        height: 150,
        marginBottom: 20,
        overflow: "hidden"
    },
    editProfile: {
        fontSize: 25,
        color: theme.accent4,
        marginLeft: 5
    },
    editPressable: {
        position: "absolute",
        right: 10,
        bottom: 70,
        backgroundColor: "white",
        elevation: 10,
        borderRadius: 25,
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    userField: {
        backgroundColor: "#ddd",
        padding: 5,
        borderRadius: 4,
        marginTop: 5,
        width: "100%"
    }
})