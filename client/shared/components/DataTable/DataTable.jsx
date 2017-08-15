import React, {Component} from 'react'
import CoreComponent from '../Core/CoreComponent';
import {Map, List} from 'immutable';

import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import DataTableFooter from './DataTableFooter';
import DataTableColumnData from './columns/DataTableColumnData';
import DataTableColumnText from './columns/DataTableColumnText';
import DataTableColumnControl from './columns/DataTableColumnControl';

import Dimmer from '../Dimmer/Dimmer';

/**
 * Data Table component
 */
export default class DataTable extends CoreComponent {

    /**
     * Build class data
     */
    buildClass() {
        this.addClass("ui celled table sortable");
    }

    /**
     * Map columns
     * @param callback
     */
    mapColumns(callback) {
        return this.getColumns().map(callback);
    }

    /**
     * Map dataset
     * @param callback
     */
    mapDataset(callback) {
        return this.getDataset().map(callback);
    }

    /**
     * Get columns
     */
    getColumns() {
        return this.props.children;
    }

    /**
     * Get dataset
     */
    getDataset() {
        return this.props.provider.get('dataset', []);
    }

    isLoading() {
        return this.props.provider.get('status', 0) === 1;
    }

    /**
     * Find All
     * @returns {*}
     */
    update(provider) {
        return this.props.source.findAll(provider);
    }

    /**
     * Render table
     * @returns {XML}
     */
    render() {
        return (
            <Dimmer loading={this.isLoading()} visible={this.isLoading()}>
                <table style={{height: 100 + 'px'}} className={this.getClass()}>
                    <DataTableHeader parent={this}/>
                    <DataTableBody parent={this}/>
                    {this.getDataset().size > 0 ? (<DataTableFooter parent={this}/>) : null}
                </table>
            </Dimmer>);
    }
}

DataTable.Column = {
    Data: DataTableColumnData,
    Text: DataTableColumnText,
    Control: DataTableColumnControl,
}

DataTable.defaultProps = {
    provider: new Map({}),
    dataset:  new List([]),
    children: [],
};



