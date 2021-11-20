import { Input as ChakraInput, InputProps as ChakraInputProps, FormControl, FormLabel } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput 
        id={name}
        name={name}
        type="email"
        variant="filled"
        bgColor="gray.900"
        focusBorderColor="pink.500"
        size="lg"
        _hover={{bgColor: 'gray.900'}}
        {...rest}
      />
    </FormControl>
  );
}