import { copyrightSign } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
         
          <div className="text-white text-2xl font-montserrat font-bold">R V Engineering</div>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          R V Engineering is engaged in production of Engineering equipments, Hydraulic jacks Hydraulic cylinder power packs, all types of mechanical as well as hydraulic units as per customer’s specification.
          </p>
          <div className='flex items-center gap-5 mt-4 ml-10'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12  rounded-full'
                key={icon.alt}
              >
                <img href="" src={icon.src} alt={icon.alt} width={30} height={24} /> 
                <span className="text-white-400 ml-2 font-montserrat"> 9880975593</span>
              </div>
            ))}
          </div>
        </div>


        

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a target="_blank" href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
