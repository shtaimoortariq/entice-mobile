import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'

const { width, height } = Dimensions.get('window')

const initailState = {
    userName: '',
    isFocused: false
}

const UserNameScreen = ({ navigation }) => {
    const [state, setState] = React.useState(initailState)

    const onHandleInput = (name, text) => {
        setState({
            ...state,
            [name]: text
        })
    }

    const handleFocus = () => {
        setState({
            ...state,
            isFocused: !state.isFocused
        })
    }

    const handleFocusOut = () => {
        setState({
            ...state,
            isFocused: false
        })
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={state.isFocused ? handleFocusOut : null} accessible={false} >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.heading}>
                        <Text style={{ color: '#fff', fontSize: 40, lineHeight: 60.5 }}>User Name</Text>
                        <Text style={{ color: '#fff', fontSize: width / 25, }}>You personal link resive entice</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={{ borderBottomColor: state.isFocused ? '#7780f4' : '#ffff', ...styles.input }}
                            onChangeText={(text) => onHandleInput('userName', text)}
                            value={state.userName}
                            onFocus={handleFocus}
                        />
                    </View>
                </View>
                <View style={{ backgroundColor: '#000000', height: height / 5, alignItems: 'center' }}>
                    <TouchableOpacity style={{ borderColor: '#ffff', borderWidth: 1, width: width / 3 }} onPress={() => navigation.navigate('Influence')}>
                        <Text style={{ color: '#ffff', ...styles.btnText }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default UserNameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000',
        paddingHorizontal: width / 7
    },
    heading: {
        justifyContent: 'flex-end',
    },
    inputBox: {
        marginTop: 30
    },
    input: {
        height: 40,
        borderWidth: 1,
        color: "#ffff"
    },
    btnText: {
        textAlign: 'center',
        paddingVertical: Platform.OS === 'ios' ? 11 : 11,
        fontSize: width / 24,
        fontWeight: '600'
    }
})
