import { StyleSheet } from "react-360";

export const styles = StyleSheet.create({
  openBtn_mainView: {
    width: 1000,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255,0.4)",
  },
  openBtn: {
    paddingLeft: 5,
    paddingRight: 5,
    width: 600,
    height: 50,
    fontSize: 50,
    color: "red",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  exitMainView: {
    width: 500,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 179, 179,0.1)",
  },
  exitBtn: {
    width: 500,
    height: 50,
    fontSize: 30,
    color: "red",
    backgroundColor: "white",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  heading: {
    alignContent: "center",
    fontSize: 40,
    color: "red",
    fontWeight: "bold",
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
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  categoryMainView: {
    width: 800,
    height: 500,
    marginBottom: 10,
    marginTop: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255,0.4)",
  },
  categoryList: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryItem: {
    width: 250,
    height: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  bannerView: {
    width: 700,
    height: "100%",
    flexDirection: "column",
  },

  categoryHeading: {
    marginBottom: 20,
    alignItems: "center",
  },
  categoryPhoneView: {
    width: 800,
    height: 500,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "rgba(255, 255, 255,0.4)",
    // marginLeft: 300,
  },
  categoryTabView: {
    width: 800,
    height: 500,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "rgba(255, 255, 255,0.4)",
    marginRight: 300,
  },
  logoView: {
    width: 800,
    height: "100%",
    flexDirection: "column",
  },
  deviceMainView: {
    width: 1000,
    height: 1000,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255,0.7)",
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    alignItems: "center",
    fontWeight: "500",
    justifyContent: "center",
    marginLeft: 40,
  },
  zoomOnHover: {
    borderColor: "blue",
    borderWidth: 10,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryMobView: {
    width: 810,

    height: 500,

    // marginBottom: 10,

    // marginTop: 10,

    //alignItems: "center",

    display: "flex",

    flexDirection: "row",

    justifyContent: "space-evenly",

    backgroundColor: "white",
  },

  buttonMob: {
    //padding: 20,

    backgroundColor: "red",

    borderColor: "#639dda",
    borderWidth: 2,

    width: "auto",

    fontWeight: "700",

    height: 50,

    fontSize: 30,

    textAlign: "center",

    borderRadius: 30,
  },
  priceDesign: {
    marginTop: 50,

    fontWeight: "700",

    color: "black",

    fontSize: 30,
  },

  subView: {
    width: 400,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    margin: 15,
    justifyContent: "space-around",
  },
  imageStyle: {
    height: 500,

    width: 400,

    alignSelf: "flex-start",

    alignItems: "flex-start",

    //justifyContent: "center",
  },

  desText: {
    fontSize: 20,

    color: "black",

    fontWeight: "400",
  },

  exText: {
    fontSize: 15,

    color: "black",

    fontWeight: "400",
  },
});
