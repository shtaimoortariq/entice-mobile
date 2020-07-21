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
    TouchableOpacity,
    ScrollView
} from 'react-native'

// IMPORTS...
import FocusButton from '../components/FocusButton'

const { width, height } = Dimensions.get('window')

const initailState = {
    directMessage: '',
    videoMessage: '',
    onlineMessage: '',
    isFocused: false
}

const SetYourPriceScreen = ({ navigation }) => {
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
            isFocused: true
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
                        <Text style={{ color: '#fff', fontSize: 40, lineHeight: 60.5 }}>Set your price</Text>
                        <Text style={{ color: '#fff', fontSize: width / 25, }}>How much should it coast to enagage with you professionaly</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <FocusButton text="Direct message" w='47%' minW='47%' />
                        <TextInput
                            style={{ borderBottomColor: state.isFocused ? '#7780f4' : '#ffff', ...styles.input }}
                            onChangeText={(text) => onHandleInput('directMessage', text)}
                            value={state.direcMessage}
                            onFocus={handleFocus}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <FocusButton text="Video message" w='47%' minW='47%' />
                        <TextInput
                            style={{ borderBottomColor: state.isFocused ? '#7780f4' : '#ffff', ...styles.input }}
                            onChangeText={(text) => onHandleInput('videoMessage', text)}
                            value={state.videoMessage}
                            onFocus={handleFocus}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <FocusButton text="Online message" w='47%' minW='47%' />
                        <TextInput
                            style={{ borderBottomColor: state.isFocused ? '#7780f4' : '#ffff', ...styles.input }}
                            onChangeText={(text) => onHandleInput('onlineMessage', text)}
                            value={state.onlineMessage}
                            onFocus={handleFocus}
                        />
                    </View>
                    <View style={{ backgroundColor: '#000000', height: height / 5, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ borderColor: '#ffff', borderWidth: 1, width: width / 3 }} onPress={() => navigation.navigate('YourAllSet')}>
                            <Text style={{ color: '#ffff', ...styles.btnText }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SetYourPriceScreen

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
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        color: "#ffff",
        width: '47%',
    },
    btnText: {
        textAlign: 'center',
        paddingVertical: Platform.OS === 'ios' ? 11 : 11,
        fontSize: width / 24,
        fontWeight: '600'
    }
})
