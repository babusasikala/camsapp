import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, Button, Pressable } from "react-native";
import { Image } from "expo-image";
import { Padding, FontFamily, Color, Border, FontSize } from "../styles/GlobalStyles2";
import { Padding1, Border1, FontSize1, FontFamily1 } from "../styles/GlobalStyles3";
import { LinearGradient } from "expo-linear-gradient";

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { OtpInput } from "react-native-otp-entry";
import axios from 'axios';
import CountDown from 'react-native-countdown-accurate';


const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const OTPVerification = ({navigation}) => {
  const [visible, setVisible] = React.useState(false)
  const [loadScreen, setLoadScreen] = React.useState(true)
  const [otpFilled, setOtpFilled] = React.useState(false)
  const [verifyCode, setVerifyCode] = React.useState("Hei")
  const [msgDisplay, setMsgDisplay] = React.useState("")
  const [maxSeconds, setMaxSeconds] = React.useState(60)
  const [otpLink, setOtpLink] = React.useState(false)

  useEffect(()=>{
    sendOTPNumber();
    setTimeout(()=>{
      setLoadScreen(false)
    }, 5000)
  },[])

  const sendOTPNumber = async() => {
    var data = {
      "phone_number": "+918248526343",
      "service_name": "My Service",
      "seconds": 900
    }

    axios.post("https://textflow.me/api/send-code", data,
    {
        headers: {
            "Authorization": "Bearer "+"1njySS23bnProQBl9WXP592QOgdvNmsrlpMzyInNdlMpMkuJZtBWGpUD3wD5wa48"
        }
    })
    .then(resp => {
      // setMsgDisplay(resp.data.message)
    })
    .catch(err => {
        // This is executed when response code is different than 200
        // Error data is stored in err.response.data
    });
  }

  const verifyOTPNumber = async() => {
    var data = {
      "phone_number": "+918248526343",
      "code": verifyCode
    }

    axios.post("https://textflow.me/api/verify-code", data,
    {
        headers: {
            "Authorization": "Bearer "+"1njySS23bnProQBl9WXP592QOgdvNmsrlpMzyInNdlMpMkuJZtBWGpUD3wD5wa48"
        }
    })
    .then(resp => {
      if(resp.data.status == 200){
        navigation.navigate('AccountDetails2')
      }else{
        setMsgDisplay(resp.data.message)
      }
    })
    .catch(err => {
        // This is executed when response code is different than 200
        // Error data is stored in err.response.data
    });
  }

  return (
    <>
      {loadScreen === true ? 
        <View style={styles1.otpVerification}>
          <View
            style={[
              styles1.linkAccountsWrapper,
              styles1.linkAccountsWrapperSpaceBlock,
            ]}
          >
            <Text style={styles1.linkAccounts}>Link accounts</Text>
          </View>
          <View style={styles1.otpVerificationInner}>
            <View style={styles1.rectangleParent}>
              <ShimmerPlaceholder
                shimmerStyle={[styles1.rectangle, styles1.rectangleLayout]}
                visible={visible}
                width={200}
              >
              <LinearGradient
                locations={[0, 0.5]}
                colors={["rgba(219, 219, 219, 0.05)", "#dbdbdb"]}
              />
              </ShimmerPlaceholder>

              <ShimmerPlaceholder
                shimmerStyle={[styles1.rectangle1, styles1.rectangleLayout]}
                visible={visible}
                width={300}
                paddingBottom={5}
              >
              <LinearGradient
                locations={[0, 0.5]}
                colors={["rgba(219, 219, 219, 0.05)", "#dbdbdb"]}
              />
              </ShimmerPlaceholder>
            </View>
          </View>
          <View style={[styles1.frameParent, styles1.frameFlexBox]}>
            <View style={styles1.rectangleGroup}>
              <ShimmerPlaceholder
                shimmerStyle={styles1.frameLayout}
                visible={visible}
                width={300}
                paddingBottom={5}
              >
                <LinearGradient
                  style={styles1.frameLayout}
                  locations={[0, 0.5]}
                  colors={["rgba(219, 219, 219, 0.05)", "#dbdbdb"]}
                />
              </ShimmerPlaceholder>
              
              <ShimmerPlaceholder
                shimmerStyle={styles1.frameLayout}
                visible={visible}
                width={300}
                paddingBottom={5}
              >
                <LinearGradient
                  style={styles1.frameLayout}
                  locations={[0, 0.5]}
                  colors={["rgba(219, 219, 219, 0.05)", "#dbdbdb"]}
                />
              </ShimmerPlaceholder>

              <ShimmerPlaceholder
                shimmerStyle={styles1.frameLayout}
                visible={visible}
                width={300}
                paddingBottom={5}
              >
                <LinearGradient
                  style={styles1.frameLayout}
                  locations={[0, 0.5]}
                  colors={["rgba(219, 219, 219, 0.05)", "#dbdbdb"]}
                />
              </ShimmerPlaceholder>

              <ShimmerPlaceholder
                shimmerStyle={styles1.frameLayout}
                visible={visible}
                width={300}
                paddingBottom={5}
              >
                <LinearGradient
                  style={styles1.frameLayout}
                  locations={[0, 0.5]}
                  colors={["rgba(219, 219, 219, 0.05)", "#dbdbdb"]}
                />
              </ShimmerPlaceholder>

              <ShimmerPlaceholder
                shimmerStyle={styles1.frameLayout}
                visible={visible}
                width={300}
                paddingBottom={5}
              >
                <LinearGradient
                  style={styles1.frameLayout}
                  locations={[0, 0.5]}
                  colors={["rgba(219, 219, 219, 0.05)", "#dbdbdb"]}
                />
              </ShimmerPlaceholder>

              <ShimmerPlaceholder
                shimmerStyle={styles1.frameLayout}
                visible={visible}
                width={300}
                paddingBottom={5}
              >
                <LinearGradient
                  style={styles1.frameLayout}
                  locations={[0, 0.5]}
                  colors={["rgba(219, 219, 219, 0.05)", "#dbdbdb"]}
                />
              </ShimmerPlaceholder>
            </View>

            <ShimmerPlaceholder
              shimmerStyle={[styles1.rectangle2, styles1.rectangleLayout]}
              visible={visible}
              width={200}
            >
              <LinearGradient
                locations={[0, 0.5]}
                colors={["rgba(219, 219, 219, 0.05)", "#dbdbdb"]}
              />
            </ShimmerPlaceholder>
          </View>
          <View
            
          >
            <ShimmerPlaceholder
              shimmerStyle={[styles1.frameLineargradient]}
              visible={visible}
              width={200}
            >
            <LinearGradient
              locations={[0, 0.5]}
              colors={["rgba(219, 219, 219, 0.05)", "#dbdbdb"]}
            />
            </ShimmerPlaceholder>
          </View>
        </View>
      :
        <View style={[styles.otpVerification, styles.keyIconLayout]}>
          <View
            style={[
              styles.linkAccountsWrapper,
              styles.linkAccountsWrapperSpaceBlock,
            ]}
          >
            <Text style={styles.linkAccounts}>Link accounts</Text>
          </View>
          <View style={styles.youWillReceiveA6DigitCodWrapper}>
            
          <Button title="Go To Home" onPress={() => navigation.navigate('Home')}></Button>
            
            <Text style={styles.youWillReceiveContainer}>
              <Text
                style={styles.youWillReceive}
              >{`You will receive a 6-digit code on your phone number `}</Text>
              <Text style={styles.text}>+91 8667800000</Text>
              <Text style={styles.youWillReceive}> from HDFC Bank</Text>
            </Text>
          </View>
        
          <View style={[styles.frameParent, styles.container]}>
            <View style={[styles.frameGroup]}>
              <OtpInput
                numberOfDigits={6}
                focusColor="green"
                focusStickBlinkingDuration={500}
                onTextChange={(text) => { 
                  setOtpFilled(false)
                  setVerifyCode("")
                }} //(text) => console.log(text)
                onFilled={(text) => {
                  setOtpFilled(true) 
                  setVerifyCode(text)
                }} //(text) => console.log(`OTP is ${text}`)
              />
            </View>
            <View style={{paddingTop:10, alignContent:"flex-start"}}><Text>{msgDisplay}</Text></View>
            {otpLink ? 
              <Text style={[styles.didntReceiveItContainer, styles.text1Layout]}>
                <Pressable style={[styles.confirmWrapper, styles.confirmWrapperActive]} onPress={sendOTPNumber}>
                  <Text style={[styles.confirm, styles.text1Typo]}>Send OTP</Text>
                </Pressable>
              </Text>
            :
              <Text style={[styles.didntReceiveItContainer, styles.text1Layout]}>
                <Text style={styles.youWillReceive}>
                  <Text style={styles.didntReceiveIt}>
                    Didn’t receive it? Resend in
                  </Text>
                  <Text style={styles.text7}>{` `}</Text>
                </Text>
                <CountDown
                  until={maxSeconds}
                  onFinish={() => setOtpLink(true)}
                  // onPress={() => setMaxSeconds(10)}
                  size={14}
                  timeToShow={['S']}
                  timeLabels={{m: null, s: null}}
                  digitStyle={{top:12}}
                />
              </Text>
            }
          </View>
          <View
            style={[
              styles.otpVerificationInner,
              styles.linkAccountsWrapperSpaceBlock,
            ]}
          >
            {otpFilled ? 
              <Pressable style={[styles.confirmWrapper, styles.confirmWrapperActive]} onPress={verifyOTPNumber}>
                <Text style={[styles.confirm, styles.text1Typo]}>Confirm</Text>
              </Pressable>
            :
              <View style={[styles.confirmWrapper, styles.confirmWrapperInactive]}>
                <Text style={[styles.confirm, styles.text1Typo]}>Confirm</Text>
              </View>
            }
          </View>
        </View>
      }
    </>
  );
};

