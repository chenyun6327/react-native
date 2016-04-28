/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

var DEFAULT_URL = 'http://111.13.53.181/games/2/index.html';

class reactNative extends React.Component{
  render() {
    return (
      <View style={{flex:1}}>
        <WebView style={styles.webview_style} 
          source={{uri: DEFAULT_URL}}
          automaticallyAdjustContentInsets={true}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          scalesPageToFit={true}
          >
        </WebView>
      </View>
    );
  }
};
var styles = StyleSheet.create({
    webview_style:{  
       backgroundColor:'#00ff00',   
    }
});
React.AppRegistry.registerComponent('reactNative', function(){return reactNative});


