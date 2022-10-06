import { StyleSheet } from "react-360";

export const styles = StyleSheet.create({
  openBtn_mainView: {
    width: 250,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 179, 179,0.1)",
  },
  openBtn: {
    paddingLeft: 5,
    paddingRight: 5,
    width: 200,
    height: 50,
    fontSize: 40,
    color: "red",
    backgroundColor: "white",
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
    width: 1000,
    height: 200,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    
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
  bannerView: {
     width: 250,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 179, 179,0.1)",
    transform: [{ rotateY: "10deg" }],
  }

});
