import React from 'react'
import './styles/footer.css'
import facebook from './images/facebook-brands.svg'
import instagram from './images/instagram-brands.svg'
import linkedin from './images/linkedin-brands.svg'
import line from './images/line-brands.svg'
import pinterest from './images/pinterest-brands.svg'

function MyFooter() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="annie_footertest">
          <div className="anniefooter_box7 row">
            <div className="anniefooter_box6 col-md-6">
              <span>購物須知</span>
              <span>配送方式</span>
              <span>退貨規則</span>
              <span>常見問題</span>
              <span>法律條款</span>
            </div>
            <div className="anniefooter_box5 col-md-6">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
              <img src={line} alt="" />
              <img src={pinterest} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="anniefooter_f1 col-md-6">
              <span>椅子學院股份有限公司</span>
            </div>
            <div className="anniefooter_f2 col-md-6">
              <p>© 2020 - &Chademy Co. Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyFooter
