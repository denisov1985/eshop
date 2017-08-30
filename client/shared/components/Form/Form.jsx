import React, {Component} from 'react'
import CoreComponent from '../Core/CoreComponent';

import InputText from './elements/InputText'
import InputNumber from './elements/InputNumber'
import Textarea from './elements/Textarea'
import InputDropdown from './elements/InputDropdown'
import FormButton from './elements/FormButton'
import { Message, Transition } from 'semantic-ui-react'

export default class Form extends CoreComponent {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            message: false
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('Next props');
        const prevStatus = this.props.provider.context.get('status', 0);
        const nextStatus = nextProps.provider.context.get('status', 0);
        if (prevStatus === 1 && nextStatus === 2) {
            this.setState({
                message: true
            })
            setTimeout(() => {
                this.setState({
                    message: false
                })
            }, 2000)
        }
    }

    /**
     * Render dimmer
     * @returns {XML}
     */
    render() {
        return (<form  className="ui form">
            <Transition visible={this.state.message} animation='fade' duration={500}>
                <Message positive>
                    <Message.Header>
                        Changes in Service
                    </Message.Header>
                    <p>
                        We updated our privacy policy here to better service our customers. We recommend reviewing the changes.
                    </p>
                </Message>
            </Transition>
            {this.renderElementWithProps({
                provider: this.props.provider
            }, this.props.children)}
        </form>);
    }
}

Form.Button = FormButton;

Form.Input = {
    Text: InputText,
    Number: InputNumber,
    Textarea: Textarea,
    Dropdown: InputDropdown,
};
