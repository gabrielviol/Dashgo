import { Button, Flex, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Input } from '../components/Form/input'

export default function Home() {
  const { register, handleSubmit } = useForm()

  function handleSignIn(values) {
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input type="email" label="E-mail" {...register('email')} />

          <Input type="password" label="Senha" {...register('password')} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
