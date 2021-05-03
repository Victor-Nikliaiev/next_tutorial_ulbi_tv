import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"the best app, ulbi tv, nextjs " + keywords}></meta>
        <title>Next JS | New Epoch</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Home" />
        <A href="/users" text="Users" />
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: #000;
          padding: 1em;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
