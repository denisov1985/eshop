import React, {Component} from 'react'
import CoreComponent from '../Core/CoreComponent';
import { Button, Dimmer, Image, Loader, Segment } from 'semantic-ui-react'

export default class Preload extends CoreComponent {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    componentDidMount() {
        console.log('Mount');
        setTimeout(() => {
            this.setState({
                loaded: true
            })
        }, 20);
    }

    /**
     * Render dimmer
     * @returns {XML}
     */
    render() {
        return (this.state.loaded) ? this.renderChildren() : this.renderDimmer();
    }

    renderChildren() {
        return this.props.children;
    }

    renderDimmer = () => {
        return (<Dimmer.Dimmable as={Segment} dimmed={true}>
            <Dimmer active={true} inverted>
                <Loader>Loading</Loader>
            </Dimmer>

            <div style={{height: 500 + 'px'}}></div>

        </Dimmer.Dimmable>)
    }
}

