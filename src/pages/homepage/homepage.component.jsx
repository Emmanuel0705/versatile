import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/user/user.actions";
import { withRouter } from "react-router-dom";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import tawkTo from "tawkto-react";
import "./style.css";

import Modal from "@material-ui/core/Modal";
// import Spinner from "../../components/spinner/spinner.component";
// import Progress from "../../components/Progress";
// import OTP from "../../components/otp";

const HomePage = ({ logout }) => {
  // const [modal, setModal] = useState(false);
  const tawkToPropertyId = "5f60bd7d4704467e89ef20d7";
  useEffect(() => {
    tawkTo(tawkToPropertyId);
  }, []);

  const [testmNumber, setTestmNumber] = useState(1);
  const [form, setForm] = useState(false);
  // const handleTransfer = () => {
  //   setModal(true);
  //   setTimeout(() => {
  //     setModal(false);
  //     setOTP(true);
  //   }, 8000);
  // };
  const handleSetTestM = () => {
    if (testmNumber !== 3) {
      setTimeout(() => {
        setTestmNumber(testmNumber + 1);
      }, 5000);
      return testmNumber;
    }
    setTimeout(() => {
      setTestmNumber(1);
    }, 5000);
    return testmNumber;
  };

  return (
    <Fragment>
      <Modal
        open={form}
        onClose={() => false}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal-card">
          <h1>Fill the form below</h1>
          <p className="cancel" onClick={() => setForm(false` 1``11123d `)}>
            &#10005;
          </p>
          <div className="form-group basic">
            <div className="input-wrapper">
              <label className="label" for="email1">
                Name
              </label>
              <input
                onChange={(e) => false}
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Full Name"
              />
              <i className="clear-input">
                <ion-icon name="close-circle"></ion-icon>
              </i>
            </div>
          </div>
          <div className="form-group basic">
            <div className="input-wrapper">
              <label className="label" for="email1">
                phone Number
              </label>
              <input
                onChange={(e) => false}
                type="telephone"
                className="form-control"
                id="name"
                placeholder="Your Phone Number"
              />
              <i className="clear-input">
                <ion-icon name="close-circle"></ion-icon>
              </i>
            </div>
          </div>
          <div className="form-group basic">
            <div className="input-wrapper">
              <label className="label" for="email1">
                Email Address
              </label>
              <input
                onChange={(e) => false}
                type="email"
                className="form-control"
                id="name"
                placeholder="Your Email Address"
              />
              <i className="clear-input">
                <ion-icon name="close-circle"></ion-icon>
              </i>
            </div>
          </div>
          <div className="form-group basic">
            <button className="pricing-btn">Submit</button>
          </div>
        </div>
      </Modal>

      <div className="wrapper" id="wrapper">
        <header id="header" className="header sticky--header">
          <div className="header__top bg--blue">
            <div className="container">
              <div className="header__top__inner">
                <ul className="header__top__info">
                  <li>
                    <a href="callto://+14023561737">
                      <i className="flaticon-old-typical-phone"></i>Contact: +1
                      (402) 356-1737
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Versatilecreditpatchup@gmail.com">
                      <i className="flaticon-black-back-closed-envelope-shape"></i>{" "}
                      E-mail Address: Versatilecreditpatchup@gmail.com
                    </a>
                  </li>
                </ul>
                <div className="header__top__button">
                  <a
                    className="cr-btn cr-btn--lg"
                    href="https://wa.me/+14023561737"
                  >
                    <span>Make an appointment</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="header__bottom bg--white">
          <div className="container d-none d-lg-block">
            <div className="header__bottom__inner"> */}
          {/* <div className="header__logo">
                <a href="index.html">
                  <img
                    src="images/logo1.png"
                    alt="header logo"
                    style={{ height: "40px" }}
                  />
                </a>
              </div> */}
          {/* 
              <nav id="main-navigation" className="header__menu main-navigation">
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
              </nav> */}
          {/* </div>
          </div> */}

          {/* <div className="container d-block d-lg-none">
            <div className="mobile-menu clearfix d-md-block d-lg-none">
              <a className="mobile-logo" href="index.html">
                <img src="images/logo1.png" alt="logo" />
              </a>
            </div>
          </div>
        </div> */}
        </header>

        <div className="banner-area" id="home">
          <div className="banner banner-slider-active banner--animated-content">
            <div
              style={{ backgroundImage: `url(images/1.gif)` }}
              className="banner__single bg-image--1"
              data-black-overlay="6"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 col-12 offset-0">
                    <div className="banner__single__content text-center">
                      <h1 style={{ textTransform: "uppercase" }}>
                        Hire &nbsp;
                        <span className="color--theme">
                          Professional Credit &nbsp;
                        </span>
                        <span className="color--theme">Repair</span> Specialist
                      </h1>
                      <a href="https://wa.me/+14023561737" className="cr-btn">
                        <span>Contact Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="cr-section about-area bg--white">
          <div className="container">
            <div className="about-area__inside">
              <div className="row">
                <div className="col-lg-5">
                  <div className="about-area__image" style={{ padding: `0px` }}>
                    <img
                      className="wow slideInLeft"
                      style={{
                        height: `500px`,
                        marginTop: `0px`,
                        marginBottom: `30px`,
                      }}
                      data-wow-delay="0"
                      src="images/3.jpg"
                      alt="about area thumb"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-area__content">
                    <h4>
                      We at “
                      <span className="color--theme">
                        VERSATILE CREDIT PATCHUP COMPANY
                      </span>
                      ”
                    </h4>
                    <h3 className="cd-headline cx-heading slide">
                      are deep web experts with years of experience readily
                      available to provide you
                      <span className="color--theme cd-words-wrapper cd-words-wrapper-2">
                        <b className="is-visible">quality</b>
                        <b>reliable</b>
                        <b>perfect</b>
                      </span>
                      hack services.
                    </h3>
                    <p>
                      Our Goal is to make your digital life secure, safe and
                      hassle-free and provide you access to any digital
                      control., and most of all secure. When this team was
                      assembled, we had the goal of solving complex problems and
                      doing the impossible for our clients. We deliver service
                      that is focused on the highest satisfaction of our clients
                      and speedy resolutions to problems. We have been able to
                      maintain these high standards and that explains why our
                      clients call us the BEST.{" "}
                    </p>
                    <p>
                      VERSATILE CREDIT PATCHUP COMPANY represents one of the
                      many branches of a highly organized Dark-web organization
                      funded with the aim of proving the best digital intrusion
                      and expunction services to the public. Our hackers have
                      been serving clients globally, with active backdoor access
                      to thousands of major servers worldwide. Our focus enables
                      us to provide customized solutions and actionable
                      recommendations that draw on robust problem framing,
                      cutting-edge technology, deep therapeutic area knowledge,
                      extensive global hacker-space.
                    </p>
                    <a href="#about" className="cr-btn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features-area" className="cr-section features-area">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <span>
                    <i className="flaticon-shield"></i>
                  </span>
                  <span>
                    <i className="flaticon-shield"></i>
                  </span>
                </div>
                <div className="feature__content">
                  <h4 className="wow fadeInUp">
                    <a href="#!">ENSURE SECURITY</a>
                  </h4>
                  <p className="wow fadeInUp" data-wow-delay="0.15s">
                    {" "}
                    We have employers and public liability insurance. No long
                    term contracts, we are here to support you with our
                    exceptional service when you need us.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature active">
                <div className="feature__icon">
                  <span>
                    <i className="flaticon-team"></i>
                  </span>
                  <span>
                    <i className="flaticon-team"></i>
                  </span>
                </div>
                <div className="feature__content">
                  <h4 className="wow fadeInUp">
                    <a href="#!">EXPERT TEAM</a>
                  </h4>
                  <p className="wow fadeInUp" data-wow-delay="0.15s">
                    Every member of our team is well experienced in their
                    various niches. We have Digital Forensic Specialists,
                    Certified Ethical Hackers, Computer Engineers, Cyber
                    Security Experts, Private investigators and more on our
                    team.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <span>
                    <i className="flaticon-24-hours"></i>
                  </span>
                  <span>
                    <i className="flaticon-24-hours"></i>
                  </span>
                </div>
                <div className="feature__content">
                  <h4 className="wow fadeInUp">
                    <a href="#!">24/7 SUPPORT</a>
                  </h4>
                  <p className="wow fadeInUp" data-wow-delay="0.15s">
                    Includes a team that will handle and process your request
                    from start to finish and provide support even after your
                    project is completed we strive to offer the best hacking
                    services on the web.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="service-area section-padding--xlg bg--white"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h4>OUR SERVICES</h4>
                  <h2>
                    PROVIDE BEST
                    <span className="color--theme">SERVICES</span>
                  </h2>
                  <p>
                    Hire us to clean off your criminal details from any database
                    system, anytime anywhere, is our profession we offer this
                    services on daily basis without any complication, all our
                    clients go court free with no trace of their criminal
                    history.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="service-area__services">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 wow flipInX">
                      <div className="service">
                        <div className="service__icon">
                          <img
                            src="images/icons/service-icon-user.png"
                            alt="service icon"
                          />
                        </div>
                        <div className="service__content">
                          <h5>
                            <a href="#!">Credit repair service</a>
                          </h5>
                          <p>
                            At VERSATILE CREDIT PATCHUP COMPANY, we can help you
                            delete all negative items on your credit report. We
                            can delete Eviction, Collections, Bankruptcy,
                            Derogatory Accounts, Hard Inquiries, Delinquents,
                            Judgements etc.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 wow flipInX">
                      <div className="service">
                        <div className="service__icon">
                          <img
                            src="images/icons/service-icon-bar.png"
                            alt="service icon"
                          />
                        </div>
                        <div className="service__content">
                          <h5>
                            <a href="#!">Credit Card Payment</a>
                          </h5>
                          <p>
                            We help our clients to make payments on their maxed
                            out credit credit cards which also helps their
                            credit score pretty well. contact us to inquire more
                            information about how this works.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 wow flipInX">
                      <div className="service">
                        <div className="service__icon">
                          <img
                            src="images/icons/service-icon-briefcase.png"
                            alt="service icon"
                          />
                        </div>
                        <div className="service__content">
                          <h5>
                            <a href="#!">Bitcoin Mining</a>
                          </h5>
                          <p>
                            Bitcoin mining is how the bitcoin network keeps its
                            transactions secure. … And that’s precisely what
                            bitcoin miners do. As a reward for doing the work to
                            track and secure transactions, miners earn bitcoins
                            for each block they successfully process.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 wow flipInX">
                      <div className="service">
                        <div className="service__icon">
                          <img
                            src="images/icons/service-icon-pie.png"
                            alt="service icon"
                          />
                        </div>
                        <div className="service__content">
                          <h5>
                            <a href="#!">Tracking</a>
                          </h5>
                          <p>
                            With the live and active softwares we have at
                            VERSATILE CREDIT PATCHUP COMPANY, we can help you to
                            track any cell phone’s location, track your spouse’
                            location and also so spy on any social media
                            accounts including spying his/her text messages
                            without him/her knowing.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4">
              <div className="service-area__bars text-center">
                <div className="cr-bars justify-content-lg-end justify-content-center">
                  <div
                    className="cr-bar"
                    data-bar-percent="25"
                    data-bar-title="2009"
                  ></div>
                  <div
                    className="cr-bar"
                    data-bar-percent="45"
                    data-bar-title="2016"
                  ></div>
                  <div
                    className="cr-bar"
                    data-bar-percent="37"
                    data-bar-title="2017"
                  ></div>
                  <div
                    className="cr-bar"
                    data-bar-percent="69"
                    data-bar-title="2019"
                  ></div>
                  <div
                    className="cr-bar"
                    data-bar-percent="88"
                    data-bar-title="2020"
                  ></div>
                </div>
                <span className="cr-bars__name">Our progress</span>
              </div>
            </div> */}
            </div>
          </div>
        </section>
        <section style={{ padding: "30px", marginBottom: "50px" }}>
          <p className="pricing-heading">Best Credit Repair Services</p>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 ">
              <div className="princing-card">
                <p className="pricing-title">Basic</p>
                <p className="pricing-price">$1,200</p>
                <ul>
                  <li>Standard Negative Deletions</li>
                  <li>Minor Disputes</li>
                  <li>Basic Clean Up</li>
                  <li>Correct Payment History</li>
                  <li>(2-3 Weeks turn around) Score hack - 790</li>
                  <li>Includes Opt-Out Reporting</li>
                  <li>Up to 10 deletions and 10</li>
                  <li>late payments updated</li>
                </ul>
                <button onClick={() => setForm(true)} className="pricing-btn">
                  ORDER NOW
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 ">
              <div className="princing-card">
                <p className="pricing-title">Premium</p>
                <p className="pricing-price">$1,500</p>
                <ul>
                  <li>Standard Negative Deletions</li>
                  <li>Minor Disputes</li>
                  <li>Basic Clean Up</li>
                  <li>Correct Payment History</li>
                  <li>(2-3 Weeks turn around) Score hack - 790</li>
                  <li>Includes Opt-Out Reporting</li>
                  <li>Up to 10 deletions and 10</li>
                  <li>late payments updated</li>
                </ul>
                <button onClick={() => setForm(true)} className="pricing-btn">
                  ORDER NOW
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 ">
              <div className="princing-card">
                <p className="pricing-title">Professional</p>
                <p className="pricing-price">Contact Us</p>
                <ul>
                  <li>Standard Negative Deletions</li>
                  <li>Minor Disputes</li>
                  <li>Basic Clean Up</li>
                  <li>Correct Payment History</li>
                  <li>(2-3 Weeks turn around) Score hack - 790</li>
                  <li>Includes Opt-Out Reporting</li>
                  <li>Up to 10 deletions and 10</li>
                  <li>late payments updated</li>
                </ul>
                <button onClick={() => setForm(true)} className="pricing-btn">
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="team"
          style={{ marginTop: "60px" }}
          className="advisor-area bg--white"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 offset-0">
                <div className="section-title text-center">
                  <h4>OUR TEAM</h4>
                  <h2>
                    MEET OUR
                    <span className="color--theme">TEAM MEMBER</span>
                  </h2>
                  <p>
                    Our Team represents one of the many Teams of a highly
                    organized Dark-web organization funded with the aim of
                    proving the best digital intrusion and expunction services
                    to the public. Our hackers have been serving clients
                    globally, with active backdoor access to thousands of major
                    servers worldwide. Our focus enables us to provide
                    customized solutions and actionable recommendations that
                    draw on robust problem framing, cutting-edge technology,
                    deep therapeutic area knowledge, extensive global
                    hacker-space.
                  </p>
                </div>
              </div>
            </div>
            <div className="row advisors">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <figure className="advisor">
                  <div className="advisor__image">
                    <img
                      src="images/advisors/advisor-1.jpg"
                      alt="team member"
                    />
                  </div>
                  <figcaption className="advisor__content">
                    <h6>
                      <a href="#!">Gerhard Heinz</a>
                    </h6>
                    <p>Advanced Mobile Forensics</p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <figure className="advisor">
                  <div className="advisor__image">
                    <img
                      src="images/advisors/advisor-2.jpg"
                      alt="team member"
                    />
                  </div>
                  <figcaption className="advisor__content">
                    <h6>
                      <a href="#!">Vladislav Arkady</a>
                    </h6>
                    <p>Certified Ethical Hacker</p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <figure className="advisor">
                  <div className="advisor__image">
                    <img
                      src="images/advisors/advisor-3.jpg"
                      alt="team member"
                    />
                  </div>
                  <figcaption className="advisor__content">
                    <h6>
                      <a href="#!">Vera Lang</a>
                    </h6>
                    <p>EC-Council Certified Secure</p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <figure className="advisor">
                  <div className="advisor__image">
                    <img
                      src="images/advisors/advisor-4.jpg"
                      alt="team member"
                    />
                  </div>
                  <figcaption className="advisor__content">
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

        <div id="funfact-area" className="funfact-area bg--white">
          <div className="funfacts">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="funfact text-center">
                  <h1>
                    <span className="">1,588</span>
                  </h1>
                  <h5>TRUSTED CLIENTS</h5>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="funfact text-center">
                  <h1>
                    <span className="">102</span>
                  </h1>
                  <h5>Awards Win</h5>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="funfact text-center">
                  <h1>
                    <span className="">2,900</span>
                  </h1>
                  <h5>Project Done</h5>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="funfact text-center">
                  <h1>
                    <span className="">6</span>
                  </h1>
                  <h5>Expert TEAM MEMBER</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="testimonial-area"
          className="testimonial-area section-padding--xlg bg--grey"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 offset-0">
                <div className="testimonial text-center">
                  <h2>
                    CLIENT
                    <span className="color--theme">TESTIMONY</span>
                  </h2>

                  <div className="testimonial__content testimonial-content-slider-active">
                    {handleSetTestM() === 1 && (
                      <div className="testimonial__content__single">
                        <p>
                          VERSATILE CREDIT PATCHUP COMPANY removed all bad
                          report from my credit report I was able to apply for
                          high limit credit cards and it was approved{" "}
                        </p>
                      </div>
                    )}
                    {handleSetTestM() === 2 && (
                      <div className="testimonial__content__single">
                        <p>
                          I was damn too broke before my neighbor introduced me
                          to VERSATILE CREDIT PATCHUP COMPANY and with their
                          hacking skills I was able to get $15,000 in my PayPal
                          account{" "}
                        </p>
                      </div>
                    )}
                    {handleSetTestM() === 3 && (
                      <div className="testimonial__content__single">
                        <p>
                          With VERSATILE CREDIT PATCHUP COMPANY live and active
                          tacking softwares, i was able to track my cell phone’s
                          location,{" "}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="testimonial__author testimonial-author-slider-active">
                    {handleSetTestM() === 1 && (
                      <div className="testimonial__author__single">
                        <div className="testimonial__author__image">
                          <img
                            src="images/testimonial/testimonial-author-3.png"
                            alt="testimonial author"
                          />
                        </div>
                        <div className="testimonial__author__description">
                          <h6>Larry hale</h6>
                        </div>
                      </div>
                    )}
                    {handleSetTestM() === 2 && (
                      <div className="testimonial__author__single">
                        <div className="testimonial__author__image">
                          <img
                            src="images/testimonial/testimonial-author-2.png"
                            alt="testimonial author"
                          />
                        </div>
                        <div className="testimonial__author__description">
                          <h6>RAISA MARIYA</h6>
                        </div>
                      </div>
                    )}
                    {handleSetTestM() === 3 && (
                      <div className="testimonial__author__single">
                        <div className="testimonial__author__image">
                          <img
                            src="images/testimonial/testimonial-author-1.png"
                            alt="testimonial author"
                          />
                        </div>
                        <div className="testimonial__author__description">
                          <h6>Evelyn Brian</h6>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-12 ">
              <div className="section-title">
                <h2>
                  Few Reasons to Choose
                  <span className="color--theme">
                    VERSATILE CREDIT PATCHUP COMPANY
                  </span>
                </h2>
                <p>Why VERSATILE CREDIT PATCHUP ?</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center " style={{ padding: "10px" }}>
            <div className="col-lg-8">
              <div className="service-area__services ">
                <div className="row">
                  <div className="col-lg-6 col-md-6 wow flipInX">
                    <div className="service">
                      <div className="service__icon">
                        <img
                          src="images/icons/service-icon-user.png"
                          alt="service icon"
                        />
                      </div>
                      <div className="service__content">
                        <h5>
                          <a href="#!">Quick Service Delivery</a>
                        </h5>
                        <p>
                          For selected services, place order between 00:00 Hrs
                          GMT to 12:00 Noon GMT. **Charges applicable{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 wow flipInX">
                    <div className="service">
                      <div className="service__icon">
                        <img
                          src="images/icons/service-icon-bar.png"
                          alt="service icon"
                        />
                      </div>
                      <div className="service__content">
                        <h5>
                          <a href="#!">WIDE RANGE OF SERVICES</a>
                        </h5>
                        <p>
                          Our team is dedicated to offer wide range of ethical
                          hacking services and we have an excellence on-time
                          delivery record.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 wow flipInX">
                    <div className="service">
                      <div className="service__icon">
                        <img
                          src="images/icons/service-icon-briefcase.png"
                          alt="service icon"
                        />
                      </div>
                      <div className="service__content">
                        <h5>
                          <a href="#!">ASSURED RESULTS</a>
                        </h5>
                        <p>
                          {" "}
                          There are many website which promise to deliver
                          gauranteed results but few of them really does..{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 wow flipInX">
                    <div className="service">
                      <div className="service__icon">
                        <img
                          src="images/icons/service-icon-pie.png"
                          alt="service icon"
                        />
                      </div>
                      <div className="service__content">
                        <h5>
                          <a href="#!">RAPID RESPONSE</a>
                        </h5>
                        <p>
                          Get response within 30 minutes. Once you fill up the
                          Request quote from Our agency will send you an email
                          reply{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-area__bars text-center">
                <img src="images/g-icon.png" alt="g-iconn" />
              </div>
            </div>
          </div>

          <section
            style={{ fontSize: "14px", padding: "10px", marginTop: "20px" }}
            id="contact"
            className="text-center bg--grey--light"
          >
            <div className="">
              <div className="row">
                <div className="col-lg-10 offset-0">
                  <div className="">
                    <h3>
                      NEED ANY HELP AT
                      <span className="">
                        {" "}
                        VERSATILE CREDIT PATCHUP COMPANY?
                      </span>
                    </h3>
                    <p>
                      Our Goal is to make your digital life secure, safe and
                      hassle-free and provide you access to any digital
                      control., and most of all secure. contact us now{" "}
                    </p>
                    <b>
                      JUST DAIL:
                      <a href="callto://+14023561737"> +1 (402) 356-1737</a>
                    </b>
                    <br />
                    <b>
                      OR CONTACT US THROUGH EMAIL:
                      <a
                        style={{ padding: "5px" }}
                        href="mailto:Versatilecreditpatchup@gmail.com"
                      >
                        Versatilecreditpatchup@gmail.com
                      </a>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <a
            href="https://wa.me/+14023561737?text=Hi, how can i help you?"
            style={{
              background: "#48a13e",
              color: "white",
              fontSize: "9",
              padding: "8px",
              position: "fixed",
              bottom: "6%",
              left: "2%",
              borderRadius: "40px",
              zIndex: "20",
              boxShadow: "3px 10px 10px #ccc",
            }}
          >
            {" "}
            <WhatsAppIcon /> Hi, how can i help you?
          </a>

          <footer id="footer" className="footer-area fixed--footer">
            <div className="footer-area__copyright bg--dark">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="copyright text-center">
                      ©COPYRIGHT, ALL RIGHTS RESERVED BY
                      <a href="#!">Versatilecreditpatchup</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.user,
});
const mapdisToProps = (dis) => ({
  logout: () => dis(logout()),
});
export default connect(mapStateToProps, mapdisToProps)(withRouter(HomePage));