const styles2 = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45
  },
 
  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },
 
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
 
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

const styles1 = StyleSheet.create({
  linkAccountsWrapperSpaceBlock: {
    paddingHorizontal: Padding1.p_base,
    width: 390,
  },
  rectangleLayout: {
    height: 14,
    borderRadius: Border1.br_xl,
    backgroundColor: "transparent",
  },
  frameFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  frameLayout: {
    height: 50,
    borderRadius: Border1.br_3xs,
    backgroundColor: "transparent",
    flex: 1,
    margin: 5,
  },
  linkAccounts: {
    fontSize: FontSize1.body20pMedium_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily1.body20pMedium,
    color: "#2b2b2b",
    textAlign: "left",
  },
  linkAccountsWrapper: {
    backgroundColor: "#f1f9fe",
    paddingVertical: Padding1.p_xl,
    flexDirection: "row",
    paddingHorizontal: Padding1.p_base,
    width: 390,
  },
  rectangle: {
    top: 0,
    backgroundColor: "transparent",
    width: 225,
    height: 14,
    borderRadius: Border1.br_xl,
    left: 0,
    position: "absolute",
  },
  rectangle1: {
    top: 20,
    backgroundColor: "transparent",
    height: 14,
    borderRadius: Border1.br_xl,
    left: 0,
    position: "absolute",
    width: 355,
  },
  rectangleParent: {
    height: 34,
    width: 355,
  },
  otpVerificationInner: {
    marginTop: 16,
    justifyContent: "center",
    width: 358,
  },
  frameItem: {
    marginLeft: 18,
  },
  rectangleGroup: {
    width: 358,
    flexDirection: "row",
  },
  rectangle2: {
    marginTop: 14,
    backgroundColor: "transparent",
    width: 225,
    height: 14,
    borderRadius: Border1.br_xl,
  },
  frameParent: {
    paddingHorizontal: Padding1.p_xl,
    paddingVertical: Padding1.p_base,
    marginTop: 16,
  },
  frameLineargradient: {
    borderRadius: 14,
    height: 52,
    backgroundColor: "transparent",
    width:350
  },
  otpVerificationChild: {
    paddingVertical: 0,
    marginTop: 16,
    paddingHorizontal: Padding1.p_base,
    width: 390,
    alignItems: "center",
  },
  otpVerification: {
    top: 65,
    borderTopLeftRadius: Border1.br_3xl,
    borderTopRightRadius: Border1.br_3xl,
    backgroundColor: "#fff",
    width: "100%",
    overflow: "hidden",
    paddingBottom: 34,
    alignItems: "center",
    flex: 1,
  },
});

