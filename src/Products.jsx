import colors from './color.jsx';
import VideoPlayer from './Video.jsx'
const woods = [
  {
    name: "Mahogany",
    description: "Mahogany is a strong wood known in africa and all over the world, cause it gives quality",
    src : "?",
    type: "image",
  },
  {
    name : "obeche",
    description: "Obeche, obekichi bekeche ,ata kere iyo dun.....hmmm Obeche gangan niyen oo file",
    src: "?",
    type: 'image',
  },
  {
    name: "Review",
    description : "bikitech premium woods usrd to make a facinating and obesses cooling spot, what are you wauting for?",
    src : "?",
    type: "video",
  },
  {
    name: "Review",
    description : "bikitech premium woods usrd to make a facinating and obesses cooling spot, what are you wauting for?",
    src : "?",
    type: "video",
  },
  ]

export function Media(){
  return(
   <>
  {woods.map((items)=> (
    
<div className="w-[320px] lg:w-[400px] p-3 max-h-[600px] rounded-[15px]"
    style={{
      background: colors.proContainer,
    }}>
      {/*image*/}
    <div className="w-full h-[350px] rounded-[15px] bg-black/50">
    {items.type === "image" ? (
      <img
      src={items.src}
      alt="image"
      className="w-full h-full object-center"
      />
    ) :(
      <VideoPlayer 
      src={items.src}
      className="w-full h-full"
      />
    )}
      
    </div>
    
    {/*Name, price , Description*/}
    <div className="w-full grid">
      <div className="w-full flex justify-between items-center">
        <p className="text-xs font-base"
        style={{
          color:colors.secondaryText,
        }}>BikiTech solution</p>
        <span className="text-xs font-base"
        style={{
          color: colors.success,
        }}>available</span>
      </div>
    
    <div className="w-full grid gap-[2px]">
      <h1 className="text-xl font-bold"
      style={{
        color: colors.primaryText,
      }}>{items.name}</h1>
      
      <span className="text-sm font-semibold"
      style={{
        color: colors.primaryText,
      }}>No fixed price</span>
      <p className="text-xs font-semibold"
      style={{
        color: colors.text,
      }}>{items.description}</p>
    </div>
    
    </div>
    
    {/*button*/}
    <div className="w-full flex flex-wrap justify-between items-center">
      
      <button className="p-[10px] w-[140px] outline-none text-lg rounded-[12px] font-semibold"
      style={{
        color: colors.text,
        background: colors.accent,
      }}>Whatsapp</button>
    
      <button className="p-[10px] w-[150px] outline-none rounded-[12px] text-lg font-semibold"
      style={{
        color: colors.text,
        background: colors.deepAccent,
      }}>Phone</button>
    
    </div>
    
    </div>
  )) 
    }
    </>
    )
}

export default function Products(){
  return(
    <div className="grid gap-[3px] p-3">
    <h3
        className="text-center text-xl font-bold uppercase"
        style={{
          color: colors.primaryText,
        }}
      >
        <u>Products</u>
      </h3>

      <h4
        className="text-center text-sm font-semibold"
        style={{
          color: colors.secondaryText,
        }}
      >
        Explore our collection of premium-grade timber, carefully sourced and cut to perfection for every build. From rich mahogany to durable marine boards, every piece is hand-selected for superior strength and lasting beauty."
      </h4>
    
      <div className="w-[100%] flex flex-wrap gap-[8px] items-center
      justify-center ">
        <Media />
      </div>
      
      <div className="h-[50px] flex justify-end items-center">
        <button className="w-[150px] rounded-[15px] p-[7px] outline-none
        text-lg font-semibold bg-black/50"
        style={{
        border:`2px solid ${colors.border}`,
       color: colors.text,
        }}>
          See More<i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
    )
}
