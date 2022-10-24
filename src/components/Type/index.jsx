import "./style.scss"

const Type = (props) => {
  return (
    <div className='type' onClick={() => {props.hideDropDown(); props.hide();}}>
        <div className="margin">
            <div className="switcher">
                <ul>
                    <li>Зургаар</li>
                    <li>Жагсаалтаар</li>
                    <li>Байршлаар</li>
                </ul>
            </div>
            <div className="date" onMouseEnter={props.yesreveal} onMouseLeave={props.noreveal}>
                <span>Огноогоор</span>
                <img src='https://www.unegui.mn/static/images/dropdown_arrow.png' />
                {props.reveal ? 
                <div className="switchdate">
                    <div className="list">
                    <span>Холбогдолтой</span>
                    <span>Огноогоор</span>
                    <span>Хямд нь эхэндээ</span>
                    <span>Үнэтэй нь эхэндээ</span>
                    </div>
                </div> : null}
            </div>
        </div>
    </div>
  )
}

export default Type