import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';
import { Colors } from '../../utils/constants';
import { h, w } from '../../config';

const Loader = ({ isLoading, onRequestClose }) => {
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={isLoading ? isLoading : false}
            style={{ zIndex: 1100 }}
            onRequestClose={onRequestClose}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <UIActivityIndicator size={30} color={Colors.violetBlue} count={15} />
                </View>
            </View>
        </Modal>
    );
};

export default Loader;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#rgba(0, 0, 0, 0.05)',
        zIndex: 1000,
    },
    activityIndicatorWrapper: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: h(7),
        width: w(13),
    },
});
