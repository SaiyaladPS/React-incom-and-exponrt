import Tiem from "./Tiem";
import './Transaction.css';
// todo props ເອົາຂໍ້ມູນທີ່ສົ່ງມາຈາກ App.js
const Transaction = (props) => {
    // todo ຮັບຂໍ້ມູນ props
    const {item} = props;
    return (
            <div>
                    <ul className="item-list">
                        {/* //todo loop item ທີ່ຮັບຂໍ້ມູນມາຈາກ props ດ້ວຍ map */}
                   {item.map((element)=>{
                    return <Tiem {...element} key = {element.id}/>
                   })}
                    </ul>
            </div>
    )
}

export default Transaction