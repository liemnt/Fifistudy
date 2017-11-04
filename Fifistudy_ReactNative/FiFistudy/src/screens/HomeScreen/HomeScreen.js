import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Button,
  View,
  Dimensions
} from 'react-native';

import ImageSlider from '../../components/ImageSlider/ImageSlider';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            bannerSliderSource: [
              {
                title: 'Spider Man 1',
                caption: 'Người nhện 1',
                url: 'https://i.ytimg.com/vi/qGmHrPGylho/maxresdefault.jpg',
              }, {
                title: 'Star Wars',
                caption: 'Chiến tranh giữa các vì sao',
                url: 'https://mediacdns.karnaval.com/media/news_media/images/thumbnail_475768.jpg?v=220816122701',
              }, {
                title: 'Thor: Ragnarok',
                caption: 'Thời khắc tận thế',
                url: 'https://i.ytimg.com/vi/r-7Grp4kbgA/maxresdefault.jpg',
              },
            ],
          };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.bannerSliderSource.length ? 0 : this.state.position + 1
                });
            }, 2000) // (postion, time to change image)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    static navigationOptions = {
        drawerLabel: 'HomeScreen',
        
    };

    render() {
        const {navigate } = this.props.navigation;
        return (
            <View style={{
                backgroundColor: 'lightskyblue',
                flex: 1
                }}>
                {/* SECTION TOOL BAR */}
                <View style={{
                    flexDirection: 'row',
                    width: Dimensions.get('window').width,
                    height: 56,
                    justifyContent: 'space-between',
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 4,
                    paddingBottom: 4,
                    zIndex: 5,
                    }}>
                    <TouchableHighlight style={{
                        width: 48,
                        height: 48,
                        padding: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}
                        underlayColor='rgba(255,255,255,0.3)'
                        onPress={() => this.props.navigation.navigate('DrawerToggle')}>
                        <Image source={require('./ic_menu.png')}
                                style={{resizeMode: 'contain'}}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={{
                        width: 48,
                        height: 48,
                        padding: 8,
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                        <Image source={require('./ic_search.png')}
                                style={{resizeMode: 'contain'}}/>
                    </TouchableHighlight>
                </View>

                {/* SECTION BANNER */}
                <View 
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').width/2,
                        backgroundColor: 'lightgray',
                        position: 'absolute',
                        zIndex: 0
                    }}>

                    <ImageSlider
                        dataSource={this.state.bannerSliderSource}
                        position={this.state.position}
                        onPostionChange={position => this.setState({position})}
                    />
                </View>
            </View>
        );
    }

}