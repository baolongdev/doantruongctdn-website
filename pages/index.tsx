import { Fragment, useEffect } from "react";
import Layout from "../components/misc/layout";
import HeroHome from "../components/landing/hero-home";
import About from "../components/landing/about";
import Activities from "../components/landing/activities";
import ClbDa from "../components/landing/clb-da";
import Contact from "../components/landing/contact";

export default function Home() {
  return (
    <Layout>
      <HeroHome/>
      <About/>
      <Activities/>
      <ClbDa/>
      <Contact/>
    </Layout>
  )
}