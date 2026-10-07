import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { SERVICES, SITE } from "../data/site";
import { Button, Heading } from "./ui";
const days = Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()+i);return d;});
const times = ["Morning","Midday","Afternoon","Evening"];
export default function Booking() {
  const [step,setStep]=useState(0);
  const [s,setS]=useState({service:"",barber:"Any available barber",date:"",time:""});
  const labels=["Service","Barber","Date","Time","Confirm"];
  const opts:string[][]=[SERVICES.map(x=>x.name),["Any available barber"],days.map(d=>d.toDateString().slice(0,10)),times];
  const keys=["service","barber","date","time"] as const;
  const pick=(v:string)=>{setS({...s,[keys[step]]:v});setStep(step+1);};
  return (
    <section id="booking" className="mx-auto max-w-6xl px-5 py-28">
      <Heading title="Your next fresh cut starts here." sub="Choose your service and reserve your chair." />
      <div className="border border-line bg-coal p-6 sm:p-10">
        <ol className="mb-8 flex gap-2 overflow-x-auto" aria-label="Booking steps">
          {labels.map((l,i)=>(
            <li key={l}><button onClick={()=>i<=step&&setStep(i)} aria-current={i===step} className={`flex min-h-11 items-center gap-2 border px-4 text-sm ${i===step?"border-gold text-gold":i<step?"border-line text-bone":"border-line text-bone/40"}`}>
              {i<step?<Check size={14}/>:i+1}. {l}</button></li>))}
        </ol>
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:.3}}>
            {step<4 ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {opts[step].map(o=>(
                  <button key={o} onClick={()=>pick(o)} className="min-h-14 border border-line px-5 text-left transition-colors hover:border-gold hover:text-gold">{o}</button>))}
              </div>
            ) : (
              <div>
                <dl className="mb-8 grid gap-3 sm:grid-cols-2">
                  {Object.entries(s).map(([k,v])=>(<div key={k} className="border-b border-line pb-3"><dt className="text-sm capitalize text-bone/50">{k}</dt><dd className="text-lg">{v||"—"}</dd></div>))}
                </dl>
                <p className="mb-6 max-w-xl text-sm text-bone/60">This is a preview. Final times and availability are confirmed on Booksy, where you complete your booking.</p>
                <Button href={SITE.booksy}>Book on Booksy</Button>
              </div>)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