const styles = StyleSheet.create({
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
  frameParent3FlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
frameParent3: {
    alignSelf: "stretch",
  },
swipeToSubmitParentLayout: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
swipeToSubmitParent: {
    backgroundColor: Color.primaryBluePrimary500,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
swipeToSubmit: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.neutralN100,
    zIndex: 0,
  },
hdfcBankTypo: {
    lineHeight: 16,
    fontSize: FontSize.body16pSemibold_size,
    textAlign: "left",
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
arrowIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
poweredByCamsContainer: {
    lineHeight: 17,
    fontFamily: FontFamily.gilroyMedium,
    marginTop: 8,
    fontSize: FontSize.body11pRegular_size,
    textAlign: "left",
  },
poweredBy: {
    color: "#47494c",
  },
cams: {
    color: "#0b4bac",
  },

  keyIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  linkAccountsWrapperSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  text1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.para20pSemiBold,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    height: 50,
    backgroundColor: Color.neutralsNeutrals50,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  text1Layout: {
    lineHeight: 16,
    fontSize: FontSize.body16pSemibold_size,
  },
  numerickeyboardBg: {
    backgroundColor: Color.colorLightgray,
    width: 390,
  },
  rowLayout: {
    height: 46,
    position: "absolute",
  },
  labelTypo: {
    width: 123,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.caption2Regular,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    top: "62.5%",
    height: "28.57%",
    left: 0,
    position: "absolute",
    textAlign: "center",
  },
  letterPosition: {
    height: 26,
    marginTop: -21,
    fontFamily: FontFamily.title2Regular,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    top: "50%",
    width: 123,
    color: Color.labelColorLightPrimary,
    left: 0,
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  keycontainerShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.basicWhite,
  },
  keyFlexBox: {
    marginLeft: 5,
    alignSelf: "stretch",
    flex: 1,
  },
  codePosition: {
    letterSpacing: 0,
    top: "50%",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.caption2Regular,
    left: "50%",
    position: "absolute",
    textAlign: "center",
  },
  dividerLayout: {
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 25,
    width: 1,
    backgroundColor: Color.defaultSystemGray02Light,
    borderRadius: Border.br_12xs,
    marginTop: -10,
    top: "50%",
    position: "absolute",
  },
  linkAccounts: {
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.body20pMedium,
    color: "#2b2b2b",
    textAlign: "left",
    fontSize: FontSize.para20pSemiBold_size,
  },
  linkAccountsWrapper: {
    backgroundColor: "#f1f9fe",
    paddingVertical: 20,
    flexDirection: "row",
  },
  youWillReceive: {
    fontFamily: FontFamily.interRegular,
  },
  text: {
    fontFamily: FontFamily.para20pSemiBold,
    fontWeight: "600",
  },
  youWillReceiveContainer: {
    lineHeight: 24,
    width: 344,
    color: Color.colorDarkslategray,
    fontSize: FontSize.body16pSemibold_size,
    textAlign: "left",
  },
  youWillReceiveA6DigitCodWrapper: {
    width: 358,
    marginTop: 16,
    justifyContent: "center",
  },
  text1: {
    color: Color.neutralsNeutrals50,
    display: "flex",
    lineHeight: 16,
    fontSize: FontSize.body16pSemibold_size,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    marginLeft: 18,
  },
  frameGroup: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  didntReceiveIt: {
    color: "#6a6a6a",
  },
  text7: {
    color: Color.colorDarkslategray,
  },
  didntReceiveItContainer: {
    marginTop: 0,
    textAlign: "left",
  },
  frameParent: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  confirm: {
    lineHeight: 30,
    color: Color.basicWhite,
    fontSize: FontSize.para20pSemiBold_size,
  },
  confirmWrapperActive:{backgroundColor: '#2196F3'},
  confirmWrapperInactive:{backgroundColor: Color.neutralsNeutrals100},
  confirmWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 11,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  otpVerificationInner: {
    paddingVertical: 0,
    marginTop: 16,
    alignItems: "center",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    opacity: 0,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    right: 0,
    bottom: 0,
    height: 34,
    left: 0,
    position: "absolute",
  },
  label: {
    display: "none",
  },
  letter: {
    display: "flex",
  },
  key: {
    alignSelf: "stretch",
    flex: 1,
  },
  row: {
    top: 52,
    left: 6,
    right: 6,
    height: 46,
    flexDirection: "row",
  },
  row1: {
    top: 105,
    left: 6,
    right: 6,
    height: 46,
    flexDirection: "row",
  },
  row2: {
    top: 158,
    left: 6,
    right: 6,
    height: 46,
    flexDirection: "row",
  },
  keycontainer9: {
    display: "none",
  },
  letter9: {
    display: "none",
  },
  letter10: {
    marginTop: -15,
    fontFamily: FontFamily.title2Regular,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0,
    top: "50%",
    width: 123,
    color: Color.labelColorLightPrimary,
    left: 0,
    position: "absolute",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  keyIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  row3: {
    top: 211,
    left: 6,
    right: 6,
    height: 46,
    flexDirection: "row",
  },
  code: {
    marginTop: -4,
    marginLeft: -32,
    fontSize: FontSize.bodyRegular_size,
    lineHeight: 22,
  },
  fromMessages: {
    marginTop: -18,
    marginLeft: -41,
    fontSize: FontSize.caption2Regular_size,
    lineHeight: 13,
  },
  divider: {
    left: 31,
  },
  divider1: {
    right: 29,
  },
  keyboardSuggestion: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorLightgray,
    width: 390,
    overflow: "hidden",
  },
  numerickeyboard: {
    height: 336,
    marginTop: 16,
  },
  otpVerification: {
    top: 65,
    borderTopLeftRadius: Border.br_3xl,
    borderTopRightRadius: Border.br_3xl,
    height: 672,
    paddingBottom: 34,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.basicWhite,
    width: "100%",
  },
});

export default OTPVerification;
