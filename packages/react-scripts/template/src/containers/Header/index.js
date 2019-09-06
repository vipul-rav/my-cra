import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class HeaderContainer extends Component {

    render() {
        return (
            <header>Header</header>
        );
    }
}

HeaderContainer.propTypes = {
    config: PropTypes.object,
};

const mapStateToProps = state => ({ baseProps: state});

export default connect(mapStateToProps)(HeaderContainer);

