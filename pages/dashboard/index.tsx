import {NextPage} from "next";
import Head from "next/head";
import {Grid, GridItem} from "@chakra-ui/react";
import Header from "../../components/header";
import SideMenu from "../../components/sidemenu";
import styles from "./Dashboard.module.css";
const Dashboard : NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>HPC</title>
                <meta name="description" content="HPC platform"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Grid
                h={'100vh'}
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem colSpan={1}>
                    <SideMenu/>
                </GridItem>
                <GridItem colSpan={4} bg='#31353F'> Content </GridItem>
            </Grid>

            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    )
}
export default Dashboard
