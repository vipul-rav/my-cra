import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LoaderContainer extends Component {

    render() {
        const { loader, config } = this.props;
        const { externalContent } = config;
        if (!loader.loading) {
            return null;
        }
        return (
            <div id="preloader">
                <div id="loader">
                    {externalContent.loadingText} 
                </div>
            </div>
        );
    }
}

LoaderContainer.propTypes = {
    loader: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
};

LoaderContainer.defaultProps = {
    config: {
        externalContent: {
            loadingText: "Please do not close your browser",
        },
    },
};

const mapStateToProps = state => ({ loader: state.loader, config: state.config });

export default connect(mapStateToProps)(LoaderContainer);

