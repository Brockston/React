import React from "react";
import Header from "./header"
import Footer from '../Routing/Footer'
import HomeView from '../homeComponents/homeView'
import '../../index.css'
import NewsletterView from "../newsletterView";
import SubsvribeView from '../subscribeView'
import AuthorView from "../AuthorComponents/authorView";
import ContactView from "../contactView";


class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HomeView id="homeSection"/>
        <NewsletterView id="newsletterSection"/>
        <SubsvribeView id="subscribeSection"/>
        <AuthorView id="authorSection"/>
        <ContactView id="contactSection"/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default ReactRouter;