import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ContactMenu from "../components/ContactMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
      <View style={styleshett.container}>
    <SafeAreaView style={{height:"100%"}}>
      <Header />
      <SearchBar />
      <MenuButtons />
      <ContactMenu/>
    </SafeAreaView>
    </View>
  );
}

const styleshett = StyleSheet.create({
    container: {
        backgroundColor:"#1c1c1c",
        padding: 15
    
    }
})
