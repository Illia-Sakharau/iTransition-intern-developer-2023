import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useGetPersonsQuery } from './API/PersonsAPI';

function App() {
  const {data, isLoading} = useGetPersonsQuery({
    seed: 123,
    page: 1,
    size: 1,
    ln: 'ge',
    errNum: 2,
  });

  return (
    <>
    <h1>Page</h1>
    {isLoading && <h2>isLoading</h2>}
    <div>
      {JSON.stringify(data)}
    </div>
    <Button>123</Button>
    </>
  )
}

export default App
