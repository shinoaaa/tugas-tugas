import { Link } from "react-router-dom";
import check from '../assets/check.png';
import check1 from '../assets/check1.png';
import google from '../assets/google.svg';
import Register from "./register";
import NotFound from "./NotFound";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
    const [popupContent, setPopupContent] = useState(null);
    const popupRef = useRef(null);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const changeUserName = (e) => {
        setUsername(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        const payload = {
            email: username,
            password: password,
        };

        try {
            const res = await axios.post(
                "https://reqres.in/api/login",
                payload,
                {
                    headers: {
                        "x-api-key": "reqres-free-v1" // optional, tapi bisa masukin
                    }
                }
            );

            const token = res.data.token;
            localStorage.setItem("accessToken", token);
            setSuccess("Login berhasil");

            setTimeout(() => {
                navigate("/user");
            }, 2000);

        } catch (error) {
            const errorMsg = error?.response?.data?.error || "Login gagal";
            console.log(error.response);
            setSuccess(errorMsg); // tampilkan pesan dari server
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setPopupContent(null);
            }
        };

        if (popupContent) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popupContent]);

    return (
        <div className="pl-10">
            <div id="cool" className="py-15">
                <input
                    type="text"
                    placeholder="Email"
                    className="outline-none border-none text-white"
                    onChange={changeUserName}
                />
                <div className="bg-white w-[345px] h-[2px]"></div>
            </div>

            <div id="cool" className="py-5">
                <input
                    type="text"
                    placeholder="Password"
                    className="outline-none border-none text-white"
                    onChange={changePassword}
                />
                <div className="bg-white w-[345px] h-[2px]"></div>
            </div>

            <div className="flex text-white pt-10">
                <div className="flex">
                    <div className="cek-box w-6 h-6 bg-white flex justify-center items-center relative">
                        <img src={check} alt="" className="white-check absolute z-0 opacity-0" />
                        <img src={check1} alt="" className="absolute" />
                    </div>
                    <h1 className="ml-[12px] text-[12px] mt-1">Remember Me</h1>
                </div>
                <div>
                    <h1
                        onClick={() => setPopupContent('notfound')}
                        className="tekss ml-[143px] text-[12px] cursor-pointer mt-1"
                    >
                        Forget Password
                    </h1>
                </div>
            </div>

            <div className="w-[345px] mt-10 flex justify-center items-center">
                <button
                    id="cool"
                    className="login text-white w-[345px] h-[60px] text-2xl bg-[#56AFCA] rounded-[15px]"
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </div>
            <div className="flex pt-9 w-[345px] justify-between">
                <button
                    onClick={() => setPopupContent('notfound')}
                    className="google w-[160px] h-[50px] rounded-2xl bg-white flex justify-center items-center"
                >
                    <img src={google} className="hitam" />
                </button>
                <button
                    onClick={() => setPopupContent('register')}
                    id="cool"
                    className="sign w-[160px] h-[50px] rounded-2xl text-xl text-[#56AFCA] bg-white"
                >
                    Sign Up
                </button>
            </div>

            {popupContent && (
                <div className="-translate-x-[375px] -translate-y-[275px] fixed inset-0 flex items-center justify-center z-50">
                    <div ref={popupRef}>
                        {popupContent === "register" && <Register />}
                        {popupContent === "notfound" && <NotFound />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default InputForm;
