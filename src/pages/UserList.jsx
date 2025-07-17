import pict from "../assets/background.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import panah from '../assets/blue-arrow.png'
import { Link } from "react-router-dom";


const UserList = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await axios.get('https://reqres.in/api/users?page=1', {
                    headers: {
                        'x-api-key': 'reqres-free-v1'
                    }
                })
                setUser(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error('GAGAL', error.response)
            }
        }

        getData();
    })



    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <div
                className="w-[1440px] h-[765px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${pict})`,
                }}>
                <div
                    className="relative w-[1275px] h-[675px] rounded-[32px] flex justify-center bg-white/1 backdrop-blur-[7px] border border-white/20"
                >
                    <div className="absolute inset-0 rounded-[32px] pointer-events-none">
                        <div className="absolute inset-0 rounded-[32px] shadow-[inset_1px_1px_4px_rgba(255,255,255,0.25)]"></div>
                        <div className="absolute inset-0 rounded-[32px] shadow-[inset_-4px_-3px_8px_rgba(255,253,253,0.36)]"></div>
                        <div className="absolute inset-0 rounded-[32px] shadow-[inset_5px_7px_20px_rgba(255,255,255,0.1)]"></div>
                    </div>
                    <div className="flex-col items-center flex">
                        <div>
                            <h1 id="cool" className="text-white text-4xl mt-15">Select Your Account</h1>
                        </div>
                        <div className="flex gap-x-35 gap-y-25 flex-wrap justify-center items-center mt-15">
                            {
                                user.map((data) => (
                                    <div className="relative">
                                        <div className="boxx w-[250px] h-[165px] relative overflow-hidden">
                                            <img src={data.avatar} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute flex -translate-y-7 translate-x-6">
                                            <Link to={`/detail/${data?.id}`}>
                                                <div className="rotate w-[58px] h-[58px] bg-white rounded-[15px] flex justify-center items-center cursor-pointer">
                                                    <img src={panah} alt="" className="rotet" />
                                                </div>
                                            </Link>
                                            <div className="boxxx w-[185px] h-[40px] bg-[#56AFCA] translate-y-3 ml-2  flex justify-center items-center">
                                                <h1 id="cool" className="text-white text-xl">{data.first_name} {data.last_name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList