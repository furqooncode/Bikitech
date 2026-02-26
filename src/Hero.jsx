import { motion } from "motion/react";
import colors from './color.jsx';
import hero from './assets/hero.jpg'
export default function Hero(){
  return(
    <div className="relative w-[100%] h-[93vh] grid place-items-center"
    style={{
      backgroundImage: `url(${hero})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="w-[80%] grid place-items-start items-left gap-[3px] p-2">
        
     <motion.h1
     initial={{ opacity: 0, x: -50 }}
     whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay:1.0 }}
      viewport={{ once: true }}
      className="text-left text-3xl font-semibold"
  style={{
    color: colors.primaryText,
      }}>
  Embrace the Warmth of Authentic Wood</motion.h1>
      
      <motion.p 
      initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5, delay:1.2 }}
      viewport={{ once: true }}
      className="text-left text-base font-semibold text-black/70">
        Nature's Finest, Crafted for Your World</motion.p>
      
      <motion.span
      initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:1.4}}
      viewport={{ once: true }}
      className="text-left text-sm font-semibold" style={{
        color: colors.text,
      }}>Discover premium woods sourced with care and transformed into pieces of
      lasting sophistication. From rich hardwoods to exquisite veneers, each
      selection embodies natural warmth, exceptional durability, and refined
      artistry. Elevate your space with materials that blend timeless tradition
      and modern grace.</motion.span>
      
    <div className="flex justify-center items-start gap-3">
      
      <motion.button
      initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.6}}
      viewport={{ once: true }}
      className="w-[170px] p-[10px] border-none outline-none
      font-semibold text-lg rounded-[12px]" 
      style={{
        color: colors.text,
        background: colors.accent,
      }}>Discover now <i className="fa-solid fa-arrow-right"></i></motion.button>
    </div>
    
    </div>
    
    <div className="absolute bottom-[10px] h-[50px] flex justify-center items-center ">
      <button className="w-[60px] h-[60px] bg-black/60 outline-none
      rounded-[50%]"
      style={{
        border:`1px solid ${colors.border}`,
        color: colors.text,
      }}><i className="fas fa-chevron-down"></i></button>
    </div>
    
    </div>
    )
}