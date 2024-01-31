import { FaHome } from 'react-icons/fa';
import NavButton from './NavButton';
import { NavRoutes } from '../../../../router/routes';


const HomeButton = () => {

  return (
    <NavButton 
      to={NavRoutes.homePagePath}
      icon={<FaHome />}
      aria-label={`Navigate to home page`}
    />
  );
};

export default HomeButton
