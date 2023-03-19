import { useEffect, useState } from "react";
import { v4 } from "uuid";
import "./FormCom.css";
const FormCom = (props) => {
    // todo const[ຊື່ທີ່ດືງໄປໃຊ້ງານ, ຟັງຊັນເພືອປ່່ຽນແປງຂໍ້ມູນ] = useState(ຂໍ້ມູນເລິ່ມຕົ້ນ)
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState(0);
    // todo ຮັບຄ່າເປັນເຊັກຄ່າວ່າງ ຂອງ title ແລະ amount
    const [check,setcheck] = useState(false);
    const [checkClass,setClass] = useState('false');
     const showTitle = (eve) => {
        // todo ກຳຂໍ້ມູນຈາກແບບຟອມເກັບລົງໄປໃນ ສະເຕກ
        setTitle(eve.target.value)
     }
     const showQty = (eve) => {
        setAmount(eve.target.value)
     }
     // todo ເມືອມີການກົດເພິ່ມຂໍ້ມູນ
     const saveItem = (eve) => {
        eve.preventDefault();
        // todo ສ້າງ Oj ມາເກັບຂໍ້ມູນຈາກແບບສະເຕກ
        const itemDate = {
            id:v4(),
            title : title,
            amount : Number(amount) // ! ແປງໃຫ້ເປັນຕົວເລກ
        }
        // todo ສົ່ງຂໍ້ມູນໄປຫາ OnAddNewitem
        props.onAdditem(itemDate)
        // todo ລັງຈາກໄປຂໍ້ມູນມາແລ້ວກຳລັງຄ່າໃນ ສະເຕກ ເປັນຄ່າເລິ່ມຕົ້ນ ຫຼຶ ລົບຄ່າເກົ່າອອກ
        setTitle('')
        setAmount(0)
     } 

     // todo ເຊັກຖ້າ title ເປັນຄ່າວາງ ແລະ amount ເປັນເລກ 0 ຈະບໍ່ສາມາດບັນກົດປຸ່ມບັນທືກໄດ້
     useEffect(() => {
        // todo checkInput ມີອົງປະກອບຂອງການປຽນທຽນເງືອນໄຂ ຈຶງ ໄດ້ຂໍ້ມູນມາເປັນ true and false
        const checkInput = title.trim().length>0 && amount !== 0
        setcheck(checkInput)
        const ClassBtn = checkInput ? 'true': 'false'
        setClass(ClassBtn)
     },[title,amount])
    return(
        <div>
            <from>
                <div className="form-control">
                    <label>ຊື່ລາຍການ :</label>
                    <input type="text" onChange={showTitle} value={title}/>    
                </div>
                <div className="form-control">
                    <label>ຈຳນວນເງີນ:</label>
                    <input type="number" onChange={showQty} value={amount} />
                </div>
                <button type="submit" className={checkClass} disabled={!check} onClick={saveItem}>ບັນທືກ</button>
            </from>
        </div>
    )
}

export default FormCom