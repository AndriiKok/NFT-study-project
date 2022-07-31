import "./App.css";
import { Box, Container, MantineProvider, Tabs, TabsProps } from "@mantine/core";
import myTheme from "./theme/theme";
import { LitTextInput } from "./customComponents/Inputs/LitTextInput";
import { ChangeEventHandler, SetStateAction, useState } from "react";
import { LitSwitch } from "./customComponents/LitSwitch";


function App() {

  const [value, setValue] = useState("");

  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS >

    </MantineProvider>
  );
}

export default App;
