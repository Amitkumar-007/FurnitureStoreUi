import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from './menubar/menubar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,MenubarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'furniturestoreui';
}
