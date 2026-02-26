import { motion } from "motion/react";
import colors from './color.jsx';
import transport from './assets/transport.jpeg';
import supply from './assets/supply.jpg'
import cutting from './assets/cutting.jpg'
import milling from './assets/milling.jpeg'
import calling from './assets/calling.jpg'
import premium from './assets/premium.jpg'

export function Box({ img, title, icon, description, ref }){
  return(
    <div ref={ref} className="w-[160px] h-[255px] p-2 rounded-[15px] grid gap-[3px]
    overflow-hidden"
    style={{
      background: colors.container,
      border:`1px solid ${colors.border}`,
    }}>
     <div className="w-full h-[100px] rounded-[15px] bg-black/50">
       <img 
       src={img}
       alt="service"
       className="w-full h-full object-center rounded-[15px]"
       />
     </div>
    
    <div className="w-full grid place-items-center items-center gap-[3px]">
      
      <span className="text-2xl w-[50px] h-[50px] bg-black/70 font-bold
      rounded-[50%] flex items-center justify-center"
      style={{
        color: colors.text,
      }}>
        {icon}
        </span>
        
     <h3 className="text-center text-sm font-bold uppercase"
     style={{
       color: colors.primaryText,
     }}>
      {title}
      </h3>
      
      <p className="text-center text-xs font-normal"
      style={{
        color: colors.text,
      }}>
      {description}
      </p>
    </div>
     
    </div>
    )
}

const MotionBox = motion.create(Box);

export default function Service() {
  return (
    <div className="grid p-2 gap-3">
      <h3
        className="text-center text-xl font-bold uppercase"
        style={{
          color: colors.primaryText,
        }}
      >
        <u>Our Services</u>
      </h3>

      <motion.h4
        className="text-center text-sm font-semibold"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35, delay: 0 }}
        style={{
          color: colors.secondaryText,
        }}
      >
        Explore the Services Provided at Biki Tech Dependable Assistance You Can Rely On, Exceptional Timber That Stands the Test of Time, Supporting
        You Fully from Concept to Completion
      </motion.h4>

      <div className="flex flex-wrap justify-center items-center gap-3">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          title="Quality Assurance"
          icon={<i className="fa-solid fa-shield-halved"></i>}
          img={premium}
          description="We hand-select only premium woods for superior strength and lasting durability."
        />

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          title="Transportation"
          icon={<i className="fa-solid fa-truck-fast"></i>}
          img={transport}
          description="Reliable, fast delivery across Lagos and beyond for your convenience."
        />

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.30 }}
          title="Precision Cutting"
          icon={<i className="fa-solid fa-cut"></i>}
          img={cutting}
          description="Accurate custom cuts to exact sizes for your specific project needs."
        />

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.45 }}
          title="Custom Milling"
          icon={<i className="fa-solid fa-screwdriver-wrench"></i>}
          img={milling}
          description="Tailored milling, surfacing, and shaping to fit your exact requirements."
        />

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.60 }}
          title="Expert Advice"
          icon={<i className="fa-solid fa-headset"></i>}
          img={calling}
          description="Personalized guidance from our team to help choose the right timber."
        />

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          title="Consistent Supply"
          icon={<i className="fa-solid fa-boxes-stacked"></i>}
          img={supply}
          description="Steady supply of high-grade beams, boards, and specialty woods year-round."
        />
      </div>
    </div>
  );
}
