import pict from "../assets/background.svg";


const UserList = () =>{
    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <div
                className="w-[1440px] h-[765px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${pict})`,
                }}>
                    <div
                    className="relative w-[1275px] h-[675px] rounded-[32px] flex justify-center items-center bg-white/1 backdrop-blur-[7px] border border-white/20"
                >
                    <div className="absolute inset-0 rounded-[32px] pointer-events-none">
                        <div className="absolute inset-0 rounded-[32px] shadow-[inset_1px_1px_4px_rgba(255,255,255,0.25)]"></div>
                        <div className="absolute inset-0 rounded-[32px] shadow-[inset_-4px_-3px_8px_rgba(255,253,253,0.36)]"></div>
                        <div className="absolute inset-0 rounded-[32px] shadow-[inset_5px_7px_20px_rgba(255,255,255,0.1)]"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UserList