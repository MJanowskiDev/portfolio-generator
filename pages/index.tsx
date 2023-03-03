import Head from "next/head";
// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen items-center justify-center">
        <h1 className="origin-center animate-spin text-rose-600">Hello WSPPROJECT</h1>
      </div>
    </>
  );
}
