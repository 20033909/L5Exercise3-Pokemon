// components/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {
        flexDirection: 'row',  // Arrange the content horizontally (row)
        justifyContent: 'space-between', // Distribute space between the icons and text
        alignItems: 'center', // Vertically center the items
        width: '90%', // Make the container take up full width
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        flex: 1, // Allow the text to take up the remaining space
    },
    iconSizeColor: {
        fontSize: 24, // Icon size
        color: 'white', // Icon color (white in this case)
    },
    sectionHeader: {
        padding: 10,
        borderWidth: 1, // Set border width (thickness of the border)
        borderColor: '#000', // Set the border color to black
    },
    sectionHeaderText: {
        fontSize: 18,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#fff', // White text for contrast

    },
    pokemon: {
        flexDirection: 'row',  // Horizontal layout
        justifyContent: 'flex-end',  // Align to the right
        padding: 10,
        backgroundColor: '#f0d1c8',
        alignItems: 'center',  // Vertically center the content
        width: '100%',  // Take up full width of the container
        borderWidth: 1, // Set border width (thickness of the border)
        borderColor: '#000', // Set the border color to black

    },
    pokemonName: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        textAlign: "center"
    },
    pokemonImage: {
        width: 200, // Set the width of the image
        height: 280, // Set the height of the image
        borderRadius: 5, // Optionally add rounded corners
    },
    scrollContainer: {
        padding: 10,
    },
    fireTypeHeader: {
        backgroundColor: 'red',  // Red background for Fire Type
    },
    lightningTypeHeader: {
        backgroundColor: '#FDDA0D'  // Yellow background for Lightning Type
    },
});

export default styles;