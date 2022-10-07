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
  heading: {
    fontSize: 40,
    color: "red",
    fontWeight: "300",
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
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255,0.4)",
  },
  categoryList: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryItem: {
    width: "auto",
    height: "auto",
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 92, 230,0.5)",
    borderRadius: 100,
  },
  bannerView: {
    width: 700,
    height: "100%",
    flexDirection: 'column',
    
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
    flexDirection: 'column',
    
  },
});
