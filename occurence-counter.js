// WIP
let pipelines ='{1677,34345,}'
const pipelinesIds = pipelines.split(',');
const target = "9903661"; 

const onboardingCount = pipelinesIds.filter(id => id === target).length
console.log([{value:onboardingCount}])
