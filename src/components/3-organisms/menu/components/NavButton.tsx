import {
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
} & IconButtonProps;

const NavButton = ({to, ...props}: Props) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
          <IconButton
          size="md"
          fontSize="lg"
          colorScheme='purple'
          variant='outline'
          isActive={isActive}
          {...props}
          />
      )}
    </NavLink>
  );
};

export default NavButton
