import React, { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

export default function ContainerBlock({ children, ...customMeta }: Props) {
  const router = useRouter();

  const meta = {
    title: "Carson Ricca - Software Developer",
    description:
      "I've been developing websites for approximately 2 years. Get in touch with me to know more.",
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://carsonricca.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://carsonricca.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Carson Ricca" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
