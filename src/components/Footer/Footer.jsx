import './Footer.scss'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {


    return(
        <div className="Footer" id="Footer">
            <div className='Footer_container'>
                <div className='Footer_contact'>
                    <div className='footer_info_container'>
                        <PhoneIphoneIcon className='icon'/>
                        <WhatsAppIcon className='icon'/>
                        <TelegramIcon className='icon'/>
                        <p className='footer_text'>+996 550 326 376</p>
                    </div>
                    <div className='footer_info_container'>
                            <EmailIcon className='icon'/>
                            <p className='footer_text'>marselkasymov23@gmail.com</p>
                    </div>
                    <div className='footer_info_container'>
                        <InstagramIcon className='icon'/>
                        <p className='footer_text'>@mar_kasr</p>
                    </div>
                </div>
                <div className='Footer_aboutSite'>
                        <p>Сайт полностью написан Касымовым Марселем. 2022</p>
                </div>
            </div>
           
        </div>
    )
}