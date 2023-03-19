import React, { useEffect, useReducer, useState } from "react";
import Transaction from "./compoments/Transaction";
import "./App.css"
import "./compoments/FormCompoments";
import FormCom from "./compoments/FormCompoments";
import DataContext from "./data/DataContext";
import Totoal from "./compoments/ReportComponent";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// todo  ຊື່ໂປຮແກຮມ
const Title = () => <h1 style={{color:'red', textAlign:'center', fontSize:'1.5rem'}}>ແອັບບັນຊີລາຍຮັບ - ລາຍຈ່າຍ</h1>


function App() {
        const dating = {color:'red', textAlign:'center'};
        // ລາຍງານລາຍຮັບ ແລະ ລາຍຈ່າຍ
        const [reportIncome, setReportIncome] = useState(0);
        const [reportExpense, setReportExpense] = useState(0);

            const [items,setitems] = useState([])

            // todo ຮັບຂໍ້ມູນທີ່ສົ່ງມາຈາກ FormCompoments
        const OnAddNewitem = (newItem) => {
                setitems((preveItem) => {
                        return [newItem,...preveItem];
                })
        }
        useEffect(() => {
                // todo ດືງເອົາຄ່າ amount ທີ່ຢູ້ໃນ Items
             const amounts = items.map(items=>items.amount)
             // todo ຖ້າວ່າ element ຕົວໃດທີ່ມີຄ່າຫຼາຍກວ່າ 0 ໃຫ້ດືງມາໃຫ້ງານ ຄື ລາຍໄດ້ reduce ຄື ຜົນລວ່ມທີ່ຢູ່ໃນສະມາໜິກໃນ Array
             const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
             const expense = amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)
             setReportExpense(expense)
             setReportIncome(income)
        },[items],[reportExpense],[reportIncome])

        // todo ການໃຊ້ງານ Reducer
        const [showReport, setReport] = useState(false)
        const reducer = (state,action) => {
                switch(action.type) {
                        case "SHOW" :
                               return setReport(true)
                        case "HIDE" :
                               return setReport(false)
                }
        }
        const [result,dispatch] = useReducer(reducer,showReport);
  return (
// ! ຂໍ້ມູນກາງ
<DataContext.Provider value={
        {
                income : reportIncome,
                expense : reportExpense
        }
}>
{/* // ! Nested Component */}
<div className="container">
        <Title/>
        <p style={dating}>ບັນທືກຂໍ້ມູນບັນຊີໃນແຕ່ລະວັນ</p>
        {/* //todo ຖ້າຈະສະແດງ Totoal showReport ຈະຕ້ອງເປັນ true */}
       
        {/* <button type="button" onClick={()=>dispatch({type:"SHOW"})}>ສະແດງ</button>
        <button type="button" onClick={()=>dispatch({type:"HIDE"})}>ເຊືອງ</button> */}
                <BrowserRouter>
                <div>
                        <ul className="Manu">
                                <li>
                                        <Link to="/insert">ບັນທືກຂໍ້ມູນ</Link>
                                </li>
                                <li>
                                        <Link to="/">ຂໍ້ມູນເພິມຕຶມ</Link>
                                </li>
                        </ul>
                       <Routes>
                       <Route path="/" element={<Totoal/>}></Route>
                        <Route path="/insert" element={<><FormCom onAdditem={OnAddNewitem}/><Transaction item = {items}/></>}>
                                {/* // todo ສົງຂໍ້ມູນ initData ໄປທີ່ Transaction ເພືອທຳການ props*/}
                        </Route>
                       </Routes>
                </div>
                </BrowserRouter>
     
        
</div>
</DataContext.Provider>

    // todo ແບບທີ່1
    // <div>
    //     <h1>ໂປຮມແກຮມບັນຊີລາຍຮັບລາຍຈ່າຍ</h1>
    //     <p>ບັນທືກຂໍ້ມູນບັນຊີໃນແຕ່ລະວັນ</p>
    //     <ul>
    //       <li>ຄ່າເດິນທາງ <span>-200</span></li>
    //       <li>ເງີນເດືອນ <span>2000</span></li>
    //       <li>ຄ່າອາຫານ <span>-500</span></li>
    //     </ul>
    // </div>

    // todo ແບບທີ່ 2
    // <section>
    //         <article>
    //                 <h1>ໂປຮມແກຮມບັນຊີລາຍຮັບລາຍຈ່າຍ</h1>
    //                   <p>ບັນທືກຂໍ້ມູນບັນຊີໃນແຕ່ລະວັນ</p>
    //                       <ul>
    //                             <li>ຄ່າເດິນທາງ <span>-200</span></li>
    //                             <li>ເງີນເດືອນ <span>2000</span></li>
    //                             <li>ຄ່າອາຫານ <span>-500</span></li>
    //                       </ul>
    //         </article>
    // </section>

    // todo   ແບບທີ່ 3
//     <React.Fragment>
//             <article>
                  
//                                       <ul>
//                                               <li>ຄ່າເດິນທາງ <span>-200</span></li>
//                                               <li>ເງີນເດືອນ <span>2000</span></li>
//                                               <li>ຄ່າອາຫານ <span>-500</span></li>
//                                       </ul>
//             </article>
//     </React.Fragment>


  );
}

export default App;
