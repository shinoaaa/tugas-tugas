import { useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tp from '../assets/TP.svg'
import dashboard from '../assets/Dashboard.svg'
import book from '../assets/Buku.svg'
import setting from '../assets/setting.svg'
import logout from '../assets/logout.svg'
import Collaboration from "../component/collaboration";
import diagram from '../assets/percentage.svg'
import statictic from '../assets/stats.svg'

const DetailUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`, {
          headers: {
            'x-api-key': 'reqres-free-v1'
          }
        })
        console.log(response.data.data);
        setUser(response.data.data)
      } catch (error) {
        console.error('error', error.response)
      }
    }

    getData();
  }, [id])

  return (
    <div>
      <div className="flex">
        <div className="w-[335px] h-screen">
          <div className="w-full flex flex-col items-center mt-[35px]">
            <div className="w-23 h-17 flex flex-col justify-center items-center">
              <img src={tp} alt="" />
              <h1 id="cool" className="text-xl text-[#3882B6]">Institute</h1>
            </div>
          </div>
          <div className="mt-15 ml-7">
            <h1 id="cool" className="text-xl opacity-25">
              Overview
            </h1>
            <div className="w-[255px] h-[50px] bg-[#CED2D5] mt-7 cursor-pointer rounded-[15px] flex items-center">
              <img src={dashboard} className="ml-7" />
              <h1 className="text-lg ml-5">Dashboard</h1>
            </div>
            <div className="w-[255px] h-[50px] mt-15 cursor-pointer rounded-[15px] flex items-center">
              <img src={book} />
              <h1 className="navbar text-md ml-5">Research Directory</h1>
            </div>
            <div className="w-[255px] h-[50px] mt-15 cursor-pointer rounded-[15px] flex items-center">
              <img src={dashboard} />
              <h1 className="navbar text-md ml-5">Evaluation</h1>
            </div>
            <div className="h-[1px] w-[225px] bg-[#353535] mt-15"></div>
            <h1 id="cool" className="text-xl opacity-25 mt-10">
              Setting
            </h1>
            <div className="w-[255px] h-[50px] mt-7 cursor-pointer rounded-[15px] flex items-center">
              <img src={setting} />
              <h1 className="navbar text-md ml-5">Setting</h1>
            </div>
            <Link to={'/'}>
              <div className="w-[255px] h-[50px] mt-7 cursor-pointer rounded-[15px] flex items-center">
                <img src={logout} />
                <h1 className="logout text-md ml-5">Logout</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-screen h-[940px] flex justify-center items-center ml-7">
          <div className="card w-[1075px] h-[870px] rounded-[50px] mt-[10px] flex justify-center items-center">
            <div className="w-[950px] h-[800px]">
              <div className="h-15 flex items-center justify-center">
                <h1 id="cool" className="text-2xl text-white">Your Progress</h1>
                <div className="w-[50px] h-[50px] ml-7 bg-amber-300 rounded-full overflow-hidden outline-2 outline-white">
                  <img src={user.avatar} />
                </div>
                <div className="flex gap-2 ml-170">
                  <div className="w-[12px] h-[12px] rounded-full bg-amber-50"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-amber-50"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-amber-50"></div>
                </div>
              </div>
              <div className="h-126 mt-7 flex justify-between">
                <div>
                  <div className="w-[590px] h-[245px] bg-[#23679E] flex pt-10 pl-12 justify-center overflow-hidden items-center rounded-[35px]">
                    <div className="w-[500px] h-[200px] relative flex ">
                      <div>
                        <h1 id="cool" className="text-white text-3xl">Welcome Back <br /> Again <br />
                          <span className="text-[#64E9EB]">{user.first_name} {user.last_name}</span>
                        </h1>
                        <p className="text-white text-sm mt-10">{user.email}</p>
                      </div>
                      <div className="ml-45 z-20">
                        <h1 id="cool" className="text-white text-2xl">ID Number:</h1>
                        <h1 id="cool" className="text-white text-6xl ml-10 mt-5">#{id}</h1>
                      </div>
                      <div className="absolute w-[275px] h-[275px] ml-75 mt-10 rounded-full bg-[#50B1FF] opacity-45"></div>
                    </div>
                  </div>
                  <h1 id="cool" className="text-white text-2xl mt-3">Collaboration</h1>
                  <div className="w-[590px] h-[210px] scroll-barr overflow-y-scroll ">
                    <Collaboration />
                  </div>
                </div>
                <div>
                  <div className="w-[310px] h-[295px] bg-[#23679E] rounded-[25px] flex justify-center items-center">
                    <div className="w-[245px] h-[250px]">
                      <div className="flex justify-between">
                        <h1 id="cool" className="text-xl text-white">July</h1>
                        <h1 id="cool" className="text-xl text-white">2025</h1>
                      </div>
                      <div id="cool" className="grid grid-cols-7 gap-2 text-white text-center text-xl mt-8">
                        <div></div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>

                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>13</div>

                        <div>14</div>
                        <div>15</div>
                        <div>16</div>
                        <div>17</div>
                        <div>18</div>
                        <div className="text-[#64E8EB]">19</div>
                        <div>20</div>

                        <div>21</div>
                        <div>22</div>
                        <div>23</div>
                        <div>24</div>
                        <div>25</div>
                        <div>26</div>
                        <div>27</div>

                        <div>28</div>
                        <div>29</div>
                        <div>30</div>
                        <div>31</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[310px] h-[190px] bg-[#3C91D6] mt-4 rounded-[25px] flex justify-center items-center">
                    <div className="w-[260px] h-[140px] flex">
                      <div className="w-[120px] h-full">
                        <img src={diagram} className="scale-125 ml-7 mt-2" />
                      </div>
                      <div className="ml-7">
                        <h1 id="cool" className="text-xl text-white">
                          Recent <br />
                          Examination <br />
                          Progress
                        </h1>
                        <div id="cool" className="w-[97px] h-[25px] text-white outline-1 outline-white flex justify-center items-center mt-3 rounded-full">
                          task
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[950px] h-[160px] mt-7">
                <img src={statictic} className="object-cover w-full rounded-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUser;