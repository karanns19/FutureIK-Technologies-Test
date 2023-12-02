import Header from "../header/header";
import map from '../assets/map.png'

function Mainbody() {
    return (
        <div className="Mainbody h-full">
            <Header></Header>
            <div className="mainComponent p-8">
                <div className="w-full flex justify-between items-center">
                    <h1 className="ml-0 text-xl font-semibold">Project</h1>
                    <button className="mr-0 bg-customSkyBlue text-white p-2 text-sm pl-4 pr-4">+ Add Project</button>
                </div>
                <div className="w-full mt-5 bg-customWhite border border-borderColor flex justify-between p-4 pl-8 pr-8">
                    <div>
                        <h1 className="text-base font-medium">Adidas Mobile</h1>
                    </div>
                    <div>
                        <h1 className="text-sm text-customGrey">Campaigns</h1>
                        <h1 className="text-base font-medium">8</h1>
                    </div>
                    <div>
                        <h1 className="text-sm text-customGrey">Channels</h1>
                        <h1 className="text-base font-medium">9/10</h1>
                    </div>
                    <div>
                        <h1 className="text-sm text-customGrey">Last Edited by</h1>
                        <h1 className="text-base font-medium">Varun</h1>
                    </div>
                    <div>
                        <h1 className="text-sm text-customGrey">Last Edited on</h1>
                        <h1 className="text-base font-medium">5 hours ago</h1>
                    </div>
                </div>
                <div className="w-full mt-5 flex">
                    <div className="leftBottom w-3/5 grid grid-cols-2 grid-rows-2 gap-4">
                        <div className="bg-customWhite p-4">
                            <h1 className="font-medium">General information</h1>
                        </div>
                        <div className="bg-customWhite p-4">
                            <h1 className="font-medium">Live Statistics</h1>
                        </div>
                        <div className="bg-customWhite p-4">
                            <h1 className="font-medium">Device Status</h1>
                        </div>
                        <div className="bg-customWhite p-4">
                            <h1 className="font-medium">Activity Logs</h1>
                        </div>
                    </div>
                    <div className="rightBottom w-2/5 pl-4">
                        <div className="bg-customWhite p-4 mb-4">
                            <h1 className="font-medium">Location - Devices</h1>
                            <img src={map} className="mt-4" alt="" />
                        </div>
                        <div className="bg-customWhite p-4">
                            <h1 className="font-medium">Domain Quota</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainbody;