// SHowing data from an array list 
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
const showBox = document.querySelector(".show");
const inputBox = document.getElementById("searchBar");


inputBox.onkeyup = function(){
    let results = [];
    let input = inputBox.value;
    showData([input]);
    if(input.length){
        result = array.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    displayResult(result);
    if(!input.length){
        resultsBox.innerHTML = "";
        showBox.innerHTML = "";
        
    }
}

function displayResult(result){
    const content = result.map((list)=>{
        const index = list.toLowerCase().indexOf(inputBox.value.toLowerCase());
        const beforeMatch = list.substring(0, index);
        const match = list.substring(index, index + inputBox.value.length);
        const afterMatch = list.substring(index + inputBox.value.length);
        const highlightedItem = beforeMatch + "<strong>" + match + "</strong>" + afterMatch;
        return "<li onclick='selectInput(this)'>" + highlightedItem + "</li>";
        
    })
    
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function showData(input){
    const content = input.map((input)=>{
        return "<li>"+input+"  <i style =color:grey >- Zen Zen Search</i>"+"</li>";
    })
    showBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.textContent;
    resultsBox.innerHTML = "";
    showBox.innerHTML = "";
}