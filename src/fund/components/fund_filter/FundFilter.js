import React, { useState, useEffect } from 'react'
import './fundfilter.css'
import { Slider } from 'antd'
import 'antd/dist/antd.css'
import { IntegerStep, DecimalStep } from './components/IntegerStep'
import { Checkbox } from 'antd'
import { Tag } from 'antd'

function FundFilter(props) {
  const {
    showFilter,
    category,
    setCategory,
    chairSeat,
    setChairSeat,
    chairColor,
    setChairColor,
    getFilterFromSQL,
  } = props

  // 0 : close 1 : open
  const [viewFilter, setViewFilter] = useState(0)

  const [viewSpread, setViewSpread] = useState(false)
  const [viewSpread1, setViewSpread1] = useState(false)
  const [viewSpread2, setViewSpread2] = useState(false)
  const [viewSpread3, setViewSpread3] = useState(false)
  const [viewSpread4, setViewSpread4] = useState(false)

  console.log(viewFilter)

  // const newViewFilter = ({ open }) => setViewFilter(open)

  //sidebar
  let sidebarShow = {
    width: '240px',
    display: 'block',
  }
  let sidebarHide = {
    width: '80px',
  }

  //filterText
  let filterTextShow = {
    display: 'none',
  }

  let filterTextHide = {
    display: 'block',
    position: 'fixed',
  }

  //sidebarContent
  let sidebarContentShow = {
    display: 'block',
  }

  let sidebarContentHide = {
    display: 'none',
  }

  // seats1
  let seats1Show = {
    display: 'block',
  }

  let seats1Hide = {
    display: 'none',
  }

  let colorBorder = {
    border: 3 + 'px solid #c77334',
  }
  let colorBorder2 = {
    border: '3px solid #EDECE8',
  }

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`)
  }

  function log(e) {
    console.log(e)
  }

  function preventDefault(e) {
    e.preventDefault()
    console.log('Clicked! But prevent default.')
  }

  return (
    <>
      <div
        className="e_filterText"
        onClick={() => setViewFilter(1)}
        style={viewFilter === 1 ? filterTextShow : filterTextHide}
      >
        <p>FILTER</p>
      </div>
      <div
        className="sidebar"
        style={viewFilter === 1 ? sidebarShow : sidebarHide}
      >
        <div
          className="sidebarContent"
          style={viewFilter === 1 ? sidebarContentShow : sidebarContentHide}
        >
          <div className="justify-content-end">
            <p id="close" onClick={() => setViewFilter(0)}>
              close
            </p>

            <input type="text" className="filterSearch" placeholder="SEARCH" />

            <p className="clearFilter">Restart your filter</p>
            <div className="filterTag">
              {/* {category.map((item, index) => {
                return (
                  <Tag
                    closable
                    key={index}
                    onClose={log} */}
              {/* //   onClose={(e) => { */}
              {/* //     let newCate = category.filter((el) => { */}
              {/* //       return el !== item
                    //     })
                    //     setCategory(newCate)
                    //   }}
                  >
                    {item}
                  </Tag>
                )
              })}
              {chairSeat.map((item, index) => {
                return (
                  <Tag closable key={index} onClose={log}>
                    {item}
                  </Tag>
                )
              })}
              {chairColor.map((item, index) => {
                return (
                  <Tag closable key={index} onClose={log}>
                    {item}
                  </Tag>
                )
              })} */}
              {/* <Tag closable onClose={log}>
                白色
              </Tag>

              <Tag closable onClose={log}>
                單椅
              </Tag>
              <Tag closable onClose={preventDefault}>
                木頭
              </Tag> */}
            </div>
          </div>

          <div className="refinement seats  " data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div
                className="plus d-flex justify-content-between"
                onClick={() => {
                  setViewSpread1(!viewSpread1)
                  setViewSpread(false)
                  setViewSpread2(false)
                  setViewSpread3(false)
                  setViewSpread4(false)
                }}
              >
                <div className="refinement-title ">產品類別</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats1"
              id="seats1"
              aria-hidden="false"
              style={viewSpread1 ? sidebarContentShow : sidebarContentHide}
            >
              <Checkbox
                onChange={() => {
                  if (category.indexOf('chair') !== -1) {
                    let newCate = category.filter((item) => {
                      return item !== 'chair'
                    })
                    setCategory(newCate)
                  } else {
                    setCategory(['chair', ...category])
                  }
                }}
                style={{ display: 'block', marginLeft: 0 }}
              >
                單椅
              </Checkbox>
              <Checkbox
                onChange={() => {
                  if (category.indexOf('armchair') !== -1) {
                    let newCate = category.filter((item) => {
                      return item !== 'armchair'
                    })
                    setCategory(newCate)
                  } else {
                    setCategory(['armchair', ...category])
                  }
                }}
                style={{ display: 'block', marginLeft: 0 }}
              >
                扶手椅
              </Checkbox>
              <Checkbox
                onChange={() => {
                  if (category.indexOf('dining') !== -1) {
                    let newCate = category.filter((item) => {
                      return item !== 'dining'
                    })
                    setCategory(newCate)
                  } else {
                    setCategory(['dining', ...category])
                  }
                }}
                style={{ display: 'block', marginLeft: 0 }}
              >
                餐椅
              </Checkbox>
              <Checkbox
                onChange={() => {
                  if (category.indexOf('lounge') !== -1) {
                    let newCate = category.filter((item) => {
                      return item !== 'lounge'
                    })
                    setCategory(newCate)
                  } else {
                    setCategory(['lounge', ...category])
                  }
                }}
                style={{ display: 'block', marginLeft: 0 }}
              >
                沙發椅
              </Checkbox>
              <Checkbox
                onChange={() => {
                  if (category.indexOf('stool') !== -1) {
                    let newCate = category.filter((item) => {
                      return item !== 'stool'
                    })
                    setCategory(newCate)
                  } else {
                    setCategory(['stool', ...category])
                  }
                }}
                style={{ display: 'block', marginLeft: 0 }}
              >
                吧台椅
              </Checkbox>
            </ul>
          </div>

          <div className="refinement seats  " data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div
                className="plus d-flex justify-content-between"
                onClick={() => {
                  setViewSpread(!viewSpread)
                  setViewSpread1(false)
                  setViewSpread2(false)
                  setViewSpread3(false)
                  setViewSpread4(false)
                }}
              >
                <div className="refinement-title">產品材質</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats1"
              id="seats1"
              aria-hidden="false"
              style={viewSpread ? sidebarContentShow : sidebarContentHide}
            >
              <Checkbox
                onChange={() => {
                  if (chairSeat.indexOf('皮革') !== -1) {
                    let newCate = chairSeat.filter((item) => {
                      return item !== '皮革'
                    })
                    setChairSeat(newCate)
                  } else {
                    setChairSeat(['皮革', ...chairSeat])
                  }
                }}
                style={{ display: 'block', marginLeft: 0 }}
              >
                皮革
              </Checkbox>
              <Checkbox
                onChange={() => {
                  if (chairSeat.indexOf('布料') !== -1) {
                    let newCate = chairSeat.filter((item) => {
                      return item !== '布料'
                    })
                    setChairSeat(newCate)
                  } else {
                    setChairSeat(['布料', ...chairSeat])
                  }
                }}
                style={{ display: 'block', marginLeft: 0 }}
              >
                布料
              </Checkbox>
              <Checkbox
                onChange={() => {
                  if (chairSeat.indexOf('藤編') !== -1) {
                    let newCate = chairSeat.filter((item) => {
                      return item !== '藤編'
                    })
                    setChairSeat(newCate)
                  } else {
                    setChairSeat(['藤編', ...chairSeat])
                  }
                }}
                style={{ display: 'block', marginLeft: 0 }}
              >
                藤編
              </Checkbox>
              <Checkbox
                onChange={() => {
                  if (chairSeat.indexOf('木頭') !== -1) {
                    let newCate = chairSeat.filter((item) => {
                      return item !== '木頭'
                    })
                    setChairSeat(newCate)
                  } else {
                    setChairSeat(['木頭', ...chairSeat])
                  }
                }}
                style={{ display: 'block', marginLeft: 0 }}
              >
                木頭
              </Checkbox>
              <Checkbox
                onChange={() => {
                  if (chairSeat.indexOf('塑膠') !== -1) {
                    let newCate = chairSeat.filter((item) => {
                      return item !== '塑膠'
                    })
                    setChairSeat(newCate)
                  } else {
                    setChairSeat(['塑膠', ...chairSeat])
                  }
                }}
                style={{ display: 'block', marginLeft: 0 }}
              >
                塑膠
              </Checkbox>
            </ul>
          </div>

          <div className="refinement seats  " data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div
                className="plus d-flex justify-content-between"
                onClick={() => {
                  setViewSpread2(!viewSpread2)
                  setViewSpread(false)
                  setViewSpread1(false)
                  setViewSpread3(false)
                  setViewSpread4(false)
                }}
              >
                <div className="refinement-title ">顏色</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats2"
              id="seats2"
              aria-hidden="false"
              style={viewSpread2 ? sidebarContentShow : sidebarContentHide}
            >
              <div className="d-flex">
                <div
                  className="circleColor"
                  onClick={() => {
                    if (chairColor.indexOf('白') !== -1) {
                      let newCate = chairColor.filter((item) => {
                        return item !== '白'
                      })
                      setChairColor(newCate)
                    } else {
                      if (chairColor.length) {
                        setChairColor(['白', ...chairColor])
                      } else {
                        setChairColor(['白'])
                      }
                    }
                  }}
                  // style={chairColor.indexOf('白') !== -1 ? colorBorder : ''}
                ></div>
                <div
                  className="circleColor"
                  style={{ backgroundColor: '#C9B7A0' }}
                  onClick={() => {
                    if (chairColor.indexOf('米') !== -1) {
                      let newCate = chairColor.filter((item) => {
                        return item !== '米'
                      })
                      setChairColor(newCate)
                    } else {
                      setChairColor(['米', ...chairColor])
                    }
                  }}
                  // style={chairColor.includes('米') !== -1 ? colorBorder2 : ''}
                ></div>
                <div
                  className="circleColor"
                  style={{ backgroundColor: '#C5872D' }}
                  onClick={() => {
                    if (chairColor.indexOf('橘') !== -1) {
                      let newCate = chairColor.filter((item) => {
                        return item !== '橘'
                      })
                      setChairColor(newCate)
                    } else {
                      setChairColor(['橘', ...chairColor])
                    }
                  }}
                  // style={chairColor.includes('橘') !== -1 ? colorBorder2 : ''}
                ></div>
                <div
                  className="circleColor"
                  style={{ backgroundColor: '#7B0318' }}
                ></div>
              </div>
              <div className="d-flex">
                <div
                  className="circleColor"
                  style={{ backgroundColor: '#432601' }}
                ></div>
                <div
                  className="circleColor"
                  style={{ backgroundColor: '#214F3D' }}
                ></div>
                <div
                  className="circleColor"
                  style={{ backgroundColor: '#737272' }}
                ></div>
                <div
                  className="circleColor"
                  style={{ backgroundColor: '#000000' }}
                ></div>
              </div>
            </ul>
          </div>
          <div className="refinement seats  " data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div
                className="plus d-flex justify-content-between"
                onClick={() => {
                  setViewSpread3(!viewSpread3)
                  setViewSpread(false)
                  setViewSpread1(false)
                  setViewSpread2(false)
                  setViewSpread4(false)
                }}
              >
                <div className="refinement-title ">價格</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>

            <ul
              className="refinement-list scrollable seats1"
              id="seats2"
              aria-hidden="false"
              style={viewSpread3 ? sidebarContentShow : sidebarContentHide}
            >
              <IntegerStep style={{ margin: 'auto' }} />

              <li data-refinement-value="4">
                <a className="refinement-link" rel="nofollow" href="#">
                  3000以下
                </a>
              </li>
              <li data-refinement-value="6">
                <a className="refinement-link" rel="nofollow" href="#">
                  3000-4999
                </a>
              </li>
              <li data-refinement-value="8">
                <a className="refinement-link" rel="nofollow" href="#">
                  5000-6999
                </a>
              </li>
              <li data-refinement-value="10">
                <a className="refinement-link" rel="nofollow" href="#">
                  7000-8999
                </a>
              </li>
              <li data-refinement-value="12">
                <a className="refinement-link" rel="nofollow" href="">
                  9000以上
                </a>
              </li>
            </ul>
          </div>

          <div className="refinement seats  " data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div
                className="plus d-flex justify-content-between"
                onClick={() => {
                  setViewSpread1(false)
                  setViewSpread(false)
                  setViewSpread2(false)
                  setViewSpread3(false)
                  setViewSpread4(!viewSpread4)
                }}
              >
                <div className="refinement-title ">排列順序</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats1"
              id="seats1"
              aria-hidden="false"
              style={viewSpread4 ? sidebarContentShow : sidebarContentHide}
            >
              <Checkbox
                onChange={onChange}
                style={{ display: 'block', marginLeft: 0 }}
              >
                單椅
              </Checkbox>
              <Checkbox
                onChange={onChange}
                style={{ display: 'block', marginLeft: 0 }}
              >
                扶手椅
              </Checkbox>
              <Checkbox
                onChange={onChange}
                style={{ display: 'block', marginLeft: 0 }}
              >
                餐椅
              </Checkbox>
              <Checkbox
                onChange={onChange}
                style={{ display: 'block', marginLeft: 0 }}
              >
                沙發椅
              </Checkbox>
              <Checkbox
                onChange={onChange}
                style={{ display: 'block', marginLeft: 0 }}
              >
                吧台椅
              </Checkbox>
            </ul>
          </div>

          <button
            className="searchButton"
            onClick={() => {
              getFilterFromSQL()
            }}
          >
            SEARCH
          </button>
        </div>
      </div>

      {/* <div className="contextt">
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
      </div> */}
    </>
  )
}

export default FundFilter
