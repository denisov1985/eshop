import React from 'react';
import Layout from 'components/Layout';

const Filter = ({title}) => {

    return (
        <div className="filter-options-item active" role="presentation">
            <div className="filter-options-title" role="tab">{title}</div>
            <div className="filter-options-content" role="tabpanel" style={{display: 'block'}}>
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
    )
};

export default Filter;