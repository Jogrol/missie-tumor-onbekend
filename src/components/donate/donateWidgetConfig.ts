export enum DonationTypeEnum {
  None,
  Form,
  Frequently,
  Email,
}
export interface DonateOption {
  title: string
  description: string
  isActive: boolean
  donationType: DonationTypeEnum
}

const donateWidgetConfig = [
  {
    title: "Eenmalige donatie",
    description:
      "Met een algemene eenmallige donatie aan Missie Tumor Onbekend draag je bij aan algehele zorgverbeteringen voor PTO-patiënten in hun strijd tegen de onbekende primaire tumor. Doneer snel en gemakkelijk online via iDeal.",

    isActive: true,
    donationType: DonationTypeEnum.Form,
  },
  {
    title: "Periodieke donatie en schenking",
    description:
      "Wil je Missie Tumor Onbekend structureel en duurzaam ondersteunen, vul dan hier ons donatie formulier in.",

    isActive: false,
    donationType: DonationTypeEnum.Frequently,
  },
  {
    title: "Nalatenschap",
    description:
      "Vindt u het belangrijk dat er ook na uw overlijden doorgewerkt wordt aan baanbrekend onderzoek en innovatie voor PTO-patiënten, op dat deze groep een grotere kans op leven krijgt? Dan kunt u Missie Tumor Onbekend opnemen in uw testament.",

    isActive: false,
    donationType: DonationTypeEnum.Email,
  },
  {
    title: "Kom zelf in actie",
    description:
      "Wil jij ook in actie komen voor Missie Tumor Onbekend? Dat kan, neem hiervoor contact met ons op via het onderstaande e-mailadres. Bijvoorbeeld als je een leuke sportieve of andersoortige uitdaging wil aangaan en daarvoor donaties voor Missie Tumor Onbekend wil ophalen. Wij zullen je ondersteunen met informatie en materialen over onze Missie om jouw actie tot een succes te maken.",
    isActive: false,
    donationType: DonationTypeEnum.Email,
  },
] as DonateOption[]

export default donateWidgetConfig
