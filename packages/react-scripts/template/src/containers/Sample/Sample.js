import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { getPostList } from '../../redux/actions/postAction';
import { navigateToNextScreen } from '../../redux/actions/sampleAction';
import SampleComponent from '../../components/SampleComponent/SampleComponent';
import withContent from '../../hocs/withContent';

class Sample extends Component {
    componentDidMount() {
        this.props.getPostList();
    }

    continueClick = () => {
        const { navigateToNextScreen } = this.props;
        navigateToNextScreen('/sample2');
    };

    render() {
        const { content } = this.props;

        return (
            <div>
                <h1>{content.homePageText}</h1>
                <SampleComponent />
                <button className="button" onClick={this.continueClick}>
                    {' '}
                    {content.btnContinue}{' '}
                </button>
            </div>
        );
    }
}

Sample.propTypes = {
    navigateToNextScreen: PropTypes.func,
    content: PropTypes.object.isRequired,
    getPostList: PropTypes.func,
};

const mapStateToProps = state => ({ baseProps: state });
const mapDispatch = dispatch =>
    bindActionCreators(
        {
            navigateToNextScreen,
            getPostList,
        },
        dispatch
    );

export default compose(
    withContent(),
    connect(
        mapStateToProps,
        mapDispatch
    )
)(Sample);
