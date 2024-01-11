import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Elementss {
  elementName: string;
  elementType :string;
  radioElement: string;
  option:string[]
  }
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'myapp';
  selectedElementType: string='';
  isInputVisible:boolean=false
  elementName:string='';
  elementType:string='text';
  radioElement:string='1';
  inputField:string=''
  option:string[]=[]


  // form=!FormGroup;
  formdata:Elementss[]=[]
  
  enteredValue: string = '';

  rowMyHtml:string = "";
  rowHtml: string = "";
  tempHtml : string = "";

  // constructor(private shared:SharedService) { }

  
  add(){
    
    const d={
      elementName:this.elementName,
      elementType: this.elementType,
      radioElement:this.radioElement,
      option:this.option,
    }
    this.formdata.push(d);
    this.elementName=''
     this.elementType=''
    this.radioElement=''
    this.enteredValue=''
    this.option=[]
  }
  toggle: boolean = false;
  handleClick(){
    this.toggle=true;

  }
  toggleselect:string='';
  newfield:string=''
  
  toggleInputVisibility(){
    this.isInputVisible = this.selectedElementType === 'select';
  }
  
  flag:boolean=false;
  viewForm(): void {
    const generatedHtml = this.dataform();
    
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(generatedHtml);
    } else {
      alert('Unable to open a new window. Please check your browser settings.');
    }
  }
  dataform():any{
     this.flag=true
     this.rowMyHtml='<form>'
     this.formdata.forEach((element, i) => {
      if(element.elementType==="text" || element.elementType==="email" || element.elementType ==="password"){
        
        this.tempHtml = `<label  style="margin-left: 10px; ">${element.elementName} ${element.radioElement=="yes"?'*':''}</label>\n`,
        this.tempHtml += `<input style="margin: 5px; padding: 5px;" type=${element.elementType} ${element.radioElement=="yes"?'required':''}></input> \n <br>\n`;
      }
      else if (element.elementType === "email") {
        this.tempHtml = `<label style="margin-left: 10px;">${element.elementName} ${element.radioElement == "yes" ? '*' : ''}</label>\n`;
        this.tempHtml += `<input style="margin: 5px; padding: 5px;" type=${element.elementType} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" ${element.radioElement == "yes" ? 'required' : ''}></input> \n <br>\n`;
      }
      else {
       
        this.tempHtml = `<label  style="margin-left: 10px; ">${element.elementName} ${element.radioElement=="yes"?'*':''}</label>\n`
        this.tempHtml += '<select>';
        element.option.forEach((ele:any)=>{
          this.tempHtml += `<option>${ele}</option>`;
        })
        this.tempHtml += `<input style="margin: 5px; padding: 5px;" type=${element.elementType} ${element.radioElement=="yes"?'required':''}></input> \n <br>\n`;
        this.tempHtml += `</select>\n<br>\n`
      }
      this.rowMyHtml += this.tempHtml;

      

  

  });
  this.rowMyHtml += `  <button  type="submit" value="Submit"/>Submit</button>\n`;
    this.rowMyHtml += '</form>'
    this.rowHtml = this.rowMyHtml;
    return this.rowHtml
}

addchoice():void{
      this.enteredValue=this.enteredValue;
      this.option.push(this.enteredValue);
      this.enteredValue='';
}
}
