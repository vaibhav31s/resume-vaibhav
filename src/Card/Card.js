import React from 'react'
import './card.css'
const Card = (props) => {
  return (  
    <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<section>
    <div class="container" align="center">
    	<div class="row">

    		
    		<div class="">
    		    <div class="card profile-card-5">
    		        <div class="card-img-block">
    		            <img class="card-img-top" src={props.image} alt="Card image cap"/>
    		        </div>
                    <div class="card-body pt-0">
                    <h5 class="card-title">{props.college}</h5>
                    <p class="card-text">{props.desc}</p>
                    
                  </div>
                </div>
                <p class=" float-left text-center"><strong>Card with Floting Picture</strong></p>
    		</div>
    		
    	</div>
    </div>
</section>
    </div>
  )
}

export default Card