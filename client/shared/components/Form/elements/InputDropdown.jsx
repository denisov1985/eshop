import React, {Component} from 'react'
import CoreElement from './CoreElement';
import { Dropdown } from 'semantic-ui-react'

export default class InputDropdown extends CoreElement {

    /**
     * Render dimmer
     * @returns {XML}
     */
    build() {
        console.log(this);

        let dataOptions = this.props.options.map((e) => {
            return {
                key: e.get('id'),
                text: e.get('name'),
                value: e.get('id'),
                data: e
            }
        });

        const options = [
            { key: 'angular', text: 'Angular', value: 'angular' },
            { key: 'css', text: 'CSS', value: 'css' },
            { key: 'design', text: 'Graphic Design', value: 'design' },
            { key: 'ember', text: 'Ember', value: 'ember' },
            { key: 'html', text: 'HTML', value: 'html' },
            { key: 'ia', text: 'Information Architecture', value: 'ia' },
            { key: 'javascript', text: 'Javascript', value: 'javascript' },
            { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
            { key: 'meteor', text: 'Meteor', value: 'meteor' },
            { key: 'node', text: 'NodeJS', value: 'node' },
            { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
            { key: 'python', text: 'Python', value: 'python' },
            { key: 'rails', text: 'Rails', value: 'rails' },
            { key: 'react', text: 'React', value: 'react' },
            { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
            { key: 'ruby', text: 'Ruby', value: 'ruby' },
            { key: 'ui', text: 'UI Design', value: 'ui' },
            { key: 'ux', text: 'User Experience', value: 'ux' },
        ];

        return (<Dropdown onChange={this.onDropdownChange} placeholder='Category' search fluid multiple selection options={dataOptions.toJS()} />);
    }

    onDropdownChange = (event, data) => {
        const result = this.props.options.filter((e) => {
            return (data.value.indexOf(e.get('id')) >= 0);
        });
        this.updateValue(result);
    }

}