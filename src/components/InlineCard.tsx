import { Component984 } from "../images/Component984"
import { Frame8145 } from "../images/Frame8145"
import { Frame8146 } from "../images/Frame8146"

export function InlineCard() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-start gap-6 w-[73.125%] h-[90.89%] overflow-y-auto">
                <div className="flex flex-col gap-2 w-full">
                    {Array.from({ length: 50 }).map((_, index) => (
                        <div
                            key={index}
                            className="container border border-solid border-gray-200 rounded-md bg-white shadow-sm p-4 flex flex-col items-start gap-4 w-full max-h-[80px] sm:max-h-full hover:shadow-[0_0_0_1px_rgba(16,24,40,0.2)] hover:border-grey-200">
                            <div className=" p-2 flex items-center gap-4 self-stretch">
                                <input
                                    type="checkbox"
                                    className=" checkbox w-[20px] h-[20px]" />
                                <div className=" w-full h-[40px] flex flex-1 justify-between items-center">
                                    <div className="h-[34px] w-[316.800px] flex items-center ml-1">
                                        <div className="flex items-start justify-start w-[206.08px] flex-col ">
                                            <div className="icons">
                                                < Frame8146 />
                                            </div>
                                        </div>
                                        <div className="Frame8145 ">
                                            <div className="icons">
                                                <Frame8145 />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-[102px] h-[40px] gap-4 flex items-center">
                                        <div className=" w-[44px] h-[24px]  p-[2px] flex">
                                            <label className="relative inline-flex items-center cursor-pointer ">
                                                <input
                                                    type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-11 h-6 bg-blue-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-600 rounded-full peer
                                            dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-800 peer-checked:bg-blue-600 "></div>
                                            </label>
                                        </div>
                                        <div className="w-[40px] h-[40px] p-[10px]">
                                            <button className=""  >
                                                <Component984 />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
