import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const { message } = data;
  return (
    <div className={styles.container}>
      <Head>
        <title>HELLO 🌍</title>
      </Head>
      <h1>{message}</h1>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://aloysius-server.herokuapp.com/hello");
  const data = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { data },
  };
}
