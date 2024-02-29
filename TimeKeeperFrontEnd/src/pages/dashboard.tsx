import React from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/magnific-popup.css';
import './css/slicknav.min.css';
import './css/style.css';





const Dashboard: React.FC = () => {
        return (
            <>
                <meta charSet="UTF-8" />
                <meta name="description" content="Yoga Studio Template" />
                <meta name="keywords" content="Yoga, unica, creative, html" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Violet | Template</title>
                {/* Google Font */}
                <link
                    href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap"
                    rel="stylesheet"
                />

                {/* Search model */}
                <div className="search-model">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-switch">+</div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
                {/* Search model end */}
                {/* Header Section Begin */}
                <header className="header-section">
                    <div className="container-fluid">
                        <div className="inner-header">
                            <div className="logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                            <div className="header-right">
                                <img src="img/icons/search.png" alt="" className="search-trigger" />
                                <img src="img/icons/man.png" alt="" />
                                <a href="#">
                                    <img src="img/icons/bag.png" alt="" />
                                    <span>2</span>
                                </a>
                            </div>
                            <div className="user-access">
                                <a href="#">Register</a>
                                <a href="#" className="in">
                                    Sign in
                                </a>
                            </div>
                            <nav className="main-menu mobile-menu">
                                <ul>
                                    <li>
                                        <a className="active" href="./index.html">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./categories.html">Shop</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="product-page.html">Product Page</a>
                                            </li>
                                            <li>
                                                <a href="shopping-cart.html">Shopping Card</a>
                                            </li>
                                            <li>
                                                <a href="check-out.html">Check out</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="./product-page.html">About</a>
                                    </li>
                                    <li>
                                        <a href="./check-out.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="./contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                <section className="hero-slider">
                    <div className="hero-items owl-carousel">
                        <div className="single-slider-item set-bg" data-setbg="img/slider-1.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h1>2019</h1>
                                        <h2>Lookbook.</h2>
                                        <a href="#" className="primary-btn">
                                            See More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slider-item set-bg" data-setbg="img/slider-2.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h1>2019</h1>
                                        <h2>Lookbook.</h2>
                                        <a href="#" className="primary-btn">
                                            See More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slider-item set-bg" data-setbg="img/slider-3.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h1>2019</h1>
                                        <h2>Lookbook.</h2>
                                        <a href="#" className="primary-btn">
                                            See More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Hero Slider End */}
                {/* Features Section Begin */}
                <section className="features-section spad">
                    <div className="features-ads">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="single-features-ads first">
                                        <img src="img/icons/f-delivery.png" alt="" />
                                        <h4>Free shipping</h4>
                                        <p>
                                            Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                                            velit. Vesti bulum mal esuada aliquet libero viverra cursus.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-features-ads second">
                                        <img src="img/icons/coin.png" alt="" />
                                        <h4>100% Money back </h4>
                                        <p>
                                            Urna quam, euismod sit amet mollis quis, vestibulum quis velit.
                                            Vesti bulum mal esuada aliquet libero viverra cursus.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-features-ads">
                                        <img src="img/icons/chat.png" alt="" />
                                        <h4>Online support 24/7</h4>
                                        <p>
                                            Urna quam, euismod sit amet mollis quis, vestibulum quis velit.
                                            Vesti bulum mal esuada aliquet libero viverra cursus.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Features Box */}
                    <div className="features-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="single-box-item first-box">
                                                <img src="img/f-box-1.jpg" alt="" />
                                                <div className="box-text">
                                                    <span className="trend-year">2019 Party</span>
                                                    <h2>Jewelry</h2>
                                                    <span className="trend-alert">Trend Allert</span>
                                                    <a href="#" className="primary-btn">
                                                        See More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-box-item second-box">
                                                <img src="img/f-box-2.jpg" alt="" />
                                                <div className="box-text">
                                                    <span className="trend-year">2019 Trend</span>
                                                    <h2>Footwear</h2>
                                                    <span className="trend-alert">Bold &amp; Black</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-box-item large-box">
                                        <img src="img/f-box-3.jpg" alt="" />
                                        <div className="box-text">
                                            <span className="trend-year">2019 Party</span>
                                            <h2>Collection</h2>
                                            <div className="trend-alert">Trend Allert</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Features Section End */}
                {/* Latest Product Begin */}
                <section className="latest-products spad">
                    <div className="container">
                        <div className="product-filter">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="section-title">
                                        <h2>Latest Products</h2>
                                    </div>
                                    <ul className="product-controls">
                                        <li data-filter="*">All</li>
                                        <li data-filter=".dresses">Dresses</li>
                                        <li data-filter=".bags">Bags</li>
                                        <li data-filter=".shoes">Shoes</li>
                                        <li data-filter=".accesories">Accesories</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row" id="product-list">
                            <div className="col-lg-3 col-sm-6 mix all dresses bags">
                                <div className="single-product-item">
                                    <figure>
                                        <a href="#">
                                            <img src="img/products/img-1.jpg" alt="" />
                                        </a>
                                        <div className="p-status">new</div>
                                    </figure>
                                    <div className="product-text">
                                        <h6>Green Dress with details</h6>
                                        <p>$22.90</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mix all dresses bags">
                                <div className="single-product-item">
                                    <figure>
                                        <a href="#">
                                            <img src="img/products/img-2.jpg" alt="" />
                                        </a>
                                        <div className="p-status sale">sale</div>
                                    </figure>
                                    <div className="product-text">
                                        <h6>Yellow Maxi Dress</h6>
                                        <p>$25.90</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mix all shoes accesories">
                                <div className="single-product-item">
                                    <figure>
                                        <a href="#">
                                            <img src="img/products/img-3.jpg" alt="" />
                                        </a>
                                        <div className="p-status">new</div>
                                    </figure>
                                    <div className="product-text">
                                        <h6>One piece bodysuit</h6>
                                        <p>$19.90</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mix all shoes accesories">
                                <div className="single-product-item">
                                    <figure>
                                        <a href="#">
                                            <img src="img/products/img-4.jpg" alt="" />
                                        </a>
                                        <div className="p-status popular">popular</div>
                                    </figure>
                                    <div className="product-text">
                                        <h6>Blue Dress with details</h6>
                                        <p>$35.50</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mix all dresses shoes">
                                <div className="single-product-item">
                                    <figure>
                                        <a href="#">
                                            <img src="img/products/img-5.jpg" alt="" />
                                        </a>
                                        <div className="p-status">new</div>
                                    </figure>
                                    <div className="product-text">
                                        <h6>Green Dress with details</h6>
                                        <p>$22.90</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mix all accesories bags">
                                <div className="single-product-item">
                                    <figure>
                                        <a href="#">
                                            <img src="img/products/img-6.jpg" alt="" />
                                        </a>
                                        <div className="p-status sale">sale</div>
                                    </figure>
                                    <div className="product-text">
                                        <h6>Yellow Maxi Dress</h6>
                                        <p>$25.90</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mix all dresses bags">
                                <div className="single-product-item">
                                    <figure>
                                        <a href="#">
                                            <img src="img/products/img-7.jpg" alt="" />
                                        </a>
                                    </figure>
                                    <div className="product-text">
                                        <h6>One piece bodysuit</h6>
                                        <p>$19.90</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mix all accesories bags">
                                <div className="single-product-item">
                                    <figure>
                                        <a href="#">
                                            <img src="img/products/img-8.jpg" alt="" />
                                        </a>
                                        <div className="p-status popular">popular</div>
                                    </figure>
                                    <div className="product-text">
                                        <h6>Blue Dress with details</h6>
                                        <p>$35.50</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Latest Product End */}
                {/* Lookbok Section Begin */}
                <section className="lookbok-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-1">
                                <div className="lookbok-left">
                                    <div className="section-title">
                                        <h2>
                                            2019 <br />
                                            #lookbook
                                        </h2>
                                    </div>
                                    <p>
                                        Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                                        velit. Vestibulum malesuada aliquet libero viverra cursus. Aliquam
                                        erat volutpat. Morbi id dictum quam, ut commodo lorem. In at nisi
                                        nec arcu porttitor aliquet vitae at dui. Sed sollicitudin nulla
                                        non leo viverra scelerisque. Phasellus facilisis lobortis metus,
                                        sit amet viverra lectus finibus ac. Aenean non felis dapibus,
                                        placerat libero auctor, ornare ante. Morbi quis ex eleifend,
                                        sodales nulla vitae, scelerisque ante. Nunc id vulputate dui.
                                        Suspendisse consectetur rutrum metus nec scelerisque. s
                                    </p>
                                    <a href="#" className="primary-btn look-btn">
                                        See More
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="lookbok-pic">
                                    <img src="img/lookbok.jpg" alt="" />
                                    <div className="pic-text">fashion</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Lookbok Section End */}
                {/* Logo Section Begin */}
                <div className="logo-section spad">
                    <div className="logo-items owl-carousel">
                        <div className="logo-item">
                            <img src="img/logos/logo-1.png" alt="" />
                        </div>
                        <div className="logo-item">
                            <img src="img/logos/logo-2.png" alt="" />
                        </div>
                        <div className="logo-item">
                            <img src="img/logos/logo-3.png" alt="" />
                        </div>
                        <div className="logo-item">
                            <img src="img/logos/logo-4.png" alt="" />
                        </div>
                        <div className="logo-item">
                            <img src="img/logos/logo-5.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* Logo Section End */}
                {/* Footer Section Begin */}
                <footer className="footer-section spad">
                    <div className="container">
                        <div className="newslatter-form">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form action="#">
                                        <input type="text" placeholder="Your email address" />
                                        <button type="submit">Subscribe to our newsletter</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h4>About us</h4>
                                        <ul>
                                            <li>About Us</li>
                                            <li>Community</li>
                                            <li>Jobs</li>
                                            <li>Shipping</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h4>Customer Care</h4>
                                        <ul>
                                            <li>Search</li>
                                            <li>Privacy Policy</li>
                                            <li>2019 Lookbook</li>
                                            <li>Shipping &amp; Delivery</li>
                                            <li>Gallery</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h4>Our Services</h4>
                                        <ul>
                                            <li>Free Shipping</li>
                                            <li>Free Returnes</li>
                                            <li>Our Franchising</li>
                                            <li>Terms and conditions</li>
                                            <li>Privacy Policy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h4>Information</h4>
                                        <ul>
                                            <li>Payment methods</li>
                                            <li>Times and shipping costs</li>
                                            <li>Product Returns</li>
                                            <li>Shipping methods</li>
                                            <li>Conformity of the products</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-links-warp">
                        <div className="container">
                            <div className="social-links">
                                <a href="" className="instagram">
                                    <i className="fa fa-instagram" />
                                    <span>instagram</span>
                                </a>
                                <a href="" className="pinterest">
                                    <i className="fa fa-pinterest" />
                                    <span>pinterest</span>
                                </a>
                                <a href="" className="facebook">
                                    <i className="fa fa-facebook" />
                                    <span>facebook</span>
                                </a>
                                <a href="" className="twitter">
                                    <i className="fa fa-twitter" />
                                    <span>twitter</span>
                                </a>
                                <a href="" className="youtube">
                                    <i className="fa fa-youtube" />
                                    <span>youtube</span>
                                </a>
                                <a href="" className="tumblr">
                                    <i className="fa fa-tumblr-square" />
                                    <span>tumblr</span>
                                </a>
                            </div>
                        </div>
                        <div className="container text-center pt-5">
                            <p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with{" "}
                                <i className="icon-heart color-danger" aria-hidden="true" /> by{" "}
                                <a href="https://colorlib.com" target="_blank">
                                    Colorlib
                                </a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                        </div>
                    </div>
                </footer>
                {/* Footer Section End */}
                {/* Js Plugins */}
            </>

        );
    };

    export default Dashboard;