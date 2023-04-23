const formElement = document.getElementById('form')
const scores = document.querySelectorAll('.input')
const description = document.querySelector('.description')
const totalAverage = document.querySelector('.score__num')


formElement.addEventListener('submit', (e)=>{
    e.preventDefault();
    let totalscore = 0 
    scores.forEach( input => {
        if(input.value <= Number(100) && input.value >= Number(0)){
            if(input.classList.contains('error')){
                input.classList.remove('error')
            }
            totalscore  += Number(input.value) ;
        

           } else{
               input.classList.add('error')
               return
           }
                    

    })
    getAverage(totalscore)
})


const getAverage = (a)=>{
    let average = 0 
        let descriptionScore = description.firstElementChild
        let descriptionText = descriptionScore.nextElementSibling
    scores.forEach(values=>{
        if(values.value <= Number(100) && values.value >= Number(0)){
        average = Number(a/4)
            
          totalAverage.textContent = `${average}`
        

        if(average<50){
            descriptionScore.textContent = 'Bad!!'
            descriptionText.textContent = 'You scored lower than 50% of the people who have raken these tests'
        }
        if(average>65){
            descriptionScore.textContent = 'Good'
            descriptionText.textContent = 'You scored higher than 65% of the people who have raken these tests'
        }
        if(average>75){
            descriptionScore.textContent = 'Great'
            descriptionText.textContent = 'You scored higher than 75% of the people who have raken these tests'
        }
        if(average>90){
            descriptionScore.textContent = 'Perfect'
            descriptionText.textContent = 'You scored higher than 90% of the people who have raken these tests'
        }
    
     }
        else{
            totalAverage.textContent = '--'
            descriptionScore.textContent = 'Ups!!'
            descriptionText.textContent = 'Enter a good mark '
        }
    })
    

  
}