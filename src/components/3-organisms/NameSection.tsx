import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

const NameSection = () => {
  const localUsername = localStorage.getItem('username');
  const [username, setUsername] = useState(localUsername ? localUsername : 'Anonimus');

  return (
    <FormControl
      maxW={'468px'}
      margin={4}
    >
      <FormLabel 
        htmlFor={'username'}
        textAlign={'center'}
        fontSize={'2xl'}
      >
        Your name
      </FormLabel>
      <Input
        id={'username'}
        name={'username'}
        type={'text'}
        colorScheme="purple"
        focusBorderColor='purple.500'
        textAlign={'center'}
        value={username}
        onChange={(e) => {
          localStorage.setItem('username', e.target.value);
          setUsername(e.target.value)
        }}
      />
    </FormControl>
  );
};

export default NameSection;
