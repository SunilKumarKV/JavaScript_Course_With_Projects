/* Write your code below. Good luck! 🙂 */
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy trophy🏆")
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy🏆")
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy")
} else {
    console.log("No one win the trophy😔")
}
