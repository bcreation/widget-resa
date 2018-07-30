// Default options of widget
import translationFile from './widget-translation'
export default class DefaultOptions {
  constructor() {
    this.language = navigator.language || navigator.userLanguage
    this.webservice = null
    this.webserviceQA = null
    this.website = null
    this.baseWebsite = null
    this.websiteQA = null
    this.baseWebsiteQA = null
    this.webservices = {}
    this.webservicesQA = {}
    this.pageProduits = null
    this.pageDateEvent = null
    this.widgetType = null
    this.dateMin = new Date()
    this.dateMax = '+12m'
    this.minBookingPeriod = 1
    this.maxBookingPeriod = 30
    this.roomsMin = 1
    this.roomsMax = 10
    this.adultMin = 1
    this.adultMax = 10
    this.childMin = 1
    this.childMax = 10
    this.babyMin = 1
    this.babyMax = 10
    this.widgetId = 0
    this.ageMin = 3
    this.ageMax = 11
    this.ageBabyMin = 0
    this.ageBabyMax = 2
    this.nbVisitorMin = 0
    this.nbVisitorMax = 10
    this.nbNightMin = 1
    this.nbNightMax = 2
    this.displayPrice = true
    this.prefixImage = ''
    this.suffixImage = ''
    this.defaultImage = ''
    this.ticketingUrl = ''
    this.widgetTitle = ''
    this.displayStartingFrom = false
    this.paramInit = null
    this.tabs = [
      {
        label: 'tickets',
        link: '#ticketsComponent',
      },
    ]
    this.translation = translationFile
  }
}
