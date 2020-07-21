import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    TouchableOpacity
} from 'react-native'

// IMPORTS...
import FocusButton from '../components/FocusButton'

const { width, height } = Dimensions.get('window')

const EngagementScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={{ color: '#fff', fontSize: 40, lineHeight: 60.5 }}>Engagement</Text>
                    <Text style={{ color: '#fff', fontSize: width / 25, }}>Pick the action you like to paid for?</Text>
                </View>
                <View style={styles.authBtn}>
                    <FocusButton text="Contrtion mayor" />
                    <FocusButton text="Networking" ml={15} />
                    <FocusButton text="Connected" mt={15} />
                    <FocusButton text="Exactive" mt={15} ml={15} />
                    <FocusButton text="Product Prodoad" mt={15} />
                    <FocusButton text="Q&A Session" mt={15} ml={15} />
                    <FocusButton text="Thout Leader" mt={15} />
                    <FocusButton text="Provide advice" mt={15} ml={15} />
                </View>

            </View>
            <View style={{ backgroundColor: '#000000', height: height / 5, alignItems: 'center' }}>
                <TouchableOpacity style={{ borderColor: '#ffff', borderWidth: 1, width: width / 3 }} onPress={() => navigation.navigate('SetYourPrice')}>
                    <Text style={{ color: '#ffff', ...styles.btnText }}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EngagementScreen

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
    },
    authBtn: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '88%',
        marginTop: 30
    },
})
