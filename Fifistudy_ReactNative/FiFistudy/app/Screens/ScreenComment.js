// screen comment in watch screen
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    TextInput,
    FlatList,
} from 'react-native';
import ObjComment from '../Objects/ObjComment.js';
import {
    ImageButton,
    EpisodeCircleView,
    CommentItem2
} from '../Components/index.js';
import Resources from '../Resources/index.js';
import Styles from '../Styles/ScreenComment.js';

export default class ScreenComment extends Component {
    render() {
        return (
            <View style={Styles.commentContainer}>
                {/* Title section */}
                <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: 72,
                        paddingRight: 16,
                        paddingTop: 8,
                        paddingBottom: 8
                    }}>
                    <Text style={{
                            fontFamily: Resources.fonts.common,
                            fontSize: 21,
                            color: Resources.colors.blue,
                        }}>
                        Bình luận</Text>
                    <View>
                        <ImageButton source={Resources.icons.close} tintColor={Resources.colors.blue}/>
                    </View>
                </View>




                {/* Enter comment section */}
                <View style={Styles.enterCommentContainer}>
                    <TextInput style={{
                        flex: 1,
                        backgroundColor: '#E0E0E0'
                        }}
                        autoGrow={true}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        multiline={true}
                        blurOnSubmit={false}/>
                    <View style={{
                        backgroundColor: Resources.colors.blue,
                        borderTopRightRadius: 6,
                        borderBottomRightRadius: 6,
                        height: 40
                        }}>
                        <ImageButton source={Resources.icons.send} tintColor='white'/>
                    </View>
                </View>
                {/* <View style={Styles.line}/> */}


                {/* List comment */}
                <FlatList
                    style={{flex: 1}}
                    data={ObjComment}
                    keyExtractor={item => item.ID}
                    renderItem={({item}) => (
                    <CommentItem data={item}/>
                )}/>
            </View>
        );
    }
}