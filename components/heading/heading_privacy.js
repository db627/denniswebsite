import Head from "next/head";

export default function Heading() {
  return (
    <Head>
      <title>Dennis Boguslavskiy Privacy Policy</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Basic meta info */}
      <meta name="keywords" content="Dennis Boguslavskiy Privacy Policy" />
      <meta name="author" content="Dennis Boguslavskiy" />
      <meta
        name="description"
        content="Privacy Policy for my personal site. "
      />

      {/* OpenGraph meta */}
      <meta property="og:title" content="Dennis Boguslavskiy Privacy Policy" />
      <meta
        property="og:description"
        content="Privacy Policy for my personal site"
      />
      <meta property="og:url" content="[insert URL here]" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=MuseoModerno:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
