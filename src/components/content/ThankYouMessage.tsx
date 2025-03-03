import React from 'react';

const ThankYouMessage: React.FC = () => {
  return (
    <div>
      <p>
        Vriendelijk bedankt voor uw donatie aan Missie Tumor Onbekend. Met
        uw steun kunnen wij projecten realiseren en initiatieven aanjagen
        die de zorg voor patiënten met een onbekende primaire tumor
        verbeteren.
      </p>

      <p>
        Voor meer informatie over onze huidige projecten kunt u terecht
        bij '
        <a
          href="https://steunmissietumoronbekend.nl/#projecten"
          data-type="URL"
          data-id="https://steunmissietumoronbekend.nl/#projecten"
        >
          projecten die we steunen
        </a>
        '
      </p>

      <p>
        Wij zouden u graag op de hoogte houden van onze vorderingen door u
        elk kwartaal onze nieuwsbrief te sturen. Klik{" "}
        <a
          href="https://www.missietumoronbekend.nl/info/#nieuwsbriefpto"
          data-type="URL"
          data-id="https://www.missietumoronbekend.nl/info/#nieuwsbriefpto"
        >
          hier
        </a>{" "}
        als u deze wenst te ontvangen.
      </p>
    </div>
  );
};

export default ThankYouMessage;
