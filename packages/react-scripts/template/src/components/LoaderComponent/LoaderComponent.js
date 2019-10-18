import React from 'react';
import PropTypes from 'prop-types';

const LoaderComponent = ({ content, isLoading }) =>
    isLoading ? (
        <div id="preloader">
            <div id="loader">{content.loadingText}</div>
        </div>
    ) : null;

LoaderComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    content: PropTypes.object.isRequired,
};

LoaderComponent.defaultProps = {
    content: {
        loadingText: 'Please do not close your browser',
    },
};

export default LoaderComponent;
