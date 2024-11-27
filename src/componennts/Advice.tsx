import dividerMobile from '../../images/pattern-divider-mobile.svg'
import dividerDesktop from '../../images/pattern-divider-desktop.svg'
import dice from '../../images/icon-dice.svg'

const Advice = () => {
  return (
    <div className="card">
      <p>Advice # 117</p>
      <h2>Don't eat chicken because it is dog.</h2>
      <img className='dividerDesktop' src={dividerDesktop} alt="" />
      <img className='dividerMobile' src={dividerMobile} alt="" />
      <div className='dice'>
        <img src={dice} alt="" />
      </div>
    </div>
  )
}

export default Advice