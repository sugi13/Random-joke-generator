const JokeText = document.getElementById("show-joke");
const ShowMsg = document.getElementById("warning");
const GenerateButton = document.getElementById("Submit-btn");
const InputColumn = document.getElementById("input-field");

const url = "https://icanhazdadjoke.com/";
GenerateButton.addEventListener("click", function(e){
e.preventDefault();

if(InputColumn.value === "Dad Joke") {
    fetch(url,{
        headers: {
          'Accept': 'application/json'
        }
      })
    .then((response) => {
      return response.json();
    })
    .then((convertedData) => {
        JokeText.textContent = `${convertedData.joke}`;
        if(JokeText){
            GenerateButton.disabled = true;
            GenerateButton.style.display = "none";
            setTimeout(() => {
                ShowMsg.textContent = "Reload or Come back Tommorrow to get Joke!";
                setTimeout(()=>{
                    ShowMsg.style.display = "none";
                }, 4500);
            }, 4000)
        }
    })
    .catch((error) => {
        alert("Something Went Wrong!");
    });
}
else {
    alert("Check the spelling!");
}

});

