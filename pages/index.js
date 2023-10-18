import Head from "next/head";
import Content from "./courses";
import Header from "./Header";
import Hero from "./home/Hero";

export default function Myapp() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Content />
        <Hero />
      </main>
    </div>
  );
}
