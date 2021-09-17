import { useRouter } from "next/router";
import Bounce from 'react-reveal/Bounce';

const Header = ({ data}) => {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-3xl text-pink-600 p-5 cursor-pointer w-40 transition duration-200 ease-in transform hover:opacity-70" onClick={()=>router.push('/')}>COVID19 INDIA</h1>
            <h2 className="text-pink-400 text-center">SEE ALL THE LIVE COVID19 CASES OF INDIA STATES AND DISTRICTS</h2>
            <Bounce right>
            <p className="text-pink-500 text-center">LAST UPDATED: {data.AN.meta.date}  {data.AN.meta.last_updated.slice(11,19)}</p>
            </Bounce>
        </div >
    )
}

export default Header
