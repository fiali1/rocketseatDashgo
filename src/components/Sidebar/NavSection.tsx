import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text 
        fontSize="small" 
        fontWeight="bold" 
        color="gray.400"
      >
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="flex-start">
        {children}
      </Stack>
    </Box>
  );
}