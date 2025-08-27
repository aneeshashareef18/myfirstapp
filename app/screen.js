import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.header}>
        {/* Profile Image */}
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Dummy Image
          style={styles.profileImage}
        />

        {/* Name + Tagline */}
        <View style={styles.nameContainer}>
          <Text style={styles.name}>aneesha</Text>
          <Text style={styles.tagline}>Mobile Developer</Text>
        </View>

        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* User Info Card */}
      <View style={styles.card}>
        <Text style={styles.info}>📧 Email: aneesha@example.com</Text>
        <Text style={styles.info}>📱 Phone: 03256465878</Text>
        <Text style={styles.info}>🏠 Address: layyah chowk azam</Text>
      </View>
    </View>
  );
}

// 👇 Students ko styles ko modify karna hai
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2", // Screen background
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // ✅ Circle banane ke liye
  },
  nameContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 14,
    color: "gray",
  },
  editButton: {
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 6,
  },
  editText: {
    color: "white",
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    elevation: 4, // ✅ Android shadow
    shadowColor: "#000", // ✅ iOS shadow
  },
  info: {
    fontSize: 14,
    marginVertical: 4,
  },
});

