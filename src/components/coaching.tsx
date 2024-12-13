import { Card } from "./slots";

const Coaching = () => {
  return (
    <section className="flex w-full items-center justify-center p-4">
      <Card title="Coaching">
        <p className="text-lg">
          Organisatieadvies is maatwerk, gericht op de specifieke vraag van bedrijf of organisatie, met een persoonlijke
          insteek.
        </p>
        <p className="text-lg">
          Ik werk graag aan het structureren van een organisatie, voor beginnende bedrijven/start-ups of als men flinke
          groei doormaakt. Help graag bedrijven met organisatievraagstukken op het gebied van
        </p>
        <ul className="px-4">
          <li>Advies management en bedrijfsvoering</li>
          <li>Organisatiestructuur</li>
          <li>Governance</li>
          <li>Bedenken en implementeren nieuwe werkwijzen</li>
          <li>Organisatie advies start-ups</li>
          <li>Projectmatig werken</li>
          <li>Onderzoeksvragen formuleren.</li>
          <li>Software uitzoeken, plan van aanpak schrijven en implementeren.</li>
        </ul>
      </Card>
    </section>
  );
};

export default Coaching;
