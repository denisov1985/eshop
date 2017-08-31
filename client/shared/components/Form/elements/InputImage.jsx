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
        return (<div>
            <Image.Group size='small'>
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
            </Image.Group>
        </div>);
    }


}