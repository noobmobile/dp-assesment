import { HomepageWrapper } from "./pages/Homepage/Homepage";
import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <HomepageWrapper />
    </ChakraProvider>
  );
}

export default App;
