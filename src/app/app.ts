import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Usando signals (nueva característica de Angular)
  title = signal('¡Hola Mundo con Angular 20.2!');
  mensaje = signal('Bienvenido a la nueva estructura simplificada de Angular.');
  contador = signal(0);
  mostrarInfo = signal(false);

  // Métodos de interacción
  cambiarMensaje() {
    const mensajes = [
      'Bienvenido a la nueva estructura simplificada de Angular.',
      '¡Angular 20.2 es más simple y poderoso! 🚀',
      'Los signals hacen que el state management sea increíble.',
      'Ya no necesitas app.component, solo app.ts ✨'
    ];
    
    const indiceActual = this.contador() % mensajes.length;
    this.mensaje.set(mensajes[indiceActual]);
    this.contador.update(valor => valor + 1);
  }

  toggleInfo() {
    this.mostrarInfo.update(valor => !valor);
  }

  reiniciar() {
    this.mensaje.set('Bienvenido a la nueva estructura simplificada de Angular.');
    this.contador.set(0);
    this.mostrarInfo.set(false);
  }
}