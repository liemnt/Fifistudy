import React from 'react';
import Actor from './Actor'
import Slider from 'react-slick';
import {withCookies} from 'react-cookie';
import {connect} from 'react-redux';
import ListActor from './ListActor'
import SectionRelatedFilm from './SectionRelatedFilm';
import {getFilmByDifficult} from '../actions/dataIntropage'

class RelatedFilmContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount = () => {
        this.props.getFilmByDifficult(this.props.data.difficult_level);
    }

    componentWillReceiveProps = (nextProps) =>{
        if (nextProps.data.difficult_level!==this.props.data.difficult_level){
            this.props.getFilmByDifficult(nextProps.data.difficult_level);
        }
    }

    renderContent = () => {
        let {filmEqualDifficult} = this.props;
        if (filmEqualDifficult.isLoading) {
            return (
                <div className="list-actor__info"> Đang tải ... </div>
            )
        }
        else {
            if (filmEqualDifficult.data.errors == null) {
                if (filmEqualDifficult.data.data.length > 0) {
                    return (
                        <SectionRelatedFilm data={filmEqualDifficult.data.data}/>
                    )
                }
                else {
                    return (
                        <div className="list-actor__info">Ko có phim cùng cấp độ</div>
                    )
                }
            }
        }
    };


    render() {
        return (
            <div>
                {
                    this.renderContent()
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filmEqualDifficult: state.dataIntropage.filmEqualDifficult
    }
}

export default connect(mapStateToProps,{getFilmByDifficult})(withCookies(RelatedFilmContainer))
