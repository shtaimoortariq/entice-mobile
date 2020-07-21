import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Platform, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const FocusButton = ({ text, nav, m, mr, ml, mt, mb, w, minW }) => {
    const [focus, setFocus] = React.useState(false);

    const handleFocus = () => {
        setFocus(!focus)
        if (nav) nav();
    }

    return (
        <TouchableOpacity
            style={{
                borderColor: focus ? '#7780f4' : '#bababa',
                margin: m ? m : null,
                marginLeft: ml ? ml : null,
                marginTop: mt ? mt : null,
                marginBottom: mb ? mb : null,
                width: w ? w : 120,
                minWidth: minW ? minW : 120,
                ...styles.btn
            }}
            onPress={() => handleFocus()}>
            <Text style={{ color: '#bababa', ...styles.btnText }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default FocusButton

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        borderRadius: 25,
    },
    btnText: {
        textAlign: 'center',
        paddingVertical: Platform.OS === 'ios' ? 15 : 15,
        fontSize: width / 30,
        fontWeight: '700'
    }
})
