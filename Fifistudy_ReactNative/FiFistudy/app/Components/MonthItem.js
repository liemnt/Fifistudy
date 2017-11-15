import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from '../Styles/MonthItem.js';

class MonthItem extends Component {
    constructor(props) {
        console.disableYellowBox = true;
        super(props);
        this.state = {
            dataSource: this.props.listSentences
        }
    }

    renderDailySentences(item) {
        return (
            <DailySentences day={item.day} sentence={item.sentence} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTextAndLine}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textMonth}>
                            Tháng {this.props.month}
                        </Text>
                    </View>
                    <View style={styles.blackLine}>
                    </View>
                </View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => this.renderDailySentences(item)}
                />
            </View>
        )
    }
}

export default MonthItem;