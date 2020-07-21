import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const CustomInput = () => {
    return (
        <View style={styles.inputBox}>
            <TextInput
                style={{ borderBottomColor: state.isFocused ? '#7780f4' : '#ffff', ...styles.input }}
                onChangeText={(text) => onHandleInput('userName', text)}
                value={state.userName}
                onFocus={handleFocus}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputBox: {
        marginTop: 30
    },
    input: {
        height: 40,
        borderWidth: 1,
        color: "#ffff"
    },
})
