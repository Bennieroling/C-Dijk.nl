import { Card } from "./slots"

const Advies = () => {
  return (
    <section className="p-4 w-full flex items-center justify-center">
        <Card title="Advies">
              <p className="text-lg">
                Mijn organisatieadvies is altijd maatwerk, volledig afgestemd op de unieke behoeften van jouw bedrijf of organisatie, met een persoonlijke benadering.
Ik vind het inspirerend om bedrijven te helpen hun organisatie te structureren, of het nu gaat om start-ups die net van de grond komen of gevestigde bedrijven die door een groeifase gaan.
              </p>
              <p className="text-lg">
               Ik ondersteun graag bij diverse organisatievraagstukken, zoals:
              </p>
              <ul className="px-4">
                <li>Management- en bedrijfsvoeringadvies</li>
                <li>Optimalisatie van organisatiestructuren</li>
                <li>Governance</li>
                <li>Ontwikkelen en implementeren van nieuwe werkmethodes</li>
                <li>Specifieke organisatieadvies voor start-ups</li>
                <li>Projectmatig werken</li>
                <li>Formuleren van onderzoeksvragen</li>
                <li>Selecteren van software, opstellen van een plan van aanpak en implementatie</li>
              </ul>
          <p className="text-lg">
            Met mijn aanpak help ik jouw bedrijf efficiënt en flexibel te opereren in een veranderende omgeving.
            </p>
            </Card>
    </section>
  )
}

export default Advies
