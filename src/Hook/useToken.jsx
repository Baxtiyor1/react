import { useContext } from "react";
import { TokenContext } from "../Context/token";

function useToken(){

    let {token, setToken} = useContext(TokenContext)

    return [token, setToken]
}

export default useToken