import React from 'react';

const WetenschappelijkOnderzoekContent: React.FC = () => {
  return (
    <div className="col-span-4 sm:col-span-2">
      <h3>
        <strong>Doel: €100.000</strong>
      </h3>
      <p>
        Missie Tumor Onbekend steunt wetenschappers en zorgverleners
        graag in relevante onderzoeken naar betere diagnostiek,
        geneesmiddelen, tumorgerichte behandelingen, palliatieve & psychologische 
        en psychosociale zorg in het geval van een onbekende primaire tumor. 
        Door nieuwe inzichten kan de schrijnend lage overleving door PTO verbeteren 
        evenals de kwaliteit van leven voor de patiënt en naaste. Daarnaast neemt
        Missie Tumor Onbekend soms ook zelf het voortouw in het bijeenbrengen
        van onderzoeksteams om gezamenlijk wetenschappelijk onderzoek uit te
        voeren dat in het belang van de PTO-patiënt is. Bij het
        beoordelen van wetenschappelijk onderzoeksvoorstellen krijgt
        Missie Tumor Onbekend steun van
        <a
          href="http://cupp-nl.eu/"
          data-type="URL"
          data-id="http://cupp-nl.eu/"
        >
          {" "}Home | CUPP NL
        </a>
        , het landelijke expertplatform over PTO. Wetenschappelijk onderzoek is 
        kostbaar en Missie Tumor Onbekend draagt hier graag aan bij. We zullen er 
        zoveel mogelijk naar streven om met onze (kleinere) bijdrage ook grotere 
        financiers zoals subsidiefondsen, overheidsfondsen of andersoortige fondsen 
        te betrekken bij de onderzoeken.
      </p>
      <p>
        <strong>
          Missie Tumor Onbekend wil onder andere de volgende projecten
          realiseren in het kader van het ondersteunen van
          wetenschappelijk onderzoek.
        </strong>
      </p>
      <ul>
        <li>
          Extra ondersteuning voor FAPI-PET studie (ingediend bij KWF,
          in afwachting van besluit), voor meer informatie kunt u
          terecht bij:
          <a
            href="http://cupp-nl.eu/projects/18f-f-fapi-petct-to-identify-carcinoma-of-hitherto-unknown-primary-origin-improving-minimally-invasive-cancer-diagnostics/"
            data-type="URL"
            data-id="http://cupp-nl.eu/projects/18f-f-fapi-petct-to-identify-carcinoma-of-hitherto-unknown-primary-origin-improving-minimally-invasive-cancer-diagnostics/"
          >
            {" "}[18F]F-FAPI PET/CT to Identify Carcinoma of hitherto Unknown
            Primary origin: improving minimally-invasive cancer
            diagnostics. | CUPP NL
          </a>
        </li>
        <li>
          Het ondersteunen van de landelijke database van klinische
          geanonimiseerde data van PTO- patiënten om zo de impact van
          het PTO-zorgpad in kaart te brengen en ook toekomstig
          wetenschappelijk onderzoek te faciliteren
        </li>
      </ul>
    </div>
  );
};

export default WetenschappelijkOnderzoekContent;
