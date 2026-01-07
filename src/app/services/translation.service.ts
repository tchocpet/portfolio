import { Injectable, signal } from '@angular/core';
import { PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const TRANSLATIONS = {
  EN: {
    nav: {
      whyMe: 'Why me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'FRONTEND DEVELOPER',
      name: 'Diallo Thierno Mamadou Oury',
    },
    about: {
      heading: 'Why me',
      description:
        'I am passionate about coding because it allows me to turn ideas into functional solutions. I enjoy learning new technologies, improving my skills, and continuously growing in the field of IT. Problem-solving and curiosity drive me to become a better developer.',
      location: 'Bochum, Germany',
      relocate: 'open to relocate',
      remote: 'available for remote work',
      iam: 'I am',
    },

    skills: {
      heading: 'My Skills',
    },
    projects: {
      heading: 'Projects',
      projectA: {
        title: 'Project A',
        description: 'Short description',
      },
      projectB: {
        title: 'Project B',
        description: 'Short description',
      },
      project_1: {
        title: 'Join',
        description:
          'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      },
      project_2: {
        title: 'Zeitplaner',
        description:
          'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      },
      project_3: {
        title: 'Pollo Loco',
        description:
          'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco also to defeat against the crazy hen.',
      },
    },
    contact: {
      heading: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      placeholder: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
      },
      description:
        'Feel free to get in touch if you are looking for a motivated developer or would like to start a new project together. I am interested in junior or entry-level roles, especially in web development, where I can contribute, learn, and grow. I am always open to new challenges and excited to be part of innovative projects.',
      meta: {
        emailLabel: 'E-mail:',
        phoneLabel: 'Tel:',
      },
      privacyText:
        'I\'ve read the <a href="#">privacy policy</a> and agree to the processing of my data as outlined.',
      privacyPrefix: "I've read the",
      privacySuffix: 'and agree to the processing of my data as outlined.',
      errors: {
        nameRequired: 'Your name is required',
        emailRequired: 'Your email is required',
        messageRequired: 'Your message is required',
      },
      success: 'Message sent — thank you!',
      failure: 'Failed to send message. Please try again later.',
    },
    testimonials: {
      heading: 'Need a teamplayer? Here is what my colleagues said about me',
      t1: {
        name: 'Bhuwan',
        project: 'Project Zeitplaner',
        quote:
          'Thierno had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.',
      },
      t2: {
        name: 'Djene Camara',
        project: 'Project Pollo Loco',
        quote:
          'He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.',
      },
      t3: {
        name: 'Marcel Störensen',
        project: 'Project Join',
        quote:
          'He is a reliable and friendly person. Work in a structured way and write clear code. I recommend him as a colleague.',
      },
    },
    footer: {
      subtitle: 'frontend developer',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      copyright: '© 2025 Diallo Thierno. All rights reserved.',
    },
    legal: {
      title: 'Legal Notice',
      imprintTitle: 'Imprint',
      imprint:
        '[Student Names List] <br> [Adress of the JOIN operator - e.g. one of the students] <br> [Postcode and city]',
      acceptanceTitle: 'Acceptance of terms',
      acceptance:
        'By accessing and using Portfolio (Product), you acknowledge and agree to the following terms and conditions and any policies, guidelines, or amendments there to that may be presented to you from time to time.',
      disclaimerTitle: 'Disclaimer of warranties and limitation of liability',
      disclaimer:
        'The product is provided as-is without warranty of any kind. The listed students or developer accept no liability for damages arising from use.',
      date: 'Date: December 26 , 2025',
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'This privacy policy describes how we handle personal data when you contact us via the portfolio website.',
      controllerTitle: 'Data Controller',
      controller: '[Diallo Thierno - thiernomam78@gmail.com]',
      dataTitle: 'Data We Collect',
      data: 'We collect name, email and message when you submit the contact form. The data is used to reply to your inquiry.',
      updated: 'Last updated: July 26, 2025',
    },
    herocontact: {
      contact: 'Contact me',
    },
  },
  DE: {
    nav: {
      whyMe: 'Warum ich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    hero: {
      title: 'FRONTEND ENTWICKLER',
      name: 'Diallo Thierno Mamadou Oury',
    },
    about: {
      heading: 'Über mich',
      description:
        'Ich begeistere mich für das Programmieren, weil es mir ermöglicht, Ideen in funktionale Lösungen umzusetzen. Ich lerne gerne neue Technologien, verbessere kontinuierlich meine Fähigkeiten und entwickle mich stetig im IT-Bereich weiter. Problemlösungsfähigkeit und Neugier treiben mich an, ein besserer Entwickler zu werden.',
      location: 'Bochum, Deutschland',
      relocate: 'offen für Umzug',
      remote: 'offen für Remote-Arbeit',
      iam: 'Ich bin',
    },
    skills: {
      heading: 'Meine Fähigkeiten',
    },
    projects: {
      heading: 'Projekte',
      projectA: {
        title: 'Projekt A',
        description: 'Kurzbeschreibung',
      },
      projectB: {
        title: 'Projekt B',
        description: 'Kurzbeschreibung',
      },
      project_1: {
        title: 'Join',
        description:
          'Aufgabenmanager, inspiriert vom Kanban-System. Aufgaben per Drag & Drop erstellen und organisieren, Benutzer und Kategorien zuweisen.',
      },
      project_2: {
        title: 'Zeiterfassung',
        description:
          'Aufgabenmanager, inspiriert vom Kanban-System. Aufgaben per Drag & Drop erstellen und organisieren, Benutzer und Kategorien zuweisen.',
      },
      project_3: {
        title: 'Pollo Loco',
        description:
          'Ein objektorientiertes Wurf- und Fangspiel. Hilf Pepe, Münzen und Tabasco zu finden, um die verrückte Henne zu besiegen.',
      },
    },
    contact: {
      heading: 'Kontakt',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Senden',
      sending: 'Senden...',
      placeholder: {
        name: 'Ihr Name',
        email: 'Ihre E-Mail',
        message: 'Ihre Nachricht',
      },
      description:
        'Ermutigen Sie Personen, Sie zu kontaktieren, und beschreiben Sie, für welche Rolle Sie sich interessieren. Bekunden Sie Ihr Interesse, zu einem neuen Projekt beizutragen.',
      meta: {
        emailLabel: 'E-Mail:',
        phoneLabel: 'Tel:',
      },
      privacyText:
        'Ich habe die <a href="#">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      privacyPrefix: 'Ich habe die',
      privacySuffix: 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      errors: {
        nameRequired: 'Ihr Name ist erforderlich',
        emailRequired: 'Ihre E-Mail ist erforderlich',
        messageRequired: 'Ihre Nachricht ist erforderlich',
      },
      success: 'Nachricht gesendet — danke!',
      failure: 'Senden der Nachricht fehlgeschlagen. Bitte versuchen Sie es später erneut.',
    },
    testimonials: {
      heading: 'Benötigen Sie einen Teamplayer? Das sagen meine Kollegen über mich',
      t1: {
        name: 'Bhuwan',
        project: 'Projekt Zeitplaner',
        quote:
          'Thierno musste Inhalte in Zusammenarbeit mit den Teammitgliedern entwickeln, formatieren und liefern. Er ist eine zuverlässige und freundliche Person.',
      },
      t2: {
        name: 'Djene Camara',
        project: 'Projekt Pollo Loco',
        quote:
          'Er ist ein vertrauenswürdiger Teamplayer und kommt mit dem Stress von Deadlines zurecht. Strukturiertes Arbeiten und klarer Code.',
      },
      t3: {
        name: 'Marcel Störensen',
        project: 'Projekt Join',
        quote:
          'Er ist eine zuverlässige und freundliche Person. Arbeitet strukturiert und schreibt klaren Code. Ich empfehle ihn als Kollegen.',
      },
    },
    footer: {
      subtitle: 'frontend developer',
      legal: 'Rechtlicher Hinweis',
      privacy: 'Datenschutzerklärung',
      copyright: '© 2025 Thierno Diallo. Alle Rechte vorbehalten.',
    },
    legal: {
      title: 'Rechtlicher Hinweis',
      imprintTitle: 'Impressum',
      imprint:
        '[Auflistung der Studierenden] <br> [Adresse des JOIN-Betreibers – z. B. einer der Studierenden] <br> [Postleitzahl und Stadt]',
      acceptanceTitle: 'Akzeptanz der Bedingungen',
      acceptance:
        'Durch den Zugriff auf und die Nutzung von Portfolio (Produkt) erkennen Sie die folgenden Bedingungen und etwaige Richtlinien, Leitlinien oder Änderungen an, die Ihnen von Zeit zu Zeit präsentiert werden können.',
      disclaimerTitle: 'Haftungsausschluss und Haftungsbeschränkung',
      disclaimer:
        'Das Produkt wird ohne jegliche Gewährleistung bereitgestellt. Die aufgeführten Studierenden oder Entwickler übernehmen keine Haftung für Schäden, die sich aus der Nutzung ergeben.',
      date: 'Datum: 26. December 2025',
    },
    privacy: {
      title: 'Datenschutzerklärung',
      description:
        'Diese Datenschutzerklärung beschreibt, wie wir personenbezogene Daten behandeln, wenn Sie uns über das Portfolio kontaktieren.',
      controllerTitle: 'Datenverantwortlicher',
      controller: '[Name und Kontakt des Verantwortlichen]',
      dataTitle: 'Gesammelte Daten',
      data: 'Wir erfassen Name, E-Mail und Nachricht, wenn Sie das Kontaktformular absenden. Die Daten werden verwendet, um Ihre Anfrage zu beantworten.',
      updated: 'Zuletzt aktualisiert: 26. December2025',
    },
    herocontact: {
      contact: 'Kontakt',
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private platformId = inject(PLATFORM_ID);

  currentLanguage = signal<'EN' | 'DE'>('EN');
  translations = signal<Record<string, any>>(TRANSLATIONS.EN);

  constructor() {
    this.initializeLanguage();
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  setLanguage(lang: 'EN' | 'DE') {
    console.log(`Setting language to: ${lang}`);
    this.translations.set(TRANSLATIONS[lang]);
    this.currentLanguage.set(lang);

    if (this.isBrowser()) {
      localStorage.setItem('language', lang);
    }
  }

  getTranslation(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations();

    for (const k of keys) {
      value = value?.[k];
    }

    return typeof value === 'string' ? value : key;
  }

  initializeLanguage() {
    let lang: 'EN' | 'DE' = 'EN';

    if (this.isBrowser()) {
      const saved = localStorage.getItem('language') as 'EN' | 'DE' | null;
      if (saved === 'EN' || saved === 'DE') {
        lang = saved;
      }
    }

    this.setLanguage(lang);
  }
}
