import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import MapView from 'react-native-maps'
import locationService from '../services/location';
import Marker from './Marker';

/**
 * Full Width Map view
 */
export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            userLocation: {
                latitude: 51.4908245,
                longitude: -0.1514933,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        }
    }

    componentDidMount() {
        try {
            const locations = locationService.getUserLocations();
            this.setState({ locations: locations });
        } catch (e) {
            console.log(e);
        }
    }

    mapMarkers = () => {
        return this.state.locations.map((location) => {
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
                <MapView.Callout>
                    <View style={styles.calloutText}>
                        <Text>More Details</Text>
                    </View>
                </MapView.Callout>
            </Marker >
        })
    }

    render() {
        return (
            <MapView
                style={styles.mapStyle}
                initialRegion={this.state.userLocation}
                showsUserLocation={true}
            >
                <Marker
                    locations = {this.state.locations}
                />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    calloutText: {
        width: 90,
    }
});
