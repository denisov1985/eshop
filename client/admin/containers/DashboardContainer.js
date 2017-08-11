import React, {Component} from 'react'
import {Map} from 'immutable';


export default class DashboardContainer extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<div>
            <div className="ui large top fixed menu">
                <div className="ui container"><a className="active item">Home</a><a className="item">Work</a><a
                    className="item">Company</a><a className="item">Careers</a>
                    <div className="right menu">
                        <div className="item item"><a className="ui button">{/* react-text: 777 */}Log
                            in{/* /react-text */}</a></div>
                        <div className="item"><a className="ui primary button">{/* react-text: 780 */}Sign
                            Up{/* /react-text */}</a></div>
                    </div>
                </div>
            </div>
        </div>);
    }
}