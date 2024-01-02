import { useState } from "react";
import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          About
          <span className='text-violet-700'> Us </span>
          
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        We would like to introduce as a leading manufacturer and designer of precision machine parts  in Belgaum. Our unit . “R V Engineering” is engaged in production of Engineering equipments, Hydraulic jacks Hydraulic cylinder power packs, all types of mechanical as well as hydraulic units as per customer’s specification, special purpose machines and its spare and we also undertake heavy machining work on our large heavy duty 4 mtr dia  facing lathe  R. V. Engineering is situated at Belgaum about 4 kilo mtrs. From Railway station with 3000 sq. ft. built up area on 9000 sq. ft. area.

        </p>
        {/* <p className='mt-6 lg:max-w-lg info-text'>
        We at R.V. Engineering manufacture all types of hydraulic jacks, Hydraulic machines mechanical products machine components special purpose hydraulic and mechanical machines , Under one roof at the behest of customer. We are specialized in Aero telescopic Hydraulic Jack, Hydraulic operated trolleys, Pneumatic testing panels and all types of ground level equipments for all types of Fighter Aircrafts such as Mig series, Naval Helicopters Su-30 etc
        </p> */}
        <div className='mt-11'>
          <Button onClick={() => handleShowMore()} label='Learn More' />
        </div>
        {
          showMore &&   <p className='mt-6 lg:max-w-lg info-text'>
          We at R.V. Engineering manufacture all types of hydraulic jacks, Hydraulic machines mechanical products machine components special purpose hydraulic and mechanical machines , Under one roof at the behest of customer. We are specialized in Aero telescopic Hydraulic Jack, Hydraulic operated trolleys, Pneumatic testing panels and all types of ground level equipments for all types of Fighter Aircrafts such as Mig series, Naval Helicopters Su-30 etc
          </p>
        }
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
