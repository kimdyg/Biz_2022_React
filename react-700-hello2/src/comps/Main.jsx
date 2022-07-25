import View from "./View";
import Input from "./Input";
import { useState } from "react";
const Main = () => {
  const [aText, setAText] = useState("");
  return (
    <>
      <Input setAText={setAText} />
      <View aText={aText} />
    </>
  );
};
export default Main;
