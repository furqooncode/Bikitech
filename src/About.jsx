import Marquee from "react-fast-marquee";
import colors from './color.jsx';
import { motion } from "motion/react";
import tree from './assets/tree.jpeg';
export default function About(){
  return(
    <div>
    <div className="w-full p-3 grid place-items-center items-center gap-3 overflow-hidden">
      <h3 className="font-bold text-xl uppercase" 
      style={{
        color: colors.primaryText,
      }}><u>About us</u></h3>
      <div className="w-full">
        <motion.img
        src={tree}
        alt="logo"
        initial={{ opacity: 0, x: 50 }}
     whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.15, delay: 0.45}}
        className="w-[150px] h-[150px] float-left rounded-[10px] object-center
        mr-[3px] mb-[-2px]"
        />
        
     <motion.h4 
     className="text-lg font-semibold"
     initial={{ opacity: 0, x: -50 }}
     whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.15, delay:0.45}}
     style={{
       color: colors.secondaryText,
     }}>Premium Timber That Lasts a Lifetime</motion.h4>
     
    <motion.span 
    className="text-sm font-normal"
    initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15, delay:0.45}}
style={{
  color: colors.text,
}}>We deliver only top-grade woods built for enduring strength and timeless beauty.
Every piece is hand-selected and rigorously checked for flawless grain, perfect
balance, and maximum resistance to wear, warping, or decay,  so your projects stay
strong and stunning for decades.
Our premium mahogany sets the standard: dense, resilient, naturally
insect-resistant, and richly toned for lasting elegance in any build.
</motion.span><br
/>
      <motion.span
      className="text-sm font-semibold"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15, delay:0.45}}
style={{
  color: colors.secondaryText,
}}>Invest in quality that endures. Build with confidence.</motion.span>
      </div>
      </div>
    
 <div className="w-full p-2 h-[30px] bg-black/50 overflow-hidden">
    <Marquee>
      
  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.primaryText,
  }}>• BikiTech</p>
  
  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.text,
  }}>• Mahogany</p>
  
  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.primaryText,
  }}>• BikiTech</p>
  
  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.text,
  }}>• Pine Wood</p>

  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.primaryText,
  }}>• BikiTech</p>
  
  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.text,
  }}>• Particle Board</p>

  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.primaryText,
  }}>• BikiTech</p>
  
  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.text,
  }}>• Marine Board</p>

  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.primaryText,
  }}>• BikiTech</p>
  
  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.text,
  }}>• Inch Marine</p>

  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.primaryText,
  }}>• BikiTech</p>
  
  <p className="text-sm font-semibold uppercase mx-3"
  style={{
    color: colors.text,
  }}>• Beam</p>

</Marquee>
</div>

    
    </div>
    )
}
