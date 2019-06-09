import React from 'react';
import { connect } from 'react-redux';

import { getTags } from '../../actions/tagsActions';
import Loader from './Loader';

class TagsComponent extends React.Component {

    componentDidMount = () => {
        this.props.getTags();
    }

    render = () => {
        let { tags } = this.props;
        
        if(tags.length > 0){
            return (
                <div className="tags">
                    <h6>Popular tags</h6>
                    {
                        tags.map(tag => {
                            return (
                                <span key={ tag } className="badge badge-pill">
                                    { tag }
                                </span>
                            )
                        })
                    }
                </div>
            )
        } else {
            return <Loader />
        }
    }

}

const mapStateToProps = (state) => {
    return {
        tags: state.tags
    }
}

export default connect(mapStateToProps,{
    getTags
})(TagsComponent);