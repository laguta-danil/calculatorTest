import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 33,
  },
  textSecondary: {
    color: "#060606",
    fontSize: 33,
  },
  main: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 100,
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 60,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});

export default styles;
