function findSecondHighest(scores) {
    if (scores.length < 2) {
        return "Not enough scores!";
    }
    let uniqueScores = [];
    for (let i = 0; i < scores.length; i++) {
        if (!uniqueScores.includes(scores[i])) {
            uniqueScores.push(scores[i]);
        }
    }
    uniqueScores.sort(function(a, b) {
        return b - a;
    });
    if (uniqueScores.length < 2) {
        return "All students have the same score!";
    }
    return uniqueScores[1];
}

let studentScores = [95, 85, 92, 95, 88, 76, 92, 100, 67, 100];
let secondHigh = findSecondHighest(studentScores);
let sortedScores = [];
for (let i = 0; i < studentScores.length; i++) {
    if (!sortedScores.includes(studentScores[i])) {
        sortedScores.push(studentScores[i]);
    }
}
sortedScores.sort(function(a, b) {
    return b - a;
});

console.log("------------------------------------------------");
console.log("Student Scores List:", studentScores.join(", "));
console.log("------------------------------------------------");
console.log("Second Highest Score among Students is:", secondHigh);
console.log("------------------------------------------------");
console.log("Scores in descending order:", sortedScores.join(", "));
console.log("------------------------------------------------");
