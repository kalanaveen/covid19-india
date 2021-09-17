import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NoDistrict from '../components/NoDistrict'


export default function Home({ data }) {
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

  return (
    <div>
      <Head>
        <title>Covid19 India</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 w-full">
        <Header data={data}/>
        <h1 className="mt-3 text-3xl text-pink-500 text-center">India Live Cases</h1>
        <NoDistrict data={data}/>
        <h1 className="mt-3 mb-3 text-3xl text-pink-500 text-center">India States Live Cases</h1>
        <Banner data1={data1} />
        <Footer/>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const data = await fetch("https://data.covid19india.org/v4/min/data.min.json").then((res) => res.json());

  return {
    props: {
      data,
    },
  }
}