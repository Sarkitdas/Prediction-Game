const slctChoice = document.querySelectorAll(".choice");

let youWin = document.querySelector(".youWin");
let compWin = document.querySelector(".computerWIn");

let youturn = document.querySelector(".selectButton");

let findCongrat = document.querySelector(".msg-box");

let user_Win = 0;
let computer_WIn = 0;

const timeout = () => {
  findCongrat.classList.add("show");
  setTimeout(() => findCongrat.classList.remove("show"), 1000);
};

//create match result
const box1 = () => {
  findCongrat.innerText = "🎊 Congratulation You win";
  timeout();
};
const box2 = () => {
  findCongrat.innerText = "😢 Opps! You Lost";

  timeout();
};
const box3 = () => {
  findCongrat.innerText = "⚪ Draw !";

  timeout();
};

let num = [box1, box2, box3];

//generate computer choice
const genComputerchoice = () => {
  const optionChoice = ["paper", "rock", "scissors"];
  return optionChoice[Math.floor(Math.random() * 3)];
};

//Play method
const gameMethod = (user, com) => {
  if (user === com) {
    num[2]();
    console.log("Draw");
  } else if (
    (user === "rock" && com === "scissors") ||
    (user === "scissors" && com === "paper") ||
    (user === "paper" && com === "rock")
  ) {
    num[0]();
    console.log("win");
    return user_Win++;
  } else {
    num[1]();
    console.log("Lost");
    return computer_WIn++;
  }
};

const playGame = (userChoice) => {
  let com = genComputerchoice();
  let user = userChoice;

  //Turn button
  youturn.onclick = () => {
    gameMethod(user, com);
    winCalculation();
  };
};

//play button
slctChoice.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userclicked = choice.getAttribute("id");
    playGame(userclicked);
  });
});

const winCalculation = () => {
  youWin.innerText = user_Win;
  compWin.innerText = computer_WIn;
};
