import React, {Component} from 'react'
import {Map} from 'immutable';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import InDevelopment from '../components/InDevelopment/InDevelopment';
import Container from 'shared/containers/Container';

class InDevelopmentContainer extends Container {
    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        console.log(this.props);
        return (<InDevelopment />);
    }
}

export default InDevelopmentContainer.connect();