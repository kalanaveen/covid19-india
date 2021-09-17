import Head from 'next/head'
import { useRouter } from 'next/router';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const districts = ({ data }) => {
    const data1 = Object.assign({},data)
    let newArr = ['Andaman Nicobar','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar' ,'Chandigarh','Chhattisgarh','Delhi','Dadra and Nagar Haveli','Goa','Gujarat','Himachal Pradesh','Haryana','Jharkhand','Jammu and Kashmir','Karnataka','Kerala','Leh','Lakshadweep','Maharashtra','Meghalaya','Manipur','Madhya Pradesh','Mizoram','Nagaland','Odisha','Punjab','Puducherry','Rajasthan','Sikkim','Telangana','Tamil Nadu','Tripura','unkonwn','Uttar Pradesh','Uttarakhand','West Bengal'];

    const replaceKeys = (newArr,data1) =>{
        const keys = Object.keys(data1);
        const res = [];
        for(let a in newArr){
            res[newArr[a]] = data1[keys[a]];
            data1[newArr[a]] = data1[keys[a]];
            delete data1[keys[a]];
        };
    };
    replaceKeys(newArr,data1);
    const router = useRouter();

    return (
        <div> 
            <Head>
                <title>Covid19 India-{router.query.key}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="">
                <Header data={data}/>
                <h2 className='text-center text-2xl mt-10 text-yellow-600 sm:text-3xl'>Showing Result of {router.query.key}</h2>
                 <Content data1 ={data1}/>
                <Footer/>
            </div>
        </div>
    )
}

export default districts;

export async function getServerSideProps(context) {
    const data = await fetch("https://data.covid19india.org/v4/min/data.min.json").then((res) => res.json());

    return {
        props: {
            data,
        },
    }
}
