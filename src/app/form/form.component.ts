import { DataSource } from '@angular/cdk/collections';
import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
 @Input() datafromparent:any


 constructor(){}

 ngOnInit(): void {
   
 }
 
 
  


}


