const cargarTrivia = async() => {

    try{
        const respuesta = await fetch('https://opentdb.com/api.php?amount=10');
        console.log(respuesta)
// validar si la respuesta es correcta
        if(respuesta.status === 200){
        const datos = await respuesta.json();
        let score ="";
        function mostrarResultado(){
            score=document.getElementById("check")
            if(score == 0 ){
            let scorefinish = score + 100;
                console.log(scorefinish)
        } }
       
        mostrarResultado();
           
        let trivias = "";
        datos.results.forEach( trivia => {
                     trivias += 

          
           
          `
          <center>
          <div class="card text-bg-dark mb-3" style="max-width: 48rem;">
          <div class="card-header"> Category <h2> ${trivia.category}</h2></div>
          <div class="card-header"> difficulty <h4>  ${trivia.difficulty}</h4></div>
          <div class="card-body">
            <h5 class="card-title">Question</h5>
            <p class="card-text">${trivia.question}</p>
            <select class="form-select" aria-label="Default select example">
  <option selected>Open this select correct answer</option>
  <option id="correcto">${trivia.correct_answer}</option>
  <option id="erroneo">${trivia.incorrect_answers}</option>
  
</select>
<option selected>${mostrarResultado()}</option>
          </div>
       
        </center>`
       });
       
      
     
        document.getElementById("container").innerHTML = trivias;   

        }  

        
        else if(respuesta.status === 404){
            console.log("Los datos que pusiste no son validos")
        }
        else {
            console.log("Los datos que pusiste no son validos")
        }
    }
        catch(error){
            console.log(error)
        }
}

cargarTrivia();










