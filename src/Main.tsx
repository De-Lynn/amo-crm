import './scss/Main.scss';

function Main() {
  return (
    <main className='main glass'>
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
  )
}

export default Main