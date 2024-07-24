import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements OnInit{
  
  contactform!:FormGroup;
  
  constructor(private formbuilder:FormBuilder){
    this.contactform=this.formbuilder.group({
      email:['',[Validators.email,Validators.required]],
      message:['',[Validators.required,Validators.minLength(10)]]
    });
  }
  hasErrors(field:string,typeError:string){
  return this.contactform.get(field)?.hasError(typeError) && this.contactform.get(field)?.touched; 
  }

  enviar(e:Event){
    e.preventDefault();
    console.log(this.contactform?.value);
  }

  ngOnInit(): void {
    
  }

}
