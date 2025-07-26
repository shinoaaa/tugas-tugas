import pict from "../assets/background.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import panah from '../assets/blue-arrow.png'
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users?page=${page}`, {
                    headers: {
                        'x-api-key': 'reqres-free-v1'
                    }
                });
                setUsers(response.data.data);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('GAGAL', error.response);
            }
        };

        getData();
    }, [page]);

    const handlePageChange = (e) => {
        setPage(Number(e.target.value));
    };

    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <div
                className="xl:w-[1440px] h-screen md:w-full  bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${pict})`,
                }}
            >
                <div className="relative xl:w-[1275px] xl:h-[695px] md:w-[90%] md:h-[900px] lg:w-[98%] lg:h-[690px] rounded-[32px] flex justify-center bg-white/1 backdrop-blur-[7px] border border-white/20">
                    <div className="absolute inset-0 rounded-[32px] pointer-events-none">
                        <div className="absolute inset-0 rounded-[32px] shadow-[inset_1px_1px_4px_rgba(255,255,255,0.25)]"></div>
                        <div className="absolute inset-0 rounded-[32px] shadow-[inset_-4px_-3px_8px_rgba(255,253,253,0.36)]"></div>
                        <div className="absolute inset-0 rounded-[32px] shadow-[inset_5px_7px_20px_rgba(255,255,255,0.1)]"></div>
                    </div>
                    <div className="flex-col items-center flex">
                        <div>
                            <h1 id="cool" className="text-white text-4xl mt-12 text-center">Select Your Account</h1>
                        </div>

                        <div className="flex gap-x-35 gap-y-25 flex-wrap justify-center items-center mt-10">
                            {users.map((data) => (
                                <div className="relative" key={data.id}>
                                    <div className="boxx xl:w-[250px] xl:h-[165px] md:w-[200px] md:h-[140px] relative overflow-hidden">
                                        <img src={data.avatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute xl:-translate-y-7 xl:translate-x-6 md:-translate-y-5 md:translate-x-4 flex">
                                        <Link to={`/detail/${data?.id}`}>
                                            <div className="rotate xl:w-[58px] xl:h-[58px] md:w-[45px] md:h-[45px] bg-white rounded-[15px] flex justify-center items-center cursor-pointer">
                                                <img src={panah} alt="" className="rotet w-1/2" />
                                            </div>
                                        </Link>
                                        <div className="boxxx xl:w-[185px] xl:h-[40px] md:w-[150px] md:h-[35px] bg-[#56AFCA] translate-y-3 ml-2 flex justify-center items-center">
                                            <h1 id="cool" className="text-white xl:text-xl md:text-base text-center">
                                                {data.first_name} {data.last_name}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-15">
                            <select
                                value={page}
                                onChange={handlePageChange}
                                className="px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm focus:outline-none"
                            >
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                        Page {index + 1}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
