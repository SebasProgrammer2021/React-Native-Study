import { StyleSheet } from "react-native";

export const colors = {
    darkGray: "#2d2d2d",
    lightGray: "#9b9b9b",
    orange: "#ff9427",
    textPrimary: "white",
    textSeconday: "#666",
    background: "#000"
}

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background
    },
    calculatorContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-end"
    },
    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: "right",
        marginBottom: 10,
        fontWeight: "400"
    },
    subResult: {
        color: colors.textSeconday,
        fontSize: 40,
        textAlign: "right",
        fontWeight: "300"
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 10
    },
    buttoText: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: "white",
        fontWeight: "300"
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10

    }
})

