import IconMouse from "../icons/scroll";

const Hero = () => {
  const backgroundImageUrl = "/painting.jpg";

  const divStyle = {
    height: "90vh",
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div style={divStyle} className="relative flex items-center justify-center p-4 md:items-end md:justify-start">
        <div className="glass p-8 text-center text-white">
          <h1 className="text-6xl font-bold">
            C~<span className="color-effect font-black">Dijk</span>
          </h1>
          <p className="mt-4 text-2xl">Voor een dijk van een advies</p>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center justify-end gap-4 text-white">
          <IconMouse className="h-6 w-6 fill-white text-white" />
          <p className="text-xl">Scroll naar beneden voor meer</p>
        </div>
      </div>
      <p className="p-4 text-gray-500">
        Als geboren Amsterdamse was de naam van mijn bedrijf snel gevonden. Mijn overleden vader heeft een prachtig
        schilderij gemaakt, waar het beeldmerk van mijn site een deel van is. Op deze manier is hij extra aan mij
        verbonden.
      </p>
    </>
  );
};

export default Hero;
