<!-- blog-section start -->
<section class="blog-section pt-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="section-header">
                        <h2 class="section-title">Our Latest News & Tips</h2>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="section-header">
                        <p>Hsto iaculis mauris nec dis, donec nulla quam quisque amet nulla. Parturient mattis, urna cras eleifend metus, varius turpis enim Tellus at libero eu et, felis id rhonc eros dui. Elementum ante congue odio duis mollis nulla quis </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mb-30-none">
                <?php foreach ($arrayResult as $data) {?>
                <div class="col-lg-4 col-sm-8 mb-30">
                    <div class="blog-item">
                        <div class="blog-thumb">
                            <img src="<?=$data['IMAGE']?>" alt="blog image">
                        </div>
                        <div class="blog-content">
                            <div class="meta-post d-flex flex-wrap">
                                <div class="meta-user">
                                    <a href="#"><i class="fas fa-user"></i> <span><?=$data['AUTHOR']?></span></a>
                                </div>
                                <div class="meta-date">
                                    <a href="#"><i class="fas fa-calendar-alt"></i> <span><?=$data['DATE']?></span></a>
                                </div>
                            </div>
                            <h5 class="title"><a href="blog-details.html"><?=$data['TITLE']?></a> </h5>
                            <p><?=$data['TEXT']?></p>
                        </div>
                    </div>
                </div>
                <?php }?>
                <div class="col-lg-4 col-sm-8 mb-30">
                    <div class="blog-item">
                        <div class="blog-thumb">
                            <img src="assets/images/blog-2.png" alt="blog image">
                        </div>
                        <div class="blog-content">
                            <div class="meta-post d-flex flex-wrap">
                                <div class="meta-user">
                                    <a href="#"><i class="fas fa-user"></i> <span>Keven Feil</span></a>
                                </div>
                                <div class="meta-date">
                                    <a href="#"><i class="fas fa-calendar-alt"></i> <span>16 dec 2019</span></a>
                                </div>
                            </div>
                            <h5 class="title"><a href="blog-details.html">get your new domain</a> </h5>
                            <p>Nulla morbi, ad pur Portwisu morbsed id, arcu vestibulum dolor conmtum ac egestas lorem elit libero. </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-8 mt-30">
                    <div class="blog-item">
                        <div class="blog-content blog-content--style">
                            <h5 class="title"><a href="blog-details.html">It’s Complicated The Path of Palestinian Love Story</a></h5>
                            <div class="meta-post meta-post--style d-flex flex-wrap">
                                <div class="meta-user">
                                    <a href="#"> <span>Post by Keven Feil</span></a>
                                </div>
                                <div class="meta-date">
                                    <a href="#"> <span>21 Jun 2019</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-item">
                        <div class="blog-content blog-content--style">
                            <h5 class="title"><a href="blog-details.html">British Columbia’s Business Temp Opaque Array of Tax Breaks</a></h5>
                            <div class="meta-post meta-post--style d-flex flex-wrap">
                                <div class="meta-user">
                                    <a href="#"> <span>Post by Reta Schmidt        </span></a>
                                </div>
                                <div class="meta-date">
                                    <a href="#"> <span>30 Jun 2019</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-item">
                        <div class="blog-content blog-content--style">
                            <h5 class="title"><a href="blog-details.html">Meet Toronto’s Gavel-Wielding Puck-Shooting</a></h5>
                            <div class="meta-post meta-post--style d-flex flex-wrap">
                                <div class="meta-user">
                                    <a href="#"> <span>Post by Bette Herzog</span></a>
                                </div>
                                <div class="meta-date">
                                    <a href="#"> <span>15 Aug 2019</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- blog-section end -->


    <!-- brand-section start -->
    <div class="brand-section pt-120 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-wrapper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="BrandSlider">
                                    <div class="brand-item">
                                        <img src="assets/images/brand-1.png" alt="logo images">
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="BrandSlider">
                                    <div class="brand-item">
                                        <img src="assets/images/brand-2.png" alt="logo images">
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="BrandSlider">
                                    <div class="brand-item">
                                        <img src="assets/images/brand-3.png" alt="logo images">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- brand-section end -->


    <!-- sign-up-section start -->
    <section class="sign-up-section">
        <div class="container">
            <div class="row mb-30-none">
                <div class="col-lg-6 mb-30">
                    <div class="sign-widget">
                        <h3 class="sub-title">Get an easy quote</h3>
                        <h2 class="title">Sign Up For Web Hosting</h2>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-30">
                    <div class="sign-info">
                        <h3 class="sub-title">Starting At Only</h3>
                        <h2 class="title">$2.75/<span>mo*</span></h2>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-30">
                    <div class="sign-widget-btn">
                        <a href="register.html" class="cmn-btn">Get Start Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- sign-up-section end --> 