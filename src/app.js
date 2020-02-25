//Progression 1 - create a Manager array and return it
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var x = [];
  x[0] = managerName;
  x[1] = managerAge;
  x[2] = currentTeam;
  x[3] = trophiesWon;
  return x;
}

//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  var x = formation.forEach(function (item) {
    if (item == undefined) return false;
  });
  var y = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  };
  if (formation.length == 0) return null;
  else if (x == undefined) {
    return "undefined";
  } else return y;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var x = players.filter(e => (e.debut == year));
  return (x);
}



//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  return (players.filter(e => (e.position == position)));

}
//Progression 5 - Filter players that have won ______ award

// function filterByAward(awardName) {
// return (players.filter(e => (e.awards.filter(i => i.name == awardName))));
//players.map(e => console.log(e.awards.filter(i => (i.name === "FIFA FIFPro World XI"))));
//players.forEach(e => console.log(e.awards.filter(i => (i.name === "FIFA FIFPro World XI"))));
// }

// function filterByAward(awardName) {
//   let arr = [];
//   for (var i = 0; i < players.length; i++)
//     for (var j = 0; j < players[i].awards.length; j++)
//       if (players[i].awards[j].name == awardName)
//         if (!(arr.includes(players[i])))
//           arr.push(players[i]);
//   return arr;​
// }​​
function filterByAward(awardName) {
  let playersByAward = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName)
        playersByAward.push(players[i]);
    }

  }
  return playersByAward;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  let playersByAwardxTimes = [];
  for (var i = 0, count = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName)
        count++;
    }
    if (count == noOfTimes)
      playersByAwardxTimes.push(players[i]);
  }
  return playersByAwardxTimes;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let playerByAwardxCountry = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if ((players[i].awards[j].name == awardName) && (players[i].country == country))
        playerByAwardxCountry.push(players[i])
    }
  }
  return playerByAwardxCountry;
}


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
// function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)​ {
//   let playerByNoOfAwardsxTeamxAge = [];
//   for (var i = 0; i < players.length; i++) {
//     var count = 0;
//     if ((players[i].awards.length >= noOfAwards) && (players[i].team == team) && (players[i].age == age))
//       playerByNoOfAwardsxTeamxAge.push(players[i]);
//   }
//   return playerByNoOfAwardsxTeamxAge;​​
// }​


//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order