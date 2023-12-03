import account from '../assets/account.png';
import headset from '../assets/headset.png';
import notification from '../assets/notification.png';

// Header Component - Includes 3 Icons

function Header() {
    return (
        <div className="Header bg-customWhite p-4 flex justify-end">
            <div className="icons pl-3 pr-3 w-2/12 flex justify-between">
                <img src={headset} className='cursor-pointer' width={24} alt="Headset Icon" />
                <img src={notification} className='cursor-pointer' width={24} alt="Notification Icon" />
                <img src={account} className='cursor-pointer' width={24} alt="Account Icon" />
            </div>
        </div>
    );
}

export default Header;
