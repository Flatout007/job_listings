
const selectLocation = (city, jobs) => {
  //jobs = [jobs].join("") || [];

  return {
      type: "SWITCH_LOCATION",
      city,
      jobs
  };
}

export default selectLocation;

console.log(selectLocation("Washington DC: SW ", "Nats Park: ball keeper"))