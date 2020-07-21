import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions
} from 'react-native'

// IMPORTS...
import FocusButton from '../components/FocusButton'

const { width } = Dimensions.get('window')

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={{ color: '#fff', fontSize: 40, lineHeight: 60.5 }}>Welcome, J!</Text>
                    <Text style={{ color: '#fff', fontSize: width / 25, }}>How do plan to use Entice? !</Text>
                </View>
                <View style={styles.authBtn}>
                    <FocusButton text="To connect" nav={() => navigation.navigate('UserName')} />
                    <FocusButton text="To earn" nav={() => navigation.navigate('UserName')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome

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
    },
})
