import Main from 'components/Main'
import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'Diego Sousa' }: Props) {
  return <Main />
}
