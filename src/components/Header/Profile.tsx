import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex
    align='center'
  >
    { showProfileData && (<Box mr='4' textAlign='right'>
      <Text>Mateus de Sousa</Text>
      <Text color='gray.300' fontSize='small'
      >mateuso12@hotmail.com.br</Text>
    </Box>)}

    <Avatar size='md' name='Mateus de Sousa' ml='2' src='https://github.com/mateuso12.png' />
  </Flex>
  );
}