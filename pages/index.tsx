import type {NextPage} from 'next';
import {Box, Button, Grid, GridItem, Heading, List, ListItem} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import {MdConnectWithoutContact, MdLogin, MdVpnKey} from "react-icons/md";

const Home: NextPage = () => {
    return (
        <div>
            <Grid
                h={'100vh'}
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(3, 1fr)'
            >
                <GridItem className={styles.sideBox} colSpan={1}>
                    <div className={styles.leftContainer}>
                        <Heading m={'3vh'} textAlign={'center'} fontSize={'7vh'}>
                            Welcome to GLaDOS
                        </Heading>
                        <Box bg='#663366' w='100%' h='65%' color='white'>
                            This is a cool image or animation or something idk
                        </Box>
                    </div>
                </GridItem>
                <GridItem className={styles.sideBox} colSpan={2} bg='#663366'>
                    <div className={styles.rightContainer}>
                        <List marginLeft={'2%'} spacing={5}>
                            <ListItem fontSize={'5vh'}>
                                <div className={styles.inlineCenter}>
                                    <MdLogin className={styles.icon}/>
                                    Log in with your Fontys account.
                                </div>
                            </ListItem>
                            <ListItem fontSize={'5vh'}>
                                <div className={styles.inlineCenter}>
                                    <MdVpnKey className={styles.icon}/>
                                    Create an SSH Key.
                                </div>
                            </ListItem>
                            <ListItem fontSize={'5vh'}>
                                <div className={styles.inlineCenter}>
                                    <MdConnectWithoutContact className={styles.icon}/>
                                    Connect to me!
                                </div>
                            </ListItem>
                        </List>
                        <Button borderColor={'#00c9c5'} margin={'3vh'} size='lg' border='4px' width={'80%'} height={'10vh'}
                                fontSize='3vh' variant={'outline'}>
                            LOG IN
                        </Button>
                    </div>
                </GridItem>
            </Grid>
        </div>
    )
}

export default Home
