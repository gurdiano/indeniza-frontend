// import { Component, ElementRef, Input, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-cpf-formatter',
//   templateUrl: './cpf-formatter.component.html',
//   styleUrls: ['./cpf-formatter.component.css']
// })

// export class CpfFormatterComponent {
//   @Input() cpf: string; // Input property to receive the CPF value

//   @ViewChild('cpfInput', { static: true }) cpfInput: ElementRef; // Reference to the input element

//   formatCPF(valor: string) {
//     valor = valor.replace(/\D/g, ''); // Remove non-digit characters

//     if (valor.length > 3) {
//       valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
//     }
//     if (valor.length > 6) {
//       valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
//     }
//     if (valor.length > 9) {
//       valor = valor.replace(/(\d{3})(\d)/, '$1-$2');
//     }

//     return valor.substring(0, 14); // Limit length to 14 characters
//   }

//   onInputChange() {
//     if (this.cpfInput) {
//       this.cpfInput.nativeElement.value = this.formatCPF(this.cpfInput.nativeElement.value);
//     }
//   }
// }