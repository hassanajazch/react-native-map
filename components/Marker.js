import React from "react";
import {Image, View, Text, StyleSheet} from "react-native";
import { Marker, Callout }  from 'react-native-maps';
import locationService from "../services/location";

/**
 * Functional Component of Marker
 * @param props
 * @returns {*[]}
 * @constructor
 */
const MapMarker = (props) => {
    return props.locations.map((location) => {
        const locationMarker = locationService.getLocationStatusImage(location.status);
        return <Marker
            key={location.id}
            coordinate={{ latitude: location.lat, longitude: location.lng }}
        >
            <Image
                source={locationMarker}
                style={{width: 26, height: 28}}
                resizeMode="contain"
            />
            <Callout>
                <View style={styles.calloutText}>
                    <Text>More Details</Text>
                </View>
            </Callout>
        </Marker >
    })
}

const styles = StyleSheet.create({
    calloutText: {
        width: 90,
    }
});


export default MapMarker;