import React, { Component } from "react";
import PropTypes from "prop-types";
import routes from "../routes";
import { connect } from "react-redux";
import LoaderContainer from "../containers/Loader";
import HeaderContainer from "../containers/Header";
import ErrorContainer from "../containers/Error";

class App extends Component {

    render() {
        const { loader } = this.props;
        return (
            <div className="page">
                <HeaderContainer />
                <div className="global-content">
                    <div className="container">
                        <div className="row">
                            {!loader.showError ?
                                routes :
                                <ErrorContainer />}
                            <LoaderContainer />
                        </div>
                    </div>
                </div>
            </div>);
    }
}

const mapStateToProps = state => ({ loader: state.loader });

App.propTypes = {
    loader: PropTypes.shape({}).isRequired,
};

export default  connect(mapStateToProps)(App);
