import {ReactComponent as LogoEmblem} from './iconsfont/logo-welbex-part1.svg'
import {ReactComponent as LogoText} from './iconsfont/logo-welbex-part2.svg'
import {ReactComponent as Telegram} from './iconsfont/telegram.svg'
import {ReactComponent as Viber} from './iconsfont/viber.svg'
import {ReactComponent as Whatsapp} from './iconsfont/whatsapp.svg'
import './scss/Header.scss';

function Header() {
    return (
        <header className='header'>
            <div className='header__content _container'>

                <div className='header__logo logo'>
                    <LogoEmblem className='logo__item emblem'/>
                    <LogoText className='logo__item text'/>
                </div>

                <div className='header__navigation'>
                    <span className='navigation__item item'>Услуги</span>
                    <span className='navigation__item item'>Виджеты</span>
                    <span className='navigation__item item'>Интеграции</span>
                    <span className='navigation__item item'>Кейсы</span>
                    <span className='navigation__item item'>Сертификаты</span>
                </div>

                <div className='header__contacts'>
                    <span className='contacts__phone'>+7 555 555-55-55</span>

                    <div className='contacts__messengers'>
                    <Telegram className='item'/>
                    <Viber className='item'/>
                    <Whatsapp className='item'/>
                    </div>
                </div>

                <span className='header__description'>
                    крупный интегратор CRM в Росcии и ещё 8 странах
                </span>

            </div>
        </header>
    )
}

export default Header