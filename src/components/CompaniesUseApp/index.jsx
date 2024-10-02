import React from 'react'
import s from '../CompaniesUseApp/index.module.css'

import { BsBoomboxFill } from "react-icons/bs";
import { BsBootstrapReboot } from "react-icons/bs";
import { BsBox2HeartFill } from "react-icons/bs";
import { BsFillBinocularsFill } from "react-icons/bs";

export default function CompaniesUseApp() {

  return (
    <div className={s.companiesUseAppContainer}>
      <p>100+ Companies useOur App</p>

    <div className={s.companies}>
    <div> <BsBoomboxFill /> <p>logoipsum</p></div>
    <div> <BsBootstrapReboot /> <p>logoipsum</p></div>
    <div> <BsBox2HeartFill /> <p>logoipsum</p></div>
    <div> <BsFillBinocularsFill /> <p>logoipsum</p></div>
    </div>

      </div>
  )
}
