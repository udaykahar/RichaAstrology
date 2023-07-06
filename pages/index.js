import Image from 'next/image'
import { Inter, Rubik } from '@next/font/google';
import Hero from '../components/Hero'

const inter = Inter({ subsets: ['latin'] })
const title = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  return (
    <main
      className={` ${title.className} `}
    >
      <Hero/>
    </main>
  )
}
