import { useParams } from 'react-router-dom';
import { CustomCanvas } from '../components/customCanvas'

export const Space = () => {
  const { id } = useParams();

  return (
    <>
      <CustomCanvas id={id}/>
    </>
  );

};
