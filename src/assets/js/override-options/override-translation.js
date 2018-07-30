import translationFile from '../../widget-translation'

// Client words translation
const overrideTranslate = {
  'fr-FR': {
    panel: 'Panneaux',
    widgetTitle: null,
    btnText: 'Avec animations',
  },
  'en-US': {
    panel: 'Panel',
    widgetTitle: null,
    btnText: 'With animations',
  },
}

Object.assign(overrideTranslate, translationFile)

export { overrideTranslate }
