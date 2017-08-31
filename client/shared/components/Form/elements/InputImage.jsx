import React, {Component} from 'react'
import CoreElement from './CoreElement';
import { Input, Image, Divider } from 'semantic-ui-react'

export default class InputImage extends CoreElement {

    /**
     * Render dimmer
     * @returns {XML}
     */
    build() {
        const src = 'https://react.semantic-ui.com/assets/images/wireframe/image.png';
        const srcUpload = '/img/upload_image.jpg';
        return (<div>
            <Image.Group>
                <Image style={{borderRadius: 5 + 'px'}} height="150" width="150" bordered shape='rounded' src={src} />
                <Image style={{borderRadius: 5 + 'px'}} height="150" width="150" bordered shape='rounded' src={src} />
                <Image style={{borderRadius: 5 + 'px'}} height="150" width="150" bordered shape='rounded' src={src} />
                <Image style={{borderRadius: 5 + 'px'}} height="150" width="150" bordered shape='rounded' src={src} />
                <Image onClick={this.toggleFileUpload} style={{borderRadius: 5 + 'px', cursor: 'pointer'}} height="150" width="150" bordered shape='rounded' src={srcUpload} />
            </Image.Group>

            <div style={{display: 'none'}}><input  onChange={this.handleFile} ref="file" type="file" /></div>
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
                data_uri: upload.target.result,
                filename: file.name,
                filetype: file.type,
                //id: this.props.form.props.provider.getIn(['dataset', 'id'])
            }, () => {
                console.log(this)
            });
        };

        reader.readAsDataURL(file);
    }


}