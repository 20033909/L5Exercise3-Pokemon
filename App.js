import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity } from 'react-native';
import { dataSource } from './components/datasource'; // Import dataSource from dataSource.js
import styles from './components/styles';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {

    // Render each Pokémon item
    const renderItem = ({ item }) => (
        <View style={styles.pokemon}>
            {/* Render Pokémon name */}
            <Text style={styles.pokemonName}>{item.key}</Text>
            {/* Render the Pokémon image */}
            <Image source={{ uri: item.link }} style={styles.pokemonImage} />
        </View>
    );

    // Render the section header with a conditional background color
    const renderSectionHeader = ({ section: { title } }) => {
        let headerStyle = styles.sectionHeader; // Default section header style

        // Set background color based on the title of the section
        if (title === 'Fire Type') {
            headerStyle = { ...headerStyle, ...styles.fireTypeHeader };
        } else if (title === 'Lightning Type') {
            headerStyle = { ...headerStyle, ...styles.lightningTypeHeader };
        }

        return (
            <View style={headerStyle}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            {/* Add Pokemon Button */}
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <View style={styles.buttonContent}>
                    <Icon name="catching-pokemon" style={styles.iconSizeColor} />
                    <Text style={styles.buttonText}>ADD POKEMON</Text>
                    <Icon name="catching-pokemon" style={styles.iconSizeColor} />
                </View>
            </TouchableOpacity>

            {/* SectionList to display Pokémon data by type */}
            <SectionList
                sections={dataSource}  // Use dataSource here
                keyExtractor={(item, index) => item.key + index}  // Unique key for each item
                renderItem={renderItem}  // Render each item using renderItem function
                renderSectionHeader={renderSectionHeader}  // Custom header with conditional background color
                contentContainerStyle={styles.scrollContainer}
            />
        </View>
    );
}