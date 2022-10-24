import "./style.scss"
import Data from "../../data/States.json"


export default function SearchBar(props) {
    return (
        <div className='SearchBar--Container'>
            <div className='SearchBar--Content'>
                <div className="open">
                <div className='SearchBar--Search'>
                    <input className='SearchBar--Input' type="text" placeholder='109,203 Зар байна'></input>
                    <div className='SearchBar--Text' onClick={props.showDropDown}>
                        <p>Бүх байршил
                            <img src='https://www.unegui.mn/static/images/dropdown_arrow.png' />
                        </p>
                        <div>
                            {props.isOpen ?
                                (<div className='test'>
                                {Data.map((item,index) => (
                                    <p key={index}>{item.state}</p>
                                    ))}
                                </div>
                                )
                                : null}
                        </div>
                    </div>
                    <button className='SearchBar--Button'>
                        <img src='https://www.unegui.mn/static/images/search-submit-unegui.png' />
                        Хайх
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}
