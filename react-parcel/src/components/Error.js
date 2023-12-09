import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    const {status,statusText}=err;

    return(
        <div>
            <h2>{status}</h2>
            <h2>{statusText}</h2>
        </div>
    )
}

export default Error;