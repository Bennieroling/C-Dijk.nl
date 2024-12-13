import { Card } from "./slots";

const Hr = () => {
  return (
    <section className="w-full flex items-center justify-center p-4">
      <Card title="HR-advies op maat">
        <p className="text-lg">
          Als HR-adviseur staat zowel de medewerker als het bedrijf centraal. Ik heb uitgebreide ervaring met het volledige spectrum van personeelszorg, beleid en juridische vraagstukken.
          De mensen binnen de organisatie vormen altijd mijn vertrekpunt, zonder de bedrijfsbelangen uit het oog te verliezen.
        </p>
        <p className="text-lg">
          Ik bied ondersteuning op gebieden zoals:{" "}
        </p>
        <ul className="px-4">
                <li>HR-tools zoals de FG-cyclus, functiebeschrijvingen, arbeidsrechtelijke zaken en personeelsreglementen of -handboeken</li>
                <li>Arbo, verzuimbegeleiding, vertrouwenspersoon, RI&E, het opstellen van een plan van aanpak, en werkplekinrichting.</li>
          </ul>
        <p className="text-lg">
          Met deze aanpak zorg ik ervoor dat mens en organisatie optimaal kunnen samenwerken.
        </p>
      </Card>
    </section>
  );
};

export default Hr;
