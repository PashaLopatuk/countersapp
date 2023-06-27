import React from 'react'
import s from './Footer.module.scss';
import SvgSelector from '../../../assets/svg/SvgSelector';

const Footer = () => {
  return (
    <footer className={s.footer}>
        <nav className={s.navigation}>
            <ul className={s.navigation__links}>
                <li className={s.navigation__links_item} title='My telegram'>
                    <a href="https://t.me/pashajef" target="_blank">
                        {SvgSelector('telegram')}
                    </a>
                </li>
                <li className={s.navigation__links_item}>
                    <a href="https://github.com/PashaLopatuk" target="_blank">
                        {SvgSelector('github')}
                    </a>
                </li>
                <li className={s.navigation__links_item} style={{color: '#0a66c2'}}>
                    <a href="https://www.linkedin.com/in/pavlo-lopatuk-580928250/" target="_blank">
                        {SvgSelector('linkedin')}
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer
