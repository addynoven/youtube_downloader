import React from "react";
import Logo from "/src/assets/v878-mind-49.png";
function navbar() {
    return (
        <>
            <nav className=" absolute top-0 w-screen h-[10vh] flex uppercase font-[gilroy] font-bold  justify-between px-5 py-[1vh]">
                <div id="nav_left" className="">
                    <img src={Logo} alt="" className="h-full w-auto invert" />
                </div>
                <div
                    id="nav_right"
                    className=" relative flex items-center z-10 rounded overflow-hidden justify-center"
                >
                    <div
                        id="bg_right_nav"
                        className="bg-white w-full h-full top-0 left-0 absolute -z-10"
                    ></div>
                    <div className="hover:bg-[#eaeaea] h-full flex items-center px-3">
                        home
                    </div>
                    <div className="hover:bg-[#eaeaea] h-full flex items-center px-3">
                        contact
                    </div>
                    <div className="hover:bg-[#eaeaea] h-full flex items-center px-3">
                        download
                    </div>
                    <div className="hover:bg-[#eaeaea] h-full flex items-center px-3">
                        price
                    </div>
                </div>
            </nav>
        </>
    );
}

export default navbar;
