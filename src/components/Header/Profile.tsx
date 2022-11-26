import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gabriel Oliveira</Text>

        <Text color="gray.300" fontSize="small">
          gabrielviol00@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Gabriel Viol"
        src="https://github.com/gabrielviol.png"
      />
    </Flex>
  )
}
