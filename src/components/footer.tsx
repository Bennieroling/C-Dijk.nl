import IconLinkedin from "../icons/linkedin";
import IconPhone from "../icons/phone";

const Footer = () => {
  return (
    <footer className="mt-16 flex h-[30vh] flex-wrap items-center justify-evenly gap-4 bg-secondary p-4">
      <a className="font-lg flex items-center gap-2 font-black text-primary" href="https://nl.linkedin.com/in/carolinevandijk" target="_blank">
        <IconLinkedin className="w-8" />
        Linkedin
      </a>
     
      <a className="font-lg flex items-center gap-2 font-black text-primary" href="tel:+31610069594">
        <IconPhone className="w-8" />
        +31 (0) 6 10 06 95 94
      </a>
      <p className="font-lg flex items-center gap-2 font-black text-primary">KvK-nummer: 91129966</p>
    </footer>
  );
};

export default Footer;
