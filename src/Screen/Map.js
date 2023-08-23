import { PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';
import { useEffect } from 'react';
import { useState } from 'react';
const Map = () => {
    const [latLoc, setLatLoc] = useState(0)
    const [longLoc, setLongLoc] = useState(0)
    useEffect(() => {
        requestLocationPermission()

    }, [])


    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Permission',
                        message: 'This app needs access to your location for some features.',
                        buttonPositive: 'OK',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // getMyCurrentLocations()
                    // You have the location permission
                } else {
                    // Location permission denied
                }
            } catch (error) {
                console.warn('Error while requesting location permission:', error);
            }
        }
    };

    const getMyCurrentLocations = () => {

        Geolocation.getCurrentPosition(position => {
            console.log('YYY', position);
            setLatLoc(position.coords.latitude)
            setLongLoc(position.coords.longitude)
        },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    return (

        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{

                        latitude: 23.18719196475762,
                        longitude: 75.76628663602615,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    // onPress={(e) => {
                    //     //console.log('LATTTT', e.nativeEvent.coordinate)
                    //     setLatLoc(e.nativeEvent.coordinate.latitude)
                    //     setLongLoc(e.nativeEvent.coordinate.longitude)
                    // }}

                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    followsUserLocation={true}
                    showsCompass={true}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    pitchEnabled={true}
                    rotateEnabled={true}

                >
                    <Marker
                        //draggable
                        coordinate={{
                            latitude: latLoc,
                            longitude: longLoc,
                        }}
                        // onDragEnd={
                        //     (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                        // }

                        title={'Test Marker'}
                        description={'This is a description of the marker'}
                    />
                </MapView>
                <TouchableOpacity style={{
                    width: '90%', borderRadius: 20,
                    height: 50, alignSelf: 'center', position: 'absolute', justifyContent: 'center', alignItems: 'center', bottom: 20, backgroundColor: 'orange'
                }} onPress={() => getMyCurrentLocations()}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Get Current location</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Map

// const mapStyle = [
//     { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
//     { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
//     { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
//     {
//         featureType: 'administrative.locality',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#d59563' }],
//     },
//     {
//         featureType: 'poi',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#d59563' }],
//     },
//     {
//         featureType: 'poi.park',
//         elementType: 'geometry',
//         stylers: [{ color: '#263c3f' }],
//     },
//     {
//         featureType: 'poi.park',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#6b9a76' }],
//     },
//     {
//         featureType: 'road',
//         elementType: 'geometry',
//         stylers: [{ color: '#38414e' }],
//     },
//     {
//         featureType: 'road',
//         elementType: 'geometry.stroke',
//         stylers: [{ color: '#212a37' }],
//     },
//     {
//         featureType: 'road',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#9ca5b3' }],
//     },
//     {
//         featureType: 'road.highway',
//         elementType: 'geometry',
//         stylers: [{ color: '#746855' }],
//     },
//     {
//         featureType: 'road.highway',
//         elementType: 'geometry.stroke',
//         stylers: [{ color: '#1f2835' }],
//     },
//     {
//         featureType: 'road.highway',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#f3d19c' }],
//     },
//     {
//         featureType: 'transit',
//         elementType: 'geometry',
//         stylers: [{ color: '#2f3948' }],
//     },
//     {
//         featureType: 'transit.station',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#d59563' }],
//     },
//     {
//         featureType: 'water',
//         elementType: 'geometry',
//         stylers: [{ color: '#17263c' }],
//     },
//     {
//         featureType: 'water',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#515c6d' }],
//     },
//     {
//         featureType: 'water',
//         elementType: 'labels.text.stroke',
//         stylers: [{ color: '#17263c' }],
//     },
// ];

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});