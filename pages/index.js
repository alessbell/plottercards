import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Plotter Cards: Coming Soon!</h1> */}
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shra2N4WswqiOz7gr?backgroundColor=green"
          width="100%"
          height="786"
          style={{
            background: 'transparent',
            border: 'none'
          }}
        ></iframe>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
