import axios from "axios";
import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleRegister = async () => {
        try {
            const response = await axios.post(
                "https://reqres.in/api/register",
                {
                    email,
                    password,
                },
                {
                    headers: {
                        "x-api-key": "reqres-free-v1"
                    }
                }
            );
            console.log("Berhasil register:", response.data);
            setSuccessMsg("Berhasil! Token: " + response.data.token);
            setErrorMsg("");
        } catch (error) {
            const err = error.response?.data?.error || "Gagal Register";
            console.error("Gagal register:", err);
            setErrorMsg("❌ " + err);
            setSuccessMsg("");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center pt-6 xl:w-[790px] lg:w-[790px] md:w-[525px] h-[550px] bg-white outline-2 rounded-4xl absolute shadow-lg">
            <h1 id="cool" className="text-3xl">SIGN UP</h1>

            <div className="mt-17">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-3 pl-5 w-96 outline-1 outline-black rounded-full"
                />
            </div>

            <div className="mt-15">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-3 pl-5 w-96 outline-1 outline-black rounded-full"
                />
            </div>

            <button
                id="cool"
                className="login text-2xl text-white mt-17 px-12 py-3 bg-[#56AFCA] rounded-full outline-1"
                onClick={handleRegister}
            >
                Register
            </button>
            

            {errorMsg && <p className="text-red-500 mt-4">{errorMsg}</p>}
            {successMsg && <p className="text-green-600 mt-4">{successMsg}</p>}
        </div>
    );
};

export default Register;
