import React from 'react'

 const FoodIdeas = ({ foodIdeas }) => {
   return (

     <div>
       <center><h1>Recipe Ideas</h1></center>

       {foodIdeas.maps((idea) => (
         <div class="card">
           <div class="card-body">
             <h5 class="card-title">{idea.title}</h5>
             <h6 class="card-subtitle mb-2 text-muted">{idea.recipies.source_url}</h6>
             <p class="card-text">{idea.image_url}</p>
           </div>
         </div>
       ))}
     </div>
   )
 };

 export default FoodIdeas
