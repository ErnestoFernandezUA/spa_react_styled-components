import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

export const Details: FunctionComponent = () => {
  let { name } = useParams();

  return (
    <div>
      Details: {name}
    </div>
  );
} 
