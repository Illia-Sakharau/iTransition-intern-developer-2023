import { Heading, HeadingProps, useColorModeValue } from "@chakra-ui/react";

type Props = {
  title: string;
} & HeadingProps;

const MyHeading = ({ title, ...props }: Props) => {
  const textColor = useColorModeValue('purple.900', 'white');

  return (
      <Heading
        as='h2'
        size='2xl'
        color={textColor}
        {...props}
      >
        {title}
      </Heading>
  );
};

export default MyHeading;