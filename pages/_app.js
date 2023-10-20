import "../styles/globals.css";
import Header from "./Header.js";

function Home({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default Home;
