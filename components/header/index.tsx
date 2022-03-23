import {Box, Button, Divider, Flex, Heading, Spacer} from "@chakra-ui/react";
import styles from "./Header.module.css";

function Header(){
    return (
        <div className={styles.headerContainer}>
            <Flex>
                <Box p='2'>
                    <Heading size='md'>HPC</Heading>
                </Box>
                <Spacer />
            </Flex>
            <Divider className={styles.divider}/>
        </div>
    )
}

export default Header;
