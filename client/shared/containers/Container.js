import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Map, fromJS} from 'immutable';

class Container extends Component {

    /**
     * Redirect to route
     * @param path
     */
    redirect(path) {
        this.props.history.push(path);
    }

    isLoggedIn() {
        return this.props.auth.get('loggedIn', false);
    }

    /**
     * Redux mapStateToProps wrapper
     * @param state
     * @param ownProps
     * @returns {{}}
     */
    static mapStateToProps(state, ownProps) {
        let result = {};
        result[this.getEntity().toLowerCase()] = state[this.getEntity().toLowerCase()];
        return result;
    }

    /**
     * Redux mapDispatchToProps wrapper
     * @param dispatch
     * @returns {{}}
     */
    static mapDispatchToProps(dispatch) {
        let result = {};
        result[this.getEntity().toLowerCase()] = 'DUMMY';
        return result;
    }

    /**
     * Init default Redux props
     * @param state
     * @param ownProps
     * @returns {{auth: (auth|B|N|*)}}
     */
    static mapStateToPropsDefault(state, ownProps) {
        return {
            auth: state.auth
        }
    }

    /**
     * Init default Redux actions
     * @param dispatch
     * @returns {{auth: (auth|B|N)}}
     */
    static mapDispatchToPropsDefault(dispatch) {
        return {
            auth: 'auth dummy'
        }
    }

    /**
     * Init redux
     * @returns {null}
     */
    static getEntity() {
        return 'Product';
    }

    /**
     * Redux connect wrapper
     * @returns {*}
     */
    static connect() {
        let self = this;
        return connect((state, ownProps) => {
            let props = self.mapStateToProps(state, ownProps)
            let defaultProps = self.mapStateToPropsDefault(state, ownProps);
            for (let key of Object.keys(defaultProps)) {
                props[key] = defaultProps[key];
            }
            return props;
        } , (dispatch) => {
            let actions = self.mapDispatchToProps(dispatch)
            let defaultActions = self.mapDispatchToPropsDefault(dispatch);
            for (let key of Object.keys(defaultActions)) {
                actions[key] = defaultActions[key];
            }
            return {
                actions: actions
            }
        })(this)
    }


    getEntity = () => {
        null;
    }

    /**
     * Get data by id from list
     * @param id
     * @param list
     * @returns {Map}
     */
    getById = (id, list) => {
        let data = list.filter((record) => {
            return record.get('id') == id;
        });
        if (data.size === 0) {
            return new Map({});
        } else  {
            return data.get(0);
        }
    }

    initFromProviderById = (id, type) => {
        const details = this.getById(id, this.props[type].get('details', fromJS({})));
        if (details.size === 0) {
            const selected = this.getById(id, this.props[type].get('dataset', fromJS([])))
            this.props.actions[type].select(selected);
        }
    }

    getParam = (paramName) => {
        return this.props.match.params[paramName];
    }

    /**
     * Get data provider
     * @param id
     * @param type
     * @returns {{data: Map, actions}}
     */
    getDataProvider = (id, type) => {
        const details = this.getById(id, this.props[type].get('details', fromJS({})));
        const context = this.props[type].getIn(['context', parseInt(id, 10)], fromJS({}));
        return {
            data: details,
            context: context,
            actions: this.props.actions[type]
        }
    }

    /**
     * Get current details
     * @param type
     * @returns {{data: Map, actions}}
     */
    getCurrentDetails = (type) => {
        return this.getDataProvider(this.getParam('id'), type).data;
    }
}

export default Container;