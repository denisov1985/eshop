import React, {Component} from 'react'
import {Map} from 'immutable';

import { Header, Icon, Container, Divider, Menu} from 'semantic-ui-react'

export default class DashboardContainer extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<div>

            <Menu secondary>
                <Menu.Item name='home' onClick={this.handleItemClick} />
                <Menu.Item name='messages' onClick={this.handleItemClick} />
                <Menu.Item name='friends'  onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item name='logout' a onClick={this.handleItemClick} />
                </Menu.Menu>
            </Menu>

            <Container>
                <div className="ui breadcrumb">
                    <a className="section">Home</a>
                    <i className="right angle icon divider" />
                    <a className="section">Store</a>
                    <i className="right angle icon divider" />
                    <div className="active section">T-Shirt</div>
                </div>
            </Container>

            <Divider />

            <div className="ui container">
                <Header as='h2'>
                    <Icon name='settings' />
                    <Header.Content>
                        Account Settings
                        <Header.Subheader>
                            Manage your preferences
                        </Header.Subheader>
                    </Header.Content>
                </Header>
            </div>

            <div className="ui container">
                        <table className="ui celled table">
                            <thead>
                            <tr><th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                            </tr></thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="ui ribbon label">First</div>
                                </td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr><th colSpan={3}>
                                <div className="ui right floated pagination menu">
                                    <a className="icon item">
                                        <i className="left chevron icon" />
                                    </a>
                                    <a className="item">1</a>
                                    <a className="item">2</a>
                                    <a className="item">3</a>
                                    <a className="item">4</a>
                                    <a className="icon item">
                                        <i className="right chevron icon" />
                                    </a>
                                </div>
                            </th>
                            </tr></tfoot>
                        </table>
            </div>
        </div>);
    }
}