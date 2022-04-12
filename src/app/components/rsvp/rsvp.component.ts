import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { GuestService } from 'src/app/services/guest.service';
import { SweetMessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  @ViewChild('fileUpload')
  myInputVariable!: ElementRef;
  formConfirmation!: FormGroup;
  form!: FormGroup;
  detail?: string;
  selectedFile?: any;


  constructor(private guestService: GuestService,
    private messageService: SweetMessageService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      detail: null,
      image: null
    });
  }

  uploadFile(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.form.patchValue({
      image: file
    });
  }

  submitForm() {
    const formData = new FormData();
    formData.append("detail", this.form.controls['detail'].value);
    formData.append("image", this.form.controls['image'].value);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };

    this.http.post('https://backend.wedding-solvit.com/api/confirmation', formData, httpOptions).subscribe({
      next: () => this.messageService.successConfirmation(),
      error: () => this.messageService.badData(),
      complete: () => this.resetForm()
    })
    console.log(this.form.value);

  }

  resetForm() {
    this.form.reset();
    this.myInputVariable.nativeElement.value = "";
  }
}
