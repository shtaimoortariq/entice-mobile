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
import Logo from '../components/Logo'

const { width } = Dimensions.get('window')

const JoinScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.logoBox}>
                    <Logo width={'80%'} height={'15%'} />
                </View>
                <View style={styles.authBtn}>
                    <TouchableOpacity style={styles.joinBtn} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: '#000000', ...styles.btnText }}>Join now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signBtn}>
                        <Text style={{ color: '#ffff', ...styles.btnText }}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default JoinScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000',
        paddingHorizontal: width / 7
    },
    logoBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2.5,
    },
    authBtn: {
        flex: 2
    },
    joinBtn: {
        backgroundColor: '#ffff',
        width: '100%',
    },
    signBtn: {
        borderColor: '#ffff',
        width: '100%',
        borderWidth: 1,
        marginTop: 30
    },
    btnText: {
        textAlign: 'center',
        paddingVertical: Platform.OS === 'ios' ? 13 : 13,
        fontSize: width / 22,
        fontWeight: '700'
    }
})
