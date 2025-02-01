/* Write your code below. Good luck! 🙂 */

const calcAverage = (A, B, C) => {
    return (A + B + C)/3;
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
 if(avgDolphins/2 > avgKoalas){
     console.log(`dolphins win (${avgDolphins} vs. ${avgKoalas})`);
 }   else if(avgDolphins < avgKoalas/2){
     console.log(`koalas win (${avgKoalas} vs. ${avgDolphins})`);
 } else { 
     console.log("No team wins...");
 }
}
