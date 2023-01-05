import { StyleSheet } from "react-360";

const cartButtonStyles = {
  padding: 20,
  borderColor: "#639dda",
  borderWidth: 2,
  width: "auto",
  fontWeight: "700",
  height: 50,
  fontSize: 30,
  textAlign: "center",
  borderRadius: 30,
};

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
    width: "auto",
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
    alignContent: "center",
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
    justifyContent: "center",
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

  categoryImageView: {
    width: 500,

    height: 400,
  },

  buyBtn: {
    padding: 20,

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

  buttonMob: {
    ...cartButtonStyles,
    backgroundColor: "brown",
  },

  buttonMobDisabled: {
    ...cartButtonStyles,
    backgroundColor: "grey",
  },

  priceDesign: {
    marginTop: 50,

    fontWeight: "700",

    color: "black",

    fontSize: 30,
  },

  imgbackground: {
    backgroundColor: "red",
  },

  subView: {
    width: 400,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    margin: 10,
    justifyContent: "space-around",
  },
  imageStyle: {
    height: 500,

    width: 400,

    alignSelf: "flex-start",

    alignItems: "flex-start",

    //justifyContent: "center",
  },
  goToCartLink: {
    color: "blue",
    textDecorationLine: "underline",
    textDecorationColor: "blue",
    fontWeight: "bold",
    marginLeft: 15,
    margin: 5,
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
  thankText: {
    width: "auto",
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    justifyContent: "center",
  },
  buyView: {
    width: "auto",
    height: 50,
  },

  buy_cart_btn_view: {
    display: "flex",
    flexDirection: "row",
  },

  imageContainer: {
    flex: 1,
    height: 100,
    borderWidth: 2,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    alignItems: "center",
  },
  checkoutView: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    margin: 10,
  },
  checkoutItems: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },
  checkoutItemImage: {
    width: 100,
    height: 100,
  },
  checkoutItemText: {
    color: "black",
    margin: 5,
  },
  checkoutItemPrice: {
    color: "red",
    margin: 5,
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  checkoutCart: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginRight: 10,
    marginTop: 10,
  },
  cartBuyBtn: {
    backgroundColor: "red",
    borderColor: "#639dda",
    borderWidth: 2,
    width: "auto",
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    borderRadius: 30,
  },
  cartBackBtn: {
    backgroundColor: "blue",
    borderColor: "#639dda",
    borderWidth: 2,
    width: "auto",
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    borderRadius: 30,
    margin: 5,
  },
});
