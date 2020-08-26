import React from 'react'
import backgroundImg from 'assets/images/background@3x.png'
import { InfoLayout } from 'components/Layouts'
import VideoSection from 'components/Video'
import './Main.scss'
import MainSide from './MainSide'

const Main = ({ InfoMenus, changeMenu, menuIndex, sideMenuIndex, changeSideMenu, SideMenuInfo }) => {
  return (
    <div className={'mainpage'}>
      <div className={'main_container'}>
        <VideoSection />
        <InfoLayout menus={InfoMenus} menuIndex={menuIndex} changeMenu={changeMenu} />
      </div>
      <MainSide sideMenuIndex={sideMenuIndex} changeSideMenu={changeSideMenu} SideMenuInfo={SideMenuInfo} />
      <img src={backgroundImg} className={'background'} alt={'background'} />
    </div>
  )
}

export default Main