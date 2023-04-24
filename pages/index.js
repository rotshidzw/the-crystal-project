import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Hero from '../components/herosection'
import Sales from '../components/Sales'
import Merch from '../components/Merch'
import Follow from '../components/follow'
import Footer from '../components/footer'
import Gullary from '../components/gullary'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Sales />
    <Gullary />
    <br />
    <Merch />
    
    <Follow />
    
    <Footer />
    </>
  )
}
