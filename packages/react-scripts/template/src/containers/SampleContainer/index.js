import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUserOrgList } from "../../redux/actions/userOrg";
import { navigateToSample2 } from "../../redux/actions/sampleAction";
import { withRouter } from "react-router-dom";
import SampleComponent from "../../components/SampleComponent";

class SampleContainer extends Component {
    constructor(props) {
        super(props);
        this.continueClick = this.continueClick.bind(this);
    }
    componentDidMount() {
        this.props.getUserOrgList();
    }

    continueClick() {
        const { navigateToSample2 } = this.props;
        navigateToSample2();
    }

    render() {
        const { config: { externalContent } } = this.props.baseProps;
       
        return (
            <div className="c-o-card">
                <h1>{externalContent.homePageText}</h1>
                <SampleComponent />
                <button onClick={this.continueClick}> {externalContent.btnContinue} </button>
            </div>
        );
    }
}

SampleContainer.propTypes = {
    navigateToSample2: PropTypes.func,
    baseProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ baseProps: state });
const mapDispatch = dispatch => (bindActionCreators({
    navigateToSample2,
    getUserOrgList,
}, dispatch));

export default withRouter(connect(mapStateToProps, mapDispatch)(SampleContainer));

