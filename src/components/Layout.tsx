import Head from 'next/head'
import { ReactNode } from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
  title: string
  description: string
  children: ReactNode
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Nova Nicolândia - {title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
