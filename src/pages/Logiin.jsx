import pict from "../assets/background.svg";
import InputForm from "../component/InputForm";
import kuda from '../assets/kuda.svg'
import arrow from '../assets/panah.png'
import axios from "axios";
import { useState,useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [success, setSuccess] = useState("");
        const [loading, setLoading] = useState(false);
        const navigate = useNavigate();
    
        const changeUserName = (e) => {
            setUsername(e.target.value);
        };
    
        const changePassword = (e) => {
            setPassword(e.target.value);
        };
    
        const handleSubmit = async () => {
            if (loading) return;
    
            if (!username || !password) {
                toast.error("Email dan password wajib diisi!");
                return;
            }
    
            const payload = {
                email: username,
                password: password,
            };
    
            setLoading(true);
    
            try {
                const res = await axios.post(
                    "https://reqres.in/api/login",
                    payload,
                    {
                        headers: {
                            "x-api-key": "reqres-free-v1"
                        }
                    }
                );
    
                const token = res.data.token;
                localStorage.setItem("accessToken", token);
                setSuccess("Login berhasil");
                toast.success("Login berhasil!");
    
                setTimeout(() => {
                    navigate("/user");
                }, 2000);
    
            } catch (error) {
                const errorMsg = error?.response?.data?.error || "Login gagal";
                console.log(error.response);
                setSuccess(errorMsg);
                toast.error("❌ " + errorMsg);
            } finally {
                setLoading(false);
            }
        };
    
    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <div
                className="w-[1440px] h-screen bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${pict})`,
                }}
            >
                <div className="xl:mr-0 lg:mr-100 md:mr-170">
                    <div
                        className="relative xl:w-[950px] h-[650px] lg:w-[920px] md:w-[550px] rounded-[32px] flex justify-center items-center bg-white/1 backdrop-blur-[7px] border border-white/20"
                    >
                        <div className="absolute inset-0 rounded-[32px] pointer-events-none">
                            <div className="absolute inset-0 rounded-[32px] shadow-[inset_1px_1px_4px_rgba(255,255,255,0.25)]"></div>
                            <div className="absolute inset-0 rounded-[32px] shadow-[inset_-4px_-3px_8px_rgba(255,253,253,0.36)]"></div>
                            <div className="absolute inset-0 rounded-[32px] shadow-[inset_5px_7px_20px_rgba(255,255,255,0.1)]"></div>
                        </div>

                        <div className="relative z-10 xl:w-[825px] h-[550px] lg:w-[800px] md:w-[425px] flex">
                            <div className="w-105 block">
                                <h1 id="cool" className="text-3xl text-center text-white">Welcome To <br />
                                    TouHou Project Institute
                                </h1>
                                <InputForm
                                changeUserName={changeUserName}
                                changePassword={changePassword}
                                handleSubmit={handleSubmit} />
                            </div>
                            <div className="w-85 flex justify-center items-center ml-15 relative">
                                <div className="w-[350px] h-[535px] outline-1 rounded-[45px] relative outline-white md:hidden lg:block xl:block">
                                    <img src={kuda} className="w-full h-full object-cover rounded-[45px]" />
                                </div>
                                <div className="absolute bottom-[-20px] right-[-35px] md:hidden lg:block xl:block">
                                    <a href="https://artofpaintbynumbers.com/products/deer-sunset-silhouette-paint-by-numbers-kit" target="blank">
                                        <div className="kotak w-20 h-20 bg-[#56AFCA] rounded-2xl outline-1 outline-white flex justify-center items-center">
                                            <img src={arrow} className="arrow" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;