let array = [
    "Hello World",
    "Hello World in java",
    "Hello World in C++",
    "How to tie a tie?",
    "Best Italian restaurants near me.",
    "Weather forecast for tomorrow.",
    "How to learn Spanish fast?",
    "Symptoms of the flu.",
    "How to cook chicken breast?",
    "How to start a small business?",
    "What is the capital of France?",
    "Best books of 2023.",
    "DIY home improvement ideas.",
    "How to lose weight quickly?",
    "Latest iPhone reviews.",
    "What is climate change?",
    "Top vacation spots in Europe.",
    "How to grow tomatoes?",
    "How to write a resume?",
    "How to invest in stocks?",
    "How to make sushi?",
    "Is coffee bad for you?",
    "Best movies of all time.",
    "How to meditate for beginners?",
    "What is Bitcoin?",
    "How to make a website?",
    "What is the meaning of life?",
    "How to overcome anxiety?"
];

const resultsBox = document.querySelector(".result");
const inputBox = document.getElementById("searchBar");

inputBox.onkeyup = function(){
    let results = [];
    let input = inputBox.value;
    if(input.length){
        result = array.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    displayResult(result);
    if(!input.length){
        resultsBox.innerHTML = "";
    }
}

function displayResult(result){
    const content = result.map((list)=>{
        return "<li = onClick =selectInput(this)>"+list+"</li>";
    })
    
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = "";
}