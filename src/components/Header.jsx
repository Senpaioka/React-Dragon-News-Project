import logoUrl from '../assets/images/logo.png'
import {getFormattedDate} from '../utilities/formatDate';

const {weekday, restOfDate} = getFormattedDate();

function Header() {
  return (
    <div className='w-10/12 mx-auto p-5'>
      <img className='w-[400px] mx-auto h-auto' src={logoUrl} alt="logo" />
      <p className='text-center poppins-regular text-lg text-gray-500 p-3'>Journalism Without Fear or Favour</p>
      <p className='text-lg poppins-regular text-gray-500 text-center'><strong>{weekday},</strong> {restOfDate}</p>
    </div>
  );
}

export default Header;