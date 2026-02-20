import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { login as loginAction} from "../store/AuthSlice";

const OAuthSuccess = () => {
    const [params] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = params.get("token");
        const id = params.get("id");
        const username = params.get("username");

        if (token) {
            const userData = {
                token,
                id,
                username
            };
            console.log(userData)
            localStorage.setItem("token", token);
            dispatch(loginAction(userData));

            navigate("/");
        } else {
            navigate("/login");
        }
    }, [params,dispatch,navigate]);

    return <p>Logging you in...</p>;
};

export default OAuthSuccess;
