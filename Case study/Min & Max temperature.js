function getTemperatureReport(temps) {
    if (temps.length === 0) {
        return { min: null, max: null };
    }

    let minTemp = temps[0];
    let maxTemp = temps[0];

    for (let i = 1; i < temps.length; i++) {
        if (temps[i] < minTemp) {
            minTemp = temps[i];
        }
        if (temps[i] > maxTemp) {
            maxTemp = temps[i];
        }
    }

    return { min: minTemp, max: maxTemp };
}

let weeklyTemperatures = [32, 28, 35, 30, 25, 40, 29];
let tempReport = getTemperatureReport(weeklyTemperatures);

let ascendingTemps = [];
for (let i = 0; i < weeklyTemperatures.length; i++) {
    ascendingTemps.push(weeklyTemperatures[i]);
}
for (let i = 0; i < ascendingTemps.length; i++) {
    for (let j = i + 1; j < ascendingTemps.length; j++) {
        if (ascendingTemps[i] > ascendingTemps[j]) {
            let temp = ascendingTemps[i];
            ascendingTemps[i] = ascendingTemps[j];
            ascendingTemps[j] = temp;
        }
    }
}

let descendingTemps = [];
for (let i = 0; i < weeklyTemperatures.length; i++) {
    descendingTemps.push(weeklyTemperatures[i]);
}
for (let i = 0; i < descendingTemps.length; i++) {
    for (let j = i + 1; j < descendingTemps.length; j++) {
        if (descendingTemps[i] < descendingTemps[j]) {
            let temp = descendingTemps[i];
            descendingTemps[i] = descendingTemps[j];
            descendingTemps[j] = temp;
        }
    }
}

console.log("------------------------------------------------");
console.log("Weekly Temperature Report");
console.log("Temperatures Recorded (°C): " + weeklyTemperatures.join(", "));
console.log("------------------------------------------------");
console.log("Lowest Temperature of the Week: " + tempReport.min + "°C");
console.log("Highest Temperature of the Week: " + tempReport.max + "°C");
console.log("------------------------------------------------");
console.log("Sorted Temperatures (ascending): " + ascendingTemps.join(", "));
console.log("Sorted Temperatures (descending): " + descendingTemps.join(", "));
console.log("------------------------------------------------");
