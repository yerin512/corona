import { useState, useEffect } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import axios from 'axios';

const Contents = () => {

    // const [confirmedData , setConfirmedData] = useState({})
    // const [quarantinedData , setQuarantinedData] = useState({})
    // const [comparedData, setCompatedData] = useState({}) 

    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr")
    //         makeData(res.data)
    //         // console.log(res);

    //         // const summary = await axios.get('https://api.covid19api.com/total/dayone/country/kr');

    //         console.log(summary);
    //     }
    //     const makeData = (items) => {
    //         const arr = items.reduce((acc, cur) => {               
    //             // console.log(cur)
    //             const currentDate = new Date(cur.Date);
    //             const year = currentDate.getFullYear();
    //             const month = currentDate.getMonth();
    //             const date = currentDate.getDate();
    //             const confirmed = cur.Confirmed;
    //             const active = cur.Active;
    //             const death = cur.Deaths;
    //             const recovered = cur.Recovered;

    //             const findItem = acc.find(a=> a.year === year && a.year === year && a.month === month);

    //             if(!findItem){
    //                 acc.push({year, month, date, confirmed, active, death, recovered})
    //             }

    //             if(findItem && findItem.date < date){
    //                 findItem.active = active;
    //                 findItem.death = death;
    //                 findItem.date = date;
    //                 findItem.year = year;
    //                 findItem.recovered = recovered;
    //                 findItem.confirmed = confirmed;
    //             }
    //             return acc;

    //         }, [])
            
    //         const labels = arr.map(a=> `${a.month + 1}???`);
    //         setConfirmedData({
    //             labels,
    //             datasets:[
    //                 {
    //                     label:"?????? ?????? ?????????",
    //                     backgroundColor:"salmon",
    //                     fill: true,
    //                     data: arr.map(a=>a.confirmed)
    //                 },
    //             ]
    //         })

    //         setQuarantinedData({
    //             labels,
    //             datasets:[
    //                 {
    //                     label:"?????? ????????? ??????",
    //                     borderColor:"salmon",
    //                     fill: false,
    //                     data: arr.map(a=>a.confirmed)
    //                 },
    //             ]
    //         })

    //         const last = arr[arr.length - 1];

    //         setCompatedData({
    //             labels:["?????????", "????????????", "??????"],
    //             datasets:[
    //                 {
    //                     label:"?????? ??????, ??????, ?????? ??????",
    //                     backgroundColor:["#ff3d67", "#059bff", "#ffc233"],
    //                     borderColor:["#ff3d67", "#059bff", "#ffc233"],
    //                     fill: false,
    //                     data: [last.confirmed, last.recovered, last.death]
    //                 },
    //             ]
    //         })


    //     }
        

    //     fetchEvents();
    // },[])



    return (
        <section>
            <h2>?????? ????????? ??????</h2>
            {/* <div className="contents">
                <div>
                    <Bar data={confirmedData} options={
                        { title: { display: true, text: "?????? ????????? ??????", fontSize: '16px' } },
                        { legend: { display: true, position: "bottom" } }
                    }
                    />
                </div>
                <div>
                    <Line data={quarantinedData} options={
                        { title: { display: true, text: "?????? ????????? ??????", fontSize: '16px' } },
                        { legend: { display: true, position: "bottom" } }
                    }
                    />
                </div>
                <div>
                    <Doughnut data={comparedData} options={
                        { title: { display: true, text: `?????? ??????, ??????, ??????(${new Date().getMonth()+1}???)`, fontSize: '16px' } },
                        { legend: { display: true, position: "bottom" } }
                    }
                    />
                </div>
            </div> */}
        </section>
    )
}

export default Contents
