import React from "react";
import { NextPage } from "next";
import { MainLayout } from "../layouts/MainLayout";
import { WriteForm } from "../Components/CreateLabForm/CreateLabForm";
const CreateLabPage: NextPage = () => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm />
    </MainLayout>
  );
};

export default CreateLabPage;
