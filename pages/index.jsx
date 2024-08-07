import Layout from "../components/layout";
import Nav from "../components/nav";
import Content from "../components/contents";
import Logo from "../components/logo";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="sm:flex">
          <Nav />
          <Logo />
          <Content />
        </section>
      </Layout>
    </>
  );
}
