import {Circle, Divider, Heading, HStack, Icon} from "@chakra-ui/react";
import {MdComputer, MdVpnKey} from "react-icons/md";
import styles from "./Sidemenu.module.css";

function SideMenu() {

    return (
        <div>
            <div>
                <Heading size={'md'}>
                    Access
                </Heading>
                <Divider/>
                <HStack className={styles.stack}>
                    <Circle size='30px' bg='#A64EA6' color='white'>
                        <Icon as={MdVpnKey} w={5} h={5}/>
                    </Circle>
                    <p>SSH Keys</p>
                </HStack>
            </div>
            <div>
                <Heading size={'md'}>
                    Statistics
                </Heading>
                <Divider/>
                <HStack className={styles.stack}>
                    <Circle size='30px' bg='#A64EA6' color='white'>
                        <Icon as={MdComputer} w={5} h={5}/>
                    </Circle>
                    <p>System usage</p>
                </HStack>
                <HStack className={styles.stack}>
                    <Circle size='30px' bg='#A64EA6' color='white'>
                        <Icon as={MdComputer} w={5} h={5}/>
                    </Circle>
                    <p>Personal usage</p>
                </HStack>
            </div>
        </div>
    )

}

export default SideMenu;
