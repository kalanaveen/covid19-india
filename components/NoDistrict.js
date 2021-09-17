import numeral from "numeral";
const NoDistrict = ({ data }) => {
     return (
          <div className="p-2 m-1 grid place-items-center gap-2 md:grid-cols-2 xl:gap-8 shadow-sm mt-4 md:p-12">
               <div className="util">
          {data.TT.total?(<h2 className="text-center text-purple-400 animate-pulse">Active  Cases: <span className="pl-1">{numeral((data.TT.total.confirmed?data.TT.total.confirmed: 0) - (data.TT.total.recovered?data.TT.total.recovered: 0) - (data.TT.total.deceased?data.TT.total.deceased: 0)).format("0,0")}</span></h2>): (<h2 className="text-center text-purple-400 animate-pulse">Active  Cases: <span className="pl-1">0</span></h2>)
          }

          {data.TT.delta?(<h2 className="text-center text-white">Today Cases: <span className="pl-1">{numeral((data.TT.delta.confirmed?data.TT.delta.confirmed: 0)).format("0,0")}</span></h2>): (<h2 className="text-center text-blue-600">Today Cases: <span className="pl-1">0</span></h2>)}
               </div>

               <div className="util"
               >
          {data.TT.total && <h2 className="text-center text-red-400 ">Total Deaths: <span className="pl-1">{numeral(data.TT.total.deceased?data.TT.total.deceased: 0).format("0,0")}</span></h2>}

          {data.TT.delta?(<h2 className="text-center text-white">Today Deaths: <span className="pl-1">{numeral((data.TT.delta.deceased?data.TT.delta.deceased: 0)).format("0,0")}</span></h2>): (<h2 className="text-center text-blue-600">Today Deaths: <span className="pl-1">0</span></h2>)}
               </div>

               <div className="util"
               >
               <h2 className="text-center text-green-500">Total Vaccine Dose 1: <span className="pl-1">{Math.floor(data.TT.total.vaccinated1 / data.TT.meta.population * 100)}%</span></h2>
               <h3 className="text-white text-center">{numeral(data.TT.total.vaccinated1).format("0,0")}</h3>
               </div>

               <div className="util"
               >
               <h2 className="text-center text-green-300">Total Vaccine Dose 2: <span className="pl-1">{Math.floor(data.TT.total.vaccinated2 / data.TT.meta.population * 100)}%</span></h2>
               <h3 className="text-white text-center">{numeral(data.TT.total.vaccinated2).format("0,0")}</h3>
               </div>
          </div>

     )
}

export default NoDistrict
