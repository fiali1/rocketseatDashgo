import { Flex, Button, Stack } from "@chakra-ui/react";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Insert your email').email('Invalid email'),
  password: yup.string().required('Insert your password'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        flexDir="column"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            id="email"
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email", {
              required: "Insert your email",
            })}
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password", {
              required: "Insert your password",
            })}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
