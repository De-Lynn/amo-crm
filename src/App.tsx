import React from 'react';
import './scss/App.scss';
import './scss/icons.scss'
import {ReactComponent as BigRedBall} from './iconsfont/red-ball-big.svg'
import {ReactComponent as SmallRedBall} from './iconsfont/red-ball-small.svg'
import {ReactComponent as RedBall43} from './iconsfont/red-ball-43.svg'
import {ReactComponent as PurpleBall} from './iconsfont/purple-ball.svg'
import {ReactComponent as PurpleBall40} from './iconsfont/purple-ball-40.svg'
import {ReactComponent as LogoEmblem} from './iconsfont/logo-welbex-part1.svg'
import {ReactComponent as LogoText} from './iconsfont/logo-welbex-part2.svg'
import {ReactComponent as Telegram} from './iconsfont/telegram.svg'
import {ReactComponent as Viber} from './iconsfont/viber.svg'
import {ReactComponent as Whatsapp} from './iconsfont/whatsapp.svg'

function App() {
  return (
    <div className='wrapper'>
      {/*-------------- HEADER --------------*/}
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
            <span className='phone'>+7 555 555-55-55</span>

            <div className='messengers'>
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

      {/*-------------- MAIN --------------*/}
      <main className='main glass'> {/*noise*/}
        <div className='main__content _container'>

          <div className='main__left'>
            <div className='left__title'>Зарабатывайте больше</div>
            <div className='left__color'>с WELBEX</div>
            <div className='left__text'>Развиваем и контролируем продажи за вас</div>
          </div>

          <div className='main__right'>

            <div className='right__title'>
                <span className='right__colorless'>Вместе с </span>
                <span className='right__color'>бесплатной консультацией</span>
                <span className='right__colorless'> мы дарим:</span>
            </div>
            
            <div className='right__list'>
              <div className='list__item'>
                <div className='item__title'>Виджеты</div>
                <div className='item__text'>30 готовых решений</div>
              </div>
              <div className='list__item'>
                <div className='item__title'>Dashboard</div>
                <div className='item__text'>с показателями вашего бизнеса</div>
              </div>
              <div className='list__item'>
                <div className='item__title'>Skype Аудит</div>
                <div className='item__text'>отдела продаж <br /> и CRM системы</div>
              </div>
              <div className='list__item'>
                <div className='item__title'>35 дней</div>
                <div className='item__text'>использования CRM</div>
              </div>
            </div>

            <div className='right__list mobile'>
              <div className='list__item'>
                <span className='item__line'></span>
                <div className='item__title'>Skype аудит</div>
              </div>
              <div className='list__item'>
              <span className='item__line'></span>
                <div className='item__title'>30 виджетов</div>
              </div>
              <div className='list__item'>
              <span className='item__line'></span>
                <div className='item__title'>Dashboard</div>
              </div>
              <div className='list__item'>
              <span className='item__line'></span>
                <div className='item__title'>Месяц аmoCRM</div>
              </div>
            </div>

            <button className='right__button'>Получить консультацию</button>
          </div>

        </div>
      </main>

      {/*-------------- FOOTER --------------*/}
      <footer className='footer'>
        <div className='footer__content _container'>

          <div className='footer__about'>
            <div className='footer__title'>О компании</div>

            <div className='footer__list'>
              <div className='list__item'>Партнёрская программа</div>
              <div className='list__item'>Вакансии</div>
            </div>
          </div>

          <div className='footer__menu'>
            <div className='footer__title'>Меню</div>
            
            <div className='footer__list'>
              <div className='list__item'>Расчёт стоимости</div>
              <div className='list__item'>Кейсы</div>
              <div className='list__item mobile'>Благодарность клиентов</div>
              <div className='list__item'>Услуги</div>
              <div className='list__item'>Благодарственные письма</div>
              <div className='list__item mobile'>Кейсы</div>
              <div className='list__item'>Виджеты</div>
              <div className='list__item'>Сертификаты</div>
              <div className='list__item'>Интеграции</div>
              <div className='list__item'>Блог на Youtube</div>
              <div className='list__item'>Наши клиенты</div>
              <div className='list__item'>Вопрос / Ответ</div>
            </div>
          </div>

          <div className='footer__contacts'>
            <div className='footer__title'>Контакты</div>

            <div className='phone'>+7 555 555-55-55</div>

            <div className='messengers'>
              <Telegram className='item'/>
              <Viber className='item'/>
              <Whatsapp className='item'/>
            </div>

            <div className='address'>Москва, Путевой проезд 3с1, к 902</div>

            <div className='copyright'>©WELBEX 2022. Все права защищены.</div>
            <div className='privacy-policy'>Политика конфиденциальности</div>
          </div>
        </div>
      </footer>

      {/*-------------- BACKGROUND ITEMS --------------*/}
      <span className='red light'/>
      <span className='purple light'/>

      <BigRedBall className='ball red big'/>
      <SmallRedBall className='ball red small'/>
      <PurpleBall className='ball purple'/>

      <RedBall43 className='ball red mobile'/>
      <PurpleBall40 className='ball purple mobile'/>
    </div>
  );
}

export default App;
