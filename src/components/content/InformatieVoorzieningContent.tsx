import React from "react"

const InformatieVoorzieningContent: React.FC = () => {
  return (
    <div className="col-span-4 sm:col-span-2">
      <h3>
        <strong>Doel: €25.000</strong>
      </h3>

      <p>
        Primaire tumor onbekend is een relatief onbekende kankerdiagnose, juist
        omdat er geen complete diagnose gegeven kan worden. Echter hebben deze
        mensen wel te maken met uitgezaaide kanker. Missie Tumor Onbekend wil
        graag dat alle patiënten, naasten, zorgverleners en onderzoekers goed op
        de hoogte blijven van de laatste kennis en  vooruitgang, en ontwikkelt
        materialen ten behoeve hiervan. Daarnaast werkt Missie Tumor Onbekend
        ook aan bredere maatschappelijke awareness en bewustwording, zodat
        PTO-patiënten zich meer gesteund voelen. Meer bekendheid creëert ook
        nieuwe mogelijkheden om meer projecten voor PTO-patiënten te realiseren.
      </p>

      <p>
        <strong className='font-bold'>
          Missie Tumor Onbekend wil onder andere de volgende projecten
          realiseren in het kader van informatievoorziening &amp; bewustwording.
        </strong>
      </p>

      <ul>
        <li>
          Organisatie van een landelijk (twee)jaarlijks wetenschappelijk
          symposium voor zorgverleners, wetenschappers en patiënten. Het
          symposium zal in samenwerking met{" "}
          <a
            href="https://cupp-nl.eu/"
            data-type="URL"
            data-id="https://cupp-nl.eu/"
          >
            CUPP-NL
          </a>{" "}
          georganiseerd worden (januari 2027 is het volgende symposium)
        </li>
        <li>
          Onderhoud van en verdere verspreiding van de PTO-informatiefolder, en
          de klinische{" "}
          <a href="https://richtlijnendatabase.nl/richtlijn/primaire_tumor_onbekend/primaire_tumor_onbekend_-_startpagina.html">
            richtlijn
          </a>{" "}
          voor patiënten, naasten en zorgprofessionals
        </li>
        <li>
          Optekenen van diverse patiënten ervaringsverhalen &amp; nieuwsbrief met
          informatie voor patiënten en naasten
        </li>
        <li>
          Internationale samenwerking, via onze samenwerking met de{" "}
          <a href="https://www.worldcupawareness.org/">World CUP Alliance</a>
        </li>
      </ul>
    </div>
  )
}

export default InformatieVoorzieningContent
