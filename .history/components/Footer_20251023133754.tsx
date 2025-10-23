"use client";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { PinterestLogo, TiktokLogo, TwitchLogo } from "phosphor-react";
import { FooterSection } from './ui/FooterSection';
import { EmailSubscribeDisplay } from "./ui/EmailSubscribeDisplay";

const Footer = () => {
  return (
    <footer className="px-auto mx-auto pb-10 px-4 md:px-8 pt-20 w-full 
    bg-neutral-950 border-t rounded-t-3xl border-neutral-300"
    >
        <div className="grid grid-cols-1 lg:grid-cols-4 pb-10 w-full px-auto mx-auto
          items-start"
        >
          <div className="order-1 items-start lg:order-4 mb-3 sm:mb-4 md:mb-5">
            <EmailSubscribeDisplay />
          </div>
        
          <div className="order-2 lg:order-1">
            <FooterSection
            title="Customer Support"
            links={[
              { label: 'Licensing', href: '#' },
              { label: 'Contact Us', href: '#' },
              { label: 'Returns & Repairs', href: '#' },
              { label: 'Delivery Information', href: '#' },
              { label: 'Terms & Conditions', href: '#' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'Cookie Preferences', href: '#' },
            ]}
          /></div>
        
          <div className="order-3 lg:order-2">
            <FooterSection
              title="Pocher"
              links={[
                { label: 'Stockists', href: '#' },
                { label: 'About Pocher', href: '#' },
                { label: 'Press', href: '#' },
              ]}
            />
          </div>  
        
          <div className="order-4 lg:order-3">
            <FooterSection
              title="Hornby Hobbies"
              links={[
                { label: 'About Hornby Hobbies', href: '#' },
                { label: 'Modern Slavery Act Transparency Statement', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Investor Relations', href: '#' },
                { label: 'Accessibility Statement', href: '#' },
                { label: 'The WonderWorks', href: '#' },
              ]}
            />
          </div>          
        </div>

      <div className="lg:col-span-3 lg:flex-row lg:space-x-6 
        lg:items-center space-y-4 flex flex-col h-full text-neutral-100 
        w-full lg:border-t lg:border-stone-700 mt-4"
      >   
        <div className="text-neutral-200 uppercase text-xs w-[80vw] 
          flex-wrap inline-flex gap-1 h-fit lg:mt-4"
        >
          <div><p>© Hornby Hobbies Limited 2025 | </p></div> 
          <div><p>Registered Company No. 2065081 | </p></div>
          <div><p>Vat Registered No. GB 445 1860 49 | </p></div>
          <div><p>German WEEE Registration: DE 4702750</p></div>
        </div>

        <div className="flex space-x-6 text-neutral-50">
          <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
          <a href="#" aria-label="Pinterest"><PinterestLogo size={20} /></a>
          <a href="#" aria-label="Twitch"><TwitchLogo size={20} /></a>
          <a href="#" aria-label="Tiktok"><TiktokLogo size={20} /></a>
        </div>
      </div>        

      <p className="text-neutral-400 text-xs mt-10 uppercase">
        Design and code © Richartistique Le Brassus. External media remain property of their respective creators.
      </p>
    </footer>    
  );
};

export default Footer;