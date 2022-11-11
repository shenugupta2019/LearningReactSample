'use strict';

var React = require('react-native');
var FirstViewController = require('NativeModules').FirstViewController;

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  NativeAppEventEmitter
} = React;

class MCDJ extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.bindMethods();
    }
    bindMethods() {
        if (! this.bindableMethods) {
            return;
        }   

        for (var methodName in this.bindableMethods) {
            this[methodName] = this.bindableMethods[methodName].bind(this);
        }
    }

    getInitialState() {
        return {
            songPlaying : 'None'
        }
    }

    componentDidMount() {
        // Add Event Listener for SongPlaying event from MediaController
        NativeAppEventEmitter.addListener('SongPlaying', (songName) => this.setState({songPlaying : songName}))
    }

};