import { Component,Input,OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';



@Component({
  selector: 'app-codetemplate',
  templateUrl: './codetemplate.component.html',
  styleUrl: './codetemplate.component.css'
})

export class CodetemplateComponent {

  
  @Input() fields:any[]=[]
  customselect:string=''
  sanitizedHtml: SafeHtml = '';
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.generateHTML();
  }
  generateHTML() {
    let formHtml = '<div>'; // Start with a container div

    this.fields.forEach(field => {
      const label = field.elementName || '';
      const type = field.elementType || 'text';
      const required = field.radioElement==="yes" ? 'required' : '';

      // Build the HTML for each field
      formHtml += `
        <div>
          <label>${label}</label>
          <input type="${type}" ${required}>
        </div>
      `;
    });

    formHtml += '</div>'; // Close the container div

    // Sanitize the HTML
    this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(formHtml);
  }
  
  
}
