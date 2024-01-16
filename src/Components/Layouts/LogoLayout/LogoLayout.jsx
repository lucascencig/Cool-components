import React from 'react'
import s from '../LogoLayout/Styles.module.css'

const LogoLayout = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>COOL</h2>

      <ul className={s.list_ul}>
        <li className={s.list_li_1}>COMPONENTS</li>
        <li className={s.list_li_2}>TEXTS EFFECTS</li>
        <li className={s.list_li_3}>HOVER EFFECTS</li>
      </ul>

    </div>
  )
}

export default LogoLayout