import "./App.css";
import { Box, Container, MantineProvider, Tabs, TabsProps } from "@mantine/core";
import myTheme from "./theme/theme";
import { LitTextInput } from "./customComponents/Inputs/LitTextInput";
import { ChangeEventHandler, SetStateAction, useState } from "react";


function App() {

  const [value, setValue] = useState("");

  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS >
      <Box p="xs">
        <Box sx={{width: "340px"}}>
       <LitTextInput value={value} onChangeHandler={(event) => {
        setValue(event.target.value);
        console.log(event);
        }} caption="Here's a hint that might help" placeholder="First name" label="Enter your name" successMsg="Success message!" errorMsg="Error message!" status="ERROR" />
       <LitTextInput caption="Here's a hint that might help" placeholder="First name" label="Enter your name" successMsg="Success message!" errorMsg="Error message!" status="SUCCESS" />
       <LitTextInput caption="Here's a hint that might help" placeholder="First name" label="Enter your name" successMsg="Success message!" errorMsg="Error message!" status="DEFAULT" />

       </Box>
      </Box>
    </MantineProvider>
  );
}

export default App;
