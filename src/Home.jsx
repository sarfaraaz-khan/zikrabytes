import React, { Component } from 'react';
import './Home.css'
import apple from './assets/images/apple.png'
import android from './assets/images/android.png'
import icon1 from './assets/images/icon1.png'
import icon2 from './assets/images/icon2.png'
import icon3 from './assets/images/icon3.png'
import icon4 from './assets/images/icon4.png'
import icon5 from './assets/images/icon5.png'
import icon6 from './assets/images/icon6.png'
import icon7 from './assets/images/icon7.png'
import icon8 from './assets/images/icon8.png'
import icon9 from './assets/images/icon9.png'
import icon10 from './assets/images/icon10.png'
import icon11 from './assets/images/icon11.png'
import icon12 from './assets/images/icon12.png'
import main from './assets/images/main.png'


class Home extends Component {
  render() {
    return (
        <div>
    <div className='main__div'>
 <div className='left__section'>

       <div className='heading'>
           <span className='first__heading'>DEVELOPMENT<p id='task'>  TASK</p></span><br/>
           <span className='second__heading'>Blanditiis harum fugiat quisquam eius  odit fugiat iusto.</span>


           <div className='description'>
               <p>TLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit  fugiat fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
           </div>
           <div className='store__logos'>
               <div className='android'>
                   <img src={android} alt=" "/>
               </div>
               <div className='Apple'>
               <img src={apple} alt=" "/>
               </div>
           </div>
           <div className='down__logos'>
           <div className='first__logo'>
               <img src={icon1} alt=" "/>
               <img src={icon2} alt=" "/>
               <img src={icon3} alt=" "/>
               <img src={icon4} alt=" "/>
               <img src={icon5} alt=" "/>
               <img src={icon6} alt=" "/>
            </div>
            <div className='second__logo'>
               <img src={icon7} alt=" "/>
               <img src={icon8} alt=" "/>
               <img src={icon9} alt=" "/>
               <img src={icon10} alt=" "/>
               <img src={icon11} alt=" "/>
               <img src={icon12} alt=" "/>
            </div>
           </div>
       </div>
</div>






{/*   -------  Left section ----- */}
       <div className='right__section'>
            
             
     <img  src={main} alt=''/>
      
     </div>


        </div>
        

               {/* footer section */}

               <div className='footer'>
                   <div className='down__content'>
                       <div className='some__text'>
                           <span className='heading'>laborum numquam harum<br/><span className='subheading'>For first 1000 subscribers</span></span>
                           <input type="text" placeholder='name'/>
                           <input type="email" placeholder='email'/>
                           <input type="text" placeholder='mobile'/> 
                       </div>
                       <div className='second__line'>
                           
                       <span className='terms'>harum fugiat quisquam eius  odit fugiat iusto</span>
                         <div className='checkbox'>
                         <input type="checkbox" />
                           <span>Yes</span>
                           <input type="checkbox"/>
                           <span>No</span>
                           
                           <input type="submit" id='btn'/>
                         </div>
                         
                       </div>
                     <div className='input__feilds'>


                   </div>
               </div>
                   




</div>


<div className='contact'>
    <span>Got question? we can help you</span>
    <button> Request Number</button>
    
</div>

        </div>
     )


}

}
export default Home