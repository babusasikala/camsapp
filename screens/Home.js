import React, {useEffect, useState} from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../styles/GlobalStyles";

const Home = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('AccountDetails')
    }, 5000)
  })

  return (
    <View style={styles.statusbarParent}>
      {/* <View style={styles.statusbar}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/right-side.png")}
        />
      </View> */}
      <View style={[styles.arrowBackParent, styles.parentFlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
        <Image
          style={styles.image9Icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
        <Image
          style={[styles.closeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.parentFlexBox]}>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <Text style={[styles.discoveringBankDetails, styles.timeTypo]}>
          Discovering bank details...
        </Text>
      </View>
      <Text style={[styles.poweredByCamsContainer, styles.iconPosition]}>
        <Text style={styles.poweredBy}>{`Powered by `}</Text>
        <Text style={styles.cams}>CAMS</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    position: "absolute",
    left: "50%",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontWeight: "600",
  },
  parentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  notchIcon: {
    marginLeft: -78,
    width: 156,
    height: 33,
    left: "50%",
    top: 0,
  },
  time: {
    top: 1,
    fontSize: FontSize.bodyBold_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.bodyBold,
    color: Color.labelColorLightPrimary,
    height: 20,
    left: 0,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  rightSideIcon: {
    marginLeft: 91,
    top: 19,
    width: 77,
    height: 13,
    left: "50%",
  },
  statusbar: {
    right: 0,
    height: 47,
    overflow: "hidden",
    width: 390,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  image9Icon: {
    width: 116,
    height: 35,
  },
  closeIcon: {
    opacity: 0,
  },
  arrowBackParent: {
    top: 47,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 13,
    left: 0,
    width: 390,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  rectangleIcon: {
    width: 299,
    height: 40,
  },
  discoveringBankDetails: {
    fontSize: FontSize.para18pSemiBold_size,
    lineHeight: 27,
    fontFamily: FontFamily.para18pSemiBold,
    color: "#121212",
    width: 358,
    marginTop: 16,
  },
  rectangleParent: {
    marginTop: -41.5,
    marginLeft: -179,
    top: "50%",
    left: "50%",
  },
  poweredBy: {
    color: "#47494c",
  },
  cams: {
    color: "#0b4bac",
  },
  poweredByCamsContainer: {
    marginLeft: -46,
    top: 793,
    fontSize: 11,
    lineHeight: 17,
    fontFamily: FontFamily.gilroyMedium,
    textAlign: "left",
    left: "50%",
  },
  statusbarParent: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
});

export default Home;
