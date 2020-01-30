import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import TabBarIcon from "./TabBarIcon";
import { withNavigation, DrawerActions } from "react-navigation";

function MoreComponent(props) {
  return (
    <View
      style={{
        padding: 22,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TouchableOpacity
        style={{
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
      >
        <TabBarIcon
          type="SimpleLineIcons"
          size={25}
          focused={props.focused}
          style={{ marginBottom: -3, padding: 4 }}
          name={"options"}
        />
        <Text
          style={{ color: props.focused ? "black" : "white", fontSize: 10 }}
        >
          Mais
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default withNavigation(MoreComponent);
