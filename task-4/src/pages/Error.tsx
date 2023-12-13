import { ErrorResponse, useRouteError } from 'react-router-dom';
import { FC, ReactElement } from 'react';

type Props = unknown;

const ErrorPage: FC<Props> = (): ReactElement => {
  const error = useRouteError() as ErrorResponse ;
  function reloadHandler() {
    location.reload();
  }

  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>

        <i>{error.statusText}</i>
      </p>
      <button onClick={reloadHandler}>Reload page</button>
    </div>
  )
};

export default ErrorPage;
