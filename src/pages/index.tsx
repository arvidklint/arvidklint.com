import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

import { TimePeriod, getTimePeriod } from "../time";

import styles from "../App.module.css";

function setFavicon() {
  const favicon = document.querySelector<HTMLLinkElement>("[rel=icon]");
  if (!favicon) return;

  const period = getTimePeriod();
  switch (period) {
    case TimePeriod.NIGHT:
      favicon.href = "/favicon_sleep/favicon.ico";
      break;
    default:
      favicon.href = "/favicon_happy/favicon.ico";
  }
}

function Index() {
  useEffect(() => {
    setFavicon();
  });

  return (
    <>
    <Head>
      <link rel="icon" href="/favicon_initial/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Arvid Klint's personal website"
      />

      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"></link>
      <title>Arvid Klint</title>
    </Head>
    <div className={styles["App"]}>
      <Header />
      <Main />
    </div>
    </>
  );
}

export default Index;
