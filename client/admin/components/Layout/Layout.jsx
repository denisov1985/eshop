import React, {Component} from 'react'
import {Map} from 'immutable';
import { Link } from 'react-router-dom'
import { Header, Icon, Container, Divider, Menu, Input, Dropdown, Button, Table, Label} from 'semantic-ui-react'

export default class Layout extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<div>
            <div className="ui menu stackable">
                <div className="ui container">
                    <div href="#" className="header item">
                        <img className="logo" src="/img/logo.png" />
                    </div>
                    <Link className="item" to="/">Dashboard</Link>
                    <Link className="item" to="/product">Product</Link>

                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </div>

            <Container >
                <div className="ui breadcrumb">
                    <a className="section">Home</a>
                    <i className="right angle icon divider" />
                    <a className="section">Store</a>
                    <i className="right angle icon divider" />
                    <div className="active section">T-Shirt</div>
                </div>
            </Container>

            <Divider />

            <Divider hidden />

            <Container >
                <Header as='h2'>
                    <Icon name='settings' />
                    <Header.Content>
                        {this.props.title}
                        <Header.Subheader>
                            {this.props.description}
                        </Header.Subheader>
                    </Header.Content>
                </Header>
            </Container>

            <Divider hidden />

            <Container >
                {this.props.children}
            </Container>

        </div>);
    }
}