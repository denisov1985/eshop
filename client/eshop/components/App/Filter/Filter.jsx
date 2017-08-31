import React from 'react';
import Section from './Section';

const Filter = ({filterExpanded, onToggleFilter}) => {

    let filterClass1 = 'sidebar sidebar-main';
    let filterClass2 = 'block filter';

    if (filterExpanded) {
        filterClass1 += ' column-open';
        filterClass2 += ' column-open';
    }

    return (
        <div id="leftColumn" className="col-md-4 col-lg-3 col-xl-2">
            <div className={filterClass1}>
                <div className={filterClass2} id="layered-filter-block"><a
                    className="slide-column-close visible-sm visible-xs" onClick={onToggleFilter}><span
                    className="icon icon-chevron_left"/> back</a>
                    <div className="block-title filter-title" role="tablist"><strong role="tab">Shop By</strong></div>
                    <div className="block-content filter-content">
                        <strong role="heading" className="block-subtitle filter-subtitle">Shopping
                            Options</strong>
                        <div className="filter-options" id="narrow-by-list" role="tablist">
                            <Section title="Цена"/>
                            <Section title="Емкость"/>
                            <Section title="Что-то"/>
                        </div>
                        <div id="ln_overlay" className="ln_overlay">
                            <div className="spinner_layered">
                                <div className="rect1"/>
                                <div className="rect2"/>
                                <div className="rect3"/>
                                <div className="rect4"/>
                                <div className="rect5"/>
                            </div>
                        </div>
                        <style type="text/css"
                               dangerouslySetInnerHTML={{__html: " .ln_overlay {\n                                background-color: #FFFFFF;\n                                height: 100%;\n                                left: 0;\n                                opacity: 0.65;\n                                filter: alpha(opacity=65);\n                                position: absolute;\n                                top: 0;\n                                width: 100%;\n                                z-index: 555;\n                                display: none;\n                            }\n\n                            .ln_overlay img {\n                                top: 30%;\n                                left: 45%;\n                                display: block;\n                                position: absolute;\n                            }"}}/>
                    </div>
                </div>
                <style type="text/css"
                       dangerouslySetInnerHTML={{__html: " .ln_overlay {\n                        background-color: #FFFFFF;\n                        height: 100%;\n                        left: 0;\n                        opacity: 0.65;\n                        filter: alpha(opacity=65);\n                        position: absolute;\n                        top: 0;\n                        width: 100%;\n                        z-index: 555;\n                        display: none;\n                    }\n\n                    .ln_overlay img {\n                        top: 30%;\n                        left: 45%;\n                        display: block;\n                        position: absolute;\n                    }"}}/>
            </div>
            <div className="sidebar sidebar-additional">
                <div className="block block-compare" data-bind="scope: 'compareProducts'"
                     data-role="compare-products-sidebar">
                    <div className="block-title"><strong id="block-compare-heading" role="heading"
                                                         aria-level={2}>Compare
                        Products</strong> <span className="counter qty no-display"
                                                data-bind="text: compareProducts().countCaption, css: {'no-display': !compareProducts().count}">0 items</span>
                    </div>
                    <div className="empty">You have no items to compare.</div>
                </div>
                <div className="block block-wishlist" data-bind="scope: 'wishlist'">
                    <div className="block-title"><strong>My WishList</strong>
                    </div>
                    <div className="block-content"><strong className="subtitle">Last Added Items</strong>
                        <div className="empty">You have no items in your wish list.</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Filter;