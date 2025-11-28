let star = document.querySelectorAll('.star')
let rating = document.querySelector(".current-rating")
star.forEach((stars,index)=>{
     stars.addEventListener('click', function() {
      let current_star = index+1;
        rating.innerHTML = `rating :${current_star}`;

        star.forEach((star,i)=>{
            if(current_star>=i+1){
                star.innerHTML='&#9733;'
                
            }else{
                star.innerHTML='&#9734;'
            }
        })
        
    })

})
