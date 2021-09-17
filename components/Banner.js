import { useRouter } from "next/router";
import numeral from "numeral";
import Fade from 'react-reveal/Fade';
const Banner = ({ data1 }) => {
    {delete data1.unkonwn}
    const router = useRouter();
    return (
        <div className="grid overflow-x-scroll scrollbar-hide">
            {Object.entries(data1).map(([key, { total, delta, meta }]) => (
                <Fade bottom key={key}>
                <div className="relative p-12 space-x-4 flex  mt-1">
                    <h1 className="absolute -top-2 left-30 text-2xl text-pink-700 ">{key}<span className=" bg-pink-600 rounded-full text-xs text-white px-2 mx-1 cursor-pointer hover:opacity-80" onClick={() => router.push(`/districts/${key}`)}> Districts</span></h1>
    
                    <div className="util">
                    {total ? (<h2 className="text-center text-purple-400 animate-pulse">Active  Cases:<span className="pl-1">{(total.confirmed ? total.confirmed : 0) - (total.recovered ? total.recovered : 0) - (total.deceased ? total.deceased : 0)}</span></h2>) : (<h2 className="text-center text-purple-400 animate-pulse">Active  Cases:<span className="pl-1">0</span></h2>)
                    }

                    {delta ? (<h2 className="text-center text-white">Today Cases:<span className="pl-1">{(delta.confirmed ? delta.confirmed : 0)}</span></h2>) : (<h2 className="text-center text-white">Today Cases:<span className="pl-1">0</span></h2>)}
                    </div>
                    <div className="util">
                    {total && <h2 className="text-center text-red-400">Total Deaths:<span className="pl-1">{total.deceased ? total.deceased : 0}</span></h2>}

                    {delta ? (<h2 className="text-center text-white">Today Deaths:<span className="pl-1">{(delta.deceased ? delta.deceased : 0)}</span></h2>) : (<h2 className="text-center text-white">Today Deaths:<span className="pl-1">0</span></h2>)}
                    </div>
                   
                     
                    <div className="util">
                    <h2 className="text-center text-green-500">Total Vaccine Dose 1:<span className="pl-1">{Math.floor(total.vaccinated1 / meta.population * 100)}%</span></h2>
                    <h3 className="text-white text-center">{numeral(total.vaccinated1).format("0,0")}</h3>
                    </div>
                   
                    <div className="util">
                    <h2 className="text-center text-green-300">Total Vaccine Dose 2:<span className="pl-1">{Math.floor(total.vaccinated2 / meta.population * 100)}%</span></h2>
                    <h3 className="text-white text-center">{numeral(total.vaccinated2).format("0,0")}</h3>
                    </div>
                   
                </div>
                </Fade>
            ))}
        </div>
    )
}

export default Banner;
