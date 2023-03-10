import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import car from "../assets/car.jpg"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>Hello main page</div>
      <img src={car} />
    </>
  )
}
