import React, {Component} from 'react'

export default class App extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<div className="page-with-filter page-products categorypath-skin-care category-skin-care catalog-category-view page-layout-2columns-left">
            <header id="header" className="header-layout-06">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">{/* logo start */} <a className="logo" href="http://magento-demo16.tonytemplates.com/yourstore/" title="Magento Commerce"> <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/logo/stores/48/logo_skin4.png" alt="Magento Commerce" width={317} height={79} /></a>  {/* logo end */}</div>
                        <div className="col-xl-7 col-lg-push-12">
                            <div className="stuck-nav fixedbar">
                                <div className="container">{/* navigation start */}
                                    <div className="col-stuck-menu">
                                        <div className="logo_sticky"><a href="http://magento-demo16.tonytemplates.com/yourstore/" title="Magento Commerce"><img data-retina="true" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/yourstore/logo/default/logo_st_desktop.png" alt="Magento Commerce" /></a></div>
                                        <nav className="navbar">
                                            <div className="responsive-menu mainMenu">{/* Mobile menu Button*/}
                                                <div className="col-xs-2 visible-mobile-menu-on">
                                                    <div className="expand-nav compact-hidden"><a href="#off-canvas-menu" className="off-canvas-menu-toggle">
                                                        <div className="navbar-toggle"><span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> <span className="menu-text">MENU</span></div>
                                                    </a></div>
                                                </div>
                                                <div className="tonyMenu tonyMenu-top tonyMenu__initialize" data-tm-style="horizontal" data-tm-breakpoint={1024} data-tm-mobile="true">
                                                    <nav className="tonyMenu__navbar">
                                                        <ul className="tonyMenu__nav-list">
                                                            <li className="tonyMenu__bth-close dl-close"><a href="#"><span className="icon icon-close" />close</a></li>
                                                            <li className="tonyMenu__item tonyMenu__item-next-level">
                                                                <a href="#"><span className="act-underline">LAYOUT</span>
                                                                    <div className="tonyMenu__transition-block" />
                                                                </a>
                                                                <div className="tonyMenu__megamenu tonyMenu__col-0-12-0" data-tm-width={1170} data-tm-align-horizontal="left" data-tm-align-vertical="item" data-tm-animation="emersion" data-tm-animation-in="emersion" data-tm-animation-out="emersion" data-tm-duration={300} data-tm-emersion-distance={60} data-tm-active="false" style={{display: 'none'}}>
                                                                    <div className="tonyMenu__box-center">
                                                                        <div className="tonyMenu__box-inner">
                                                                            <ul className="tonyMenu__list-preview tonyMenu__list-outer-border tonyMenu__inner-col-4">
                                                                                <li>
                                                                                    <a href="http://magento.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-1.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 1 (default)
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo2.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-2.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 2
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo3.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-3.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 3
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo4.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-4.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 4
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo5.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-5.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 5
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo6.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-6.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 6
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo7.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-7.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 7
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo8.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-8.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 8
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo9.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-9.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 9
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo10.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-10.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 10
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo11.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-11.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 11
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo12.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/layout-img-12.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Home page - layout 12
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                            <div className="clearfix" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="tonyMenu__item tonyMenu__item-next-level">
                                                                <a href="#"><span className="act-underline">SKINS</span>
                                                                    <div className="tonyMenu__transition-block" />
                                                                </a>
                                                                <div className="tonyMenu__megamenu tonyMenu__col-0-12-0" data-tm-width={1170} data-tm-align-horizontal="left" data-tm-align-vertical="item" data-tm-animation="emersion" data-tm-animation-in="emersion" data-tm-animation-out="emersion" data-tm-duration={300} data-tm-emersion-distance={60} data-tm-active="false" style={{display: 'none'}}>
                                                                    <div className="tonyMenu__box-center">
                                                                        <div className="tonyMenu__box-inner">
                                                                            <ul className="tonyMenu__list-preview tonyMenu__list-outer-border tonyMenu__inner-col-4">
                                                                                <li>
                                                                                    <a href="http://magento-demo13.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/skin1.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Gadgets
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo14.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/skin2.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Travel
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo15.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/skin3.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Lingerie
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/skin4.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Organic Cosmetics
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo17.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/skin5.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Furniture
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo18.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/skin6.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Baby Clothes
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo19.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/skin7.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Medical Equipments
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo20.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/skin8.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Jewelrys
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo21.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/skin9.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Watches
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo22.tonytemplates.com/yourstore/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/skin10.jpg" width={253} height={185} alt />
                                                                                        <div className="tonyMenu__btn-preview">Launch
                                                                                        </div>
                                                                                        Bikes Store
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                            <div className="clearfix" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="tonyMenu__item tonyMenu__item-next-level">
                                                                <a href="http://magento-demo16.tonytemplates.com/yourstore/gallery-page-1/"><span className="act-underline">GALLERY</span>
                                                                    <div className="tonyMenu__transition-block" />
                                                                </a>
                                                                <div className="tonyMenu__megamenu tonyMenu__col-0-12-0" data-tm-width="menu-outer-width" data-tm-align-horizontal="left" data-tm-align-vertical="menu-bottom" data-tm-animation="emersion" data-tm-animation-in="toggle" data-tm-animation-out="fade" data-tm-duration={300} data-tm-emersion-distance={60} data-tm-active="false" style={{display: 'none'}}>
                                                                    <div className="tonyMenu__box-center">
                                                                        <div className="tonyMenu__box-inner">
                                                                            <ul className="tonyMenu__list-preview tonyMenu__inner-col-5">
                                                                                <li>
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/gallery-page-1/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/gallery-menu-img-1.png" width={205} height={130} alt />
                                                                                        Gallery - layout 1
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/gallery-page-2/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/gallery-menu-img-2.png" width={205} height={130} alt />
                                                                                        Gallery - layout 2
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/gallery-page-3/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/gallery-menu-img-3.png" width={205} height={130} alt />
                                                                                        Gallery - layout 3
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/gallery-page-4/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/gallery-menu-img-4.png" width={205} height={130} alt />
                                                                                        Gallery - layout 4
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/gallery-page-5/">
                                                                                        <img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/megamenu/gallery-menu-img-5.png" width={205} height={130} alt />
                                                                                        Gallery - layout 5
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                            <div className="clearfix" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="tonyMenu__item tonyMenu__item-next-level">
                                                                <a href="http://magento-demo16.tonytemplates.com/yourstore/about/"><span className="act-underline">PAGES</span>
                                                                    <div className="tonyMenu__transition-block" />
                                                                </a>
                                                                <div className="tonyMenu__megamenu tonyMenu__col-0-12-0" data-tm-width={600} data-tm-align-horizontal="item-center" data-tm-align-vertical="menu-bottom" data-tm-animation="emersion" data-tm-animation-out="fade" data-tm-duration={360} data-tm-emersion-distance={140} data-tm-active="false" style={{display: 'none'}}>
                                                                    <div className="tonyMenu__box-center">
                                                                        <div className="tonyMenu__box-inner">
                                                                            <ul className="tonyMenu__inner-list-items
        tonyMenu__inner-list-single
        tonyMenu__inner-col-2">
                                                                                <li><a href="#">About</a></li>
                                                                                <li><a href="#">Typography</a></li>
                                                                                <li><a href="#">Sitemap</a></li>
                                                                                <li><a href="#">Contact</a></li>
                                                                                <li><a href="#">Create Account</a></li>
                                                                                <li><a href="#">Logination</a></li>
                                                                                <li><a href="#">About</a></li>
                                                                                <li><a href="#">Typography</a></li>
                                                                                <li><a href="#">Sitemap</a></li>
                                                                                <li><a href="#">Contact</a></li>
                                                                                <li><a href="#">Create Account</a></li>
                                                                            </ul>
                                                                            <div className="clearfix" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="tonyMenu__item tonyMenu__item-next-level">
                                                                <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup.html">
                                    <span className="act-underline">
                                      Makeup
                                    </span>
                                                                    <div className="tonyMenu__transition-block" />
                                                                </a>
                                                                <div className="tonyMenu__megamenu tonyMenu__col-0-12-0" data-tm-width={1170} data-tm-align-horizontal="left" data-tm-align-vertical="item" data-tm-animation="fade" data-tm-duration={300} data-tm-emersion-distance={60} data-tm-active="false" style={{display: 'none'}}>
                                                                    <div className="tonyMenu__box-center">
                                                                        <div className="tonyMenu__box-inner">
                                                                            <ul className="tonyMenu__inner-list-group tonyMenu__inner-col-3">
                                                                                <li className="tonyMenu__item-next-level">
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/face.html" className="tonyMenu__head-title">
                                              <span>
                                                Face
                                              </span>
                                                                                    </a>
                                                                                    <ul className="tonyMenu__inner-list-items">
                                                                                        <li className="level2  first">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/face/foundation.html">
                                                  <span>
                                                    Foundation
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/face/bb-cc-cream.html">
                                                  <span>
                                                    BB &amp; CC Cream
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/face/tinted-moisturizer.html">
                                                  <span>
                                                    Tinted Moisturizer
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/face/color-correct.html">
                                                  <span>
                                                    Color Correct
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2  last">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/face/contour.html">
                                                  <span>
                                                    Contour
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li className="tonyMenu__item-next-level">
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/cheek.html" className="tonyMenu__head-title">
                                              <span>
                                                Cheek
                                              </span>
                                                                                    </a>
                                                                                    <ul className="tonyMenu__inner-list-items">
                                                                                        <li className="level2  first">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/cheek/cheek-palattes.html">
                                                  <span>
                                                    Cheek Palattes
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/cheek/blush.html">
                                                  <span>
                                                    Blush
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/cheek/bronzer.html">
                                                  <span>
                                                    Bronzer
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/cheek/contour.html">
                                                  <span>
                                                    Contour
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2  last">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/cheek/highlighter.html">
                                                  <span>
                                                    Highlighter
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li className="tonyMenu__item-next-level">
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/eye.html" className="tonyMenu__head-title">
                                              <span>
                                                Eye
                                              </span>
                                                                                    </a>
                                                                                    <ul className="tonyMenu__inner-list-items">
                                                                                        <li className="level2  first">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/eye/eye-palettes.html">
                                                  <span>
                                                    Eye Palettes
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/eye/eyeliner.html">
                                                  <span>
                                                    Eyeliner
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/eye/mascara.html">
                                                  <span>
                                                    Mascara
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/eye/eyebrow.html">
                                                  <span>
                                                    Eyebrow
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/eye/eyeshadow.html">
                                                  <span>
                                                    Eyeshadow
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/eye/eye-primer.html">
                                                  <span>
                                                    Eye Primer
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2 ">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/eye/under-eye-concealer.html">
                                                  <span>
                                                    Under-Eye Concealer
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="level2  last">
                                                                                            <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/eye/false-eyelashes.html">
                                                  <span>
                                                    False Eyelashes
                                                  </span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/concealer.html" className="tonyMenu__head-title">
                                              <span>
                                                Concealer
                                              </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/face-primer.html" className="tonyMenu__head-title">
                                              <span>
                                                Face Primer
                                              </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/makeup/finishing-spray-powder.html" className="tonyMenu__head-title">
                                              <span>
                                                Finishing Spray &amp; Powder
                                              </span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                            <div className="clearfix" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="tonyMenu__item">
                                                                <a href="http://magento-demo16.tonytemplates.com/yourstore/skin-care.html">
                                    <span className="act-underline">
                                      Skin Care
                                    </span>
                                                                    <div className="tonyMenu__transition-block" />
                                                                </a>
                                                            </li>
                                                            <li className="tonyMenu__item">
                                                                <a href="http://magento-demo16.tonytemplates.com/yourstore/blog/">
                                    <span className="act-underline">
                                      Blog
                                    </span>
                                                                    <div className="tonyMenu__transition-block" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div className="tonyMenu_bg" />
                                            </div>
                                        </nav>
                                    </div>{/* /navigation end */}{/* shopping cart start */}
                                    <div className="pull-right col-stuck-cart text-right append_cart_to" />
                                    {/* shopping cart end */}</div>
                            </div>
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-6 col-xl-5 text-right visible-mobile-menu-on">{/* slogan start */}
                            <div className="slogan" data-bind="scope: 'customer'"><span data-bind="text: customer().fullname ? $t('Welcome, %1!').replace('%1', customer().fullname) : 'Default welcome msg!'">Default welcome msg!</span>
                            </div> {/* slogan end */}
                            <div className="settings">{/* currency start */}
                                <div className="currency dropdown text-right" id="switcher-currency">
                                    <div className="dropdown-label hidden-sm hidden-xs">Currency:</div>
                                    <a className="dropdown-toggle" data-toggle="dropdown">USD<span className="caret" /></a>
                                    <ul className="dropdown-menu dropdown-menu--xs-full">
                                        <li className="currency-GBP switcher-option"><a href="#" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/directory\/currency\/switch\/&quot;,&quot;data&quot;:{&quot;currency&quot;:&quot;GBP&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}">GBP
                                            - British Pound Sterling</a></li>
                                        <li className="currency-EUR switcher-option"><a href="#" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/directory\/currency\/switch\/&quot;,&quot;data&quot;:{&quot;currency&quot;:&quot;EUR&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}">EUR
                                            - Euro</a></li>
                                        <li className="dropdown-menu__close"><a href="#"><span className="icon icon-close" />close</a>
                                        </li>
                                    </ul>
                                </div> {/* currency end */}{/* language start */}
                                <div className="language dropdown text-right" id="switcher-language">
                                    <div className="dropdown-label hidden-sm hidden-xs">Language:</div>
                                    <a className="dropdown-toggle" data-toggle="dropdown">English<span className="caret" /></a>
                                    <ul className="dropdown-menu dropdown-menu--xs-full">
                                        <li className="view-home16_de switcher-option"><a href="#" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/stores\/store\/switch\/&quot;,&quot;data&quot;:{&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbA,,&quot;,&quot;___store&quot;:&quot;home16_de&quot;}}">German</a>
                                        </li>
                                        <li className="dropdown-menu__close"><a href="#"><span className="icon icon-close" />close</a>
                                        </li>
                                    </ul>
                                </div> {/* language end */}</div>
                        </div>
                        <div className="pull-right col-lg-pull-3 col-md-3 col-xl-2 alignment-extra">
                            <div className="text-right cart_cut_from">{/* search start */}
                                <div className="search link-inline       "><a href="#" className="search__open"><span className="icon icon-search" /></a>
                                    <div className="search-dropdown">
                                        <form className="form minisearch" id="search_mini_form" action="http://magento-demo16.tonytemplates.com/yourstore/catalogsearch/result/" method="get">
                                            <div className="input-outer"><input id="search" type="text" name="q" defaultValue placeholder="Search entire store here..." className="input-text" maxLength={128} role="combobox" aria-haspopup="false" aria-autocomplete="both" autoComplete="off" />
                                                <button type="submit" title="Search" className="icon icon-search btn_search" disabled />
                                                <div className="nested"><a className="action advanced" href="http://magento-demo16.tonytemplates.com/yourstore/catalogsearch/advanced/" data-action="advanced-search">Advanced Search</a></div>
                                                <div data-bind="scope: 'searchsuiteautocomplete_form'">
                                                    {/* ko template: getTemplate() */}
                                                    <div id="searchsuite-autocomplete" className="searchsuite-autocomplete" data-bind="visible: showPopup()" style={{display: 'none'}}>
                                                        <div data-bind="visible: anyResultCount()" style={{display: 'none'}}>
                                                            <div className="suggest" data-bind="visible: result.suggest.data().length > 0" style={{display: 'none'}}>
                                                                <div className="title">
                                                                    {/* ko i18n: 'Suggested'*/}<span>Suggested</span>{/* /ko */}
                                                                </div>
                                                                <ul id="suggest" role="listbox" data-bind="foreach: result.suggest.data" />
                                                            </div>
                                                            <div className="product" data-bind="visible: result.product.data().length > 0" style={{display: 'none'}}>
                                                                <div className="title">
                                                                    {/* ko i18n: 'Products'*/}<span>Products</span>{/* /ko */}
                                                                    <a className="see-all" data-bind="attr: {href: result.product.url}" href>
                                                                        {/* ko i18n: 'See All' */}<span>See All</span>{/* /ko */}
                                                                        <span data-bind="text: result.product.size">0</span>
                                                                    </a>
                                                                </div>
                                                                <ul id="product" role="listbox" data-bind="foreach: result.product.data" />
                                                            </div>
                                                        </div>
                                                        <div className="no-result" data-bind="visible: !anyResultCount()">
                                                            {/* ko i18n: 'No Result'*/}<span>No Result</span>{/* /ko */}</div>
                                                    </div>{/* /ko */}</div>
                                            </div>
                                            <a href="#" className="search__close"><span className="icon icon-close" /></a></form>
                                    </div>
                                </div> {/* search end */}{/* account menu start */}
                                <div className="account link-inline hidden mobile-menu-on">
                                    <div className="dropdown text-right"><a className="dropdown-toggle" data-toggle="dropdown"><span className="icon icon-person " /></a>
                                        <ul className="header links dropdown-menu dropdown-menu--xs-full">
                                            <li><a href="http://magento-demo16.tonytemplates.com/yourstore/customer/account/">My
                                                Account</a></li>
                                            <li className="link wishlist" data-bind="scope: 'wishlist'"><a href="http://magento-demo16.tonytemplates.com/yourstore/wishlist/">My Wish List
                                                {/* ko if: wishlist().counter */}{/* /ko */}</a></li>
                                            <li className="item link compare" data-bind="scope: 'compareProducts'" data-role="compare-products-link"><a className="action compare" title="Compare" data-bind="attr: {'href': compareProducts().listUrl}" href="http://magento-demo16.tonytemplates.com/yourstore/catalog/product_compare/index/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jdXN0b21lci9zZWN0aW9uL2xvYWQvP3NlY3Rpb25zPSZ1cGRhdGVfc2VjdGlvbl9pZD1mYWxzZSZfPTE1MDE1OTY0NzkwMzI,/">Compare
                                                (<span className="counter qty" data-bind="text: compareProducts().countCaption">0 items</span>)</a></li>
                                            <li className="nav item"><a href="http://magento-demo16.tonytemplates.com/yourstore/checkout/">Checkout</a>
                                            </li>
                                            <li className="authorization-link" data-label="or"><a href="http://magento-demo16.tonytemplates.com/yourstore/customer/account/login/">Sign
                                                In</a></li>
                                            <li>
                                                <a href="http://magento-demo16.tonytemplates.com/yourstore/customer/account/create/">Create
                                                    an Account</a></li>
                                        </ul>
                                    </div>
                                </div>{/* account menu end */}{/* icon toggle menu */}
                                <div className="link-inline toggle-menu visible-mobile-menu-off"><span className="icon icon-reorder" />
                                    <ul className="dropdown-menu " role="menu">
                                        <li className="li-col-full"><span className="close icon-clear pull-right" data-dismiss="modal" />
                                            <div className="slogan" data-bind="scope: 'customer'"><span data-bind="text: customer().fullname ? $t('Welcome, %1!').replace('%1', customer().fullname) : 'Default welcome msg!'">Default welcome msg!</span>
                                            </div>
                                        </li>
                                        <li className="li-col list-user-menu"><h4 className="megamenu__subtitle"><span>My Account</span>
                                        </h4>
                                            <ul>
                                                <li><a href="http://magento-demo16.tonytemplates.com/yourstore/customer/account/">My
                                                    Account</a></li>
                                                <li><a href="http://magento-demo16.tonytemplates.com/yourstore/wishlist/">My
                                                    Wishlist</a></li>
                                                <li>
                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/checkout/">Checkout</a>
                                                </li>
                                                <li>
                                                    <a href="http://magento-demo16.tonytemplates.com/yourstore/customer/account/login/">Log
                                                        In</a></li>
                                            </ul>
                                        </li>
                                        <li className="li-col languages languages--flag"><h4 className="megamenu__subtitle">
                                            <span>Language</span></h4>
                                            <ul>
                                                <li className="languages__item active"><a href="#" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/stores\/store\/switch\/&quot;,&quot;data&quot;:{&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbA,,&quot;,&quot;___store&quot;:&quot;home16_en&quot;}}"><span className="languages__item__flag flag"><img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/flags/home16_en.png" /></span>
                                                    <span className="languages__item__label">English</span></a></li>
                                                <li className="languages__item"><a href="#" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/stores\/store\/switch\/&quot;,&quot;data&quot;:{&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbA,,&quot;,&quot;___store&quot;:&quot;home16_de&quot;}}"><span className="languages__item__flag flag"><img src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/wysiwyg/yourstore/flags/home16_de.png" /></span>
                                                    <span className="languages__item__label">German</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="li-col currency"><h4 className="megamenu__subtitle"><span>Currency</span></h4>
                                            <ul>
                                                <li className="currency__item"><a href="#" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/directory\/currency\/switch\/&quot;,&quot;data&quot;:{&quot;currency&quot;:&quot;GBP&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}">GBP
                                                    - British Pound Sterling</a></li>
                                                <li className="currency__item"><a href="#" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/directory\/currency\/switch\/&quot;,&quot;data&quot;:{&quot;currency&quot;:&quot;EUR&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}">EUR
                                                    - Euro</a></li>
                                                <li className="currency__item active"><a href="#" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/directory\/currency\/switch\/&quot;,&quot;data&quot;:{&quot;currency&quot;:&quot;USD&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}">USD
                                                    - US Dollar</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>{/* /icon toggle menu */}{/* shopping cart start */}
                                <div className="minicart-wrapper link-inline">
                                    <div data-block="minicart" className="dropdown text-right"><a className="action showcart" href="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/" data-bind="scope: 'minicart_content'"><span className="icon icon-shopping_basket" /> <span className="counter qty badge badge--cart" data-bind="css: { empty: !!getCartParam('summary_count') == false }, blockLoader: isLoading">{/* ko if: getCartParam('summary_count') */}<span className="counter-number">{/* ko text: getCartParam('summary_count') */}2
                                        {/* /ko */}</span> {/* /ko */}{/* ko ifnot: getCartParam('summary_count') */}{/* /ko */}<span className="counter-label">{/* ko if: getCartParam('summary_count') */}
                                        {/* ko text: getCartParam('summary_count') */}2{/* /ko */}{/* ko i18n: 'items' */}<span>items</span>
                                        {/* /ko */}{/* /ko */}</span></span> </a>
                                        <div className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front mage-dropdown-dialog" tabIndex={-1} role="dialog" aria-describedby="ui-id-1" style={{display: 'none'}}>
                                            <div className="block block-minicart empty dropdown-menu dropdown-menu--xs-full slide-from-top ui-dialog-content ui-widget-content" data-role="dropdownDialog" id="ui-id-1">
                                                <div id="minicart-content-wrapper" className="container" data-bind="scope: 'minicart_content'">{/* ko template: getTemplate() */}
                                                    <div className="block-title">
                                                        <strong>
                                <span className="text">{/* ko i18n: 'My Cart' */}<span>My Cart</span>
                                    {/* /ko */}</span>
                                                            <span className="qty" data-bind="css: { empty: !!getCartParam('summary_count') == false },
                       attr: { title: $t('Items in Cart') }" title="Items in Cart">
                                  {/* ko text: getCartParam('summary_count') */}2{/* /ko */}
                                </span>
                                                        </strong>
                                                    </div>
                                                    <div className="block-content">
                                                        {/* ko if: getCartParam('summary_count') */}
                                                        <div className="cart__top">{/* ko i18n: 'Recently added item(s)' */}<span>Recently added item(s)</span>
                                                            {/* /ko */}</div>
                                                        {/* /ko */}
                                                        <a href="#" id="btn-minicart-close" className="icon icon-close cart__close" data-action="close"><span>{/* ko i18n: 'Close' */}<span>Close</span>
                                                            {/* /ko */}</span></a>
                                                        {/* ko if: getCartParam('summary_count') */}
                                                        {/* ko foreach: getRegion('extraInfo') */}
                                                        {/* ko template: getTemplate() */}
                                                        {/* ko foreach: {data: elems, as: 'element'} */}{/* /ko */}
                                                        {/* /ko */}
                                                        {/* /ko */}
                                                        {/* /ko */}
                                                        {/* ko if: getCartParam('summary_count') */}
                                                        <div data-action="scroll" className="minicart-items-wrapper overflowed">
                                                            <ul id="mini-cart" className="minicart-items" data-bind="foreach: { data: getCartParam('items'), as: 'item' }" style={{height: 184}}>
                                                                {/* ko foreach: $parent.getRegion($parent.getItemRenderer(item.product_type)) */}
                                                                {/* ko template: {name: getTemplate(), data: item, afterRender: function() {$parents[1].initSidebar()}} */}
                                                                <li className="item product-item cart__item odd last" data-role="product-item">
                                                                    <div>
                                                                        {/* ko if: product_has_url */}
                                                                        <a data-bind="attr: {href: product_url, title: product_name}" tabIndex={-1} className="product-item-photo cart__item__image pull-left" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-32.html" title="VOYA Angelicus Serratus">
                                                                            {/* ko foreach: $parent.getRegion('itemImage') */}
                                                                            {/* ko template: {name: getTemplate(), data: item.product_image} */}
                                                                            <span className="product-image-container" data-bind="style: {width: width + 'px'}" style={{width: 72}}>
                                          <span className="product-image-wrapper" data-bind="style: {'padding-bottom': height/width*100 + '%'}" style={{paddingBottom: '122.222%'}}>
                                            <img className="product-image-photo" data-bind="attr: {src: src, alt: alt}, style: {width: width + 'px', height: height + 'px'}" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/thumbnail/72x88/beff4985b56e3afdbeabfc89641a4582/v/o/voya-angelicus-serratus.jpg" alt="VOYA Angelicus Serratus" style={{width: 72, height: 88}} />
                                          </span>
                                        </span>
                                                                            {/* /ko */}
                                                                            {/* /ko */}
                                                                        </a>
                                                                        {/* /ko */}
                                                                        {/* ko ifnot: product_has_url */}{/* /ko */}
                                                                        <div className="cart__item__control">
                                                                            <div className="cart__item__delete">
                                                                                <a href="#" data-bind="attr: {'data-cart-item': item_id, title: $t('Remove item')}" className="icon icon-delete" data-cart-item={4303} title="Remove item"><span data-bind="i18n: 'Remove'">Remove</span></a>
                                                                            </div>
                                                                            {/* ko if: is_visible_in_site_visibility */}
                                                                            <div className="cart__item__edit">
                                                                                <a data-bind="attr: {href: configure_url, title: $t('Edit item')}" className="icon icon-edit" href="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/configure/id/4303/product_id/2783/" title="Edit item"><span data-bind="i18n: 'Edit'">Edit</span></a>
                                                                            </div>
                                                                            {/* /ko */}
                                                                        </div>
                                                                        <div className="cart__item__info">
                                                                            <div className="cart__item__info__title">
                                                                                {/* ko if: product_has_url */}
                                                                                <h2>
                                                                                    <a data-bind="attr: {href: product_url}, text: product_name" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-32.html">VOYA
                                                                                        Angelicus Serratus</a></h2>
                                                                                {/* /ko */}
                                                                                {/* ko ifnot: product_has_url */}{/* /ko */}
                                                                            </div>
                                                                            {/* ko if: options.length */}{/* /ko */}
                                                                            <div className="product-item-pricing cart__item__info__price">
                                                                                {/* ko if: canApplyMsrp */}{/* /ko */}
                                                                                {/* ko ifnot: canApplyMsrp */}
                                                                                {/* ko foreach: $parent.getRegion('priceSidebar') */}
                                                                                {/* ko template: {name: getTemplate(), data: item.product_price, as: 'price'} */}
                                                                                <div className="price-container">
                                                                                    <span className="info-label" data-bind="i18n: 'Price:'">Price:</span>
                                                                                    <span className="price-wrapper" data-bind="html: price">   <span className="price-excluding-tax" data-label="Excl. Tax"> <span className="minicart-price"> <span className="price">$500.00</span></span> </span></span>
                                                                                </div>
                                                                                {/* /ko */}
                                                                                {/* /ko */}
                                                                                {/* /ko */}
                                                                            </div>
                                                                            <div className="details-qty qty cart__item__info__qty">
                                                                                <span className="info-label">Qty:</span>
                                                                                <input data-bind="attr: {
                           id: 'cart-item-'+item_id+'-qty',
                           'data-cart-item': item_id,
                           'data-item-qty': qty
                           }, value: qty" type="number" size={4} className="item-qty cart-item-qty input--ys" maxLength={12} id="cart-item-4303-qty" data-cart-item={4303} data-item-qty={1} />
                                                                                <button data-bind="attr: {
                           id: 'update-cart-item-'+item_id,
                           'data-cart-item': item_id,
                           title: $t('Update')
                           }" className="update-cart-item btn btn--ys" style={{display: 'none'}} id="update-cart-item-4303" data-cart-item={4303} title="Update">
                                                                                    <span data-bind="i18n: 'Update'">Update</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                {/* /ko */}
                                                                {/* /ko */}
                                                                {/* ko foreach: $parent.getRegion($parent.getItemRenderer(item.product_type)) */}
                                                                {/* ko template: {name: getTemplate(), data: item, afterRender: function() {$parents[1].initSidebar()}} */}
                                                                <li className="item product-item cart__item" data-role="product-item">
                                                                    <div>
                                                                        {/* ko if: product_has_url */}
                                                                        <a data-bind="attr: {href: product_url, title: product_name}" tabIndex={-1} className="product-item-photo cart__item__image pull-left" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-34.html" title="VOYA Lazy Days">
                                                                            {/* ko foreach: $parent.getRegion('itemImage') */}
                                                                            {/* ko template: {name: getTemplate(), data: item.product_image} */}
                                                                            <span className="product-image-container" data-bind="style: {width: width + 'px'}" style={{width: 72}}>
                                          <span className="product-image-wrapper" data-bind="style: {'padding-bottom': height/width*100 + '%'}" style={{paddingBottom: '122.222%'}}>
                                            <img className="product-image-photo" data-bind="attr: {src: src, alt: alt}, style: {width: width + 'px', height: height + 'px'}" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/thumbnail/72x88/beff4985b56e3afdbeabfc89641a4582/v/o/voya-lazy-days.jpg" alt="VOYA Lazy Days" style={{width: 72, height: 88}} />
                                          </span>
                                        </span>
                                                                            {/* /ko */}
                                                                            {/* /ko */}
                                                                        </a>
                                                                        {/* /ko */}
                                                                        {/* ko ifnot: product_has_url */}{/* /ko */}
                                                                        <div className="cart__item__control">
                                                                            <div className="cart__item__delete">
                                                                                <a href="#" data-bind="attr: {'data-cart-item': item_id, title: $t('Remove item')}" className="icon icon-delete" data-cart-item={4302} title="Remove item"><span data-bind="i18n: 'Remove'">Remove</span></a>
                                                                            </div>
                                                                            {/* ko if: is_visible_in_site_visibility */}
                                                                            <div className="cart__item__edit">
                                                                                <a data-bind="attr: {href: configure_url, title: $t('Edit item')}" className="icon icon-edit" href="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/configure/id/4302/product_id/2786/" title="Edit item"><span data-bind="i18n: 'Edit'">Edit</span></a>
                                                                            </div>
                                                                            {/* /ko */}
                                                                        </div>
                                                                        <div className="cart__item__info">
                                                                            <div className="cart__item__info__title">
                                                                                {/* ko if: product_has_url */}
                                                                                <h2>
                                                                                    <a data-bind="attr: {href: product_url}, text: product_name" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-34.html">VOYA
                                                                                        Lazy Days</a></h2>
                                                                                {/* /ko */}
                                                                                {/* ko ifnot: product_has_url */}{/* /ko */}
                                                                            </div>
                                                                            {/* ko if: options.length */}{/* /ko */}
                                                                            <div className="product-item-pricing cart__item__info__price">
                                                                                {/* ko if: canApplyMsrp */}{/* /ko */}
                                                                                {/* ko ifnot: canApplyMsrp */}
                                                                                {/* ko foreach: $parent.getRegion('priceSidebar') */}
                                                                                {/* ko template: {name: getTemplate(), data: item.product_price, as: 'price'} */}
                                                                                <div className="price-container">
                                                                                    <span className="info-label" data-bind="i18n: 'Price:'">Price:</span>
                                                                                    <span className="price-wrapper" data-bind="html: price">   <span className="price-excluding-tax" data-label="Excl. Tax"> <span className="minicart-price"> <span className="price">$550.00</span></span> </span></span>
                                                                                </div>
                                                                                {/* /ko */}
                                                                                {/* /ko */}
                                                                                {/* /ko */}
                                                                            </div>
                                                                            <div className="details-qty qty cart__item__info__qty">
                                                                                <span className="info-label">Qty:</span>
                                                                                <input data-bind="attr: {
                           id: 'cart-item-'+item_id+'-qty',
                           'data-cart-item': item_id,
                           'data-item-qty': qty
                           }, value: qty" type="number" size={4} className="item-qty cart-item-qty input--ys" maxLength={12} id="cart-item-4302-qty" data-cart-item={4302} data-item-qty={1} />
                                                                                <button data-bind="attr: {
                           id: 'update-cart-item-'+item_id,
                           'data-cart-item': item_id,
                           title: $t('Update')
                           }" className="update-cart-item btn btn--ys" style={{display: 'none'}} id="update-cart-item-4302" data-cart-item={4302} title="Update">
                                                                                    <span data-bind="i18n: 'Update'">Update</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                {/* /ko */}
                                                                {/* /ko */}
                                                            </ul>
                                                        </div>
                                                        {/* /ko */}
                                                        {/* ko ifnot: getCartParam('summary_count') */}{/* /ko */}
                                                        {/* ko if: getCartParam('summary_count') */}
                                                        <div className="cart__bottom">
                                                            {/* ko if: getCartParam('possible_onepage_checkout') */}
                                                            {/* ko foreach: getRegion('subtotalContainer') */}
                                                            {/* ko template: getTemplate() */}
                                                            {/* ko foreach: {data: elems, as: 'element'} */}
                                                            {/* ko if: hasTemplate() */}{/* ko template: getTemplate() */}
                                                            <div className="cart__total">
                                  <span className="label_total_price">
                                    {/* ko i18n: 'Cart Subtotal' */}<span>Cart Subtotal</span>{/* /ko */}
                                  </span>
                                                                {/* ko foreach: elems */}
                                                                {/* ko template: getTemplate() */}
                                                                <div className="amount price-container">
                                                                    {/* ko if: displaySubtotal() */}
                                                                    {/* ko if: display_cart_subtotal_excl_tax */}
                                                                    <span className="price-wrapper" data-bind="html: cart().subtotal_excl_tax"><span className="price">$1,050.00</span></span>
                                                                    {/* /ko */}
                                                                    {/* ko if: !display_cart_subtotal_excl_tax && display_cart_subtotal_incl_tax */}
                                                                    {/* /ko */}
                                                                    {/* ko if: !display_cart_subtotal_excl_tax && !display_cart_subtotal_incl_tax */}
                                                                    {/* /ko */}
                                                                    {/* /ko */}
                                                                    {/* ko ifnot: displaySubtotal() */}{/* /ko */}
                                                                </div>
                                                                {/* /ko */}
                                                                {/* /ko */}
                                                            </div>
                                                            {/* /ko */}{/* /ko */}
                                                            {/* /ko */}
                                                            {/* /ko */}
                                                            {/* /ko */}
                                                            {/* /ko */}
                                                            {/* ko if: getCartParam('possible_onepage_checkout') */}
                                                            <button id="top-cart-btn-checkout" type="button" className="btn btn--ys btn-checkout" data-bind="attr: {title: $t('Go to Checkout')}" title="Go to Checkout">
                                                                {/* ko i18n: 'Checkout' */}<span>Checkout</span>{/* /ko */} <span className="icon icon--flippedX icon-reply" />
                                                            </button>
                                                            {/* /ko */}
                                                            <a data-bind="attr: {href: shoppingCartUrl}" className="btn btn--ys" href="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/">
                                                                <span className="icon icon-shopping_basket" />
                                                                {/* ko i18n: 'View Cart' */}<span>View Cart</span>{/* /ko */}
                                                            </a>
                                                        </div>
                                                        {/* /ko */}
                                                        <div id="minicart-widgets" className="minicart-widgets">
                                                            {/* ko foreach: getRegion('promotion') */}
                                                            {/* ko template: getTemplate() */}
                                                            {/* ko foreach: {data: elems, as: 'element'} */}{/* /ko */}
                                                            {/* /ko */}
                                                            {/* /ko */}
                                                        </div>
                                                    </div>
                                                    {/* ko foreach: getRegion('sign-in-popup') */}{/* /ko */}
                                                    {/* /ko */}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* shopping cart end */}</div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="breadcrumbs_block">
                <div className="container">
                    <ol className="breadcrumb_list breadcrumb--ys pull-left">
                        <li className="home"><a href="http://magento-demo16.tonytemplates.com/yourstore/" title="Go to Home Page"><span>Home</span></a>
                        </li>
                        <li className="category302"><strong>Skin Care</strong></li>
                    </ol>
                </div>
            </section>
            <main id="maincontent" className="page-main"><a id="contentarea" tabIndex={-1} />
                <div className="page-messages messages">
                    <div className="container">
                        <div data-placeholder="messages" />
                        <div data-bind="scope: 'messages'">
                            <div data-bind="foreach: { data: cookieMessages, as: 'message' }" className="messages" />
                            <div data-bind="foreach: { data: messages().messages, as: 'message' }" className="messages" />
                        </div>
                    </div>
                </div>
                <div className="columns container">
                    <div className="row">
                        <div id="centerColumn" className="col-md-8 col-lg-9 col-xl-10">
                            <div className="page-title-wrapper"><h1 className="page-title" id="page-title-heading" aria-labelledby="page-title-heading toolbar-amount"><span className="base" data-ui-id="page-title-wrapper">Skin Care</span></h1></div>
                            <div className="column main">
                                <div className="category-view" />
                                <input name="form_key" type="hidden" defaultValue="5NCTGMrIjXLvump9" />
                                <div id="authenticationPopup" data-bind="scope:'authenticationPopup'" style={{display: 'none'}}>
                                    {/* /ko */}</div>
                                <div id="layer-product-list">
                                    <div className="toolbar toolbar-products"><a className="btn btn--ys slide-column-open visible-xs visible-sm hidden-xl hidden-lg hidden-md" href="#">Filter</a>
                                        <div className="modes"><strong className="modes-label" id="modes-label">View as</strong> <strong title="Grid" className="modes-mode active mode-grid" data-value="grid"><span>Grid</span></strong>
                                            <a className="modes-mode mode-list" title="List" href="#" data-role="mode-switcher" data-value="list" id="mode-list" aria-labelledby="modes-label mode-list"><span>List</span></a></div>
                                        <p className="toolbar-amount" id="toolbar-amount"><span className="toolbar-number">8</span> Items
                                        </p>
                                        <div className="field limiter"><label className="label_limiter" htmlFor="limiter"><span>Show</span></label>
                                            <div className="control select-wrapper"><select id="limiter" data-role="limiter" className="limiter-options select--ys show-qty">
                                                <option value={10}>10</option>
                                                <option value={15} selected="selected">15</option>
                                                <option value={30}>30</option>
                                            </select></div>
                                            <span className="limiter-text">per page</span></div>
                                        <div className="toolbar-sorter sorter"><label className="sorter-label" htmlFor="sorter">Sort By</label>
                                            <div className="select-wrapper"><select id="sorter" data-role="sorter" className="sorter-options select--ys sort-position">
                                                <option value="position">Position</option>
                                                <option value="name" selected="selected">Product Name</option>
                                                <option value="price">Price</option>
                                            </select></div>
                                            <a title="Set Descending Direction" href="#" className="action sorter-action sort-asc" data-role="direction-switcher" data-value="desc"><span>Set Descending Direction</span></a></div>
                                    </div>
                                    <div className="products wrapper grid products-grid">
                                        <ol className="products list items product-items custom-height-count row">
                                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                                <div className="item_placeholder" />
                                                <div className="product-item-info product_holder product--zoom" data-container="product-grid">
                                                    <div className="product_holder__inside">
                                                        <div className="product photo product-item-photo"><a href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-20.html" tabIndex={-1}> <span className="product-image-container" style={{width: 370}}><span className="product-image-wrapper" style={{paddingBottom: '123.783783784%'}}><img className="product-image-photo" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/b/a/balmelicious---vanilla-_-peppermint.jpg" width={370} height={458} alt="Balmelicious Vanilla" /></span></span></a> <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2728/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick view</b></a></div>
                                                        <div className="product details product-item-details">
                                                            <div className="product name product-item-name"><h2><a className="product-item-link" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-20.html">Balmelicious
                                                                Vanilla</a></h2></div>
                                                            <div className="price-box price-final_price" data-role="priceBox" data-product-id={2728}><span className="price-container price-final_price tax weee"> <span id="product-price-2728" data-price-amount={100} data-price-type="finalPrice" className="price-wrapper "><span className="price">$100.00</span></span></span> <a href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-20.html" className="minimal-price-link"> <span className="price-container price-final_price tax weee"> <span className="price-label">As low as</span>  <span id={2728} data-price-amount={70} data-price-type className="price-wrapper ">$70.00</span></span></a>
                                                            </div>
                                                            <div className="product_holder__inside__review row-mode-visible">
                                                                <div className="rating row-mode-visible" />
                                                            </div>
                                                            <div className="product-item-inner product_holder__inside__hover">
                                                                <div className="product actions product-item-actions product_holder__inside__info">
                                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2728/" href="javascript:void(0);"><span>Quickview</span></a>
                                                                    <div className="product_holder__inside__info__btns">
                                                                        <div className="actions-primary">
                                                                            <form className="listing_form" data-role="tocart-form" action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2728/" method="post"><input type="hidden" name="product" defaultValue={2728} /><input type="hidden" name="uenc" defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3Mjgv" /><input name="form_key" type="hidden" defaultValue="5NCTGMrIjXLvump9" />
                                                                                <button type="submit" title="Add to Cart" className="action tocart primary btn--ys btn--xl">
                                                                                    <i className="icon icon-shopping_basket" /> <span>Add to Cart</span>
                                                                                </button>
                                                                            </form>
                                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2728/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick
                                                                                view</b></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2728&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span className="icon icon-favorite_border" /></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2728&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span className="icon icon-sort" /></a></div>
                                                                    </div>
                                                                    <div data-role="add-to-links" className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                                        <a href="#" className="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2728&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span>Add to Wish List</span></a>
                                                                        <a href="#" className="action tocompare" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2728&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span>Add to Compare</span></a></div>
                                                                </div>
                                                                <div className="rating row-mode-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                                <div className="item_placeholder" />
                                                <div className="product-item-info product_holder product--zoom" data-container="product-grid">
                                                    <div className="product_holder__inside">
                                                        <div className="product photo product-item-photo"><a href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-21.html" tabIndex={-1}> <span className="product-image-container" style={{width: 370}}><span className="product-image-wrapper" style={{paddingBottom: '123.783783784%'}}><img className="product-image-photo" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/c/l/cleansing-facial-wash.jpg" width={370} height={458} alt="Cleansing-Facial-Wash" /></span></span></a>
                                                            <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2730/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick view</b></a></div>
                                                        <div className="product details product-item-details">
                                                            <div className="product name product-item-name"><h2><a className="product-item-link" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-21.html">Cleansing-Facial-Wash</a>
                                                            </h2></div>
                                                            <div className="price-box price-final_price" data-role="priceBox" data-product-id={2730}><span className="price-container price-final_price tax weee"> <span id="product-price-2730" data-price-amount={200} data-price-type="finalPrice" className="price-wrapper "><span className="price">$200.00</span></span></span></div>
                                                            <div className="product_holder__inside__review row-mode-visible">
                                                                <div className="rating row-mode-visible" />
                                                            </div>
                                                            <div className="product-item-inner product_holder__inside__hover">
                                                                <div className="product actions product-item-actions product_holder__inside__info">
                                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2730/" href="javascript:void(0);"><span>Quickview</span></a>
                                                                    <div className="product_holder__inside__info__btns">
                                                                        <div className="actions-primary">
                                                                            <form className="listing_form" data-role="tocart-form" action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2730/" method="post"><input type="hidden" name="product" defaultValue={2730} /><input type="hidden" name="uenc" defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3MzAv" /><input name="form_key" type="hidden" defaultValue="5NCTGMrIjXLvump9" />
                                                                                <button type="submit" title="Add to Cart" className="action tocart primary btn--ys btn--xl">
                                                                                    <i className="icon icon-shopping_basket" /> <span>Add to Cart</span>
                                                                                </button>
                                                                            </form>
                                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2730/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick
                                                                                view</b></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2730&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span className="icon icon-favorite_border" /></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2730&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span className="icon icon-sort" /></a></div>
                                                                    </div>
                                                                    <div data-role="add-to-links" className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                                        <a href="#" className="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2730&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span>Add to Wish List</span></a>
                                                                        <a href="#" className="action tocompare" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2730&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span>Add to Compare</span></a></div>
                                                                </div>
                                                                <div className="rating row-mode-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                                <div className="item_placeholder" />
                                                <div className="product-item-info product_holder product--zoom" data-container="product-grid">
                                                    <div className="product_holder__inside">
                                                        <div className="product photo product-item-photo"><a href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-23.html" tabIndex={-1}> <span className="product-image-container" style={{width: 370}}><span className="product-image-wrapper" style={{paddingBottom: '123.783783784%'}}><img className="product-image-photo" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/d/u/dusk-to-dawn---revitalising-night-cr_me.jpg" width={370} height={458} alt="Dusk to Dawn Revitalising Night Crème" /></span></span></a> <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2734/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick view</b></a></div>
                                                        <div className="product details product-item-details">
                                                            <div className="product name product-item-name"><h2><a className="product-item-link" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-23.html">Dusk
                                                                to Dawn Revitalising Night Crème</a></h2></div>
                                                            <div className="price-box price-final_price" data-role="priceBox" data-product-id={2734}><span className="price-container price-final_price tax weee"> <span id="product-price-2734" data-price-amount={400} data-price-type="finalPrice" className="price-wrapper "><span className="price">$400.00</span></span></span></div>
                                                            <div className="product_holder__inside__review row-mode-visible">
                                                                <div className="rating row-mode-visible" />
                                                            </div>
                                                            <div className="product-item-inner product_holder__inside__hover">
                                                                <div className="product actions product-item-actions product_holder__inside__info">
                                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2734/" href="javascript:void(0);"><span>Quickview</span></a>
                                                                    <div className="product_holder__inside__info__btns">
                                                                        <div className="actions-primary">
                                                                            <form className="listing_form" data-role="tocart-form" action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2734/" method="post"><input type="hidden" name="product" defaultValue={2734} /><input type="hidden" name="uenc" defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3MzQv" /><input name="form_key" type="hidden" defaultValue="5NCTGMrIjXLvump9" />
                                                                                <button type="submit" title="Add to Cart" className="action tocart primary btn--ys btn--xl">
                                                                                    <i className="icon icon-shopping_basket" /> <span>Add to Cart</span>
                                                                                </button>
                                                                            </form>
                                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2734/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick
                                                                                view</b></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2734&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span className="icon icon-favorite_border" /></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2734&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span className="icon icon-sort" /></a></div>
                                                                    </div>
                                                                    <div data-role="add-to-links" className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                                        <a href="#" className="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2734&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span>Add to Wish List</span></a>
                                                                        <a href="#" className="action tocompare" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2734&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span>Add to Compare</span></a></div>
                                                                </div>
                                                                <div className="rating row-mode-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                                <div className="item_placeholder" />
                                                <div className="product-item-info product_holder product--zoom" data-container="product-grid">
                                                    <div className="product_holder__inside">
                                                        <div className="product photo product-item-photo"><a href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-24.html" tabIndex={-1}> <span className="product-image-container" style={{width: 370}}><span className="product-image-wrapper" style={{paddingBottom: '123.783783784%'}}><img className="product-image-photo" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/f/o/forget-me-knot-_new-formulation_.jpg" width={370} height={458} alt="Forget Me Knot" /></span></span></a> <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2737/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick view</b></a></div>
                                                        <div className="product details product-item-details">
                                                            <div className="product name product-item-name"><h2><a className="product-item-link" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-24.html">Forget
                                                                Me Knot</a></h2></div>
                                                            <div className="price-box price-final_price" data-role="priceBox" data-product-id={2737}><span className="price-container price-final_price tax weee"> <span id="product-price-2737" data-price-amount={500} data-price-type="finalPrice" className="price-wrapper "><span className="price">$500.00</span></span></span></div>
                                                            <div className="product_holder__inside__review row-mode-visible">
                                                                <div className="rating row-mode-visible" />
                                                            </div>
                                                            <div className="product-item-inner product_holder__inside__hover">
                                                                <div className="product actions product-item-actions product_holder__inside__info">
                                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2737/" href="javascript:void(0);"><span>Quickview</span></a>
                                                                    <div className="product_holder__inside__info__btns">
                                                                        <div className="actions-primary">
                                                                            <form className="listing_form" data-role="tocart-form" action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2737/" method="post"><input type="hidden" name="product" defaultValue={2737} /><input type="hidden" name="uenc" defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3Mzcv" /><input name="form_key" type="hidden" defaultValue="5NCTGMrIjXLvump9" />
                                                                                <button type="submit" title="Add to Cart" className="action tocart primary btn--ys btn--xl">
                                                                                    <i className="icon icon-shopping_basket" /> <span>Add to Cart</span>
                                                                                </button>
                                                                            </form>
                                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2737/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick
                                                                                view</b></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2737&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span className="icon icon-favorite_border" /></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2737&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span className="icon icon-sort" /></a></div>
                                                                    </div>
                                                                    <div data-role="add-to-links" className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                                        <a href="#" className="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2737&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span>Add to Wish List</span></a>
                                                                        <a href="#" className="action tocompare" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2737&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span>Add to Compare</span></a></div>
                                                                </div>
                                                                <div className="rating row-mode-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                                <div className="item_placeholder" />
                                                <div className="product-item-info product_holder product--zoom" data-container="product-grid">
                                                    <div className="product_holder__inside">
                                                        <div className="product photo product-item-photo"><a href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-26.html" tabIndex={-1}> <span className="product-image-container" style={{width: 370}}><span className="product-image-wrapper" style={{paddingBottom: '123.783783784%'}}><img className="product-image-photo" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/l/e/les-fleurs-de-bach-travels.jpg" width={370} height={458} alt="Les Fleurs de Bach Travels" /></span></span></a> <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2741/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick view</b></a></div>
                                                        <div className="product details product-item-details">
                                                            <div className="product name product-item-name"><h2><a className="product-item-link" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-26.html">Les
                                                                Fleurs de Bach Travels</a></h2></div>
                                                            <div className="price-box price-final_price" data-role="priceBox" data-product-id={2741}><span className="price-container price-final_price tax weee"> <span id="product-price-2741" data-price-amount={700} data-price-type="finalPrice" className="price-wrapper "><span className="price">$700.00</span></span></span></div>
                                                            <div className="product_holder__inside__review row-mode-visible">
                                                                <div className="rating row-mode-visible" />
                                                            </div>
                                                            <div className="product-item-inner product_holder__inside__hover">
                                                                <div className="product actions product-item-actions product_holder__inside__info">
                                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2741/" href="javascript:void(0);"><span>Quickview</span></a>
                                                                    <div className="product_holder__inside__info__btns">
                                                                        <div className="actions-primary">
                                                                            <form className="listing_form" data-role="tocart-form" action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2741/" method="post"><input type="hidden" name="product" defaultValue={2741} /><input type="hidden" name="uenc" defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3NDEv" /><input name="form_key" type="hidden" defaultValue="5NCTGMrIjXLvump9" />
                                                                                <button type="submit" title="Add to Cart" className="action tocart primary btn--ys btn--xl">
                                                                                    <i className="icon icon-shopping_basket" /> <span>Add to Cart</span>
                                                                                </button>
                                                                            </form>
                                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2741/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick
                                                                                view</b></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2741&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span className="icon icon-favorite_border" /></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2741&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span className="icon icon-sort" /></a></div>
                                                                    </div>
                                                                    <div data-role="add-to-links" className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                                        <a href="#" className="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2741&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span>Add to Wish List</span></a>
                                                                        <a href="#" className="action tocompare" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2741&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span>Add to Compare</span></a></div>
                                                                </div>
                                                                <div className="rating row-mode-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                                <div className="item_placeholder" />
                                                <div className="product-item-info product_holder product--zoom" data-container="product-grid">
                                                    <div className="product_holder__inside">
                                                        <div className="product photo product-item-photo"><a href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-25.html" tabIndex={-1}> <span className="product-image-container" style={{width: 370}}><span className="product-image-wrapper" style={{paddingBottom: '123.783783784%'}}><img className="product-image-photo" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/l/o/love-a-scrub.jpg" width={370} height={458} alt="Love a Scrub" /></span></span></a> <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2738/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick view</b></a></div>
                                                        <div className="product details product-item-details">
                                                            <div className="product name product-item-name"><h2><a className="product-item-link" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-25.html">Love
                                                                a Scrub</a></h2></div>
                                                            <div className="price-box price-final_price" data-role="priceBox" data-product-id={2738}><span className="price-container price-final_price tax weee"> <span id="product-price-2738" data-price-amount={800} data-price-type="finalPrice" className="price-wrapper "><span className="price">$800.00</span></span></span></div>
                                                            <div className="product_holder__inside__review row-mode-visible">
                                                                <div className="rating row-mode-visible" />
                                                            </div>
                                                            <div className="product-item-inner product_holder__inside__hover">
                                                                <div className="product actions product-item-actions product_holder__inside__info">
                                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2738/" href="javascript:void(0);"><span>Quickview</span></a>
                                                                    <div className="product_holder__inside__info__btns">
                                                                        <div className="actions-primary">
                                                                            <form className="listing_form" data-role="tocart-form" action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2738/" method="post"><input type="hidden" name="product" defaultValue={2738} /><input type="hidden" name="uenc" defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3Mzgv" /><input name="form_key" type="hidden" defaultValue="5NCTGMrIjXLvump9" />
                                                                                <button type="submit" title="Add to Cart" className="action tocart primary btn--ys btn--xl">
                                                                                    <i className="icon icon-shopping_basket" /> <span>Add to Cart</span>
                                                                                </button>
                                                                            </form>
                                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2738/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick
                                                                                view</b></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2738&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span className="icon icon-favorite_border" /></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2738&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span className="icon icon-sort" /></a></div>
                                                                    </div>
                                                                    <div data-role="add-to-links" className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                                        <a href="#" className="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2738&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span>Add to Wish List</span></a>
                                                                        <a href="#" className="action tocompare" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2738&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span>Add to Compare</span></a></div>
                                                                </div>
                                                                <div className="rating row-mode-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                                <div className="item_placeholder" />
                                                <div className="product-item-info product_holder product--zoom" data-container="product-grid">
                                                    <div className="product_holder__inside">
                                                        <div className="product photo product-item-photo"><a href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-28.html" tabIndex={-1}> <span className="product-image-container" style={{width: 370}}><span className="product-image-wrapper" style={{paddingBottom: '123.783783784%'}}><img className="product-image-photo" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/s/m/smoothing-facial-serum.jpg" width={370} height={458} alt="Smoothing Facial Serum" /></span></span></a>
                                                            <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2765/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick view</b></a></div>
                                                        <div className="product details product-item-details">
                                                            <div className="product name product-item-name"><h2><a className="product-item-link" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-28.html">Smoothing
                                                                Facial Serum</a></h2></div>
                                                            <div className="price-box price-final_price" data-role="priceBox" data-product-id={2765}><span className="price-container price-final_price tax weee"> <span id="product-price-2765" data-price-amount={100} data-price-type="finalPrice" className="price-wrapper "><span className="price">$100.00</span></span></span></div>
                                                            <div className="product_holder__inside__review row-mode-visible">
                                                                <div className="rating row-mode-visible" />
                                                            </div>
                                                            <div className="product-item-inner product_holder__inside__hover">
                                                                <div className="product actions product-item-actions product_holder__inside__info">
                                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2765/" href="javascript:void(0);"><span>Quickview</span></a>
                                                                    <div className="product_holder__inside__info__btns">
                                                                        <div className="actions-primary">
                                                                            <form className="listing_form" data-role="tocart-form" action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2765/" method="post"><input type="hidden" name="product" defaultValue={2765} /><input type="hidden" name="uenc" defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3NjUv" /><input name="form_key" type="hidden" defaultValue="5NCTGMrIjXLvump9" />
                                                                                <button type="submit" title="Add to Cart" className="action tocart primary btn--ys btn--xl">
                                                                                    <i className="icon icon-shopping_basket" /> <span>Add to Cart</span>
                                                                                </button>
                                                                            </form>
                                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2765/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick
                                                                                view</b></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2765&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span className="icon icon-favorite_border" /></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2765&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span className="icon icon-sort" /></a></div>
                                                                    </div>
                                                                    <div data-role="add-to-links" className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                                        <a href="#" className="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2765&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span>Add to Wish List</span></a>
                                                                        <a href="#" className="action tocompare" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2765&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span>Add to Compare</span></a></div>
                                                                </div>
                                                                <div className="rating row-mode-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="item product-item col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-one-fifth">
                                                <div className="item_placeholder" />
                                                <div className="product-item-info product_holder product--zoom" data-container="product-grid">
                                                    <div className="product_holder__inside">
                                                        <div className="product photo product-item-photo"><a href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-27.html" tabIndex={-1}> <span className="product-image-container" style={{width: 370}}><span className="product-image-wrapper" style={{paddingBottom: '123.783783784%'}}><img className="product-image-photo" src="http://magento-demo16.tonytemplates.com/yourstore/pub/media/catalog/product/cache/48/small_image/370x458/beff4985b56e3afdbeabfc89641a4582/m/d/md-solarsciences-quick-dry-body-spray-spf-40.jpg" width={370} height={458} alt="SolarSciences Quick Dry Body Spray" /></span></span></a> <a className="weltpixel-quickview quick-view weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2742/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick view</b></a></div>
                                                        <div className="product details product-item-details">
                                                            <div className="product name product-item-name"><h2><a className="product-item-link" href="http://magento-demo16.tonytemplates.com/yourstore/headphones-silver-27.html">SolarSciences
                                                                Quick Dry Body Spray</a></h2></div>
                                                            <div className="price-box price-final_price" data-role="priceBox" data-product-id={2742}><span className="price-container price-final_price tax weee"> <span id="product-price-2742" data-price-amount={900} data-price-type="finalPrice" className="price-wrapper "><span className="price">$900.00</span></span></span></div>
                                                            <div className="product_holder__inside__review row-mode-visible">
                                                                <div className="rating row-mode-visible" />
                                                            </div>
                                                            <div className="product-item-inner product_holder__inside__hover">
                                                                <div className="product actions product-item-actions product_holder__inside__info">
                                                                    <a className="weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2742/" href="javascript:void(0);"><span>Quickview</span></a>
                                                                    <div className="product_holder__inside__info__btns">
                                                                        <div className="actions-primary">
                                                                            <form className="listing_form" data-role="tocart-form" action="http://magento-demo16.tonytemplates.com/yourstore/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,/product/2742/" method="post"><input type="hidden" name="product" defaultValue={2742} /><input type="hidden" name="uenc" defaultValue="aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjRG92TDIxaFoyVnVkRzh0WkdWdGJ6RTJMblJ2Ym5sMFpXMXdiR0YwWlhNdVkyOXRMM2x2ZFhKemRHOXlaUzl6YTJsdUxXTmhjbVV1YUhSdGJEOXdjbTlrZFdOMFgyeHBjM1JmYjNKa1pYSTlibUZ0WlEsLC9wcm9kdWN0LzI3NDIv" /><input name="form_key" type="hidden" defaultValue="5NCTGMrIjXLvump9" />
                                                                                <button type="submit" title="Add to Cart" className="action tocart primary btn--ys btn--xl">
                                                                                    <i className="icon icon-shopping_basket" /> <span>Add to Cart</span>
                                                                                </button>
                                                                            </form>
                                                                            <a className="btn btn--ys btn--xl row-mode-visible weltpixel-quickview weltpixel_quickview_button_v2" data-quickview-url="http://magento-demo16.tonytemplates.com/yourstore/weltpixel_quickview/catalog_product/view/id/2742/" href="javascript:void(0);"><b><span className="icon icon-visibility" />Quick
                                                                                view</b></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2742&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span className="icon icon-favorite_border" /></a> <a href="#" className="btn btn--ys btn--xl visible-xs" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2742&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span className="icon icon-sort" /></a></div>
                                                                    </div>
                                                                    <div data-role="add-to-links" className="actions-secondary product_holder__inside__info__link hidden-sm">
                                                                        <a href="#" className="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2742&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" data-action="add-to-wishlist" role="button"><span>Add to Wish List</span></a>
                                                                        <a href="#" className="action tocompare" title="Add to Compare" aria-label="Add to Compare" data-post="{&quot;action&quot;:&quot;http:\/\/magento-demo16.tonytemplates.com\/yourstore\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;2742&quot;,&quot;uenc&quot;:&quot;aHR0cDovL21hZ2VudG8tZGVtbzE2LnRvbnl0ZW1wbGF0ZXMuY29tL3lvdXJzdG9yZS9za2luLWNhcmUuaHRtbD9wcm9kdWN0X2xpc3Rfb3JkZXI9bmFtZQ,,&quot;}}" role="button"><span>Add to Compare</span></a></div>
                                                                </div>
                                                                <div className="rating row-mode-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="toolbar toolbar-products"><a className="btn btn--ys slide-column-open visible-xs visible-sm hidden-xl hidden-lg hidden-md" href="#">Filter</a>
                                        <div className="modes"><strong className="modes-label" id="modes-label">View as</strong> <strong title="Grid" className="modes-mode active mode-grid" data-value="grid"><span>Grid</span></strong>
                                            <a className="modes-mode mode-list" title="List" href="#" data-role="mode-switcher" data-value="list" id="mode-list" aria-labelledby="modes-label mode-list"><span>List</span></a></div>
                                        <p className="toolbar-amount" id="toolbar-amount"><span className="toolbar-number">8</span> Items
                                        </p>
                                        <div className="field limiter"><label className="label_limiter" htmlFor="limiter"><span>Show</span></label>
                                            <div className="control select-wrapper"><select id="limiter" data-role="limiter" className="limiter-options select--ys show-qty">
                                                <option value={10}>10</option>
                                                <option value={15} selected="selected">15</option>
                                                <option value={30}>30</option>
                                            </select></div>
                                            <span className="limiter-text">per page</span></div>
                                        <div className="toolbar-sorter sorter"><label className="sorter-label" htmlFor="sorter">Sort By</label>
                                            <div className="select-wrapper"><select id="sorter" data-role="sorter" className="sorter-options select--ys sort-position">
                                                <option value="position">Position</option>
                                                <option value="name" selected="selected">Product Name</option>
                                                <option value="price">Price</option>
                                            </select></div>
                                            <a title="Set Descending Direction" href="#" className="action sorter-action sort-asc" data-role="direction-switcher" data-value="desc"><span>Set Descending Direction</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="leftColumn" className="col-md-4 col-lg-3 col-xl-2">
                            <div className="sidebar sidebar-main">
                                <div className="block filter" id="layered-filter-block" data-collapsible="true"><a className="slide-column-close visible-sm visible-xs" href="#"><span className="icon icon-chevron_left" /> back</a>
                                    <div className="block-title filter-title" data-count={0} role="tablist"><strong data-role="title" role="tab" aria-selected="false" aria-expanded="false" tabIndex={0}>Shop
                                        By</strong></div>
                                    <div className="block-content filter-content"><strong role="heading" aria-level={2} className="block-subtitle filter-subtitle">Shopping
                                        Options</strong>
                                        <div className="filter-options" id="narrow-by-list" data-role="content" role="tablist">
                                            <div data-role="collapsible" className="filter-options-item" role="presentation" data-collapsible="true">
                                                <div data-role="title" className="filter-options-title" role="tab" aria-selected="false" aria-expanded="false" tabIndex={0}>Color
                                                </div>
                                                <div data-role="content" className="filter-options-content" role="tabpanel" aria-hidden="true" style={{display: 'none'}}>
                                                    <div className="swatch-attribute swatch-layered color" attribute-code="color" attribute-id={93}>
                                                        <div className="swatch-attribute-options clearfix"><a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={50} option-label="Blue" option-tooltip-thumb option-tooltip-value="#1857f7" style={{background: '#1857f7 no-repeat center', backgroundSize: 'initial'}} />
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={51} option-label="Brown" option-tooltip-thumb option-tooltip-value="#945454" style={{background: '#945454 no-repeat center', backgroundSize: 'initial'}} />
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={52} option-label="Gray" option-tooltip-thumb option-tooltip-value="#8f8f8f" style={{background: '#8f8f8f no-repeat center', backgroundSize: 'initial'}} />
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={53} option-label="Green" option-tooltip-thumb option-tooltip-value="#53a828" style={{background: '#53a828 no-repeat center', backgroundSize: 'initial'}} />
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={54} option-label="Lavender" option-tooltip-thumb option-tooltip-value="#ce64d4" style={{background: '#ce64d4 no-repeat center', backgroundSize: 'initial'}} />
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={55} option-label="Multi" option-tooltip-thumb option-tooltip-value="#ffffff" style={{background: '#ffffff no-repeat center', backgroundSize: 'initial'}} />
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={56} option-label="Orange" option-tooltip-thumb option-tooltip-value="#eb6703" style={{background: '#eb6703 no-repeat center', backgroundSize: 'initial'}} />
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={57} option-label="Purple" option-tooltip-thumb option-tooltip-value="#ef3dff" style={{background: '#ef3dff no-repeat center', backgroundSize: 'initial'}} />
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={58} option-label="Red" option-tooltip-thumb option-tooltip-value="#ff0000" style={{background: '#ff0000 no-repeat center', backgroundSize: 'initial'}} />
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={59} option-label="White" option-tooltip-thumb option-tooltip-value="#ffffff" style={{background: '#ffffff no-repeat center', backgroundSize: 'initial'}} />
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option color disabled" option-type={1} option-id={60} option-label="Yellow" option-tooltip-thumb option-tooltip-value="#ffd500" style={{background: '#ffd500 no-repeat center', backgroundSize: 'initial'}} />
                                                        </a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-role="collapsible" className="filter-options-item" role="presentation" data-collapsible="true">
                                                <div data-role="title" className="filter-options-title" role="tab" aria-selected="false" aria-expanded="false" tabIndex={0}>Price
                                                </div>
                                                <div data-role="content" className="filter-options-content" role="tabpanel" aria-hidden="true" style={{display: 'none'}}>
                                                    <ol className="items">
                                                        <li className="item">
                                                            <div id="ln_price_attribute">
                                                                <div id="ln_price_slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: '0%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: '100%'}} /></div>
                                                                <div id="ln_price_text">$70.00 - $900.00</div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div data-role="collapsible" className="filter-options-item" role="presentation" data-collapsible="true">
                                                <div data-role="title" className="filter-options-title" role="tab" aria-selected="false" aria-expanded="false" tabIndex={0}>Size
                                                </div>
                                                <div data-role="content" className="filter-options-content" role="tabpanel" aria-hidden="true" style={{display: 'none'}}>
                                                    <div className="swatch-attribute swatch-layered size" attribute-code="size" attribute-id={141}>
                                                        <div className="swatch-attribute-options clearfix"><a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={167} option-label="XS" option-tooltip-thumb option-tooltip-value>
                                                                XS
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={92} option-label="65 cm" option-tooltip-thumb option-tooltip-value>65 cm
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={168} option-label="S" option-tooltip-thumb option-tooltip-value>S
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={93} option-label="75 cm" option-tooltip-thumb option-tooltip-value>75 cm
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={169} option-label="M" option-tooltip-thumb option-tooltip-value>M
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={94} option-label="6 foot" option-tooltip-thumb option-tooltip-value>6 foot
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={170} option-label="L" option-tooltip-thumb option-tooltip-value>L
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={95} option-label="8 foot" option-tooltip-thumb option-tooltip-value>8 foot
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={171} option-label="XL" option-tooltip-thumb option-tooltip-value>
                                                                XL
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={96} option-label="10 foot" option-tooltip-thumb option-tooltip-value>10 foot
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={172} option-label={28} option-tooltip-thumb option-tooltip-value>
                                                                28
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={173} option-label={29} option-tooltip-thumb option-tooltip-value>
                                                                29
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={174} option-label={30} option-tooltip-thumb option-tooltip-value>
                                                                30
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={175} option-label={31} option-tooltip-thumb option-tooltip-value>
                                                                31
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={176} option-label={32} option-tooltip-thumb option-tooltip-value>
                                                                32
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={177} option-label={33} option-tooltip-thumb option-tooltip-value>
                                                                33
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={178} option-label={34} option-tooltip-thumb option-tooltip-value>
                                                                34
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={179} option-label={36} option-tooltip-thumb option-tooltip-value>
                                                                36
                                                            </div>
                                                        </a> <a href="javascript:void();" className="swatch-option-link-layered">
                                                            <div className="swatch-option text disabled" option-type={0} option-id={180} option-label={38} option-tooltip-thumb option-tooltip-value>
                                                                38
                                                            </div>
                                                        </a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="ln_overlay" className="ln_overlay">
                                            <div className="spinner_layered">
                                                <div className="rect1" />
                                                <div className="rect2" />
                                                <div className="rect3" />
                                                <div className="rect4" />
                                                <div className="rect5" />
                                            </div>
                                        </div>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: " .ln_overlay {\n                                background-color: #FFFFFF;\n                                height: 100%;\n                                left: 0;\n                                opacity: 0.65;\n                                filter: alpha(opacity=65);\n                                position: absolute;\n                                top: 0;\n                                width: 100%;\n                                z-index: 555;\n                                display: none;\n                            }\n\n                            .ln_overlay img {\n                                top: 30%;\n                                left: 45%;\n                                display: block;\n                                position: absolute;\n                            }" }} />
                                    </div>
                                </div>
                                <style type="text/css" dangerouslySetInnerHTML={{__html: " .ln_overlay {\n                        background-color: #FFFFFF;\n                        height: 100%;\n                        left: 0;\n                        opacity: 0.65;\n                        filter: alpha(opacity=65);\n                        position: absolute;\n                        top: 0;\n                        width: 100%;\n                        z-index: 555;\n                        display: none;\n                    }\n\n                    .ln_overlay img {\n                        top: 30%;\n                        left: 45%;\n                        display: block;\n                        position: absolute;\n                    }" }} />
                            </div>
                            <div className="sidebar sidebar-additional">
                                <div className="block block-compare" data-bind="scope: 'compareProducts'" data-role="compare-products-sidebar">
                                    <div className="block-title"><strong id="block-compare-heading" role="heading" aria-level={2}>Compare
                                        Products</strong> <span className="counter qty no-display" data-bind="text: compareProducts().countCaption, css: {'no-display': !compareProducts().count}">0 items</span>
                                    </div>{/* ko if: compareProducts().count */}{/* /ko */}
                                    {/* ko ifnot: compareProducts().count */}
                                    <div className="empty">You have no items to compare.</div>{/* /ko */}</div>
                                <div className="block block-wishlist" data-bind="scope: 'wishlist'">
                                    <div className="block-title"><strong>My Wish List</strong> {/* ko if: wishlist().counter */}
                                        {/* /ko */}</div>
                                    <div className="block-content"><strong className="subtitle">Last Added Items</strong>
                                        {/* ko if: wishlist().counter */}{/* /ko */}{/* ko ifnot: wishlist().counter */}
                                        <div className="empty">You have no items in your wish list.</div>{/* /ko */}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>);
    }
}