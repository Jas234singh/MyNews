const dictionary =(word)=>{
   
  const options = {
    method: 'GET',
    headers: {
      
      'X-RapidAPI-Key': 'b5be5e1e15msha135363ed5224c2p1ecf3fjsna641b4ee1248',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  
    
fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word,options)
.then(response => response.json())
.then((response) => {
    console.log(response);
word.innerHTML =response.word;
definition.innerHTML =response.definition;

})
.catch(err =>console.error(err));
}
submitbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)

})