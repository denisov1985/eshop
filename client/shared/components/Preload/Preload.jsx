import React, {Component} from 'react'
import CoreComponent from '../Core/CoreComponent';
import { Button, Dimmer, Image, Loader, Segment } from 'semantic-ui-react'

export default class Preload extends CoreComponent {

    constructor(props) {
        super(props);
        let loaded = false;
        console.log('construct new');
        if (typeof window === 'undefined') {
            loaded = true;
        }   else  {
            if (window.server) {
                loaded = true;
                window.server = false;
            }
        }
        this.state = {
            loaded: loaded,
        }
    }

    componentDidMount() {
        if (this.state.loaded) {
            return true;
        }
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

