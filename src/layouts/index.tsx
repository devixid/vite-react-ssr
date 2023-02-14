import { Box } from "@/utils";

export default function Layout({ children }) {
  return (
    <Box
      css={{
        maxW: "100%",
      }}
    >
      {children}
    </Box>
  );
}
