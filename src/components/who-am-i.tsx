
const WhoAmI = () => {
  return (
    <section>
      <h2 className="color-effect p-8 text-center text-4xl font-bold">Wie ben ik?</h2>
      <p className="color-effect text-center text-lg">En waar sta ik voor?</p>
      <div className={"flex w-full flex-col items-center p-4 lg:flex-row"}>
        <img className="max-h-[600px] w-[500px]" src="/c-dk.jpeg" alt="" />
        <div className={"flex flex-col md:justify-center gap-4 p-4 md:max-h-[600px] md:overflow-scroll"}>
          <p className="text-lg">
            Mijn naam is <span className="color-effect text-xl font-bold">Caroline van Dijk</span> en ik woon in het prachtige, vaak zonnige Den Helder.
          </p>
          <p className="text-lg">
          Met een brede werkervaring in verschillende sectoren, waaronder organisatie, HRM, juridische zaken, facilitair en IT-inrichting, ben ik een echte allrounder. 
          Ik ben analytisch sterk, een doener met een creatieve, oplossingsgerichte instelling, en heb uitstekende communicatieve vaardigheden. 
          Structuur aanbrengen is voor mij vanzelfsprekend, en ik ben politiek en bestuurlijk sensitief.
          </p>
          <p className="text-lg">
          Als mensenmens sta ik bekend om mijn betrouwbaarheid, loyaliteit en eerlijkheid. Met een optimistische instelling en veel empathie kan ik me goed in anderen verplaatsen.
          Pionieren en denken in mogelijkheden geven me energie, en persoonlijke ontwikkeling is voor mij een doorlopend proces.
          In mijn vrije tijd maak ik graag mijn eigen kleding, werk ik aan mijn Italiaanse taalvaardigheid en geniet ik van de natuur, of het nu tijdens een boswandeling is of met een hengel aan het water.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
