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
                        <Heading m={'3vh'} textAlign={'center'} fontSize={'6vh'}>
                            Welcome! <br/> I am GLaDOS
                        </Heading>
                        <Box  w='100%' h='65%'>
                            <div className={styles.image}>
                                <div className={styles.topOval}/>
                                <img width={'60%'} src={"/images/delta.png"} alt='Image missing'/>
                                <div className={styles.bottomOval}/>
                            </div>
                        </Box>
                    </div>
                </GridItem>
                <GridItem className={styles.sideBox} colSpan={2} bg='#31353F'>
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
                        <Button borderColor={'#A64EA6'} margin={'6vh 3vh 3vh 3vh'} size='lg' border='4px' width={'80%'} height={'12vh'}
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
