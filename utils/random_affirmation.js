const affirmations = require("../assets/affirmations");

const getRandomAffirmation = (lang = "en") => {
  const selectedAffirmations = affirmations[lang];

  return selectedAffirmations[
    Math.floor(Math.random() * selectedAffirmations.length)
  ];
};

module.exports = getRandomAffirmation;
