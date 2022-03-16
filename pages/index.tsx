import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>HPC</title>
                <meta name="description" content="HPC platform"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                Main
            </main>

            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    )
}

export default Home
