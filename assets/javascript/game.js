let teamOneShotCountElement = document.querySelector("#teamone-numshots")
let teamOneGoalCountElement = document.querySelector("#teamone-numhits")
let teamOneShotButtonElement = document.querySelector("#teamone-shoot")

let teamOneShotCount = 0;
let teamOneGoalCount = 0;

teamOneShotButtonElement.addEventListener("click", function () {

    teamOneShotCount = teamOneShotCount + 1
    teamOneShotCountElement.innerHTML = teamOneShotCount

    //if shot was successful,increment gaol count by one
    //after incrementing goalcount,set goalcountelement,innerhtml
    //equal to goal count


    if (Math.random() < .50) {
        teamOneGoalCount = teamOneGoalCount + 1
        teamOneGoalCountElement.innerHTML = teamOneGoalCount
    }
})

let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots")
let teamTwoGoalCountElement = document.querySelector("#teamtwo-numhits")
let teamTwoShotButtonElement = document.querySelector("#teamtwo-shoot")

let teamTwoShotCount = 0;
let teamTwoGoalCount = 0;

teamTwoShotButtonElement.addEventListener("click", function () {

    teamTwoShotCount = teamTwoShotCount + 1
    teamTwoShotCountElement.innerHTML = teamTwoShotCount

    //if shot was successful,increment gaol count by one
    //after incrementing goalcount,set goalcountelement,innerhtml
    //equal to goal count


    if (Math.random() < .50) {
        teamTwoGoalCount = teamTwoGoalCount + 1
        teamTwoGoalCountElement.innerHTML = teamTwoGoalCount
    }
})

let resetButtonElement = document.querySelector("#reset")
let resetButtonCount = 0 
let resetCountElement = document.querySelector("#num-resets")
resetButtonElement.addEventListener("click",function(){

        teamOneShotCount = 0;
        teamOneShotCountElement.innerHTML = teamOneShotCount;


        teamOneGoalCount = 0;
        teamOneGoalCountElement.innerHTML = teamOneGoalCount;

        teamTwoShotCount = 0;
        teamTwoShotCountElement.innerHTML = teamTwoShotCount;

        teamTwoGoalCount = 0;
        teamTwoGoalCountElement.innerHTML = teamTwoGoalCount;

        
        
        resetButtonCount = resetButtonCount + 1;
        resetCountElement.innerHTML = resetButtonCount;
        


})


