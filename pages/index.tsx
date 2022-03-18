import type {NextPage} from 'next';
import {Box, Button, Grid, GridItem, Heading, Icon, List, ListItem} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import {MdConnectWithoutContact, MdLogin, MdVpnKey} from "react-icons/all";

const Home: NextPage = () => {
    return (
        <div>
            <Grid
                h={'100vh'}
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(2, 1fr)'
            >
                <GridItem colSpan={1}>
                    <div className={styles.container}>
                        <Heading fontSize={'6vh'}>
                            Welcome to GLaDOS
                        </Heading>
                        <Box bg='#663366' w='100%' minH='80%' color='white'>
                            This is a cool image or animation or something idk
                        </Box>
                    </div>
                </GridItem>
                <GridItem bg='#663366'>
                    <div className={styles.container}>
                        <List spacing={5}>
                            <ListItem fontSize={'4.5vh'}>
                                <div className={styles.inlineCenter}>
                                    <Icon as={MdLogin} m={'5px 5px 0 0'} color='#00c9c5'/>
                                    Log in with your Fontys account.
                                </div>
                            </ListItem>
                            <ListItem fontSize={'4.5vh'}>
                                <div className={styles.inlineCenter}>
                                    <Icon as={MdVpnKey} m={'5px 5px 0 0'} color='#00c9c5'/>
                                    Create an SSH Key.
                                </div>
                            </ListItem>
                            <ListItem fontSize={'4.5vh'}>
                                <div className={styles.inlineCenter}>
                                    <Icon as={MdConnectWithoutContact} m={'5px 5px 0 0'} color='#00c9c5'/>
                                    Connect to me!
                                </div>
                            </ListItem>
                        </List>
                        <Button colorScheme='white' margin={'3vh'} size='lg' width={'80%'} height={'60px'}
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
