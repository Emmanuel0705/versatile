import React, { Fragment } from "react";

import Home from "./homepage.component";

import { connect } from "react-redux";
import Header from "../../components/header/header";

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Main);
