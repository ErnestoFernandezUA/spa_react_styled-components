import { FunctionComponent } from "react";

interface ErrorPageProps {
  error: string;
}
 
const ErrorPage: FunctionComponent<ErrorPageProps> = ({ error }) => {
  return (
    <>
      ErrorPage {error}
    </> 
  );
}
 
export default ErrorPage;