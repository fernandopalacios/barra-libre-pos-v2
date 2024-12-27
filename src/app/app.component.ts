import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ConfigurationService } from './services/configuration.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private configService: ConfigurationService) {}
  ngOnInit(): void {
    this.configService.getBankAccountInformation().subscribe({
      next: (response) =>{
        this.configService.bankAccount = response;
      }
    });
    this.configService.getBankAccountInformation().subscribe({
      next: (response) =>{
        this.configService.paymentMethod = response;
      }
    });
  }

  title = 'barra-libre-pos-v2';

}
