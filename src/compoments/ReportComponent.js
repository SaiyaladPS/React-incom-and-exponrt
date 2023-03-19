import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./Report.css";
            /* //! ຮັບເອົາຂໍ້ມູນມາຈາກ App.js ທີ່ເປັນຂໍ້ມູນກາງທີ່ສາມາດດືງມາໄດ້ */
const Totoal = () => {
    // todo ຕົວທີ່ ຕຶມຈຸດໃສເລກຫຼັກຮ້ອຍ
    const formatNumber = (number)=> {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const {income,expense} = useContext(DataContext)
    return(
        <div>
        <h4> ຍອດຄົງເຫຼືອ (ກີບ)</h4>
        <h1>{formatNumber((income-Math.abs(expense)).toFixed(2))}</h1>
        <div className="report-container">
            <div>
                <h4>ລາຍຮັບ :</h4>
                <p className="report income">{formatNumber((income).toFixed(2))}</p>
            </div>
            <div>
                <h4>ລາຍຈ່າຍ :</h4>
                <p className="report expense">{formatNumber((expense).toFixed(2))}</p>
            </div>
        </div>
        </div>
    )
}

export default Totoal