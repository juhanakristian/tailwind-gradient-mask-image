const plugin = require("tailwindcss/plugin");

const directions = {
    t: "to top",
    tr: "to top right",
    r: "to right",
    br: "to bottom right",
    b: "to bottom",
    bl: "to bottom left",
    l: "to left",
    tl: "to top left",
};

const BASE_CLASS = "gradient-mask"
const steps = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "50-d", "60-d", "70-d", "80-d", "90-d"];

function generateMaskImage(direction, steps) {
  return {
    maskImage: `linear-gradient(${direction}, ${steps.join(', ')}, transparent 100%)`
  }
}

function generateBaseUtilities() {
  return Object.entries(directions).reduce(
    (result, [shorthand, direction]) => {
      const variants = steps.map((step) => {
        const className = `.${BASE_CLASS}-${shorthand}-${step}`;
        if (step.includes("-")) {
          const substep = Number(step.split("-")[0]);
          return {
            [className]: generateMaskImage(direction, ['transparent', `rgba(0, 0, 0, 1.0) ${100-substep}%`, `rgba(0, 0, 0, 1.0) ${substep}%`]),
          };
        };
        return {
          [className]: generateMaskImage(direction, [`rgba(0, 0, 0, 1.0) ${step}%`]),
        };
      });

      const stepClasses = Object.assign(...variants);
      return {
        ...result,
        ...stepClasses,
      };
    },
    {
      [`.${BASE_CLASS}-none`]: {
        maskImage: 'none'
      }
    }
  );
}

function generateArbitraryUtilities() {
  const matchingComponents = {}

  Object.entries(directions).forEach(([shorthand, direction]) => {
    const className = `${BASE_CLASS}-${shorthand}`

    matchingComponents[className] = (value) =>  generateMaskImage(direction, [value])
  })

  return matchingComponents
}

module.exports = plugin(function ({ addUtilities, matchUtilities }) {
  const baseUtilities = generateBaseUtilities()
  const arbitraryUtilities = generateArbitraryUtilities()

  addUtilities(baseUtilities);
  matchUtilities(arbitraryUtilities)
});
