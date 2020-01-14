import React from "react";
import {Text, TouchableOpacity} from "react-native";
import TabBarIcon from './TabBarIcon'
import { withNavigation, DrawerActions } from 'react-navigation';


function MoreComponent(props) {
  return (
      <TouchableOpacity style={{width:80,height:80,justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.dispatch(DrawerActions.openDrawer())}>
        <TabBarIcon
        type='SimpleLineIcons' 
        size={24} 
        focused={props.focused} 
        style={{ marginBottom: -3 }} 
        name={"options"}/>
    </TouchableOpacity>
  );
}
export default withNavigation(MoreComponent)
