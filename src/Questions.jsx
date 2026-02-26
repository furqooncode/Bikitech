
import { motion } from "motion/react";
import colors from  './color.jsx';
import { useState } from 'react'

export function AccordionItem({ question, answer, isActive, onToggle, ref }) {
  return (
    <div
      ref={ref}
      className="w-full border-b border-black/30 last:border-b-0"
      style={{ borderColor: 'rgba(0,0,0,0.2)' }}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-4 text-left transition-all hover:bg-gray-50/50"
        aria-expanded={isActive}
        aria-controls={`faq-content-${question.replace(/\s+/g, '-')}`}
        onClick={onToggle}
      >
        <div className="flex-1 pr-4">
          <h3
            className="text-lg font-semibold leading-tight"
            style={{ color: colors.text }}
          >
            {question}
          </h3>

          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: isActive ? '500px' : '0px', 
              opacity: isActive ? 1 : 0,
            }}
          >
            <p id={`faq-content-${question.replace(/\s+/g, '-')}`}
              className="mt-3 ml-3 text-sm leading-relaxed font-semibold"
              style={{ color: colors.primaryText }}
            >
              {answer}
            </p>
          </div>
        </div>

        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 ${
            isActive ? 'rotate-180' : 'bg-transparent'
          }`}
          style={{ color: colors.text }}
        >
          <i className="fas fa-chevron-down text-lg"></i>
        </span>
      </button>
    </div>
  );
}

const MotionAccordion = motion.create(AccordionItem);

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid gap-4 p-4 md:p-6">
      <h3
        className="text-center text-2xl font-bold uppercase"
        style={{ color: colors.primaryText }}
      ><u>
       Frequently Asked?
      </u>
      </h3>

      <h4
        className="text-center text-base md:text-lg font-medium"
        style={{ color: colors.secondaryText }}
      >
        Frequently asked questions from our valued customers about Biki Tech premium wood solutions and services
      </h4>

      <div className="grid gap-2 divide-y divide-gray-200">

        <MotionAccordion
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0 }}
          question="What is Biki Tech focused on?"
          answer="Biki Tech specializes in sourcing, processing, and supplying premium-grade wood materials from high-quality hardwoods to durable specialty boards ensuring exceptional strength, beauty, and long-term performance for every project."
          isActive={activeIndex === 0}
          onToggle={() => toggleItem(0)}
        />

        <MotionAccordion
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          question="What types of wood do you offer?"
          answer="We offer a wide selection including mahogany, pine wood, marine boards, inch marine plywood, particle boards, beams, pallets, and other premium hardwoods and engineered options to suit construction, furniture, and marine needs."
          isActive={activeIndex === 1}
          onToggle={() => toggleItem(1)}
        />

        <MotionAccordion
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.30 }}
          question="How do you ensure the quality of your wood?"
          answer="Every piece at Biki Tech is hand-inspected for grain quality, moisture content, and structural integrity. We prioritize premium sourcing and rigorous checks so your materials resist warping, cracking, and decay over many years."
          isActive={activeIndex === 2}
          onToggle={() => toggleItem(2)}
        />

        <MotionAccordion
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.45 }}
          question="Do you offer custom cutting and milling services?"
          answer="Yes Biki Tech provides precision cutting and custom milling services. We cut to your exact specifications and offer surfacing, shaping, and other machining to save you time and ensure perfect fit for your project."
          isActive={activeIndex === 3}
          onToggle={() => toggleItem(3)}
        />

        <MotionAccordion
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.60 }}
          question="How does transportation and delivery work?"
          answer="We provide fast, reliable transportation and delivery services. Our team handles secure packaging and timely shipping to make sure your premium wood arrives safely and on schedule, no matter the order size."
          isActive={activeIndex === 4}
          onToggle={() => toggleItem(4)}
        />

        <MotionAccordion
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          question="How long does your wood last?"
          answer="Our premium woods are selected for exceptional durability many resist insects, moisture, and wear for decades with proper care. With Biki Tech materials, your builds and furniture maintain strength and beauty over the long term."
          isActive={activeIndex === 5}
          onToggle={() => toggleItem(5)}
        />

        <MotionAccordion
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.90 }}
          question="What if I have a special request or large order?"
          answer="We welcome custom and bulk orders! Contact us with your requirements we maintain steady stock and strong supplier relationships to fulfill special sizes, species, quantities, or finishes efficiently."
          isActive={activeIndex === 6}
          onToggle={() => toggleItem(6)}
        />

      </div>
    </div>
  );
}
