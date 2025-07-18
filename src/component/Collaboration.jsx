import axios from "axios"
import { useEffect, useState } from "react"


function Collaboration() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://reqres.in/api/users?page=1', {
                    headers: {
                        'x-api-key': 'reqres-free-v1'
                    }
                })
                setUser(response.data.data)
            } catch (error) {
                console.error('GAGAL', error.response)
            }
        }

        getData();
    }, [])

    return (
        <div>
            <div className="h-[255px] gap-y-2 pb-12">
                {
                    user.map((data) => (
                        <div className="w-[545px] h-[50px] bg-[#1E5989] mt-5 rounded-full">
                            <div className="flex h-[50px] items-center ml-5 relative">
                                <div className="w-[35px] h-[35px] rounded-full overflow-hidden bg-amber-300 outline-white outline-1">
                                    <img src={data.avatar} />
                                </div>
                                <h1 className="ml-5 text-white">{data.first_name}  {data.last_name}</h1>
                                <div className="flex gap-2 ml-115 absolute">
                                    <div className="w-[7px] h-[7px] rounded-full bg-amber-50"></div>
                                    <div className="w-[7px] h-[7px] rounded-full bg-amber-50"></div>
                                    <div className="w-[7px] h-[7px] rounded-full bg-amber-50"></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Collaboration