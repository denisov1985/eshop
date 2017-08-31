import React, {Component} from 'react'
import CoreElement from './CoreElement';
import { Input, Image, Divider, Icon, Button, Dropdown } from 'semantic-ui-react'
import {Map, List, fromJS} from 'immutable';

export default class InputImage extends CoreElement {

    constructor(props) {
        super(props);
        this.state = {
            images: new List([])
        }
    }

    /**
     * Render dimmer
     * @returns {XML}
     */
    build() {
        const src = 'https://react.semantic-ui.com/assets/images/wireframe/image.png';
        const srcUpload = '/img/upload_image.jpg';
        return (<div>
            <Image.Group>
                {this.renderImage(src)}
                {this.renderImage(src)}
                {this.renderImage(src)}
                {this.renderImage(src)}
                {this.renderImage(src)}
                {this.state.images.map((e) => {
                    return this.renderImage(e.get('data_uri'));
                })}
                <Image onClick={this.toggleFileUpload} style={{borderRadius: 5 + 'px', cursor: 'pointer'}} height="150" width="150" bordered shape='rounded' src={srcUpload} />
            </Image.Group>

            <div style={{display: 'none'}}><input  onChange={this.handleFile} ref="file" type="file" /></div>
        </div>);
    }

    renderImage = (src) => {
        return (<div style={{borderRadius: 5 + 'px', fontSize: 20 + 'px', backgroundImage: 'url(' + src + ')', backgroundSize: '100% 100%', width: 150 + 'px', height: 150 + 'px'}} className="ui rounded bordered image">
            <Dropdown style={{fontSize: 12 + 'px', marginLeft: 112 + 'px', marginTop: 114 + 'px'}} icon='content' floating button className='icon'>
                <Dropdown.Menu>
                    <Dropdown.Header icon='content' content='Select action...' />
                    <Dropdown.Divider />
                    <Dropdown.Item icon='eye' text='View image' />
                    <Dropdown.Item icon='cloud upload' text='Upload' />
                    <Dropdown.Item icon='trash' text='Delete' />
                </Dropdown.Menu>
            </Dropdown>
        </div>);
    }

    toggleFileUpload = () => {
        this.refs.file.click();
    }

    handleFile = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onload = (upload) => {
            /*this.props.form.props.upload({
                data_uri: upload.target.result,
                filename: file.name,
                filetype: file.type,
                id: this.props.form.props.provider.getIn(['dataset', 'id'])
            });*/

            this.setState({
                images: this.state.images.push(fromJS({
                    data_uri: upload.target.result,
                    filename: file.name,
                    filetype: file.type,
                }))
            }, () => {
                console.log(this)
            });
        };

        reader.readAsDataURL(file);
    }


}