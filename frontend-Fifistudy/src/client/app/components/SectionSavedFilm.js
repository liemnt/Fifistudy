import React from 'react';
import Vocabulary from './Vocabulary'
import {connect} from 'react-redux';
import FlipMove from 'react-flip-move';
import Film from '../components./Film'

class SectionSavedFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderVocabulary = () => {
        return this.props.data.map(item => {
            return (
                <div key={item.id} className="section-vocabulary__item">

                    <Film data={item}/>

                </div>

            )
        })
    }

    render() {
        return (
            <div>
                <div className="section-vocabulary__title">
                    Film Đã lưu
                </div>
                <FlipMove enterAnimation="fade" leaveAnimation="fade" className="section-vocabulary">
                    {
                        this.renderVocabulary()
                    }
                </FlipMove>
            </div>

        )
    }
}

export default SectionSavedFilm