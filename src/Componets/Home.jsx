import React from 'react'
import '../Styles/Home.css'
import { IoMdArrowForward } from "react-icons/io";
const Home = () => {
  return (
    <div className="home">
      <div className="sec1">
        <div className="sec1_desc">
          <div className="text">
            <h2 className='dgLibrary'>Digital Library</h2>
            <hr className='hr' />
            <p className="description">
              When the Libraries are closed, use our convenient book drops to return materials.
              Visit our Digital Library for 24/7 access to eBooks, audiobooks, magazines, movies,
              music, learning and more.
            </p>
            <div className="bton">
              Learn More
              <IoMdArrowForward fontSize='20px' />
            </div>
          </div>
        </div>
      </div>
    {/*____________________________________________ABOUT_______________________________________ */}
      <div className="sec2_img">
        <div className="sec2">
         <div className="flex">
         <div className="sec2_dec">
            <h4 className='about'>ABOUT</h4>
            <h3 className='title_about'>Cos Cob Library Renovation</h3>
            <hr className='abt_hr'/>
            <p className='abt_desc'>
              Greenwich Library recently announced a new plan for the much-anticipated Cos Cob Branch Library
              renovation. The revised plan considers ideas raised by the community to expand the community room
              for greater program capacity, increase space dedicated to children’s services, and enhance the
              collections to make it a go-to destination.
            </p>
            <div className="abt_bton">
              Learn More
              <IoMdArrowForward fontSize='20px' />
            </div>
          </div>
         </div>
        </div>
      </div>
      {/*____________________________________________section-3___________________________________________________ */
}
      <div className="sec3_img">
         <div className="sec3_cont">
         <div className="sec3_desc">
           <h3 className='sec3_title'>January Events</h3>
          <p className='sec3Desc'>
            These printable one-page calendars for each Greenwich Library branch are fridge-ready.
            </p>
            <div className="sec3_bton">
            Get Printable Calendars
              <IoMdArrowForward fontSize='20px' />
            </div>
         </div>
         </div>
      </div>

      {/*________________________________section-4_______________________________________________ */}

      <div className="sec2_img">
        <div className="sec2">
         <div className="flex">
         <div className="sec2_dec">
            <h4 className='about'>ABOUT</h4>
            <h3 className='title_about'>Cos Cob Library Renovation</h3>
            <hr className='abt_hr'/>
            <p className='abt_desc'>
              Greenwich Library recently announced a new plan for the much-anticipated Cos Cob Branch Library
              renovation. The revised plan considers ideas raised by the community to expand the community room
              for greater program capacity, increase space dedicated to children’s services, and enhance the
              collections to make it a go-to destination.
            </p>
            <div className="abt_bton">
              Learn More
              <IoMdArrowForward fontSize='20px' />
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Home