 document.querySelector('.outer-box').addEventListener('click', nume);
let result=document.querySelector('.result');
let sample=0;
let operator= '=';
//operator.addEventListener('click',print(event));

function nume(event)
{
      if(event.target.className === "operand")
      {
                 result.innerText=Number(result.innerText)*10+Number(event.target.innerText);
      }	
      else if(event.target.className === "operand operand_0")
      {
                 result.innerText=Number(result.innerText)*10+Number(event.target.innerText);
      }	
      
      else if(event.target.className === "operator-clear operator")
      {
                 result.innerText=0;
      }	
      else if(event.target.className === "operator-backspace operator")
      {
                 result.innerText=Math.floor(Number(result.innerText)/10);
      }	
      else  if(event.target.className === "operator")
      {
      	if(event.target.value ==='=')
      	{
      		if(operator === '+')
              result.innerText=Number(result.innerText)+ sample;
      		else if(operator === '-')
      	     result.innerText=-(Number(result.innerText)- sample);
      	    else if(operator === '*')
      	     result.innerText=Number(result.innerText)*sample;
      	     else
      	     	 result.innerText=Math.floor(sample/Number(result.innerText));
      	     }
      	else
      	{
      		operator=event.target.value;
      		sample=Number(result.innerText);
      		result.innerText='0';
      	}     
      	     
      }
  }
