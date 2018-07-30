// Option add-on of clients widget
import DefaultOptions from '../widget-options'
import { overrideTranslate } from './override-translation'

let overrideOptions = new DefaultOptions()

/*
  ----------------- WIDGET 1 -----------------
*/

// default navigator language
overrideOptions.language = navigator.language
// base url
overrideOptions.baseWebsite = 'https://your-website'
// base url test
overrideOptions.baseWebsiteQA = 'https://your-website-test'
// API url
overrideOptions.baseWebservice = '/your-api/'
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

// Id du widget défini lors de la création en base via l'interface admin BOOKING
overrideOptions.widgetId = '1815539294020300143'
// translation words of client
overrideOptions.translation = overrideTranslate

export { overrideOptions }
