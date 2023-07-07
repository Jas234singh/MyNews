const questions = [
    {
        'que':'which of the following is a Markup Language',
        'a':'html',
        'b':'css',
        'c':'react',
        'd':'angular',
        'correct':'a',
    },
    {
        'que':'what is the state dance of Punjab',
        'a':'Bhangra',
        'b':'Kuchi pudi',
        'c':'ghoomar',
        'd':'Satariya',
        'correct':'a',
    },
    {
        'que':'which of the following is fullform of css',
        'a':'Cascading Style Sheets',
        'b':'New form',
        'c':'Made form',
        'd':'You view',
        'correct':'a',
    },
    {
        'que':'which of the following is capital of Haryana',
        'a':'chandigarh',
        'b':'Rohtak',
        'c':'Ambala',
        'd':'Panchkula',
        'correct':'a',
    },

       {'que':'which of the following is capital of Up',
        'a':'Lucknow',
        'b':'Rohtak',
        'c':'Ambala',
        'd':'Panchkula',
        'correct':'a'},

        {'que':'which of the following is capital as well as union territory',
        'a':'Chandigarh',
        'b':'Rohtak',
        'c':'Ambala',
        'd':'Panchkula',
        'correct':'a'

    }
]
let index = 0;
let total =questions.length;
let right =0;
let wrong =0;
const quesbox =document.getElementById("quesbox")
const optioninputs =document.querySelectorAll(".options")
const loadQuestion = () => {
    if(index == total){
        return endquiz();
    }
    reset();
    const data =questions[index];
    
    quesbox.innerText =`${index+1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText = data.a;
    optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
    optioninputs[3].nextElementSibling.innerText = data.d;
}

const submitquiz = () => {
    const data =questions[index];
    const ans =getanswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
    
}
const getanswer = () =>{
    let answer;
    optioninputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            
            }
        }
    )
    return answer;
}
const reset = () =>{
    optioninputs.forEach(
        (input) =>{
            input.checked =false;
        }
    )
}

const endquiz = () =>{
    document.getElementById("box").innerHTML =
    `<h1>thanks for playing</h1>
    <h2>Your Score</h2>
    <h3> ${right} / ${total} are correct </h3>`
    
}
loadQuestion();