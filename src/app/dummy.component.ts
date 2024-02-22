import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dummy-component',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class DummyComponent implements OnInit {

  title = 'poc-ci';

  ngOnInit(): void {
    const variable = 'hola'

    if (variable === 'hola') {
        this.title = 'variable is hola'
    } else {
        this.title = 'variable is not hola'
    }
}
}
