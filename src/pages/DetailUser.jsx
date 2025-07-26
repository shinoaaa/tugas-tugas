// Responsive adjustment for lg and xl
// Focus: Stack layout on smaller screens, maintain side panel on large screens

import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tp from '../assets/TP.svg';
import dashboard from '../assets/Dashboard.svg';
import book from '../assets/Buku.svg';
import setting from '../assets/setting.svg';
import logout from '../assets/logout.svg';
import Collaboration from "../component/collaboration";
import diagram from '../assets/percentage.svg';
import statictic from '../assets/stats.svg';

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
        });
        setUser(response.data.data);
      } catch (error) {
        console.error('error', error.response);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-[335px] h-auto lg:h-[1080px] bg-white flex-shrink-0">
        <div className="flex flex-col items-center mt-[35px]">
          <div className="w-23 h-17 flex flex-col justify-center items-center">
            <img src={tp} alt="" />
            <h1 id="cool" className="text-xl text-[#3882B6]">Institute</h1>
          </div>
        </div>
        <div className="mt-15 px-6">
          <h1 id="cool" className="text-xl opacity-25">Overview</h1>
          <div className="w-full h-[50px] bg-[#CED2D5] mt-7 cursor-pointer rounded-[15px] flex items-center px-5">
            <img src={dashboard} className="mr-5" />
            <h1 className="text-lg">Dashboard</h1>
          </div>
          <div className="w-full h-[50px] mt-15 cursor-pointer rounded-[15px] flex items-center px-5">
            <img src={book} />
            <h1 className="navbar text-md ml-5">Research Directory</h1>
          </div>
          <div className="w-full h-[50px] mt-15 cursor-pointer rounded-[15px] flex items-center px-5">
            <img src={dashboard} />
            <h1 className="navbar text-md ml-5">Evaluation</h1>
          </div>
          <div className="h-[1px] w-full bg-[#353535] mt-15"></div>
          <h1 id="cool" className="text-xl opacity-25 mt-10">Setting</h1>
          <div className="w-full h-[50px] mt-7 cursor-pointer rounded-[15px] flex items-center px-5">
            <img src={setting} />
            <h1 className="navbar text-md ml-5">Setting</h1>
          </div>
          <Link to={'/login'}>
            <div className="w-full h-[50px] mt-7 cursor-pointer rounded-[15px] flex items-center px-5">
              <img src={logout} />
              <h1 className="logout text-md ml-5">Logout</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center items-center px-4 py-6">
        <div className="card w-full max-w-[1075px] rounded-[50px] px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-center md:justify-start gap-6">
              <h1 id="cool" className="text-2xl text-white">Your Progress</h1>
              <div className="w-[50px] h-[50px] bg-amber-300 rounded-full overflow-hidden outline-2 outline-white">
                <img src={user.avatar} />
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-4 md:mt-0">
              <div className="w-[12px] h-[12px] rounded-full bg-amber-50"></div>
              <div className="w-[12px] h-[12px] rounded-full bg-amber-50"></div>
              <div className="w-[12px] h-[12px] rounded-full bg-amber-50"></div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row mt-10 gap-6">
            <div className="flex-1">
              <div className="bg-[#23679E] rounded-[35px] p-8 relative overflow-hidden">
                <div className="relative z-10 flex justify-between">
                  <div>
                    <h1 id="cool" className="text-white text-3xl">Welcome Back <br /> Again <br />
                      <span className="text-[#64E9EB]">{user.first_name} {user.last_name}</span>
                    </h1>
                    <p className="text-white text-sm mt-4">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <h1 id="cool" className="text-white text-2xl">ID Number:</h1>
                    <h1 id="cool" className="text-white text-6xl mt-2">#{id}</h1>
                  </div>
                </div>
                <div className="absolute w-[275px] h-[275px] right-[-60px] top-[50px] rounded-full bg-[#50B1FF] opacity-45"></div>
              </div>

              <h1 id="cool" className="text-white text-2xl mt-6">Collaboration</h1>
              <div className="h-[210px] overflow-y-auto scroll-barr mt-2">
                <Collaboration />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-[#23679E] rounded-[25px] p-4">
                <div className="flex justify-between text-white">
                  <h1 id="cool" className="text-xl">July</h1>
                  <h1 id="cool" className="text-xl">2025</h1>
                </div>
                <div id="cool" className="grid grid-cols-7 gap-2 text-white text-center text-xl mt-4">
                  <div></div>
                  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
                  <div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div>
                  <div>14</div><div>15</div><div>16</div><div>17</div><div>18</div><div className="text-[#64E8EB]">19</div><div>20</div>
                  <div>21</div><div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div>
                  <div>28</div><div>29</div><div>30</div><div>31</div>
                </div>
              </div>
              <div className="bg-[#3C91D6] rounded-[25px] p-4 flex items-center xl:justify-between lg:justify-center md:justify-center">
                <img src={diagram} className="w-1/2 max-w-[100px]" />
                <div className="ml-4">
                  <h1 id="cool" className="text-xl text-white leading-tight">
                    Recent <br /> Examination <br /> Progress
                  </h1>
                  <div id="cool" className="mt-3 w-[97px] h-[25px] text-white border border-white flex justify-center items-center rounded-full">
                    task
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <img src={statictic} className="w-full rounded-[30px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
