import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Rakel Moreira</Text>
                <Text color='gray.300' fontSize='small'>
                    rakelmoreiramendonca@gmail.com
                </Text>
            </Box>

            <Avatar size='md' name='Rakel Moreira' src='https://avatars.githubusercontent.com/u/80356241?v=4' />
        </Flex>
    );
}