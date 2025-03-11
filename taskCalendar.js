//Switch Statement Activity
let day = prompt("Enter a day of the week:");
day = day.toLowerCase();

let taskMessage;

switch (day) {
    case "monday":
        taskMessage = "Your task for Monday is: Uniform for Monday";
        break;
    case "tuesday":
        taskMessage = "Your task for Tuesday is: Wakeup at 6AM in the morning";
        break;
    case "wednesday":
        taskMessage = "Your task for Wednesday is: Work on your projects and Activities.";
        break;
    case "thursday":
        taskMessage = "Your task for Thursday is: Study for the quiz.";
        break;
    case "friday":
        taskMessage = "Your task for Friday is: Review for quiz Today.";
        break;
    case "saturday":
        taskMessage = "Your task for Saturday is: Clean your room.";
        break;
    case "sunday":
        taskMessage = "Your task for Sunday is: Relax and recharge.";
        break;
    default:
        taskMessage = "Invalid day entered. Please enter a valid day of the week.";
        break;
}
console.log(taskMessage);
