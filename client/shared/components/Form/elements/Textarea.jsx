import React, {Component} from 'react'
import CoreElement from './CoreElement';
import {Input, Button, Icon, Dropdown} from 'semantic-ui-react'
import {CompositeDecorator, Editor, EditorState, Modifier, RichUtils, Entity, ContentState} from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';

export default class Textarea extends CoreElement {

    constructor(props) {
        super(props);
        this.state = {
            editorState: this.getEditorStateFromProps(props)
        };
    }

    getEditorStateFromProps = (props) => {
        if (typeof window === 'undefined') {
            return EditorState.createEmpty();
        }

        if (this.getValue(props) === '') {
            return EditorState.createEmpty();
        }

        let value = this.getValue(props);
        if (/<[a-z][\s\S]*>/i.test(value) === false) {
            value = '<p>' + value + '</p>';
        }

        const blocksFromHtml = htmlToDraft(value);
        const contentBlocks  = blocksFromHtml.contentBlocks;
        const contentState   = ContentState.createFromBlockArray(contentBlocks);
        return EditorState.createWithContent(contentState);
    }

    onTextareaChange = (editorState) => this.setState({editorState});

    _onBoldClick(type) {
        this.onTextareaChange(RichUtils.toggleInlineStyle(this.state.editorState, type));
    }

    _onBlockTypeClick(type) {
        this.onTextareaChange(RichUtils.toggleBlockType(this.state.editorState, type));
    }


    /**
     * Render dimmer
     * @returns {XML}
     */
    build() {

        const headerOptions = [
            {
                text: 'Normal',
                value: 'p',
            },
        ];

        return (<div>
            <Button type="button"  icon onClick={this._onBoldClick.bind(this, 'BOLD')}>
                <Icon name='bold'/>
            </Button>

            <Button type="button"  icon onClick={this._onBoldClick.bind(this, 'ITALIC')}>
                <Icon name='italic'/>
            </Button>

            <Button type="button"  icon onClick={this._onBoldClick.bind(this, 'UNDERLINE')}>
                <Icon name='underline'/>
            </Button>

            <Button type="button" style={{marginRight: 8 + 'px'}}  icon
                    onClick={this._onBoldClick.bind(this, 'STRIKETHROUGH')}>
                <Icon name='strikethrough'/>
            </Button>

            <Button type="button"  icon onClick={this._onBlockTypeClick.bind(this, 'unordered-list-item')}>
                <Icon name='list'/>
            </Button>

            <Button type="button" style={{marginRight: 8 + 'px'}} icon onClick={this._onBlockTypeClick.bind(this, 'ordered-list-item')}>
                <Icon name='unordered list'/>
            </Button>

            <Button type="button"  icon onClick={this._onBoldClick.bind(this)}>
                <Icon name='linkify'/>
            </Button>

            <Button type="button" style={{marginRight: 8 + 'px'}}  icon
                    onClick={this._onBoldClick.bind(this)}>
                <Icon name='unlinkify'/>
            </Button>

            <Dropdown style={{marginRight: 8 + 'px'}} selection options={headerOptions}/>

            <Button type="button"  icon onClick={this._onBoldClick.bind(this)}>
                <Icon name='undo'/>
            </Button>

            <Button type="button"  icon onClick={this._onBoldClick.bind(this)}>
                <Icon name='repeat'/>
            </Button>
            <div style={{
                border: '1px solid rgba(34,36,38,.15)',
                borderRadius: '.28571429rem',
                marginTop: 8 + 'px'
            }}>
                <Editor
                    editorStyle={{
                        padding: '0.67857143em 1em',
                        fontSize: '1em',
                        height: 400 + 'px !important'
                    }}
                    editorState={this.state.editorState}
                    onChange={this.onTextareaChange}
                />
            </div></div>);
    }


}