// components/Meta.js
import Head from 'next/head';

const Meta = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Add any other meta tags you need */}
  </Head>
);

export default Meta;
