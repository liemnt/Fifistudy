import { StackNavigator } from 'react-navigation';
import Res from '../Resources/index.js';
// import {
//     ScreenRegister_Step1,
//     ScreenRegister_Step2,
//     ScreenRegister_Step3,
//     ScreenRegister_Step4,
// } from '../Screens/index.js';

import ScreenRegister_Step1 from '../Screens/ScreenRegister_Step1';
import ScreenRegister_Step2 from '../Screens/ScreenRegister_Step2';

const TabRegister = StackNavigator({
    Step1: { screen: ScreenRegister_Step1 },
    Step2: { screen: ScreenRegister_Step2 }
},{
    navigationOptions: { header: null }
});
export default TabRegister;