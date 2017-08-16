import Action from '../actions/Action';
import Immutable from 'immutable';
/**
 * Common reducer
 */
export default class Reducer
{
    static create(entity ) {
        const  instance = new this(entity);
        return instance.handle();
    }

    handle() {}

    /**
     * On receive action
     * @param type
     * @param callback
     */
    onReceiveAction(type, callback) {
        this.handlers[this.formatReceiveAction(type)] = callback
    }

    /**
     * On request action
     * @param type
     * @param callback
     */
    onRequestAction(type, callback) {
        this.handlers[this.formatRequestAction(type)] = callback
    }

    getHandlers = () => this.handlers

    /**
     * Class constructor
     * @param entity
     */
    constructor(entity) {
        this.handlers = [];
        this.entity = entity;
        this.action = new Action(entity);
    }

    /**
     * Format action type
     * @param action
     * @param type
     */
    formatAction(action, type) {
        return this.action.formatAction(action, type);
    }

    /**
     * Format request action
     * @param action
     * @returns {*}
     */
    formatRequestAction(action) {
        return this.formatAction(action, this.action.TYPE_REQUEST);
    }

    /**
     * Format receive action
     * @param action
     * @returns {*}
     */
    formatReceiveAction(action) {
        return this.formatAction(action, this.action.TYPE_RECEIVE);
    }

    /**
     * Wrapper for API status empty
     */
    statusEmpty    = () => this.action.getApi().STATUS_EMPTY;

    /**
     * Wrapper for API status loading
     */
    statusLoading  = () => this.action.getApi().STATUS_LOADING;

    /**
     * Wrapper for API status complete
     */
    statusComplete = () => this.action.getApi().STATUS_COMPLETE;

    /**
     * Wrapper for API status error
     */
    statusError = () => this.action.getApi().STATUS_ERROR;

    /**
     * Get initla state
     */
    getInitialState = () => ({})
}