import companyLogo from '../assets/companyLogo.png'
import campaign from '../assets/campaign.png'
import channels from '../assets/channels.png'
import command from '../assets/command.png'
import dashboard from '../assets/dashboard.png'
import devices from '../assets/devices.png'
import plus from '../assets/plus.png'
import zone from '../assets/zone.png'
import media from '../assets/media.png'

//Created Sidebar - Includes 8 Options

function Sidebar() {

    const iconsImg = [plus, dashboard, campaign, command, zone, channels, devices, media]
    const iconsNames = ["Add Project", "Dashboard", "Campaigns", "Commands", "Zones", "Channels", "Devices", "Media Library"]

    return (
        <div className="Sidebar bg-customBlue-light text-white xl:pl-5 h-full">
            <div className="logo flex justify-start p-5">
                <img src={companyLogo} width={120} alt="" />
            </div>
            <div className='sideIcons pl-4'>
                {iconsImg.map((img, index)=>(
                    <div className='flex p-3 items-center cursor-pointer'>
                        <img src={img} width={18} height={18} alt={iconsNames[index]} />
                        <h1 className='ml-5 hover:font-bold'>{iconsNames[index]}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;