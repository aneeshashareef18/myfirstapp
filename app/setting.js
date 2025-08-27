import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // install: npm install react-native-vector-icons

// Example options
const settingsOptions = [
  { id: 1, icon: "person-outline", title: "Account" },
  { id: 2, icon: "lock-closed-outline", title: "Privacy" },
  { id: 3, icon: "notifications-outline", title: "Notifications" },
  { id: 4, icon: "log-out-outline", title: "Logout" },
];

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Settings</Text>

      {/* Settings List */}
      {settingsOptions.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.row}
          activeOpacity={0.6} // highlight effect on press
        >
          {/* Left Side: Icon + Text */}
          <View style={styles.rowLeft}>
            <Icon name={item.icon} size={22} color="#333" />
            <Text style={styles.rowText}>{item.title}</Text>
          </View>

          {/* Right Side: Arrow */}
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
