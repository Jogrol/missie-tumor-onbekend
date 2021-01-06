import React from "react"
import InfoCardButton from "./infoCardButton"

const InfoCard = () => {
  return (
    <div className="border-transparant shadow-lg border-gray-100 w-full rounded-xl">
      <div className="bg-gray-100 w-full pt-2 px-4 rounded-t-xl">
        <h4 className="py-2">Optie 1</h4>
      </div>
      <div className="px-4 py-2">
        <p>
          Modernipsum dolor sit amet synthetism abstract expressionism
          deformalism new objectivity relational art, hudson river school
          post-structuralism naturalism cubo-futurism postmodern art naturalism.
        </p>
      </div>
      <div className="pb-2 px-4">
        <InfoCardButton title="Schrijf je nu in" />
      </div>
    </div>
  )
}

InfoCard.propTypes = {
  //   path: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
}

export default InfoCard
