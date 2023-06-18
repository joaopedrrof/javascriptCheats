let pipelines = ['1677','34345','9903661','9903661'];
const target = "9903661";

const onboardingCount = pipelines.filter(id => id === target).length;
console.log([{ target_occurence: onboardingCount }]);