import React, {Component} from 'react'
import {Map} from 'immutable';

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            context: new Map()
        };
    }

    isVisible() {
        return this.state.context.get('visible', false);
    }

    onToggle = () => {
        console.log('toggle');
        const visible = !this.state.context.get('visible', false);
        this.setState({
            context: this.state.context.set('visible', visible)
        })
    }

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (
            <div className={"filter-options-item" + (this.isVisible() ? ' active' : '')} role="presentation">
                <div onClick={this.onToggle} className="filter-options-title" role="tab">{this.props.title}</div>
                <div className="filter-options-content" role="tabpanel" style={{display: this.isVisible() ? 'block' : 'none'}}>
                    <ol className="items">
                        <li className="item">
                            <div id="ln_price_attribute">
                                <div id="ln_price_slider"
                                     className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                    <a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: '0%'}}/>
                                    <a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: '100%'}}/>
                                </div>
                                <div id="ln_price_text">$70.00 - $900.00</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}