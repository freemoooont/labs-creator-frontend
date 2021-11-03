import React from "react";
import type { NextPage } from "next";
import { END } from "redux-saga";
import { wrapper } from "../store/store";
import { fetchUserData } from "../store/ducks/user/actionCreators";
import { FullPost } from "../Components/FullPost/FullPost";
import { MainLayout } from "../layouts/MainLayout";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      store.dispatch(fetchUserData());
      store.dispatch(END);
      await store.sagaTask?.toPromise();
      return {
        props: {},
      };
    }
);

const Home: NextPage = () => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
    </MainLayout>
  );
};

export default Home;
