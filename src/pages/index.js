import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Usp from "../components/Usp";
import Video from "../components/Video";

export default function Index(props) {
  return (
    <>
      <Layout location={props.location}>
        <Hero />
        <Usp />
        <Video />
      </Layout>
    </>
  );
}
