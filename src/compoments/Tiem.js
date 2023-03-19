import PropTypes from "prop-types";
import './Tiem.css'
const Tiem = (prop) => {
     // todo ຕົວທີ່ ຕຶມຈຸດໃສເລກຫຼັກຮ້ອຍ
     const formatNumber = (number)=> {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const {title, amount} = prop
    // todo ຖ້າຫາກວ່າ ຈຳນວນເງີນຫຼາຍກວ່າ 0 ຈະໄປໃຊ້ class exMoruy ຖ້າຫຼາຍຈະໃຫ້ໃຊ້ class inMoruy ເພືອກຳນົດສີທີ່ຕ່າງກັນ
    const starut = amount < 0 ? "exMoruy" : "inMoruy"
    // todo ເພິ່ມສັນຍາລັກ + ຫຼຶ - 
    const sbool = amount < 0 ? "-" : "+"
    // todo ວິທີ່ການໃຊ້ useContext ສົ່ງຂໍ້ມູນດຽວ
    // const name = useContext(DataContext);
    // todo ວິທີ່ການໃຊ້ useContext ສົ່ງຂໍ້ມູນຫຼາຍຕົວ
    // const {income , expense} = useContext(DataContext);
    return  (
    <div>
        <li className={starut}>{title}<span>{sbool}{formatNumber(Math.abs(amount))}</span></li>
    </div>
    )
}

Tiem.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Tiem