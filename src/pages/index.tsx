import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  useSelector,
  useDispatch,
  DefaultRootState,
  RootStateOrAny,
} from "react-redux";
import githubActions from "../store/actions/githubActions";
import { useEffect } from "react";
import githubReducer from "../store/reducers/githubReducer";

export default function Home() {
  const rd_github = useSelector((state: RootStateOrAny) => state.githubReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(githubActions.index_github());
  }, []);

  useEffect(() => {
    console.log(rd_github?.index);
  }, [rd_github]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Olá, amigo {rd_github.index?.name}!</h1>
        <img src={rd_github.index?.avatar_url} alt="Picture of the author" />
      </div>
    </>
  );
}
