import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-formgenerate',
  templateUrl: './formgenerate.component.html',
  styleUrl: './formgenerate.component.css'
})

export class FormgenerateComponent implements OnInit{
  @Input() datafromparent:any;
  customselect:string='';
  ngOnInit(): void {
    
  }
  
}
