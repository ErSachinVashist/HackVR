import { StyleSheet } from "react-360";

export const styles = StyleSheet.create({
  openBtn_mainView: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 179, 179,0.4)",
  },
  openBtn: {
    paddingLeft: 5,
    paddingRight: 5,
    width: "auto",
    height: 50,
    fontSize: 40,
    color: "white",
    backgroundColor: "red",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 40,
    color: "yellow",
    fontWeight: "bold",
    marginRight: 50,
  },
  mainView: {
    width: 500,
    height: 100,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryMainView: {
    width: 150,
    height: 150,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 179, 179,0.4)",
    borderRadius: 100,
  },
});
