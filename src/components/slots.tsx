import { PropsWithChildren } from "react";

export const Card = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="flex h-full min-h-[300px] max-w-lg flex-col gap-4 rounded-xl border shadow-md p-4">
      <h4 className="color-effect text-2xl font-semibold">{title}</h4>
      {children}
    </div>
  );
};

const Slots = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-4 md:flex-row">
      <Card title="Werkervaring">
        
           <ul className="px-4">
                <li>Lid Raad van Toezicht | Stichting | Sinds juli 2021</li>
               Als toezichthouder werk ik nauw samen met het bestuur en collega-toezichthouders, waarbij ik mijn expertise inzet om de organisatie te ondersteunen en de doelstellingen te bewaken.
                <li>Bestuurssecretaris & HR-adviseur | Semi-publieke organisatie | Sinds september 2008 </li>
             Verantwoordelijk voor juridische zaken, facilitaire dienstverlening en IT. Ik ondersteun het bestuur in strategische beslissingen en adviseer op het gebied van HR.
              </ul>
      
        <p className="text-lg">
          Eerdere functies:
        </p>
<ul className="px-4">
                <li>Woningcorporatie</li>
               Diverse functies vervuld, waarbij ik ervaring heb opgedaan in de woningmarkt en het managen van sociale huisvestingsprojecten
                <li>Klinisch chemisch laboratorium</li>
             Werkzaam in verschillende rollen, met focus op organisatie en procesoptimalisatie.
  <li>Grote bank</li>
  Diverse functies binnen de financiële sector, waarbij ik ervaring heb opgedaan in zowel zakelijke dienstverlening als klantbeheer.
              </ul>
        
      </Card>
      <Card title="Ambitie">
        <p className="text-lg">
          Mijn ambitie is om mijn jarenlange ervaring in te zetten om bedrijven, start-ups en mensen verder te helpen. Ik wil hen ondersteunen bij het oplossen van hun uitdagingen en het creëren van een soepelere, efficiëntere werkomgeving. Het geeft me energie om anderen op weg te helpen en processen eenvoudiger te maken, zodat zij succesvol kunnen groeien en ontwikkelen.
        </p>
      </Card>
    </section>
  );
};

export default Slots;
