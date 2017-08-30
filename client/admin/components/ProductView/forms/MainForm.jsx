import React, {Component} from 'react'
import Form from 'shared/components/Form/Form';
import { Button, Grid } from 'semantic-ui-react'

export default class MainForm extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        console.log(this);
        return (<div>
            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Form provider={this.props.provider}>
                            <Form.Input.Text title="Product name" field="name" />
                            <Form.Input.Number title="Price" field="price" />
                            <Form.Input.Dropdown options={this.props.container.props.category.get('dataset')} title="Category" field="categories" />
                            <Form.Input.Textarea title="Description" field="description" />
                        </Form>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Button onClick={this.props.onSaveProduct} primary>Save</Button>
                        <Button>Cancel</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>);
    }
}