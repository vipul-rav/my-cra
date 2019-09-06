import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ErrorContainer extends Component {

    render() {
        return (
            <div className="col-xs1-24">
                <div>
                    <h1 className="title">Sorry, there's been a technical problem</h1>
                    <div className="text-body u-margin-bottom-6">
                        <p>It looks like something's gone wrong in the background. 
                        Please return to the home screen and apply again later. If you're still having problems.</p>
                        
                    </div>
                    <div className="button-group">
                        <button>
                            Exit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

ErrorContainer.propTypes = {
    config: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ baseProps: state });

export default connect(mapStateToProps)(ErrorContainer);

