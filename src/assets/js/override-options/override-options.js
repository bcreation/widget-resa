// Option add-on of clients widget
import DefaultOptions from '../../widget-options'
import { overrideTranslate } from './override-translation'

let overrideOptions = new DefaultOptions()

/*
  ----------------- WIDGET 1 -----------------
*/

// default navigator language
overrideOptions.language = navigator.language
// base url
overrideOptions.baseWebsite = 'https://billetterie-oceano.tickeasy.com'
// base url test
overrideOptions.baseWebsiteQA = 'https://billetterie-oceano-test.tickeasy.com'
// API url
overrideOptions.baseWebservice = '/API/ITUuGeST4x/'
// full base url
overrideOptions.website = overrideOptions.baseWebsite + overrideOptions.language
// full base test url
overrideOptions.websiteQA =
  overrideOptions.baseWebsiteQA + overrideOptions.language
// full url webservice
overrideOptions.webservice =
  overrideOptions.baseWebsite + overrideOptions.baseWebservice
// full url test webservice
overrideOptions.webserviceQA =
  overrideOptions.baseWebsiteQA + overrideOptions.baseWebservice
// url with list of webservice
overrideOptions.webservices = {
  validResearch: overrideOptions.webservice + 'ValidResearch/',
  validResearchTest: overrideOptions.webserviceQA + 'ValidResearch/',
}

// Nom de la page du CMS où on est renvoyé après click sur une offre
overrideOptions.pageProduits = 'choix-date-des-produits'
// Id du widget défini lors de la création en base via l'interface admin BOOKING
overrideOptions.widgetId = '1815539294020300143'
// Id du site exploitant
overrideOptions.siteExploitantId = '1627789714197066822'
// translation words of client
overrideOptions.translation = overrideTranslate

export { overrideOptions }
