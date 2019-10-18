import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routes from '../routes';
import { compose } from 'redux';
import { connect } from 'react-redux';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import withContent from '../hocs/withContent';

class App extends Component {
    render() {
        const { loader, content } = this.props;

        return (
            <div>
                <HeaderComponent />
                <div>
                    <ErrorComponent hasError={loader.showError}>
                        {routes}
                        <LoaderComponent
                            isLoading={loader.loading}
                            text={content.loadingText}
                        />
                    </ErrorComponent>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ loader: state.loader });

App.propTypes = {
    loader: PropTypes.shape({}).isRequired,
    content: PropTypes.object.isRequired,
};

export default compose(
    withContent(),
    connect(mapStateToProps)
)(App);
