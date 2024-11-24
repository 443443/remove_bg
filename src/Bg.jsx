import './Bg.css';
import close from './asset/close.png';
import banner from './asset/banner.png';
import logo from './asset/logo.png';  
function Bg() {
  return (
    <div className="Bg">

      <div className='bg_cont'>

        <div className='heder'>
          <image src={close} alt='close' className='close_img' />
          <div className='heder_title' >העלה תמונה כדי להסיר את הרקע</div>
          <button className='up_img'>העלה תמונה</button>
          <div className='up_btn_text'> פורמטים נתמכים png,jpg</div>
        </div>
<div className='midlle'></div>
<div className='footer'>
<img className=''src={logo}></img>
<img className=''src={banner}></img>

</div>
      </div>
    </div>
  );
}

export default Bg;