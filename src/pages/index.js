import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>SEYGOB</title>
        <meta name="description" content="Seygob SAS landing page" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero />
      <Products />
    </div>
  );
}
