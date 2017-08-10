import React from 'react';
import Layout from 'components/Layout';

const Grid = ({onToggleFilter}) => {

    return (
        <div id="centerColumn" className="col-md-8 col-lg-9 col-xl-10">
            <div className="page-title-wrapper"><h1 className="page-title" id="page-title-heading"
                                                    aria-labelledby="page-title-heading toolbar-amount">
                <span className="base" data-ui-id="page-title-wrapper">Skin Care</span></h1></div>
            <div className="column main">
                <div className="category-view"/>
                <input name="form_key" type="hidden" defaultValue="5NCTGMrIjXLvump9"/>
                <div id="authenticationPopup" data-bind="scope:'authenticationPopup'"
                     style={{display: 'none'}}>
                    {/* /ko */}</div>
                <div id="layer-product-list">
                    <div className="toolbar toolbar-products"><a onClick={onToggleFilter}
                        className="btn btn--ys slide-column-open visible-xs visible-sm hidden-xl hidden-lg hidden-md">Filter</a>
                        <div className="modes"><strong className="modes-label" id="modes-label">View
                            as</strong> <strong title="Grid" className="modes-mode active mode-grid"
                                                data-value="grid"><span>Grid</span></strong>
                            <a className="modes-mode mode-list" title="List" href="#"
                               data-role="mode-switcher" data-value="list" id="mode-list"
                               aria-labelledby="modes-label mode-list"><span>List</span></a></div>
                        <p className="toolbar-amount" id="toolbar-amount"><span
                            className="toolbar-number">8</span> Items
                        </p>
                        <div className="field limiter"><label className="label_limiter"
                                                              htmlFor="limiter"><span>Show</span></label>
                            <div className="control select-wrapper"><select id="limiter" data-role="limiter"
                                                                            className="limiter-options select--ys show-qty">
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={30}>30</option>
                            </select></div>
                            <span className="limiter-text">per page</span></div>
                        <div className="toolbar-sorter sorter"><label className="sorter-label"
                                                                      htmlFor="sorter">Sort By</label>
                            <div className="select-wrapper"><select id="sorter" data-role="sorter"
                                                                    className="sorter-options select--ys sort-position">
                                <option value="position">Position</option>
                                <option value="name">Product Name</option>
                                <option value="price">Price</option>
                            </select></div>
                            <a title="Set Descending Direction" href="#"
                               className="action sorter-action sort-asc" data-role="direction-switcher"
                               data-value="desc"><span>Set Descending Direction</span></a></div>
                    </div>
                    <div className="products wrapper grid products-grid">
                        <ol className="products list items product-items custom-height-count row">
                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                <div className="item_placeholder"/>
                                <div className="product-item-info product_holder product--zoom"
                                     data-container="product-grid">
                                    <div className="product_holder__inside">
                                        <div className="product photo product-item-photo"><a
                                            href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-20.html"
                                            tabIndex={-1}> <span className="product-image-container"
                                                                 style={{width: 370}}><span
                                            className="product-image-wrapper"
                                            style={{paddingBottom: '123.783783784%'}}><img
                                            className="product-image-photo"
                                            src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/b/a/balmelicious---vanilla-_-peppermint.jpg"
                                            width={370} height={458}
                                            alt="Balmelicious Vanilla"/></span></span></a> <a
                                            className="weltpixel-quickview quick-view weltpixel_quickview_button_v2"
                                            data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2728/"
                                            href="javascript:void(0);"><b><span
                                            className="icon icon-visibility"/>Quick view</b></a></div>
                                        <div className="product details product-item-details">
                                            <div className="product name product-item-name"><h2><a
                                                className="product-item-link"
                                                href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-20.html">Balmelicious
                                                Vanilla</a></h2></div>
                                            <div className="price-box price-final_price"
                                                 data-role="priceBox" data-product-id={2728}><span
                                                className="price-container price-final_price tax weee"> <span
                                                id="product-price-2728" data-price-amount={100}
                                                data-price-type="finalPrice"
                                                className="price-wrapper "><span
                                                className="price">$100.00</span></span></span> <a
                                                href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-20.html"
                                                className="minimal-price-link"> <span
                                                className="price-container price-final_price tax weee"> <span
                                                className="price-label">As low as</span>  <span id={2728}
                                                                                                data-price-amount={70}
                                                                                                data-price-type
                                                                                                className="price-wrapper ">$70.00</span></span></a>
                                            </div>
                                            <div
                                                className="product_holder__inside__review row-mode-visible">
                                                <div className="rating row-mode-visible"/>
                                            </div>
                                            <div
                                                className="product-item-inner product_holder__inside__hover">
                                                <div
                                                    className="product actions product-item-actions product_holder__inside__info">
                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2"
                                                       data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2728/"
                                                       href="javascript:void(0);"><span>Quickview</span></a>
                                                    <div className="product_holder__inside__info__btns">
                                                        <div className="actions-primary">
                                                            <form className="listing_form"
                                                                  data-role="tocart-form"
                                                                  action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2728/"
                                                                  method="post"><input type="hidden"
                                                                                       name="product"
                                                                                       defaultValue={2728}/><input
                                                                type="hidden" name="uenc"
                                                                defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3Mjgv"/><input
                                                                name="form_key" type="hidden"
                                                                defaultValue="5NCTGMrIjXLvump9"/>
                                                                <button type="submit" title="Add to Cart"
                                                                        className="action tocart primary btn--ys btn--xl">
                                                                    <i className="icon icon-shopping_basket"/>
                                                                    <span>Add to Cart</span>
                                                                </button>
                                                            </form>
                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2"
                                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2728/"
                                                               href="javascript:void(0);"><b><span
                                                                className="icon icon-visibility"/>Quick
                                                                view</b></a> <a href="#"
                                                                                className="btn btn--ys btn--xl visible-xs"
                                                                                title="Add to Wish List"
                                                                                aria-label="Add to Wish List"
                                                                                data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2728&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                                                data-action="add-to-wishlist"
                                                                                role="button"><span
                                                            className="icon icon-favorite_border"/></a> <a
                                                            href="#"
                                                            className="btn btn--ys btn--xl visible-xs"
                                                            title="Add to Compare"
                                                            aria-label="Add to Compare"
                                                            data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2728&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                            role="button"><span className="icon icon-sort"/></a>
                                                        </div>
                                                    </div>
                                                    <div data-role="add-to-links"
                                                         className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                        <a href="#" className="action towishlist"
                                                           title="Add to Wish List"
                                                           aria-label="Add to Wish List"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2728&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           data-action="add-to-wishlist"
                                                           role="button"><span>Add to Wish List</span></a>
                                                        <a href="#" className="action tocompare"
                                                           title="Add to Compare"
                                                           aria-label="Add to Compare"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2728&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           role="button"><span>Add to Compare</span></a>
                                                    </div>
                                                </div>
                                                <div className="rating row-mode-hide"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                <div className="item_placeholder"/>
                                <div className="product-item-info product_holder product--zoom"
                                     data-container="product-grid">
                                    <div className="product_holder__inside">
                                        <div className="product photo product-item-photo"><a
                                            href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-21.html"
                                            tabIndex={-1}> <span className="product-image-container"
                                                                 style={{width: 370}}><span
                                            className="product-image-wrapper"
                                            style={{paddingBottom: '123.783783784%'}}><img
                                            className="product-image-photo"
                                            src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/c/l/cleansing-facial-wash.jpg"
                                            width={370} height={458}
                                            alt="Cleansing-Facial-Wash"/></span></span></a>
                                            <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2"
                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2730/"
                                               href="javascript:void(0);"><b><span
                                                className="icon icon-visibility"/>Quick view</b></a></div>
                                        <div className="product details product-item-details">
                                            <div className="product name product-item-name"><h2><a
                                                className="product-item-link"
                                                href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-21.html">Cleansing-Facial-Wash</a>
                                            </h2></div>
                                            <div className="price-box price-final_price"
                                                 data-role="priceBox" data-product-id={2730}><span
                                                className="price-container price-final_price tax weee"> <span
                                                id="product-price-2730" data-price-amount={200}
                                                data-price-type="finalPrice"
                                                className="price-wrapper "><span
                                                className="price">$200.00</span></span></span></div>
                                            <div
                                                className="product_holder__inside__review row-mode-visible">
                                                <div className="rating row-mode-visible"/>
                                            </div>
                                            <div
                                                className="product-item-inner product_holder__inside__hover">
                                                <div
                                                    className="product actions product-item-actions product_holder__inside__info">
                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2"
                                                       data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2730/"
                                                       href="javascript:void(0);"><span>Quickview</span></a>
                                                    <div className="product_holder__inside__info__btns">
                                                        <div className="actions-primary">
                                                            <form className="listing_form"
                                                                  data-role="tocart-form"
                                                                  action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2730/"
                                                                  method="post"><input type="hidden"
                                                                                       name="product"
                                                                                       defaultValue={2730}/><input
                                                                type="hidden" name="uenc"
                                                                defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3MzAv"/><input
                                                                name="form_key" type="hidden"
                                                                defaultValue="5NCTGMrIjXLvump9"/>
                                                                <button type="submit" title="Add to Cart"
                                                                        className="action tocart primary btn--ys btn--xl">
                                                                    <i className="icon icon-shopping_basket"/>
                                                                    <span>Add to Cart</span>
                                                                </button>
                                                            </form>
                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2"
                                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2730/"
                                                               href="javascript:void(0);"><b><span
                                                                className="icon icon-visibility"/>Quick
                                                                view</b></a> <a href="#"
                                                                                className="btn btn--ys btn--xl visible-xs"
                                                                                title="Add to Wish List"
                                                                                aria-label="Add to Wish List"
                                                                                data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2730&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                                                data-action="add-to-wishlist"
                                                                                role="button"><span
                                                            className="icon icon-favorite_border"/></a> <a
                                                            href="#"
                                                            className="btn btn--ys btn--xl visible-xs"
                                                            title="Add to Compare"
                                                            aria-label="Add to Compare"
                                                            data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2730&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                            role="button"><span className="icon icon-sort"/></a>
                                                        </div>
                                                    </div>
                                                    <div data-role="add-to-links"
                                                         className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                        <a href="#" className="action towishlist"
                                                           title="Add to Wish List"
                                                           aria-label="Add to Wish List"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2730&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           data-action="add-to-wishlist"
                                                           role="button"><span>Add to Wish List</span></a>
                                                        <a href="#" className="action tocompare"
                                                           title="Add to Compare"
                                                           aria-label="Add to Compare"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2730&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           role="button"><span>Add to Compare</span></a>
                                                    </div>
                                                </div>
                                                <div className="rating row-mode-hide"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                <div className="item_placeholder"/>
                                <div className="product-item-info product_holder product--zoom"
                                     data-container="product-grid">
                                    <div className="product_holder__inside">
                                        <div className="product photo product-item-photo"><a
                                            href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-23.html"
                                            tabIndex={-1}> <span className="product-image-container"
                                                                 style={{width: 370}}><span
                                            className="product-image-wrapper"
                                            style={{paddingBottom: '123.783783784%'}}><img
                                            className="product-image-photo"
                                            src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/d/u/dusk-to-dawn---revitalising-night-cr_me.jpg"
                                            width={370} height={458}
                                            alt="Dusk to Dawn Revitalising Night Crème"/></span></span></a>
                                            <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2"
                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2734/"
                                               href="javascript:void(0);"><b><span
                                                className="icon icon-visibility"/>Quick view</b></a></div>
                                        <div className="product details product-item-details">
                                            <div className="product name product-item-name"><h2><a
                                                className="product-item-link"
                                                href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-23.html">Dusk
                                                to Dawn Revitalising Night Crème</a></h2></div>
                                            <div className="price-box price-final_price"
                                                 data-role="priceBox" data-product-id={2734}><span
                                                className="price-container price-final_price tax weee"> <span
                                                id="product-price-2734" data-price-amount={400}
                                                data-price-type="finalPrice"
                                                className="price-wrapper "><span
                                                className="price">$400.00</span></span></span></div>
                                            <div
                                                className="product_holder__inside__review row-mode-visible">
                                                <div className="rating row-mode-visible"/>
                                            </div>
                                            <div
                                                className="product-item-inner product_holder__inside__hover">
                                                <div
                                                    className="product actions product-item-actions product_holder__inside__info">
                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2"
                                                       data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2734/"
                                                       href="javascript:void(0);"><span>Quickview</span></a>
                                                    <div className="product_holder__inside__info__btns">
                                                        <div className="actions-primary">
                                                            <form className="listing_form"
                                                                  data-role="tocart-form"
                                                                  action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2734/"
                                                                  method="post"><input type="hidden"
                                                                                       name="product"
                                                                                       defaultValue={2734}/><input
                                                                type="hidden" name="uenc"
                                                                defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3MzQv"/><input
                                                                name="form_key" type="hidden"
                                                                defaultValue="5NCTGMrIjXLvump9"/>
                                                                <button type="submit" title="Add to Cart"
                                                                        className="action tocart primary btn--ys btn--xl">
                                                                    <i className="icon icon-shopping_basket"/>
                                                                    <span>Add to Cart</span>
                                                                </button>
                                                            </form>
                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2"
                                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2734/"
                                                               href="javascript:void(0);"><b><span
                                                                className="icon icon-visibility"/>Quick
                                                                view</b></a> <a href="#"
                                                                                className="btn btn--ys btn--xl visible-xs"
                                                                                title="Add to Wish List"
                                                                                aria-label="Add to Wish List"
                                                                                data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2734&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                                                data-action="add-to-wishlist"
                                                                                role="button"><span
                                                            className="icon icon-favorite_border"/></a> <a
                                                            href="#"
                                                            className="btn btn--ys btn--xl visible-xs"
                                                            title="Add to Compare"
                                                            aria-label="Add to Compare"
                                                            data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2734&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                            role="button"><span className="icon icon-sort"/></a>
                                                        </div>
                                                    </div>
                                                    <div data-role="add-to-links"
                                                         className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                        <a href="#" className="action towishlist"
                                                           title="Add to Wish List"
                                                           aria-label="Add to Wish List"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2734&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           data-action="add-to-wishlist"
                                                           role="button"><span>Add to Wish List</span></a>
                                                        <a href="#" className="action tocompare"
                                                           title="Add to Compare"
                                                           aria-label="Add to Compare"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2734&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           role="button"><span>Add to Compare</span></a>
                                                    </div>
                                                </div>
                                                <div className="rating row-mode-hide"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                <div className="item_placeholder"/>
                                <div className="product-item-info product_holder product--zoom"
                                     data-container="product-grid">
                                    <div className="product_holder__inside">
                                        <div className="product photo product-item-photo"><a
                                            href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-24.html"
                                            tabIndex={-1}> <span className="product-image-container"
                                                                 style={{width: 370}}><span
                                            className="product-image-wrapper"
                                            style={{paddingBottom: '123.783783784%'}}><img
                                            className="product-image-photo"
                                            src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/f/o/forget-me-knot-_new-formulation_.jpg"
                                            width={370} height={458}
                                            alt="Forget Me Knot"/></span></span></a> <a
                                            className="weltpixel-quickview quick-view weltpixel_quickview_button_v2"
                                            data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2737/"
                                            href="javascript:void(0);"><b><span
                                            className="icon icon-visibility"/>Quick view</b></a></div>
                                        <div className="product details product-item-details">
                                            <div className="product name product-item-name"><h2><a
                                                className="product-item-link"
                                                href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-24.html">Forget
                                                Me Knot</a></h2></div>
                                            <div className="price-box price-final_price"
                                                 data-role="priceBox" data-product-id={2737}><span
                                                className="price-container price-final_price tax weee"> <span
                                                id="product-price-2737" data-price-amount={500}
                                                data-price-type="finalPrice"
                                                className="price-wrapper "><span
                                                className="price">$500.00</span></span></span></div>
                                            <div
                                                className="product_holder__inside__review row-mode-visible">
                                                <div className="rating row-mode-visible"/>
                                            </div>
                                            <div
                                                className="product-item-inner product_holder__inside__hover">
                                                <div
                                                    className="product actions product-item-actions product_holder__inside__info">
                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2"
                                                       data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2737/"
                                                       href="javascript:void(0);"><span>Quickview</span></a>
                                                    <div className="product_holder__inside__info__btns">
                                                        <div className="actions-primary">
                                                            <form className="listing_form"
                                                                  data-role="tocart-form"
                                                                  action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2737/"
                                                                  method="post"><input type="hidden"
                                                                                       name="product"
                                                                                       defaultValue={2737}/><input
                                                                type="hidden" name="uenc"
                                                                defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3Mzcv"/><input
                                                                name="form_key" type="hidden"
                                                                defaultValue="5NCTGMrIjXLvump9"/>
                                                                <button type="submit" title="Add to Cart"
                                                                        className="action tocart primary btn--ys btn--xl">
                                                                    <i className="icon icon-shopping_basket"/>
                                                                    <span>Add to Cart</span>
                                                                </button>
                                                            </form>
                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2"
                                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2737/"
                                                               href="javascript:void(0);"><b><span
                                                                className="icon icon-visibility"/>Quick
                                                                view</b></a> <a href="#"
                                                                                className="btn btn--ys btn--xl visible-xs"
                                                                                title="Add to Wish List"
                                                                                aria-label="Add to Wish List"
                                                                                data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2737&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                                                data-action="add-to-wishlist"
                                                                                role="button"><span
                                                            className="icon icon-favorite_border"/></a> <a
                                                            href="#"
                                                            className="btn btn--ys btn--xl visible-xs"
                                                            title="Add to Compare"
                                                            aria-label="Add to Compare"
                                                            data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2737&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                            role="button"><span className="icon icon-sort"/></a>
                                                        </div>
                                                    </div>
                                                    <div data-role="add-to-links"
                                                         className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                        <a href="#" className="action towishlist"
                                                           title="Add to Wish List"
                                                           aria-label="Add to Wish List"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2737&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           data-action="add-to-wishlist"
                                                           role="button"><span>Add to Wish List</span></a>
                                                        <a href="#" className="action tocompare"
                                                           title="Add to Compare"
                                                           aria-label="Add to Compare"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2737&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           role="button"><span>Add to Compare</span></a>
                                                    </div>
                                                </div>
                                                <div className="rating row-mode-hide"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                <div className="item_placeholder"/>
                                <div className="product-item-info product_holder product--zoom"
                                     data-container="product-grid">
                                    <div className="product_holder__inside">
                                        <div className="product photo product-item-photo"><a
                                            href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-26.html"
                                            tabIndex={-1}> <span className="product-image-container"
                                                                 style={{width: 370}}><span
                                            className="product-image-wrapper"
                                            style={{paddingBottom: '123.783783784%'}}><img
                                            className="product-image-photo"
                                            src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/l/e/les-fleurs-de-bach-travels.jpg"
                                            width={370} height={458}
                                            alt="Les Fleurs de Bach Travels"/></span></span></a> <a
                                            className="weltpixel-quickview quick-view weltpixel_quickview_button_v2"
                                            data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2741/"
                                            href="javascript:void(0);"><b><span
                                            className="icon icon-visibility"/>Quick view</b></a></div>
                                        <div className="product details product-item-details">
                                            <div className="product name product-item-name"><h2><a
                                                className="product-item-link"
                                                href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-26.html">Les
                                                Fleurs de Bach Travels</a></h2></div>
                                            <div className="price-box price-final_price"
                                                 data-role="priceBox" data-product-id={2741}><span
                                                className="price-container price-final_price tax weee"> <span
                                                id="product-price-2741" data-price-amount={700}
                                                data-price-type="finalPrice"
                                                className="price-wrapper "><span
                                                className="price">$700.00</span></span></span></div>
                                            <div
                                                className="product_holder__inside__review row-mode-visible">
                                                <div className="rating row-mode-visible"/>
                                            </div>
                                            <div
                                                className="product-item-inner product_holder__inside__hover">
                                                <div
                                                    className="product actions product-item-actions product_holder__inside__info">
                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2"
                                                       data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2741/"
                                                       href="javascript:void(0);"><span>Quickview</span></a>
                                                    <div className="product_holder__inside__info__btns">
                                                        <div className="actions-primary">
                                                            <form className="listing_form"
                                                                  data-role="tocart-form"
                                                                  action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2741/"
                                                                  method="post"><input type="hidden"
                                                                                       name="product"
                                                                                       defaultValue={2741}/><input
                                                                type="hidden" name="uenc"
                                                                defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3NDEv"/><input
                                                                name="form_key" type="hidden"
                                                                defaultValue="5NCTGMrIjXLvump9"/>
                                                                <button type="submit" title="Add to Cart"
                                                                        className="action tocart primary btn--ys btn--xl">
                                                                    <i className="icon icon-shopping_basket"/>
                                                                    <span>Add to Cart</span>
                                                                </button>
                                                            </form>
                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2"
                                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2741/"
                                                               href="javascript:void(0);"><b><span
                                                                className="icon icon-visibility"/>Quick
                                                                view</b></a> <a href="#"
                                                                                className="btn btn--ys btn--xl visible-xs"
                                                                                title="Add to Wish List"
                                                                                aria-label="Add to Wish List"
                                                                                data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2741&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                                                data-action="add-to-wishlist"
                                                                                role="button"><span
                                                            className="icon icon-favorite_border"/></a> <a
                                                            href="#"
                                                            className="btn btn--ys btn--xl visible-xs"
                                                            title="Add to Compare"
                                                            aria-label="Add to Compare"
                                                            data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2741&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                            role="button"><span className="icon icon-sort"/></a>
                                                        </div>
                                                    </div>
                                                    <div data-role="add-to-links"
                                                         className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                        <a href="#" className="action towishlist"
                                                           title="Add to Wish List"
                                                           aria-label="Add to Wish List"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2741&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           data-action="add-to-wishlist"
                                                           role="button"><span>Add to Wish List</span></a>
                                                        <a href="#" className="action tocompare"
                                                           title="Add to Compare"
                                                           aria-label="Add to Compare"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2741&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           role="button"><span>Add to Compare</span></a>
                                                    </div>
                                                </div>
                                                <div className="rating row-mode-hide"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                <div className="item_placeholder"/>
                                <div className="product-item-info product_holder product--zoom"
                                     data-container="product-grid">
                                    <div className="product_holder__inside">
                                        <div className="product photo product-item-photo"><a
                                            href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-25.html"
                                            tabIndex={-1}> <span className="product-image-container"
                                                                 style={{width: 370}}><span
                                            className="product-image-wrapper"
                                            style={{paddingBottom: '123.783783784%'}}><img
                                            className="product-image-photo"
                                            src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/l/o/love-a-scrub.jpg"
                                            width={370} height={458} alt="Love a Scrub"/></span></span></a>
                                            <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2"
                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2738/"
                                               href="javascript:void(0);"><b><span
                                                className="icon icon-visibility"/>Quick view</b></a></div>
                                        <div className="product details product-item-details">
                                            <div className="product name product-item-name"><h2><a
                                                className="product-item-link"
                                                href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-25.html">Love
                                                a Scrub</a></h2></div>
                                            <div className="price-box price-final_price"
                                                 data-role="priceBox" data-product-id={2738}><span
                                                className="price-container price-final_price tax weee"> <span
                                                id="product-price-2738" data-price-amount={800}
                                                data-price-type="finalPrice"
                                                className="price-wrapper "><span
                                                className="price">$800.00</span></span></span></div>
                                            <div
                                                className="product_holder__inside__review row-mode-visible">
                                                <div className="rating row-mode-visible"/>
                                            </div>
                                            <div
                                                className="product-item-inner product_holder__inside__hover">
                                                <div
                                                    className="product actions product-item-actions product_holder__inside__info">
                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2"
                                                       data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2738/"
                                                       href="javascript:void(0);"><span>Quickview</span></a>
                                                    <div className="product_holder__inside__info__btns">
                                                        <div className="actions-primary">
                                                            <form className="listing_form"
                                                                  data-role="tocart-form"
                                                                  action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2738/"
                                                                  method="post"><input type="hidden"
                                                                                       name="product"
                                                                                       defaultValue={2738}/><input
                                                                type="hidden" name="uenc"
                                                                defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3Mzgv"/><input
                                                                name="form_key" type="hidden"
                                                                defaultValue="5NCTGMrIjXLvump9"/>
                                                                <button type="submit" title="Add to Cart"
                                                                        className="action tocart primary btn--ys btn--xl">
                                                                    <i className="icon icon-shopping_basket"/>
                                                                    <span>Add to Cart</span>
                                                                </button>
                                                            </form>
                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2"
                                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2738/"
                                                               href="javascript:void(0);"><b><span
                                                                className="icon icon-visibility"/>Quick
                                                                view</b></a> <a href="#"
                                                                                className="btn btn--ys btn--xl visible-xs"
                                                                                title="Add to Wish List"
                                                                                aria-label="Add to Wish List"
                                                                                data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2738&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                                                data-action="add-to-wishlist"
                                                                                role="button"><span
                                                            className="icon icon-favorite_border"/></a> <a
                                                            href="#"
                                                            className="btn btn--ys btn--xl visible-xs"
                                                            title="Add to Compare"
                                                            aria-label="Add to Compare"
                                                            data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2738&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                            role="button"><span className="icon icon-sort"/></a>
                                                        </div>
                                                    </div>
                                                    <div data-role="add-to-links"
                                                         className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                        <a href="#" className="action towishlist"
                                                           title="Add to Wish List"
                                                           aria-label="Add to Wish List"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2738&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           data-action="add-to-wishlist"
                                                           role="button"><span>Add to Wish List</span></a>
                                                        <a href="#" className="action tocompare"
                                                           title="Add to Compare"
                                                           aria-label="Add to Compare"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2738&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           role="button"><span>Add to Compare</span></a>
                                                    </div>
                                                </div>
                                                <div className="rating row-mode-hide"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                <div className="item_placeholder"/>
                                <div className="product-item-info product_holder product--zoom"
                                     data-container="product-grid">
                                    <div className="product_holder__inside">
                                        <div className="product photo product-item-photo"><a
                                            href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-28.html"
                                            tabIndex={-1}> <span className="product-image-container"
                                                                 style={{width: 370}}><span
                                            className="product-image-wrapper"
                                            style={{paddingBottom: '123.783783784%'}}><img
                                            className="product-image-photo"
                                            src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/s/m/smoothing-facial-serum.jpg"
                                            width={370} height={458}
                                            alt="Smoothing Facial Serum"/></span></span></a>
                                            <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2"
                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2765/"
                                               href="javascript:void(0);"><b><span
                                                className="icon icon-visibility"/>Quick view</b></a></div>
                                        <div className="product details product-item-details">
                                            <div className="product name product-item-name"><h2><a
                                                className="product-item-link"
                                                href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-28.html">Smoothing
                                                Facial Serum</a></h2></div>
                                            <div className="price-box price-final_price"
                                                 data-role="priceBox" data-product-id={2765}><span
                                                className="price-container price-final_price tax weee"> <span
                                                id="product-price-2765" data-price-amount={100}
                                                data-price-type="finalPrice"
                                                className="price-wrapper "><span
                                                className="price">$100.00</span></span></span></div>
                                            <div
                                                className="product_holder__inside__review row-mode-visible">
                                                <div className="rating row-mode-visible"/>
                                            </div>
                                            <div
                                                className="product-item-inner product_holder__inside__hover">
                                                <div
                                                    className="product actions product-item-actions product_holder__inside__info">
                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2"
                                                       data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2765/"
                                                       href="javascript:void(0);"><span>Quickview</span></a>
                                                    <div className="product_holder__inside__info__btns">
                                                        <div className="actions-primary">
                                                            <form className="listing_form"
                                                                  data-role="tocart-form"
                                                                  action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2765/"
                                                                  method="post"><input type="hidden"
                                                                                       name="product"
                                                                                       defaultValue={2765}/><input
                                                                type="hidden" name="uenc"
                                                                defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3NjUv"/><input
                                                                name="form_key" type="hidden"
                                                                defaultValue="5NCTGMrIjXLvump9"/>
                                                                <button type="submit" title="Add to Cart"
                                                                        className="action tocart primary btn--ys btn--xl">
                                                                    <i className="icon icon-shopping_basket"/>
                                                                    <span>Add to Cart</span>
                                                                </button>
                                                            </form>
                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2"
                                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2765/"
                                                               href="javascript:void(0);"><b><span
                                                                className="icon icon-visibility"/>Quick
                                                                view</b></a> <a href="#"
                                                                                className="btn btn--ys btn--xl visible-xs"
                                                                                title="Add to Wish List"
                                                                                aria-label="Add to Wish List"
                                                                                data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2765&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                                                data-action="add-to-wishlist"
                                                                                role="button"><span
                                                            className="icon icon-favorite_border"/></a> <a
                                                            href="#"
                                                            className="btn btn--ys btn--xl visible-xs"
                                                            title="Add to Compare"
                                                            aria-label="Add to Compare"
                                                            data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2765&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                            role="button"><span className="icon icon-sort"/></a>
                                                        </div>
                                                    </div>
                                                    <div data-role="add-to-links"
                                                         className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                        <a href="#" className="action towishlist"
                                                           title="Add to Wish List"
                                                           aria-label="Add to Wish List"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2765&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           data-action="add-to-wishlist"
                                                           role="button"><span>Add to Wish List</span></a>
                                                        <a href="#" className="action tocompare"
                                                           title="Add to Compare"
                                                           aria-label="Add to Compare"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2765&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           role="button"><span>Add to Compare</span></a>
                                                    </div>
                                                </div>
                                                <div className="rating row-mode-hide"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                <div className="item_placeholder"/>
                                <div className="product-item-info product_holder product--zoom"
                                     data-container="product-grid">
                                    <div className="product_holder__inside">
                                        <div className="product photo product-item-photo"><a
                                            href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-27.html"
                                            tabIndex={-1}> <span className="product-image-container"
                                                                 style={{width: 370}}><span
                                            className="product-image-wrapper"
                                            style={{paddingBottom: '123.783783784%'}}><img
                                            className="product-image-photo"
                                            src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/m/d/md-solarsciences-quick-dry-body-spray-spf-40.jpg"
                                            width={370} height={458}
                                            alt="SolarSciences Quick Dry Body Spray"/></span></span></a> <a
                                            className="weltpixel-quickview quick-view weltpixel_quickview_button_v2"
                                            data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2742/"
                                            href="javascript:void(0);"><b><span
                                            className="icon icon-visibility"/>Quick view</b></a></div>
                                        <div className="product details product-item-details">
                                            <div className="product name product-item-name"><h2><a
                                                className="product-item-link"
                                                href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-27.html">SolarSciences
                                                Quick Dry Body Spray</a></h2></div>
                                            <div className="price-box price-final_price"
                                                 data-role="priceBox" data-product-id={2742}><span
                                                className="price-container price-final_price tax weee"> <span
                                                id="product-price-2742" data-price-amount={900}
                                                data-price-type="finalPrice"
                                                className="price-wrapper "><span
                                                className="price">$900.00</span></span></span></div>
                                            <div
                                                className="product_holder__inside__review row-mode-visible">
                                                <div className="rating row-mode-visible"/>
                                            </div>
                                            <div
                                                className="product-item-inner product_holder__inside__hover">
                                                <div
                                                    className="product actions product-item-actions product_holder__inside__info">
                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2"
                                                       data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2742/"
                                                       href="javascript:void(0);"><span>Quickview</span></a>
                                                    <div className="product_holder__inside__info__btns">
                                                        <div className="actions-primary">
                                                            <form className="listing_form"
                                                                  data-role="tocart-form"
                                                                  action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2742/"
                                                                  method="post"><input type="hidden"
                                                                                       name="product"
                                                                                       defaultValue={2742}/><input
                                                                type="hidden" name="uenc"
                                                                defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3NDIv"/><input
                                                                name="form_key" type="hidden"
                                                                defaultValue="5NCTGMrIjXLvump9"/>
                                                                <button type="submit" title="Add to Cart"
                                                                        className="action tocart primary btn--ys btn--xl">
                                                                    <i className="icon icon-shopping_basket"/>
                                                                    <span>Add to Cart</span>
                                                                </button>
                                                            </form>
                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2"
                                                               data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2742/"
                                                               href="javascript:void(0);"><b><span
                                                                className="icon icon-visibility"/>Quick
                                                                view</b></a> <a href="#"
                                                                                className="btn btn--ys btn--xl visible-xs"
                                                                                title="Add to Wish List"
                                                                                aria-label="Add to Wish List"
                                                                                data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2742&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                                                data-action="add-to-wishlist"
                                                                                role="button"><span
                                                            className="icon icon-favorite_border"/></a> <a
                                                            href="#"
                                                            className="btn btn--ys btn--xl visible-xs"
                                                            title="Add to Compare"
                                                            aria-label="Add to Compare"
                                                            data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2742&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                            role="button"><span className="icon icon-sort"/></a>
                                                        </div>
                                                    </div>
                                                    <div data-role="add-to-links"
                                                         className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                        <a href="#" className="action towishlist"
                                                           title="Add to Wish List"
                                                           aria-label="Add to Wish List"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2742&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           data-action="add-to-wishlist"
                                                           role="button"><span>Add to Wish List</span></a>
                                                        <a href="#" className="action tocompare"
                                                           title="Add to Compare"
                                                           aria-label="Add to Compare"
                                                           data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2742&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}"
                                                           role="button"><span>Add to Compare</span></a>
                                                    </div>
                                                </div>
                                                <div className="rating row-mode-hide"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className="toolbar toolbar-products"><a
                        className="btn btn--ys slide-column-open visible-xs visible-sm hidden-xl hidden-lg hidden-md"
                        href="#">Filter</a>
                        <div className="modes"><strong className="modes-label" id="modes-label">View
                            as</strong> <strong title="Grid" className="modes-mode active mode-grid"
                                                data-value="grid"><span>Grid</span></strong>
                            <a className="modes-mode mode-list" title="List" href="#"
                               data-role="mode-switcher" data-value="list" id="mode-list"
                               aria-labelledby="modes-label mode-list"><span>List</span></a></div>
                        <p className="toolbar-amount" id="toolbar-amount"><span
                            className="toolbar-number">8</span> Items
                        </p>
                        <div className="field limiter"><label className="label_limiter"
                                                              htmlFor="limiter"><span>Show</span></label>
                            <div className="control select-wrapper"><select id="limiter" data-role="limiter"
                                                                            className="limiter-options select--ys show-qty">
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={30}>30</option>
                            </select></div>
                            <span className="limiter-text">per page</span></div>
                        <div className="toolbar-sorter sorter"><label className="sorter-label"
                                                                      htmlFor="sorter">Sort By</label>
                            <div className="select-wrapper"><select id="sorter" data-role="sorter"
                                                                    className="sorter-options select--ys sort-position">
                                <option value="position">Position</option>
                                <option value="name">Product Name</option>
                                <option value="price">Price</option>
                            </select></div>
                            <a title="Set Descending Direction" href="#"
                               className="action sorter-action sort-asc" data-role="direction-switcher"
                               data-value="desc"><span>Set Descending Direction</span></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Grid;