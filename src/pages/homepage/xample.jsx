import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/user/user.actions";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
// import Spinner from "../../components/spinner/spinner.component";
import Progress from "../../components/Progress";
import OTP from "../../components/otp";

const HomePage = ({ logout }) => {
  const [modal, setModal] = useState(false);
  const [otp, setOTP] = useState(false);
  const handleTransfer = () => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
      setOTP(true);
    }, 8000);
  };
  return (
    <div class="wrapper" id="wrapper">


		<header id="header" class="header sticky--header">

			<div class="header__top bg--blue">
				<div class="container">
					<div class="header__top__inner">
						<ul class="header__top__info">
							<li>
								<a href="callto://+1(903) 354-5058">
									<i class="flaticon-old-typical-phone"></i>Contact: +1(903) 354-5058</a>
							</li>
							<li>
								<a href="mailto:jeffreyhacker23@gmail.com">
									<i class="flaticon-black-back-closed-envelope-shape"></i> E-mail Address: jeffreyhacker23@gmail.com</a>
							</li>
						</ul>
						<div class="header__top__button">
							<a class="cr-btn cr-btn--lg" href="https://wa.me/+1(903) 354-5058">
								<span>Make an appointment</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		
			<div class="header__bottom bg--white">
				<div class="container d-none d-lg-block">
					<div class="header__bottom__inner">
						<div class="header__logo">
							<a href="index.html">
								<img src="images/logo2.png" alt="header logo" style="height: 40px;">
							</a>
						</div>

				
						<nav id="main-navigation" class="header__menu main-navigation">
							<ul>
								<li>
									<a href="#home">HOME</a>
								</li>
								<li>
									<a href="#about">ABOUT</a>
								</li>
								<li>
									<a href="#services">OUR SERVICES</a>
								</li>
								<li>
									<a href="#team">OUR TEAM</a>
								</li>
								<li>
									<a href="#contact">CONTACT US</a>
								</li>
								
								
							</ul>
						</nav>


					</div>
				</div>


				<div class="container d-block d-lg-none">
					<div class="mobile-menu clearfix d-md-block d-lg-none">
						<a class="mobile-logo" href="index.html">
							<img src="images/logo2.png" alt="logo">
						</a>
					</div>
				</div>
		
			</div>
	

		</header>
		
		<div class="banner-area" id="home">
			<div class="banner banner-slider-active banner--animated-content">

			
				<div style="background-image: url(images/1.gif);" class="banner__single bg-image--1" data-black-overlay="6">
					<div class="container">
						<div class="row">
							<div class="col-lg-8 offset-lg-2 col-12 offset-0">
								<div class="banner__single__content text-center">
									<h1 style="text-transform: uppercase;">Hire 
										<span class="color--theme">Professional Hacker</span> 
										<span class="color--theme">Securely</span> and Safely</h1>
									<a href="https://wa.me/+1(903) 354-5058" class="cr-btn">
										<span>Contact Now</span>
									</a>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			
				<div style="background-image: url(images/2.jpg);" class="banner__single bg-image--2" data-black-overlay="6">
					<div class="container">
						<div class="row">
							<div class="col-lg-8 offset-lg-2 col-12 offset-0">
								<div class="banner__single__content">
									<h1>Hacks  
										<span class="color--theme">in</span> High Demand
										</h1>
									<a href="https://wa.me/+1(903) 354-5058" class="cr-btn">
										<span>Contact Now</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			

				

			</div>
		</div>
	
			<section id="about" class="cr-section about-area bg--white">
				<div class="container">
					<div class="about-area__inside">
						<div class="row">
							<div class="col-lg-5">
								<div class="about-area__image" style="padding: 0px;">
									<img class="wow slideInLeft" style="height: 500px;margin-top: 0px;margin-bottom: 30px;" data-wow-delay="0" src="images/3.jpg" alt="about area thumb">
								</div>
							</div>
							<div class="col-lg-7">
								<div class="about-area__content">
									<h4>We at “
										<span class="color--theme">JeffreyHacks</span>”</h4>
									<h3 class="cd-headline cx-heading slide">are deep web experts with years of experience readily available to provide you 
										<span class="color--theme cd-words-wrapper cd-words-wrapper-2">
											<b class="is-visible">quality</b>
											<b>reliable</b>
											<b>perfect</b>
										</span>
										hack services.</h3>
									<p>Our Goal is to make your digital life secure, safe and hassle-free and provide you access to any digital control., and most of all secure. When this team was assembled, we had the goal of solving complex problems and doing the impossible for our clients. We deliver service that is focused on the highest satisfaction of our clients and speedy resolutions to problems. We have been able to maintain these high standards and that explains why our clients call us the BEST. </p>
									<p>Jeffrey Hacks represents one of the many branches of a highly organized Dark-web organization funded with the aim of proving the best digital intrusion and expunction services to the public.  Our hackers have been serving clients globally, with active backdoor access to thousands of major servers worldwide.  Our focus enables us to provide customized solutions and actionable recommendations that draw on robust problem framing, cutting-edge technology, deep therapeutic area knowledge, extensive global hacker-space.</p>
									<a href="#about" class="cr-btn">
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="features-area" class="cr-section features-area">
				<div class="row no-gutters">

				
					<div class="col-lg-4">
						<div class="feature">
							<div class="feature__icon">
								<span>
									<i class="flaticon-shield"></i>
								</span>
								<span>
									<i class="flaticon-shield"></i>
								</span>
							</div>
							<div class="feature__content">
								<h4 class="wow fadeInUp">
									<a href="features.html">ENSURE SECURITY</a>
								</h4>
								<p class="wow fadeInUp" data-wow-delay="0.15s"> We have employers and public liability insurance. No long term contracts, we are here to support you with our exceptional service when you need us. </p>
							</div>
						</div>
					</div>
				
					<div class="col-lg-4">
						<div class="feature active">
							<div class="feature__icon">
								<span>
									<i class="flaticon-team"></i>
								</span>
								<span>
									<i class="flaticon-team"></i>
								</span>
							</div>
							<div class="feature__content">
								<h4 class="wow fadeInUp">
									<a href="features.html">EXPERT TEAM</a>
								</h4>
								<p class="wow fadeInUp" data-wow-delay="0.15s">Every member of our team is well experienced in their various niches. We have Digital Forensic Specialists, Certified Ethical Hackers, Computer Engineers, Cyber Security Experts, Private investigators and more on our team. </p>
							</div>
						</div>
					</div>
			
					<div class="col-lg-4">
						<div class="feature">
							<div class="feature__icon">
								<span>
									<i class="flaticon-24-hours"></i>
								</span>
								<span>
									<i class="flaticon-24-hours"></i>
								</span>
							</div>
							<div class="feature__content">
								<h4 class="wow fadeInUp">
									<a href="features.html">24/7 SUPPORT</a>
								</h4>
								<p class="wow fadeInUp" data-wow-delay="0.15s">Includes a team that will handle and process your request from start to finish and provide support even after your project is completed we strive to offer the best hacking services on the web. </p>
							</div>
						</div>
					</div>
				

				</div>
			</section>
		
			<section id="services" class="service-area section-padding--xlg bg--white">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 col-md-10 col-12">
							<div class="section-title">
								<h4>OUR SERVICES</h4>
								<h2>PROVIDE BEST
									<span class="color--theme">SERVICES</span>
								</h2>
								<p>Hire us to clean off your criminal details from any database system, anytime anywhere, is our profession we offer this services on daily basis without any complication, all our clients go court free with no trace of their criminal history.</p>
							</div>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-lg-8">
							<div class="service-area__services">
								<div class="row">

									<div class="col-lg-6 col-md-6 wow flipInX">
										<div class="service">
											<div class="service__icon">
												<img src="images/icons/service-icon-user.png" alt="service icon">
											</div>
											<div class="service__content">
												<h5>
													<a href="single-service.html">Credit repair service</a>
												</h5>
												<p>At jeffrey Hacks, we can help you delete all negative items on your credit report. We can delete Eviction, Collections, Bankruptcy, Derogatory Accounts, Hard Inquiries, Delinquents, Judgements etc. </p>
											</div>
										</div>
									</div>
							
									<div class="col-lg-6 col-md-6 wow flipInX">
										<div class="service">
											<div class="service__icon">
												<img src="images/icons/service-icon-bar.png" alt="service icon">
											</div>
											<div class="service__content">
												<h5>
													<a href="single-service.html">Credit Card Payment</a>
												</h5>
												<p>We help our clients to make payments on their maxed out credit credit cards which also helps their credit score pretty well. contact us to inquire more information about how this works. </p>
											</div>
										</div>
									</div>
								
									<div class="col-lg-6 col-md-6 wow flipInX">
										<div class="service">
											<div class="service__icon">
												<img src="images/icons/service-icon-briefcase.png" alt="service icon">
											</div>
											<div class="service__content">
												<h5>
													<a href="single-service.html">Bitcoin Mining</a>
												</h5>
												<p>Bitcoin mining is how the bitcoin network keeps its transactions secure. … And that’s precisely what bitcoin miners do. As a reward for doing the work to track and secure transactions, miners earn bitcoins for each block they successfully process. </p>
											</div>
										</div>
									</div>
								
									<div class="col-lg-6 col-md-6 wow flipInX">
										<div class="service">
											<div class="service__icon">
												<img src="images/icons/service-icon-pie.png" alt="service icon">
											</div>
											<div class="service__content">
												<h5>
													<a href="single-service.html">Tracking</a>
												</h5>
												<p>With the live and active softwares we have at Jeffrey Hacks, we can help you to track any cell phone’s location, track your spouse’ location and also so spy on any social media accounts including spying his/her text messages without him/her knowing. </p>
											</div>
										</div>
									</div>
								

								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="service-area__bars text-center">
								<div class="cr-bars justify-content-lg-end justify-content-center">
									<div class="cr-bar" data-bar-percent="25" data-bar-title="2009"></div>
									<div class="cr-bar" data-bar-percent="45" data-bar-title="2016"></div>
									<div class="cr-bar" data-bar-percent="37" data-bar-title="2017"></div>
									<div class="cr-bar" data-bar-percent="69" data-bar-title="2019"></div>
									<div class="cr-bar" data-bar-percent="88" data-bar-title="2020"></div>
								</div>
								<span class="cr-bars__name">Our progress</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		
			<section id="team" class="advisor-area bg--white" style="padding-bottom: 20px;">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 offset-0">
							<div class="section-title text-center">
								<h4>OUR TEAM</h4>
								<h2>MEET OUR
									<span class="color--theme">TEAM MEMBER</span>
								</h2>
								<p>Our Team represents one of the many Teams of a highly organized Dark-web organization funded with the aim of proving the best digital intrusion and expunction services to the public.  Our hackers have been serving clients globally, with active backdoor access to thousands of major servers worldwide.  Our focus enables us to provide customized solutions and actionable recommendations that draw on robust problem framing, cutting-edge technology, deep therapeutic area knowledge, extensive global hacker-space.</p>
							</div>
						</div>
					</div>
					<div class="row advisors">

				
						<div class="col-lg-3 col-md-6 col-sm-6 col-12">
							<figure class="advisor">
								<div class="advisor__image">
									<img src="images/advisors/advisor-1.jpg" alt="team member">
								</div>
								<figcaption class="advisor__content">
									<h6>
										<a href="#!">Gerhard Heinz</a>
									</h6>
									<p>Advanced Mobile Forensics</p>
								</figcaption>
							</figure>
						</div>
				
						<div class="col-lg-3 col-md-6 col-sm-6 col-12">
							<figure class="advisor">
								<div class="advisor__image">
									<img src="images/advisors/advisor-2.jpg" alt="team member">
								</div>
								<figcaption class="advisor__content">
									<h6>
										<a href="#!">Vladislav Arkady</a>
									</h6>
									<p>Certified Ethical Hacker</p>
								</figcaption>
							</figure>
						</div>
					
						<div class="col-lg-3 col-md-6 col-sm-6 col-12">
							<figure class="advisor">
								<div class="advisor__image">
									<img src="images/advisors/advisor-3.jpg" alt="team member">
								</div>
								<figcaption class="advisor__content">
									<h6>
										<a href="#!">Vera Lang</a>
									</h6>
									<p>EC-Council Certified Secure</p>
								</figcaption>
							</figure>
						</div>
					
						<div class="col-lg-3 col-md-6 col-sm-6 col-12">
							<figure class="advisor">
								<div class="advisor__image">
									<img src="images/advisors/advisor-4.jpg" alt="team member">
								</div>
								<figcaption class="advisor__content">
									<h6>
										<a href="#!">Jeffrey Lucas</a>
									</h6>
									<p>Advanced Penetration Tester</p>
								</figcaption>
							</figure>
						</div>
					

					</div>
				</div>
			</section>
		

		
			<div id="funfact-area" class="funfact-area bg--white">
				<div class="funfacts">
					<div class="row no-gutters">

				
						<div class="col-lg-3 col-md-6 col-sm-6 col-12">
							<div class="funfact text-center">
								<h1>
									<span class="">1,588</span>
								</h1>
								<h5>TRUSTED CLIENTS</h5>
							</div>
						</div>
			
						<div class="col-lg-3 col-md-6 col-sm-6 col-12">
							<div class="funfact text-center">
								<h1>
									<span class="">102</span>
								</h1>
								<h5>Awards Win</h5>
							</div>
						</div>
				
						<div class="col-lg-3 col-md-6 col-sm-6 col-12">
							<div class="funfact text-center">
								<h1>
									<span class="">2,900</span>
								</h1>
								<h5>Project Done</h5>
							</div>
						</div>
					
						<div class="col-lg-3 col-md-6 col-sm-6 col-12">
							<div class="funfact text-center">
								<h1>
									<span class="">6</span>
								</h1>
								<h5>Expert TEAM MEMBER</h5>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div id="testimonial-area" class="testimonial-area section-padding--xlg bg--grey">
				<div class="container">
					<div class="row">
						<div class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 offset-0">
							<div class="testimonial text-center">
								<h2>CLIENT
									<span class="color--theme">TESTIMONY</span>
								</h2>

								<div class="testimonial__content testimonial-content-slider-active">

									

									<div class="testimonial__content__single">
										<p>Jeffrey smart hacking company removed all bad report from my credit report I was able to apply for high limit credit cards and it was approved </p>
									</div>
								
									<div class="testimonial__content__single">
										<p>I was damn too broke before my neighbor introduced me to Jeffrey smart hacking company and with their hacking skills I was able to get $15,000 in my PayPal account </p>
									</div>
							
									<div class="testimonial__content__single">
										<p>With Jeffrey live and active tacking softwares, i was able to track my cell phone’s location, </p>
									</div>
								

								</div>
						
								<div class="testimonial__author testimonial-author-slider-active">

								
									

								
									<div class="testimonial__author__single">
										<div class="testimonial__author__image">
											<img src="images/testimonial/testimonial-author-3.png" alt="testimonial author">
										</div>
										<div class="testimonial__author__description">
											<h6>Larry hale</h6>
										
										</div>
									</div>
								
									<div class="testimonial__author__single">
										<div class="testimonial__author__image">
											<img src="images/testimonial/testimonial-author-2.png" alt="testimonial author">
										</div>
										<div class="testimonial__author__description">
											<h6>RAISA MARIYA</h6>
											
										</div>
									</div>
							
									<div class="testimonial__author__single">
										<div class="testimonial__author__image">
											<img src="images/testimonial/testimonial-author-1.png" alt="testimonial author">
										</div>
										<div class="testimonial__author__description">
											<h6>Evelyn Brian</h6>
											
										</div>
									</div>
								

								</div>
							

							</div>
						</div>
					</div>
				</div>
			</div>
		
           <section id="services" class="service-area section-padding--xlg bg--white">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 col-md-10 col-12">
							<div class="section-title">
								
								<h2>Few Reasons to Choose
									<span class="color--theme">Jeffrey Hacks</span>
								</h2>
								<p>Why Jeffrey Hacks?</p>
							</div>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-lg-8">
							<div class="service-area__services">
								<div class="row">

									
									<div class="col-lg-6 col-md-6 wow flipInX">
										<div class="service">
											<div class="service__icon">
												<img src="images/icons/service-icon-user.png" alt="service icon">
											</div>
											<div class="service__content">
												<h5>
													<a href="single-service.html">Quick Service Delivery</a>
												</h5>
												<p>For selected services, place order between 00:00 Hrs GMT to 12:00 Noon GMT. **Charges applicable </p>
											</div>
										</div>
									</div>
							
									<div class="col-lg-6 col-md-6 wow flipInX">
										<div class="service">
											<div class="service__icon">
												<img src="images/icons/service-icon-bar.png" alt="service icon">
											</div>
											<div class="service__content">
												<h5>
													<a href="single-service.html">WIDE RANGE OF SERVICES</a>
												</h5>
												<p>Our team is dedicated to offer wide range of ethical hacking services and we have an excellence on-time delivery record. </p>
											</div>
										</div>
									</div>
		
									<div class="col-lg-6 col-md-6 wow flipInX">
										<div class="service">
											<div class="service__icon">
												<img src="images/icons/service-icon-briefcase.png" alt="service icon">
											</div>
											<div class="service__content">
												<h5>
													<a href="single-service.html">ASSURED RESULTS</a>
												</h5>
												<p> There are many website which promise to deliver gauranteed results but few of them really does.. </p>
											</div>
										</div>
									</div>
							
									<div class="col-lg-6 col-md-6 wow flipInX">
										<div class="service">
											<div class="service__icon">
												<img src="images/icons/service-icon-pie.png" alt="service icon">
											</div>
											<div class="service__content">
												<h5>
													<a href="single-service.html">RAPID RESPONSE</a>
												</h5>
												<p>Get response within 30 minutes. Once you fill up the Request quote from Our agency will send you an email reply </p>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="service-area__bars text-center">
								<img src="images/g-icon.png">
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="contact" class="cta-area section-padding--sm bg--grey--light bg--abstruct-mask">

				<div class="container">
					<div class="row">
						<div class="col-lg-10 offset-lg-1 col-md-12 offset-0">
							<div class="calltoaction text-center">
								<h3>NEED ANY HELP AT
									<span class="color--theme"> Jeffrey Smart Hacking Company?</span>
								</h3>
								<p>Our Goal is to make your digital life secure, safe and hassle-free and provide you access to any digital control., and most of all secure. contact us now </p>
								<h6>JUST DAIL:
									<a href="callto://+1(903) 354-5058"> +1(903) 354-5058</a></h6>
									<h6>OR CONTACT US THROUGH EMAIL:
									<a href="mailto:jeffreyhacker23@gmail.com"> jeffreyhacker23@gmail.com</a></h6>
							</div>
						</div>
					</div>
				</div>
			</section>
	
		</main>

		<footer id="footer" class="footer-area fixed--footer">

			
			<div class="footer-area__copyright bg--dark">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="copyright text-center">
								©COPYRIGHT, ALL RIGHTS RESERVED BY
								<a href="#!">JeffreyHacks</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		
		</footer>
		

	</div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.user,
});
const mapdisToProps = (dis) => ({
  logout: () => dis(logout()),
});
export default connect(mapStateToProps, mapdisToProps)(withRouter(HomePage));
