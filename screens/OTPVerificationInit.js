import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Padding1, Border1, FontSize1, FontFamily1 } from "../styles/GlobalStyles3";

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const OTPVerificationInit = () => {
  const [visible, setVisible] = React.useState(false)
  // const [avatarVisible, setAvatarVisible] = React.useState(false)

  return (
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
  );
};

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

export default OTPVerificationInit;
