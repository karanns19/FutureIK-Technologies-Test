import Header from "../header/header";
import map from '../assets/map.png'
import headphone from '../assets/headphone.png'
import Donut from "../donutchart/donut";
import rightArrow from '../assets/rightArrow.png'
import command2 from '../assets/command2.png'
import monitor from '../assets/monitor.png'
import playlist from '../assets/playlist.png'
import './main.css'

// Main Components - Includes 6 Boxes which contains different parameters and donut charts

function Mainbody() {

    // Data to Loop HTML Tags
    const statisticsName = ["Campaigns", "Channels", "Last Edited by", "Last Edited on"]
    const statisticsValues = ["8", "9/10", "Varun", "5 hours ago"]
    const liveStatisticsData = [
        { id: 1, value: 15, button: "Info" },
        { id: 2, value: 27, button: "Warning" },
        { id: 3, value: 1, button: "Errors" },
    ]
    const deviceStatus = [
        { id: 1, name: "Test device 01", status: "Online", lastResponse: "Wed Apr 26 2023 ; 03:00:10", icon: "" },
        { id: 2, name: "Test device 02", status: "Online", lastResponse: "Wed Apr 26 2023 ; 15:00:10", icon: rightArrow },
        { id: 3, name: "Test device 03", status: "Offline", lastResponse: "Wed Apr 26 2023 ; 20:00:10", icon: "" },
        { id: 4, name: "Test device 04", status: "Offline", lastResponse: "Wed Apr 26 2023 ; 10:00:10", icon: rightArrow },
        { id: 5, name: "Test device 05", status: "Online", lastResponse: "Wed Apr 26 2023 ; 10:00:10", icon: "" },
    ]
    const generalInformation = [
        { id: 1, name: "Projects", value: "20", text: "02/10" },
        { id: 2, name: "Users", value: "100", text: "03/03" },
        { id: 3, name: "Channels", value: "100", text: "10/10" },
        { id: 4, name: "Devices", value: "50", text: "05/10" },
    ]
    const activityLogs = [
        { id: 1, name: "Devices", icon: monitor, text: "FutureIK-device 1 report generated successfully", date: "16 Mar 2023,", time: "06:30:25 PM" },
        { id: 2, name: "Campaign", icon: command2, text: "FutureIK-cinemas Modified successfully", date: "16 Mar 2023,", time: "06:30:25 PM" },
        { id: 3, name: "Zones", icon: playlist, text: "FutureIK-display 1 created successfully", date: "16 Mar 2023,", time: "06:30:25 PM" },
    ]
    return (
        <div className="Mainbody h-full">
            <Header></Header>
            <div className="fixed bottom-0 right-0 p-4">
                <img src={headphone} className="hover:transform hover:scale-110 cursor-pointer" width={60} alt="Headphone Icon" />
            </div>
            <div className="mainComponent p-8">
                <div className="w-full flex justify-between items-center">
                    <h1 className="ml-0 text-xl font-semibold">Project</h1>
                    <button className="mr-0 bg-customSkyBlue text-white p-2 text-sm pl-4 pr-4 hover:transform hover:scale-110">+ Add Project</button>
                </div>
                <div className="w-full mt-5 bg-customWhite border border-borderColor flex justify-between p-4 pl-8 pr-8">
                    <div>
                        <h1 className="text-base font-medium">Adidas Mobile</h1>
                    </div>
                    {statisticsName.map((value, index) => (
                        <div>
                            <h1 className="text-sm text-customGrey">{value}</h1>
                            <h1 className="text-base font-medium">{statisticsValues[index]}</h1>
                        </div>
                    ))}
                </div>
                <div className="w-full mt-5 block xl:flex">
                    <div className="leftBottom w-5/5 xl:w-3/5 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-4">
                        <div className="bg-customWhite p-4 border border-borderColor">
                            <h1 className="font-medium">General information</h1>
                            <div className="mt-2">
                                {generalInformation.map((info) => (
                                    <div className="flex justify-between items-center pt-3 pb-3">
                                        <h1 className="w-3/12 font-normal text-customTextColor">{info.name}</h1>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={info.value}
                                            style={{ background: `linear-gradient(to right, #082A56 0%, #082A56 ${info.value}%, #E5E7EB ${info.value}%, #E5E7EB 100%)` }}
                                            className="w-6/12 h-4 bg-gray-300 appearance-none rounded-lg outline-none overflow-hidden"
                                        />
                                        <h1 className="w-3/12 font-normal text-right text-customTextColor">{info.text}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-customWhite p-4 border border-borderColor w-full">
                            <h1 className="font-medium">Live Statistics</h1>
                            <div className="flex w-full justify-center">
                                {liveStatisticsData.map((item) => (
                                    <div className="w-4/12 lg:text-center">
                                        <Donut percentage={item.value} text={item.value} total={40} fontSize={34} />
                                        <button className="text-customSkyBlue border border-customSkyBlue hover:text-white hover:bg-customSkyBlue hover:border-white p-1 pl-3 pr-3 text-sm">{item.button}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-customWhite p-4 border border-borderColor">
                            <h1 className="font-medium">Device Status</h1>
                            <table className="mt-3 w-full">
                                <tr>
                                    <th className="font-normal text-customHeadingColor pt-2 pb-2 text-xs w-3/12 text-left">Device Name</th>
                                    <th className="font-normal text-customHeadingColor pt-2 pb-2 text-xs w-3/12 text-center">Status</th>
                                    <th className="font-normal text-customHeadingColor pt-2 pb-2 text-xs w-6/12 text-left">Last Response</th>
                                </tr>
                                {deviceStatus.map((device) => (
                                    <tr>
                                        <td className="font-normal text-customHeadingColor pt-1 pb-1 text-xs w-3/12 text-left">{device.name}</td>
                                        {device.status == "Online" ? (
                                            <td className="text-customHeadingColor font-normal pt-1 pb-1 text-xs w-3/12 text-center"><button className="bg-green-600 p-1 pl-2 pr-2 rounded-lg text-white">{device.status}</button></td>
                                        ) : (
                                            <td className="text-customHeadingColor font-normal pt-1 pb-1 text-xs w-3/12 text-center"><button className="bg-red-600 p-1 pl-2 pr-2 rounded-lg text-white">{device.status}</button></td>
                                        )}
                                        <td className="text-customHeadingColor font-normal pt-1 pb-1 text-xs w-6/12 text-left">{device.lastResponse}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                        <div className="bg-customWhite p-4 border border-borderColor">
                            <h1 className="font-medium">Activity Logs</h1>
                            {activityLogs.map((activity) => (
                                <div className="flex items-center border-b pt-2 pb-2 border-gray-300">
                                    <div className="w-1/12">
                                        <img src={activity.icon} width={20} height={20} alt="" />
                                    </div>
                                    <div className="w-8/12">
                                        <h1 className="text-lg font-normal text-customHeadingColor">{activity.name}</h1>
                                        <p className="text-xs font-normal text-customHeadingColor">{activity.text}</p>
                                    </div>
                                    <div className="w-3/12">
                                        <h1 className="text-xs font-normal text-customTextColor">{activity.date}</h1>
                                        <h1 className="text-xs font-normal text-customTextColor">{activity.time}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rightBottom w-5/5 xl:w-2/5 pl-4">
                        <div className="bg-customWhite p-4 mb-4 border border-borderColor">
                            <h1 className="font-medium">Location - Devices</h1>
                            <img src={map} className="mt-4 cursor-pointer" alt="Google Map" />
                        </div>
                        <div className="bg-customWhite p-4 border border-borderColor">
                            <h1 className="font-medium">Domain Quota</h1>
                            <div className="flex justify-between items-center">
                                <Donut percentage={60.33} total={100} text="60.33%" fontSize={18} />
                                <div>
                                    <h1 className="text-sm text-customTextColor">Data Usage</h1>
                                    <h1 className="text-xl font-semibold">60.33gb/100gb</h1>
                                </div>
                                <div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <h1 className="text-xs text-customTextColor">Today</h1>
                                            <h1 className="font-semibold">30.00%</h1>
                                        </div>
                                        <div>
                                            <h1 className="text-xs text-green-600">Increase</h1>
                                            <h1 className="text-customTextColor">+15.00</h1>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <h1 className="text-xs text-customTextColor">This Week</h1>
                                            <h1 className="font-semibold">15.00%</h1>
                                        </div>
                                        <div>
                                            <h1 className="text-xs text-red-600">Decrease</h1>
                                            <h1 className="text-customTextColor">-15.00</h1>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <h1 className="text-xs text-customTextColor">This Month</h1>
                                            <h1 className="font-semibold">55.00%</h1>
                                        </div>
                                        <div>
                                            <h1 className="text-xs text-red-600">Decrease</h1>
                                            <h1 className="text-customTextColor">+25.00</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainbody;