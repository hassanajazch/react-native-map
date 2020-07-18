import axios from 'axios';
import busyImg from '../assets/busy.png';
import closedImg from '../assets/closed.png';
import notBusyImg from '../assets/not_busy.png';
import veryBuysImg from '../assets/very_busy.png';

export default class Location {
    static getLocationStatusImage(status) {
        if(status === 'busy') {
            return  busyImg;
        } else if (status === 'closed') {
            return closedImg;
        } else if (status === 'not_busy') {
            return notBusyImg;
        } else if (status === 'very_busy') {
            return veryBuysImg;
        }
    }
    static getSampleLocation() {
        return [{
            id: 1,
            lat: 51.469654,
            lng: -0.140938,
            status: "busy",
        }, {
            id: 2,
            lat: 51.461374,
            lng: -0.152776,
            status: "closed",
        }, {
            id: 3,
            lat: 51.490583,
            lng: -0.149798,
            status: "not_busy",
        }, {
            id: 4,
            lat: 51.498762,
            lng: -0.152356,
            status: "very_busy",
        }, {
            id: 5,
            lat: 51.489370,
            lng: -0.164081,
            status: "busy",
        }, {
            id: 6,
            lat: 51.478169,
            lng: -0.164921,
            status: "very_busy",
        }];
    }

    static getUserLocations() {
      // const locations = await axios.get('https://crowdless.com/default/places');
      const locations = Location.getSampleLocation();

      return locations;
    }
}