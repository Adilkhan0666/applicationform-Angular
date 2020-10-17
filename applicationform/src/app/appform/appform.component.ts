import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormserviceService } from '../service/formservice.service';

@Component({
  selector: 'app-appform',
  templateUrl: './appform.component.html',
  styleUrls: ['./appform.component.css']
})


export class AppformComponent implements OnInit {


  constructor(private formService: FormserviceService,
    private router: Router) { }




  onSubmit(data) {
    console.log(data.username + "---" + data.email)
    this.formService.createTodo(data).subscribe(
      data => {
        this.router.navigate([''])
      }
    )
  }


  ngOnInit(): void {
  }

}
