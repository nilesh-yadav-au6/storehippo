import React from 'react'
import style from "../styles/Sidebar.module.css"
import layout from "../images/layout.png"
import broadcast from "../images/broadcast.png"
import product from "../images/package.png"
import clipboard from "../images/clipboard.png"
import avatar from "../images/avatar.png"
import domain from "../images/domain.png"
import support from "../images/support.png"
import setting from "../images/setting.png"
import mobile from "../images/mobile.png"
import billing from "../images/billing.png"
import logs from "../images/logs.png"
import reports from "../images/reports.png"
import share from "../images/share.png"

import  { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div>
            <div className={style.sidebar}>
          <ul>
            <Link to="/">
            <li className={style.li_tag}>
              <img src={layout} alt="home" /> <small>Dashboard</small>
            </li>
            </Link>

            <Link to="/products">
            <li className={style.li_tag}>
              <img src={product} width='24px' height="24px" alt="home" /> <small>Products</small>
            </li>
            </Link>
            
            <Link to="/marketing">
            <li className={style.li_tag}>
              <img src={broadcast} alt="home" width='24px' height="24px" /> <small>Marketing</small>
            </li>
            </Link>
            <Link to="/orders">
            <li className={style.li_tag}>
              <img src={clipboard} alt="home" /> <small>Orders</small>
            </li>
            </Link>
            <Link to="/users">
            <li className={style.li_tag}>
              <img src={avatar} alt="home" /> <small>Users</small>
            </li>
            </Link>
            <Link to="/sites">
            <li className={style.li_tag}>
              <img src={domain} alt="home" /> <small>Sites</small>
            </li>
            </Link>
            <li className={style.li_tag}>
              <img src={setting} alt="home" />
              <small>Settings</small>
            </li>
            <Link to="/advancesetting">
            <li className={style.li_tag}>
              <img src={setting} alt="home" /> <small>Advance Setting</small>
            </li>
            </Link>
            <Link to="/logs">
            <li className={style.li_tag}>
              <img src={logs} alt="home" width='24px' height="24px" /> <small>Logs</small>
            </li>
            </Link>
            <Link to="/reports">
            <li className={style.li_tag}>
              <img src={reports} alt="home" width='24px' height="24px" /> <small>Reports</small>
            </li>
            </Link>
            <li className={style.li_tag}>
              <img src={avatar} alt="home" /> <small>Sellers</small>
            </li>
            <li className={style.li_tag}>
              <img src={billing} alt="home" width='24px' height="24px" />
              <small>Plans and Billings</small>
            </li>
            <li className={style.li_tag}>
              <img src={mobile} alt="home" width='24px' height="24px" />
              <small>Mobile Apps</small>
            </li>
            <li className={style.li_tag}>
              <img src={share} alt="home" width='24px' height="24px" />
              <small>Refer and Learn</small>
            </li>
            <li className={style.li_tag}>
              <img src={support} alt="home" width='24px' height="24px" />
              <small>Support</small>
            </li>
          </ul>
        </div>
        </div>
    )
}

export default Sidebar
