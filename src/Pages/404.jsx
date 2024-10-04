 import  {useRouteError} from "react-router-dom";

 const ErrorPage = () => {
    const error = useRouteError();
    return (
      <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className="text-4xl font-bold">Oops !</h1>
        <p className="text-3xl font-semibold">Sorry, an unexpected error has occurred.</p>
        <p className="text-3xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  };

 export default ErrorPage;