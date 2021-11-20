import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex
        as="header"
        w="100%"
        maxW={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        alignItems="center"
      >
        <Text 
          fontSize="3xl" 
          fontWeight="bold" 
          letterSpacing="tight"
          w="64"
        >  
          dashgo
          <Text 
            as="span"
            color="pink.500"
            marginLeft="1"
          >.</Text>
        </Text>

        <Flex
          as="label"
          flex="1"
          py="4"
          px="8"
          ml="6"
          maxW={400}
          alignSelf="center"
          color="gray.200"
          position="relative"
          bg="gray.800"
          borderRadius="full"
        >
          <Input
            color="gray.50"
            variant="unstyled"
            placeholder="Search"
            _placeholder={{ color: "gray.400" }}
            mr="4"
          />
          <Icon as={RiSearchLine} fontSize="20" />
        </Flex>

        <Flex
          alignItems="center"
          ml="auto"
        >
          <HStack 
            spacing="8"
            mx="8"
            pr="8"
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
          >
            <Icon as={RiNotificationLine}></Icon>
            <Icon as={RiUserLine}></Icon>
          </HStack>

          <Flex alignItems="center">
            <Box mr="4" textAlign="right">
              <Text>Nome</Text>
              <Text color="gray.300" fontSize="small">email@email.com</Text>
            </Box>

            <Avatar size="md" name="Nome" />
          </Flex>
        </Flex>
      </Flex>
  );
}