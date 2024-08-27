import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GoogleMapsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent{

  constructor(private fb: FormBuilder) { }
  
  
  email: string = "shashank1742002@gmail.com"
  phone: string = '6205690133'
  linkedInUrl: string = "https://www.linkedin.com/in/shashank-sofdeve"
  submitted = false
  
  contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
  })
  
  get contactControl() {
    return this.contactForm.controls
  }
  onSubmit() {
    console.log("FormValue", this.contactForm.value)
    if (this.contactForm.valid) {
      localStorage.setItem('contactDetails', JSON.stringify(this.contactForm.value));
      alert('Details saved successfully!');
      this.contactForm.reset();
    }
  }
  // ---------------------------------------------------
  
  //API -- 'AIzaSyD2CNQ5DRkpmof4Ly25q-eS5jI_ZqYKmz4'  
  
  // center: google.maps.LatLngLiteral = {
  //     lat: 26.070320,
  //     lng: 85.405730
  //   };
  //   zoom = 4;
  //   markerOptions: google.maps.MarkerOptions = {
  //       draggable: false
  //     };
  // markerPositions: google.maps.LatLngLiteral[] = [];
  // addMarker(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  // }


  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 22.2736308,
      lng: 70.7512555
  };
  zoom = 6;

    moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}
