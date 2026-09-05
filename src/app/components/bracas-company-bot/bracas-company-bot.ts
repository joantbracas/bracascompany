<<<<<<< HEAD
import { Component, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  sender: 'bot' | 'user';
  text?: string;
  options?: { label: string; action: string }[];
=======
import { Component, signal, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface OptionItem {
  label: string;
  action: string;
}

interface Message {
  sender: 'bot' | 'user';
  text?: string;
  options?: OptionItem[];
>>>>>>> a8c4ab4b75ea753d20f6cc70d934923ba28cb2b0
  linkUrl?: string;
  linkText?: string;
}

@Component({
  selector: 'app-bracas-company-bot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bracas-company-bot.html',
  styleUrls: ['./bracas-company-bot.scss']
})
export class BracasCompanyBotComponent {
<<<<<<< HEAD
=======
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

>>>>>>> a8c4ab4b75ea753d20f6cc70d934923ba28cb2b0
  constructor(private cdr: ChangeDetectorRef) {}
  userMessage: string = '';
  isOpen: boolean = false;
  
  messages = signal<Message[]>([
    {
      sender: 'bot',
      text: '¡Hola! Bienvenido a <strong>Bracas Company</strong>. 🌐 Selecciona la unidad de negocio o marca que deseas explorar:',
      options: [
        { label: '🍔 Bracasfood (Comidas)', action: 'bracasfood' },
        { label: '🧵 Brades (Confecciones)', action: 'brades' },
        { label: '🕶️ Bracas Styles (Accesorios)', action: 'styles' },
        { label: '📈 C&M Studios (Marketing)', action: 'cm' },
        { label: '🌿 Fundación (Medio Ambiente)', action: 'fundacion' },
        { label: '💻 FBD (Fullstack & Global)', action: 'fbd' }
      ]
    }
  ]);

<<<<<<< HEAD
  toggleChat(): void {
    this.isOpen = !this.isOpen;
=======
  scrollToBottom(): void {
    try {
      if (this.scrollContainer) {
        setTimeout(() => {
          this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        }, 50);
      }
    } catch(err) { }
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.scrollToBottom();
    }
>>>>>>> a8c4ab4b75ea753d20f6cc70d934923ba28cb2b0
    this.cdr.detectChanges();
  }

  selectOption(action: string): void {
    let responseText = '';
    let linkUrl = '';
    let linkText = '';
<<<<<<< HEAD

    switch (action) {
      case 'bracasfood':
        responseText = '🍔 <strong>Bracasfood</strong>: Tu paladar al siguiente nivel con la mejor comida rápida y antojos.';
        linkUrl = 'https://wa.me/573218119383';
        linkText = 'Pedir en Bracasfood (WhatsApp)';
        break;
      case 'brades':
        responseText = '🧵 <strong>Brades</strong>: Confecciones y moda urbana con estilo único.';
        linkUrl = 'https://wa.me/573113355665';
        linkText = 'Ver Catálogo Brades';
        break;
      case 'styles':
        responseText = '🕶️ <strong>Bracas Styles</strong>: Los accesorios y complementos ideales para tu outfit.';
        linkUrl = 'https://wa.me/573173966891';
        linkText = 'Contactar Bracas Styles';
        break;
      case 'cm':
        responseText = '📈 <strong>C&M[JB]_Studios</strong>: Marketing digital, posicionamiento de marca y estrategias comerciales.';
        linkUrl = 'https://wa.me/573173966891';
        linkText = 'Asesoría C&M Studios';
        break;
      case 'fundacion':
        responseText = '🌿 <strong>Fundación</strong>: Proyectos ecológicos, cuidado del medio ambiente y sostenibilidad.';
        linkUrl = 'https://wa.me/573113355665';
        linkText = 'Unirme a la Fundación';
        break;
      case 'fbd':
        responseText = '💻 <strong>FBD (FaceBrandDigital)</strong>: Desarrollo Fullstack avanzado y posicionamiento global de software.';
        linkUrl = 'https://github.com/facebranddigital';
        linkText = 'Ver Repositorios GitHub';
        break;
      default:
        responseText = '¿En qué más te podemos ayudar desde Bracas Company?';
    }

    this.messages.update(msgs => [
      ...msgs,
      { sender: 'user', text: action.toUpperCase() },
      { sender: 'bot', text: responseText, linkUrl, linkText }
    ]);
=======
    let targetElementId = '';
    let questionnaireOptions: OptionItem[] = [];

    // Definir las preguntas y opciones interactivas según el nicho seleccionado
    switch (action) {
      case 'bracasfood':
        responseText = '🍔 <strong>Bracasfood</strong>: ¡Excelente elección! ¿Qué se te antoja hoy? Selecciona una opción para armar tu pedido:';
        linkUrl = 'https://wa.me/573218119383';
        linkText = 'Completar pedido por WhatsApp';
        targetElementId = 'cuestionario-bracasfood';
        questionnaireOptions = [
          { label: '🍟 Salchipapa Especial', action: 'pedir_salchipapa' },
          { label: '📦 Pasa-aborrajada / Antojos', action: 'pedir_aborrajada' },
          { label: '🥤 Bebidas y Bolos', action: 'pedir_bebidas' }
        ];
        break;

      case 'brades':
        responseText = '🧵 <strong>Brades</strong>: El estilo urbano nos define. ¿Qué tipo de prenda o confección buscas?';
        linkUrl = 'https://wa.me/573113355665';
        linkText = 'Ver Catálogo Brades';
        targetElementId = 'cuestionario-brades';
        questionnaireOptions = [
          { label: '🧥 Hoodies y Buzos Oversize', action: 'ropa_hoodies' },
          { label: '👖 Pantalones Cargo / Urbano', action: 'ropa_cargo' },
          { label: '👕 Camisetas Personalizadas', action: 'ropa_camisetas' }
        ];
        break;

      case 'styles':
        responseText = '🕶️ <strong>Bracas Styles</strong>: Complementa tu outfit. ¿Qué accesorio te interesa?';
        linkUrl = 'https://wa.me/573173966891';
        linkText = 'Contactar Bracas Styles';
        targetElementId = 'cuestionario-styles';
        questionnaireOptions = [
          { label: '👓 Gafas de Sol de Temporada', action: 'acc_gafas' },
          { label: '⌚ Relojes y Manillas Exclusivas', action: 'acc_relojes' },
          { label: '🎒 Gorras y Canguros', action: 'acc_gorras' }
        ];
        break;

      case 'cm':
        responseText = '📈 <strong>C&M Studios</strong>: Impulsemos tu marca. ¿Qué servicio de marketing requieres?';
        linkUrl = 'https://wa.me/573173966891';
        linkText = 'Asesoría C&M Studios';
        targetElementId = 'cuestionario-cm';
        questionnaireOptions = [
          { label: '🚀 Posicionamiento de Marca y Ads', action: 'mkt_ads' },
          { label: '📱 Gestión de Redes Sociales', action: 'mkt_redes' },
          { label: '🎥 Producción de Contenido Digital', action: 'mkt_contenido' }
        ];
        break;

      case 'fundacion':
        responseText = '🌿 <strong>Fundación (Medio Ambiente)</strong>: Súmate al cambio ecológico. ¿Cómo deseas participar?';
        linkUrl = 'https://wa.me/573113355665';
        linkText = 'Unirme a la Fundación';
        targetElementId = 'cuestionario-fundacion';
        questionnaireOptions = [
          { label: '♻️ Voluntariado en Jornadas Verdes', action: 'eco_voluntariado' },
          { label: '🌳 Donación y Plantación de Árboles', action: 'eco_donacion' },
          { label: '💡 Talleres de Reciclaje y Sostenibilidad', action: 'eco_talleres' }
        ];
        break;

      case 'fbd':
        responseText = '💻 <strong>FBD (Fullstack & Global)</strong>: Soluciones tecnológicas de alto nivel. ¿Qué solución buscas?';
        linkUrl = 'https://github.com/facebranddigital';
        linkText = 'Ver Repositorios GitHub';
        targetElementId = 'cuestionario-fbd';
        questionnaireOptions = [
          { label: '⚙️ Automatización de Procesos', action: 'tech_automatizacion' },
          { label: '📊 Medición y Analítica de Datos', action: 'tech_medicion' },
          { label: '🔒 Ciberseguridad y Arquitectura Web', action: 'tech_seguridad' }
        ];
        break;

      default:
        responseText = '¿En qué más te podemos ayudar desde Bracas Company?';
        // Si es una opción interna de los cuestionarios que el usuario presiona:
        responseText = `Opción seleccionada: <strong>${action.replace('_', ' ').toUpperCase()}</strong>. ¡Un asesor te contactará con los detalles!`;
    }

    // Actualizamos el chat con la nueva interacción
    this.messages.update(msgs => [
      ...msgs,
      { sender: 'user', text: action.toUpperCase() },
      { sender: 'bot', text: responseText, options: questionnaireOptions.length > 0 ? questionnaireOptions : undefined, linkUrl, linkText }
    ]);

    this.scrollToBottom();

    // Scroll suave hacia la sección del cuestionario correspondiente en la página principal
    if (targetElementId) {
      const element = document.getElementById(targetElementId);
      if (element) {
        this.isOpen = false; // Cerramos el chat para despejar la vista
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
>>>>>>> a8c4ab4b75ea753d20f6cc70d934923ba28cb2b0
  }

  sendMessage(): void {
    const text = this.userMessage.trim();
<<<<<<< HEAD
=======
    if (!text) return;
>>>>>>> a8c4ab4b75ea753d20f6cc70d934923ba28cb2b0

    this.messages.update(msgs => [
      ...msgs,
      { sender: 'user', text },
      { sender: 'bot', text: `Recibido. Un asesor de Bracas Company te atenderá pronto respecto a: "${text}".` }
    ]);
    this.userMessage = '';
<<<<<<< HEAD
=======
    this.scrollToBottom();
>>>>>>> a8c4ab4b75ea753d20f6cc70d934923ba28cb2b0
  }
}
