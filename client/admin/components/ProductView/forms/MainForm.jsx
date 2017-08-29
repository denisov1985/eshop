import React, {Component} from 'react'
import Form from 'shared/components/Form/Form';

export default class MainForm extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        console.log(this);
        return (<div>
            <Form provider={this.props.provider}>
                <Form.Input.Text title="Product name" field="name" />
                <Form.Input.Number title="Price" field="price" />
                <Form.Input.Dropdown options={this.props.container.props.category.get('dataset')} title="Category" field="category.id" />
                <Form.Input.Textarea title="Description" field="description" />
            </Form>
        </div>);
    }
}