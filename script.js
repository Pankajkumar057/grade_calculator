const calculate = () => {

    let english = document.querySelector("#english").value;
    let math = document.querySelector("#math").value;
    let physics = document.querySelector("#physics").value;
    let chemistry = document.querySelector("#chemistry").value;
    let computer = document.querySelector("#computer").value;

    let grades = "";

    let totalgrades = parseFloat(english) + parseFloat(math) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(computer);

    let percentage = (totalgrades / 500) * 100;
    if (percentage <= 100 && percentage >= 90) {
        grades = "A"
    } else if (percentage <= 89 && percentage >= 80) {
        grades = "B"
    } else if (percentage <= 79 && percentage >= 70) {
        grades = "C"
    } else if (percentage <= 69 && percentage >= 60) {
        grades = "D"
    } else {
        grades = "F"
    }
    if (english == "" || math == "" || physics == "" || chemistry == "" || computer == "") {
        document.querySelector("#showdata").innerHTML 
         = "Please enter all the fields"; 

    }
    else {



        // Checking the condition for the fail and pass 

        if (percentage >= 35) {

            document.querySelector(

                "#showdata"

            ).innerHTML =

                ` Out of 500 your total is  ${totalgrades}  
    
            and percentage is ${percentage}%. <br>  
    
            Your grade is ${grades}. You are Pass. `;

        } else {

            document.querySelector(

                "#showdata"

            ).innerHTML =

                ` Out of 500 your total is  ${totalgrades}  
    
            and percentage is ${percentage}%. <br>  
    
            Your grade is ${grades}. You are Fail. `;

        }

    }
}