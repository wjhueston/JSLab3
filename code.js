var totaldue = 0
function AddBook(){
    var bookDaysLate = parseInt(prompt("Enter the number of days late", "1"))
    totaldue += bookDaysLate * 0.25
}
function AddDVD(){
    var dvdDaysLate = parseInt(prompt("Enter the number of days late", "1"))
    totaldue += dvdDaysLate *0.50
}
function TotalOut(){
    alert("You owe $" + totaldue.toFixed(2))
}
var totalCoworkers = 0
function TotalCoworkers(){
    totalCoworkers = parseInt(prompt("How many coworkers want pizza?", "1"))
    var cheesePricePerCoworker = 15/totalCoworkers
    var coworkerNumber = 1
    while(totalCoworkers > 0){
        var totalToppings = parseInt(prompt("How many toppings does Co-Worker " + coworkerNumber + " want?"))
        var pizzaPricePerCoworker = (totalToppings * 1.25) + cheesePricePerCoworker
        document.write("Co-Worker " + coworkerNumber + " owes: $" + pizzaPricePerCoworker.toFixed(2) + "<br>")
        coworkerNumber++;
        totalCoworkers--;
    }
}
