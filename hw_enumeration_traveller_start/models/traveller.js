const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation
  });
    return result;
};


Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation
  });
    return result;
};


Traveller.prototype.getJourneysByTransport = function (transport) {
    const result = this.journeys.filter((journey) => {
      return transport === journey.transport;
    });
    return result
  };




Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter( (journey) => {
    return journey.distance > minDistance;
  });
  return result
};


// Traveller.prototype.calculateTotalDistanceTravelled = function () {
//     return this.journeys.reduce((totaldistance, distance) => {
//       return totaldistance += journey.distance;
//     }, 0);
// };


Traveller.prototype.calculateTotalDistanceTravelled = function () {
    const distances = this.journeys.map( (journey) => {
      return journey.distance
    });
    const result = distances.reduce( (totaldistance, distance) => {
      return totaldistance + distance;
    });

  return result;

};




Traveller.prototype.getUniqueModesOfTransport = function () {

};








module.exports = Traveller;
