import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'Diego Sousa' }: Props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{title}</h1>
    </div>
  )
}
