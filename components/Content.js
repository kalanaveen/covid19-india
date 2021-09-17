import numeral from "numeral";
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';
const Content = ({data1}) => {
    {delete data1.unkonwn}
    const router = useRouter();
    const route =()=>(router.query.key);
    const index = Object.keys(data1).indexOf(route());
    const district = Object.entries(data1)[index][1].districts
    return (
        <div className="p-5 m-1 grid place-items-center gap-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:p-20 xl:gap-8 shadow-2xl mt-4">
           {Object.entries(district).map(([key,{delta,total,meta}])=>(
            <Fade bottom key={key}>
            <div className="p-12">
                    <h1 className="text-2xl text-pink-700 text-center mx-auto mb-2">{key}</h1>
                    <div className="util">
                    {total?(<h2 className="text-center text-purple-400 animate-pulse ">Active  Cases:<span className="pl-1">{(total.confirmed?total.confirmed:0) - (total.recovered?total.recovered:0) - (total.deceased?total.deceased:0)}</span></h2>):(<h2 className="text-center text-purple-400 animate-pulse">Active Cases:<span className="pl-1">0</span></h2>  )
                    }
                    {delta ? (<h2 className="text-center text-white">Today Cases:<span className="pl-1">{(delta.confirmed ? delta.confirmed : 0)}</span></h2>) : (<h2 className="text-center text-white">Today Cases:<span className="pl-1">0</span></h2>)}
                    </div>
                    
                    <div className="util">
                    {total.deceased ? (<h2 className="text-center text-red-400 ">Total Deaths:<span className="pl-1">{total.deceased}</span></h2>):(<h2 className="text-center text-red-400 ">Total Deaths:<span className="pl-1">0</span></h2>)}

                    {delta?(<h2 className="text-center text-white">Today Deaths:<span className="pl-1">{(delta.deceased?delta.deceased:0)}</span></h2>):(<h2 className="text-center text-white">Today Deaths:<span className="pl-1">0</span></h2>)}
                    </div>

                    <div className="util">
                    {meta?(meta.population?(<h2 className="text-center text-green-500">Total Vaccine Dose 1:<span className="pl-1">{Math.floor(total.vaccinated1/meta.population *100)}%</span></h2>):(<h2 className="text-center text-green-500">Total Vaccine Dose 1:<span className="pl-1">{total.vaccinated1}</span></h2>)):(<h2 className="text-center text-green-500">Total Vaccine Dose 1:<span className="pl-1">{total.vaccinated1}</span></h2>)}
                    <h3 className="text-white text-center">{numeral(total.vaccinated1).format("0,0")}</h3>
                    </div>

                    <div className="util">
                    {meta?(meta.population?(<h2 className="text-center text-green-300">Total Vaccine Dose 2:<span className="pl-1">{Math.floor(total.vaccinated2/meta.population *100)}%</span></h2>):(<h2 className="text-center text-green-300">Total Vaccine Dose 2:<span className="pl-1">{total.vaccinated2}</span></h2>)):(<h2 className="text-center text-green-300">Total Vaccine Dose 2:<span className="pl-1">{total.vaccinated2}</span></h2>)}
                    <h3 className="text-white text-center">{numeral(total.vaccinated2).format("0,0")}</h3>
                    </div>
                </div>
                </Fade>
           ))}

        </div>
    )
}

export default Content
