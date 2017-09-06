import React, {Component} from 'react'
import CoreElement from './CoreElement';
import {Segment, Dimmer, Loader, Input, Image, Divider, Icon, Button, Dropdown} from 'semantic-ui-react'
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
        const value = this.getValue();
        console.log('VALUE');
        console.log(value);

        const context = this.props.provider.context.get('upload', new List([]));
        const src = 'https://react.semantic-ui.com/assets/images/wireframe/image.png';
        const srcUpload = '/img/upload.png';
        return (<div>
            <Image.Group>

                {value.map((e, i) => {
                    return this.renderImage('/img/upload/' + e.get('name'), '_image' + i);
                })}

                {context.map((e, i) => {
                    return this.renderImage(e.data_uri, i, true);
                })}

                <Image onClick={this.toggleFileUpload} style={{borderRadius: 5 + 'px', cursor: 'pointer'}}
                       height="150"
                       width="150" bordered shape='rounded' src={srcUpload}/>

            </Image.Group>

            <div style={{display: 'none'}}><input onChange={this.handleFile} ref="file" type="file"/></div>
        </div>);
    }

    renderImage = (src, i, isLoading) => {
        if (typeof isLoading === 'undefined') {
            isLoading = false;
        }
        return (<div key={i} style={{
            borderRadius: 5 + 'px',
            fontSize: 20 + 'px',
            backgroundImage: 'url(' + src + ')',
            backgroundSize: '100% 100%',
            width: 150 + 'px',
            height: 150 + 'px'
        }} className="ui rounded bordered image">
            <Dropdown style={{fontSize: 12 + 'px', marginLeft: 112 + 'px', marginTop: 114 + 'px'}} icon='content'
                      floating button className='icon'>
                <Dropdown.Menu>
                    <Dropdown.Header icon='content' content='Select action...'/>
                    <Dropdown.Divider/>
                    <Dropdown.Item icon='eye' text='View image'/>
                    <Dropdown.Item icon='cloud upload' text='Upload'/>
                    <Dropdown.Item icon='trash' text='Delete'/>
                </Dropdown.Menu>
            </Dropdown>{this.renderLoading(isLoading)}</div>);
    }

    renderLoading(visible) {
        if (visible) {
            return (<div style={{
                position: 'absolute',
                width: 150 + 'px',
                height: 150 + 'px',
                top: 0 + 'px',
                opacity: '0.8',
                backgroundColor: 'black'
            }}><div style={{display: 'block'}} className="ui loader"/>

            </div>)
        }   else   {
            return null;
        }
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

            this.upload({
                data_uri: upload.target.result,
                filename: file.name,
                filetype: file.type,
            });

            this.setState({
                images: this.state.images.push(fromJS({
                    data_uri: upload.target.result,
                    filename: file.name,
                    filetype: file.type,
                }))
            }, () => {
                //console.log(this)
            });
        };

        reader.readAsDataURL(file);
    }

    upload = (image) => {
        this.props.provider.actions.uploadImage(
            image,
            this.props.provider.data.toJS()
        );
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps');
        console.log(nextProps);
    }
}