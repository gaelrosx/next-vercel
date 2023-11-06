import { FC } from "react"
import Head from 'next/head';
import { Inter } from 'next/font/google'
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children?: React.ReactNode | undefined,
}

export const MainLayout: FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home Demo App</title>
            <meta name="description" content="Home Demo" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={`${styles.main} ${inter.className}`}>
            
            {children}

          </main>
        </div>
      )
}
