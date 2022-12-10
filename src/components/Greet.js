import React from "react";
//function Greet()
//{
   // return <h1>hello vishwa</h1>
//}
const Greet =props=> 
{
    console.log(props);
 return(

     <h1>{props.name} aka {props.stuname}</h1>
 );
    
}
export default Greet;