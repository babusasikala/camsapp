import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import AccountDetails from "../screens/AccountDetails";
import OTPVerification from "../screens/OTPVerification";

const screens = {
    Home:{
        screen: Home
    },
    AccountDetails:{
        screen: AccountDetails
    },
    OTPVerification:{
        screen: OTPVerification
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)