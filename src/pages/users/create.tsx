import { Button } from "@chakra-ui/react";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/layout";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import Link from "next/link";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Insert a name"),
  email: yup.string().required("Insert an email").email("Invalid email"),
  password: yup
    .string()
    .required("Insert your password")
    .min(6, "Password must be at least 6 characters"),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "Passwords must match"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                id="name"
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register('name')}
              ></Input>
              <Input
                id="email"
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register('email')}
              ></Input>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                id="password"
                name="password"
                label="Senha"
                type="password"
                error={errors.password}
                {...register('password')}
              ></Input>
              <Input
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                label="Confirmação da senha"
                {...register('passwordConfirmation')}
                error={errors.passwordConfirmation}
              ></Input>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-start">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
