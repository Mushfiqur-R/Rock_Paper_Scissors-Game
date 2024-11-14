let yourscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll(".choice");
const buttoninfo = document.querySelector(".msgbox");
const userscore = document.querySelector(".user-score");
const comscore = document.querySelector(".com-score");
const reset = document.querySelector(".resetbtn");
const gencomchoice = () => {
  const option = ["rock", "paper", "scissor"];
  const indx = Math.floor(Math.random() * 3);
  return option[indx];
};
const drawmatch = () => {
  buttoninfo.innerText = "Match Draw.";
  buttoninfo.style.backgroundColor = "black";
};
const showwinner = (userwin, userchoice, comchoice) => {
  if (userwin) {
    yourscore++;
    userscore.innerText = yourscore;
    buttoninfo.innerText = `You Win!! Your ${userchoice} beats ${comchoice}`;
    buttoninfo.style.backgroundColor = "green";
  } else {
    computerscore++;
    comscore.innerText = computerscore;
    buttoninfo.innerText = `You Win!! Your ${userchoice} looses with  ${comchoice}`;
    buttoninfo.style.backgroundColor = "red";
  }
};
const playgame = (userchoice) => {
  console.log("Your choice is", userchoice);
  const comchoice = gencomchoice();
  console.log("Computer choice is ", comchoice);
  if (userchoice === comchoice) {
    drawmatch();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = comchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = comchoice === "scissor" ? false : true;
    } else {
      userwin = comchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, comchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
reset.addEventListener("click", () => {
  yourscore = 0;
  computerscore = 0;
  buttoninfo.innerText = "Play Your Turn";
  buttoninfo.style.backgroundColor = "black";
  userscore.innerText = yourscore; // Update displayed user score
  comscore.innerText = computerscore; // Update displayed computer score
});
