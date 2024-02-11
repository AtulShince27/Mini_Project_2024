import groupIcon from '../assets/icons/group_name_bubble.png'
import DropDown from './DropDown'

var showDropList=(id)=>{
    var menu = document.getElementById(id);
    menu.className="show-drop-box";
}

function List() {
    return(
        <div className='list'>
            <div className='list-Item top'>
                <img alt='group-icon' src={groupIcon} />
                CSE Section-A (2021-2025)
                <i onClick={() => showDropList("drop-1")} className="fa-solid fa-ellipsis-vertical options"></i>
                <div id="drop-1" className="hide-drop-box"><DropDown/></div>
            </div>
            <div className='list-Item'>
                <img alt='group-icon' src={groupIcon} />
                CSE Section-B (2021-2025)
                <i className="fa-solid fa-ellipsis-vertical options"></i>
            </div>
            <div className='list-Item'>
                <img alt='group-icon' src={groupIcon} />
                CSE Section-C (2021-2025)
                <i className="fa-solid fa-ellipsis-vertical options"></i>
            </div>
            <div className='list-Item'>
                <img alt='group-icon' src={groupIcon} />
                CS 1604 Formal Language & Automata Theory
                <i className="fa-solid fa-ellipsis-vertical options"></i>
            </div>
            <div className='list-Item'>
                <img alt='group-icon' src={groupIcon} />
                CS 1663 Computer Networks Lab
                <i className="fa-solid fa-ellipsis-vertical options"></i>
            </div>
            <div className='list-Item no-border'>
                <img alt='group-icon' src={groupIcon} />
                CS 1741 Machine Learning
                <i className="fa-solid fa-ellipsis-vertical options"></i>
            </div>
            
        </div>

    )
}

export default List
