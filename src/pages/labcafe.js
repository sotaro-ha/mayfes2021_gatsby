import * as React from "react";
import { PageProps } from "gatsby";
import { LabCafePageLayout } from "../components/layout_labcafe";
import { Helmets } from "../components/helmet";

const LabCafePage = () => {
  return (
    <>
      <Helmets></Helmets>
      <LabCafePageLayout />
    </>
  );
};

export default LabCafePage;
