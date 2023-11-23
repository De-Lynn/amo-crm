import {ReactComponent as Telegram} from './iconsfont/telegram.svg'
import {ReactComponent as Viber} from './iconsfont/viber.svg'
import {ReactComponent as Whatsapp} from './iconsfont/whatsapp.svg'
import './scss/Footer.scss';

function Footer() {
    return (
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
    )
}

export default Footer