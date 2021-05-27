import { LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Calculator extends LightningElement {
//declared 2 variables using track
@track num1="";
@track num2="";
@track num3="";

//written the methods which will call on specific event and bydefault its private
num1Change ( event ) {

  this.num1=event.target.value;
  
}

num2Change ( event ) {

  this.num2=event.target.value;
  
}

doreset ( event ) {

  this.num1="";
  this.num2="";
  this.num3=""

  
}

dosum(){
    if((this.num1=="") || (this.num2==""))
    {
        const evt = new ShowToastEvent({
        title: 'Input Data Error',
        message: 'Please Enter the Number Values',
        variant: 'error',
        mode: 'dismissable'
        });
        this.dispatchEvent(evt);
           
      //alert("Please Enter the Number Values");
       //this.num1
    }
    else
    {
      this.num3= parseInt(this.num1) + parseInt(this.num2);
       const evt = new ShowToastEvent({
        title: 'Calculator Result',
        message: 'Addition of Number is'+ this.num3,
        variant: 'success',
        mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
}

dosub(){
    
    if((this.num1=="") || (this.num2==""))
    {
      alert("Please Enter the Number Values");
    }
    else
    {
    this.num3= parseInt(this.num1) - parseInt(this.num2);
    }
}

domul(){
    
    if((this.num1=="") || (this.num2==""))
    {
      alert("Please Enter the Number Values");
    }
    else
    {
    this.num3= parseInt(this.num1) * parseInt(this.num2);
    }
}

dodiv(){
    
    if((this.num1=="") || (this.num2==""))
    {
      alert("Please Enter the Number Values");
    }
    else
    {
    this.num3= parseInt(this.num1) / parseInt(this.num2);
    }
}
}
