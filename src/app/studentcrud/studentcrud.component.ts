import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-studentcrud',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './studentcrud.component.html',
  styleUrl: './studentcrud.component.scss'
})
export class StudentcrudComponent {
  StudentArray: any[] = [];
  currentStudentID = "";
  name: string = "";
  address: string = "";
  phone: string = "";

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }
  getAllStudent() {
    this.http.get("http://localhost:8000/user/getAll")
      .subscribe((resultData: any) => {

        console.log(resultData);
        this.StudentArray = resultData.data;
      });

  }
}
