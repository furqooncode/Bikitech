import colors from '../color.jsx';
import VideoPlayer from '../Video.jsx';
import Footer from '../Footer.jsx';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import db from '../lib/util.jsx';
import Head from './Head.jsx';
import { useCounter } from '../Context/counter.jsx';

export function Allmedia(){
  const { incrementCount } = useCounter()
  const { data } = useQuery({
    queryKey: ['woodProduct'],
    queryFn: async () => {
      const res = await db.listDocuments("products");
      return res;
    }
  });

  return(
    <>
      {data?.map((items) => (
        <div
          key={items.id}
          className="w-[320px] lg:w-[400px] p-3 max-h-[600px] rounded-[15px]"
          style={{
            background: colors.proContainer,
          }}
        >
          {/*image*/}
          <div className="w-full h-[350px] rounded-[15px] bg-black/50">
            {items.data.fileType === "image" ? (
              <img
                src={items.data.mainImage}
                alt="image"
                className="w-full h-full object-cover rounded-[15px]"
              />
            ) : (
              <VideoPlayer
                src={items.data.mainImage}
                className="w-full h-full rounded-[15px]"
              />
            )}
          </div>

          {/*Name, price, Description*/}
          <div className="w-full grid">
            <div className="w-full flex justify-between items-center">
              <p
                className="text-xs font-base"
                style={{ color: colors.secondaryText }}
              >
                BikiTech solution
              </p>
              <span
                className="text-xs font-base"
                style={{ color: colors.success }}
              >
                available
              </span>
            </div>

            <div className="w-full grid gap-[2px]">
              <h1
                className="text-xl font-bold"
                style={{ color: colors.primaryText }}
              >
                {items.data.name}
              </h1>

              <span
                className="text-sm font-semibold"
                style={{ color: colors.primaryText }}
              >
                No fixed price
              </span>

              <p
                className="text-xs font-semibold"
                style={{ color: colors.text }}
              >
                {items.data.description}
              </p>
            </div>
          </div>

          {/*buttons*/}
          <div className="w-full flex flex-wrap justify-between items-center mt-2">
      <button className="p-[10px] w-[140px] outline-none text-lg rounded-[12px] font-semibold"
      style={{
        color: colors.text,
        background: colors.accent,
      }}
      onClick={()=>{
        window.open('https://wa.me/07061321970')
        incrementCount("whatsapp")
      }}
      >
 <i className="fa-brands fa-whatsapp"></i>
        Whatsapp</button>
    
      <button className="p-[10px] w-[150px] outline-none rounded-[12px] text-lg font-semibold"
      style={{
        color: colors.text,
        background: colors.deepAccent,
      }}
      onClick={()=>{
  window.location.href = 'tel:07061321970';
  incrementCount("call")
      }}>
      <i className="fa-solid fa-phone"></i>
         Phone</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default function AllProducts(){
  const navigate = useNavigate();

  const { isError, isPending, error } = useQuery({
    queryKey: ['woodProduct'],
    queryFn: async () => {
      const res = await db.listDocuments("products");
      return res;
    }
  });

  if(isPending) return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <p className="text-sm font-semibold text-blue-400">Loading...</p>
    </div>
  )

  if(isError) return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <p className="text-sm font-semibold text-red-400">{error.message}</p>
    </div>
  )

  return(
    <>
     <Head />
 <div className="grid gap-[3px] p-3 mt-[60px]">
        <h3
          className="text-center text-xl font-bold uppercase"
          style={{ color: colors.primaryText }}
        >
          <u>Products</u>
        </h3>

        <h4
          className="text-center text-sm font-semibold"
          style={{ color: colors.secondaryText }}
        >
          Explore our collection of premium-grade timber, carefully sourced and cut to perfection for every build. From rich mahogany to durable marine boards, every piece is hand-selected for superior strength and lasting beauty.
        </h4>

        <div className="w-[100%] flex flex-wrap gap-[8px] items-center justify-center">
          <Allmedia />
        </div>
      </div>

      <Footer />
    </>
  )
}
