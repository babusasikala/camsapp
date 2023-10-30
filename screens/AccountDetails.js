import React, {useEffect, useState} from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../styles/GlobalStyles1";

const AccountDetails = ({navigation}) => {
  useEffect(()=>{

  })

  const linkAccountFun = () =>{
    navigation.navigate('OTPVerification')
  }

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
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/right-side.png")}
        />
      </View> */}
      {/* <View style={[styles.arrowBackParent, styles.arrowBackParentPosition]}>
        <Image
          style={[styles.arrowBackIcon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
        <Image
          style={styles.image9Icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
        <Image
          style={[styles.arrowBackIcon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
      </View> */}
      
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.weFoundYour, styles.hdfcBankTypo]}>
            We found your accounts
          </Text>
          <Text style={[styles.selectAndConfirm, styles.found2AccountClr]}>
            Select and confirm the accounts you want to connect!
          </Text>
        </View>
        <View style={styles.frameWrapper}>
          <View style={[styles.frameGroup, styles.frameGroupShadowBox]}>
            <View style={styles.frameContainer}>
              <View style={styles.rectangleParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-720.png")}
                />
                <View style={styles.hdfcBankParent}>
                  <Text style={[styles.hdfcBank, styles.hdfcBankLayout]}>
                    HDFC Bank
                  </Text>
                  <Text
                    style={[styles.found2Account, styles.found2AccountTypo]}
                  >
                    Found 2 account to link
                  </Text>
                </View>
              </View>
              <Pressable style={styles.linkWrapper} onPress={linkAccountFun}>
                <Text style={[styles.link, styles.linkClr]}>Link</Text>
              </Pressable>
            </View>
            <View style={styles.frameItem} />
            <View style={styles.frameView}>
              <View style={styles.rectangleParent}>
                <Text style={styles.textTypo}>Savings</Text>
                <Image
                  style={styles.frameInner}
                  contentFit="cover"
                  source={require("../assets/ellipse-2.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>2791</Text>
              </View>
              <Image
                style={styles.checkboxIcon}
                contentFit="cover"
                source={require("../assets/checkbox1.png")}
              />
            </View>
            <View style={styles.frameItem} />
            <View style={styles.frameView}>
              <View style={styles.rectangleParent}>
                <Text style={styles.textTypo}>Current</Text>
                <Image
                  style={styles.frameInner}
                  contentFit="cover"
                  source={require("../assets/ellipse-2.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>3715</Text>
              </View>
              <Image
                style={styles.checkboxIcon}
                contentFit="cover"
                source={require("../assets/checkbox1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.consentSubmission, styles.frameParent2FlexBox]}>
        <View style={[styles.frameParent2, styles.frameParent2FlexBox]}>
          <View
            style={[
              styles.swipeToSubmitParent,
              styles.swipeToSubmitParentLayout,
            ]}
          >
            <Text style={[styles.swipeToSubmit, styles.linkClr]}>
              Swipe to Submit
            </Text>
            <View
              style={[
                styles.arrowForwardWrapper,
                styles.swipeToSubmitParentLayout,
              ]}
            >
              <Image
                style={styles.arrowIconLayout}
                contentFit="cover"
                source={require("../assets/arrow-forward.png")}
              />
            </View>
          </View>
          <Text
            style={[styles.poweredByCamsContainer, styles.found2AccountTypo]}
          >
            <Text style={styles.poweredBy}>{`Powered by `}</Text>
            <Text style={styles.cams}>CAMS</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  arrowBackParentPosition: {
    left: 0,
    paddingHorizontal: Padding.p_base,
    width: 390,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  hdfcBankTypo: {
    textAlign: "left",
    fontFamily: FontFamily.body13pSemibold,
    fontWeight: "600",
  },
  found2AccountClr: {
    color: Color.neutralsNeutrals400,
    fontFamily: FontFamily.body11pRegular,
  },
  frameGroupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    backgroundColor: Color.neutralN100,
  },
  hdfcBankLayout: {
    lineHeight: 16,
    fontSize: FontSize.body16pSemibold_size,
  },
  found2AccountTypo: {
    fontSize: FontSize.body11pRegular_size,
    textAlign: "left",
  },
  linkClr: {
    color: Color.neutralN100,
    textAlign: "left",
  },
  textTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.body11pRegular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  frameParent2FlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  swipeToSubmitParentLayout: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  notchIcon: {
    marginLeft: -78,
    width: 156,
    height: 33,
    top: 0,
  },
  time: {
    top: 1,
    fontSize: FontSize.bodyBold_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.bodyBold,
    textAlign: "center",
    height: 20,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
    left: 0,
    width: 54,
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
  },
  statusbar: {
    right: 0,
    height: 47,
    width: 390,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.neutralN100,
  },
  arrowBackIcon: {
    opacity: 0,
  },
  image9Icon: {
    width: 116,
    height: 35,
  },
  arrowBackParent: {
    top: 47,
    borderColor: "#f5f5f5",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    paddingVertical: 13,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    backgroundColor: Color.neutralN100,
  },
  weFoundYour: {
    fontSize: FontSize.headingSubHead122pSemiBold_size,
    lineHeight: 22,
    color: Color.neutralsNeutrals900,
    height: 28,
    width: 358,
  },
  selectAndConfirm: {
    lineHeight: 24,
    marginTop: 6,
    fontSize: FontSize.body16pSemibold_size,
    fontFamily: FontFamily.body11pRegular,
    width: 358,
    textAlign: "left",
  },
  frameChild: {
    borderRadius: 10,
    width: 42,
    height: 42,
  },
  hdfcBank: {
    color: "#2b2b2b",
    textAlign: "left",
    fontFamily: FontFamily.body13pSemibold,
    fontWeight: "600",
  },
  found2Account: {
    lineHeight: 11,
    marginTop: 4,
    color: Color.neutralsNeutrals400,
    fontFamily: FontFamily.body11pRegular,
  },
  hdfcBankParent: {
    marginLeft: 8,
    justifyContent: "center",
  },
  rectangleParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  link: {
    fontSize: FontSize.body13pSemibold_size,
    lineHeight: 13,
    fontFamily: FontFamily.body13pSemibold,
    color: Color.neutralN100,
    fontWeight: "600",
  },
  linkWrapper: {
    borderRadius: 15,
    backgroundColor: Color.primaryBluePrimary500,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    marginLeft: 8,
    flexDirection: "row",
  },
  frameContainer: {
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  frameItem: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 1,
    alignSelf: "stretch",
  },
  frameInner: {
    width: 6,
    height: 6,
    marginLeft: 8,
  },
  text: {
    marginLeft: 8,
  },
  checkboxIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    overflow: "hidden",
  },
  frameView: {
    paddingVertical: Padding.p_sm,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    borderRadius: 12,
    shadowColor: "rgba(10, 14, 17, 0.03)",
    shadowRadius: 17,
    elevation: 17,
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    justifyContent: "center",
    width: 358,
    borderStyle: "solid",
  },
  frameWrapper: {
    marginTop: 24,
  },
  frameParent: {
    top: 132,
    left: 0,
    position: "absolute",
  },
  swipeToSubmit: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    zIndex: 0,
    lineHeight: 16,
    fontSize: FontSize.body16pSemibold_size,
  },
  arrowForwardWrapper: {
    top: 6,
    left: 6,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 2,
    elevation: 2,
    padding: Padding.p_5xs,
    zIndex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    backgroundColor: Color.neutralN100,
    position: "absolute",
  },
  swipeToSubmitParent: {
    backgroundColor: Color.neutralsNeutrals100,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  poweredBy: {
    color: "#47494c",
  },
  cams: {
    color: "#0b4bac",
  },
  poweredByCamsContainer: {
    lineHeight: 17,
    fontFamily: FontFamily.gilroyMedium,
    marginTop: 8,
  },
  frameParent2: {
    alignSelf: "stretch",
  },
  consentSubmission: {
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 10,
    elevation: 10,
    paddingTop: Padding.p_base,
    paddingBottom: 34,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    backgroundColor: Color.neutralN100,
    paddingHorizontal: Padding.p_base,
    left: 0,
    width: 390,
    position: "absolute",
  },
  statusbarParent: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralN100,
  },
});

export default AccountDetails;
