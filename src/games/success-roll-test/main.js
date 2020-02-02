import * as dice from '../../gurps/gurps-lite/dice';

const N = 10000;

var outEl = document.querySelector('pre');

function println(s) {
  outEl.innerText += (s || "") + "\n";
}

for (let effectiveSkill = 1; effectiveSkill <= 18; effectiveSkill++) {
  println(`Testing success roll for effectiveSkill=${effectiveSkill}`);
  let results = {};
  for (let key in dice.successRollResults) {
    results[dice.successRollResults[key]] = 0;
  }
  for (let i = 0; i < N; i++) {
    results[dice.successRoll(effectiveSkill)] += 1;
  }
  println("Results:");
  for (let key in dice.successRollResults) {
    let percent = (results[dice.successRollResults[key]] / N * 100).toFixed(2);
    println(`\t${key}: ${percent}`);
  }
  let t = results[dice.successRollResults.success] + results[dice.successRollResults.criticalSuccess];
  let successPercent = (t / N * 100).toFixed(2);
  t = results[dice.successRollResults.failure] + results[dice.successRollResults.criticalFailure];
  let failurePercent = (t / N * 100).toFixed(2);
  println(`General succes/failure: ${successPercent} / ${failurePercent}`);
  println();
}
