import { Link } from "react-router-dom";
import check from '../assets/check.png';
import check1 from '../assets/check1.png';
import google from '../assets/google.svg';
import Register from "./register";
import NotFound from "./NotFound";
import { useState, useRef, useEffect } from "react";

const InputForm = () => {
    const [popupContent, setPopupContent] = useState(null);
    const popupRef = useRef(null);

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
                />
                <div className="bg-white w-[345px] h-[2px]"></div>
            </div>

            <div id="cool" className="py-5">
                <input
                    type="text"
                    placeholder="Password"
                    className="outline-none border-none text-white"
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
                <Link to={"/user"}>
                    <button
                        id="cool"
                        className="login text-white w-[345px] h-[60px] text-2xl bg-[#56AFCA] rounded-[15px]"
                    >
                        Login
                    </button>
                </Link>
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
