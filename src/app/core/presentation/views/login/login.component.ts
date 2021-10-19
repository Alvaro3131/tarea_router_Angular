import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'adra-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route:Router){} 
  model: any={};
  go(){
  this.route.navigate(['/principal']); 
 
}
  ngOnInit(): void {
  }
  validar(){
    
    
     if ( this.model.user=="Alvaro"  &&  this.model.pa==12345678 ) {
       alert("Bienvenido:"+this.model.user);
      this.go();
      
     }else{
     
     }
      
    

  }
}
