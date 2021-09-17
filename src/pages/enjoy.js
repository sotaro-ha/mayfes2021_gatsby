// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout_enjoy";
import Hero from "../components/hero";
import Title from "../components/title";
import { Helmets } from "../components/helmet";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <>
      <Helmets></Helmets>
      <Layout></Layout>
    </>
  );
};

// Step 3: Export your component
export default IndexPage;
