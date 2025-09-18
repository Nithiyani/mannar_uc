export type Language = 'en' | 'ta' | 'si'

export interface TranslationData {
  // Navigation
  nav: {
    home: string
    chairman: string
    events: string
    information: string
    contact: string
    gallery: string
    news: string
    announcements: string
    notices: string
    services: string
    tourism: string
  }
  
  // Common
  common: {
    readMore: string
    learnMore: string
    viewAll: string
    contact: string
    download: string
    search: string
    filter: string
    clear: string
    submit: string
    loading: string
    error: string
    success: string
    back: string
    next: string
    previous: string
    close: string
    menu: string
  }
  
  // Home page
  home: {
    hero: {
      title: string
      subtitle: string
      description: string
      exploreServices: string
      contactUs: string
    }
    vision: {
      title: string
      content: string
    }
    mission: {
      title: string
      content: string
    }
    chairman: {
      title: string
      name: string
      position: string
      message: string
      readFullMessage: string
    }
    services: {
      title: string
      subtitle: string
      description: string
      garbageCollection: {
        title: string
        description: string
      }
      certificates: {
        title: string
        description: string
      }
      publicNotices: {
        title: string
        description: string
      }
      eServices: {
        title: string
        description: string
      }
      tourism: {
        title: string
        description: string
      }
      communityServices: {
        title: string
        description: string
      }
    }
    events: {
      title: string
      description: string
      announcements: string
      notices: string
    }
    contact: {
      title: string
      description: string
      getInTouch: string
      quickContact: string
      findUs: string
      faqs: string
    }
  }
  
  // Footer
  footer: {
    about: string
    aboutDescription: string
    quickLinks: string
    contactInfo: string
    address: string
    phone: string
    email: string
    copyright: string
    builtWith: string
  }
  
  // Contact page
  contactPage: {
    title: string
    description: string
    directory: string
    name: string
    position: string
    telephone: string
    fax: string
    email: string
    division: string
    searchPlaceholder: string
    filterByDivision: string
    allDivisions: string
    export: string
    copy: string
    directoryInfo: string
    totalDivisions: string
    totalContacts: string
    lastUpdated: string
    quickActions: string
    emailMainOffice: string
    downloadDirectory: string
    printDirectory: string
    mostContacted: string
  }
}