import translationFile from '../widget-translation'
import { addTranslation } from '@/lib/globalUtils.js'

// Client words translation
let overrideTranslate = {
  'fr-FR': {
    tabs: [
      {
        label: 'tickets',
        link: '#TicketingTab',
      },
    ],
  },
  'en-US': {
    tabs: [
      {
        label: 'tickets',
        link: '#TicketingTab',
      },
    ],
  },
}

addTranslation(overrideTranslate, translationFile)

export { overrideTranslate }
