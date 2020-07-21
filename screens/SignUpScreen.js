import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Platform
} from 'react-native'

// IMPORTS...
import FocusButton from '../components/FocusButton'

const { width } = Dimensions.get('window')

const SignUpScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={{ color: '#fff', fontSize: 40, lineHeight: 60.5 }}>Sign up</Text>
                    <Text style={{ color: '#fff', fontSize: width / 25, }}>Sign up using your favorite provider</Text>
                </View>
                <View style={styles.authBtn}>
                    <FocusButton text="Linkedin" nav={() => navigation.navigate('Welcome')} />
                    <FocusButton text="Gmail" nav={() => navigation.navigate('Welcome')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

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
    authBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '88%',
        marginTop: 30
    }
})
