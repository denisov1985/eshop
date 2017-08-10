import React, {Component} from 'react'
import App from 'components/App/App';
import {Map} from 'immutable';


export default class AppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            context: new Map()
        };
    }

    onToggleFilter = () => {
        const expanded = !this.state.context.getIn(['filter', 'expanded'], false);
        this.setState({
            context: this.state.context.setIn(['filter', 'expanded'], expanded)
        });
    };

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<App onToggleFilter={this.onToggleFilter}
            filterExpanded={this.state.context.getIn(['filter', 'expanded'], false)}
        >
            ololo
        </App>);
    }
}