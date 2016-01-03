/*

    Firebase HTML

*/


< firebase-collection id="elements" location="https://charlesiescom.firebaseio.com/elements"data = "{{elements}}" on-firebase-value="_eles"> </firebase-collection>
<firebase-collection id="packages"location="https://charlesiescom.firebaseio.com/packages" data="{{packages}}"></firebase-collection>




/*

    Defualt packages and elements

*/


var _data = {
  "guides": [{
    "title": "Using Elements",
    "summary": "Learn how to install and use Polymer Elements in your own projects.",
    "tags": [
      "beginner"
    ],
    "elementsByName": [
      "paper-checkbox"
    ],
    "updated": "2015-05-03T00:00:00.000Z",
    "name": "using-elements"
  }, {
    "title": "neon-animation",
    "summary": "A short guide to neon-animation and neon-animated-pages",
    "tags": [
      "animation",
      "intermediate"
    ],
    "elementsByName": [
      "neon-animation",
      "neon-animated-pages"
    ],
    "updated": "2015-05-26T00:00:00.000Z",
    "name": "using-neon-animations"
  }],
  "packages": [{
    "name": "iron-elements",
    "title": "Iron Elements",
    "color": "#81c784",
    "symbol": "Fe",
    "tagline": "Polymer core elements",
    "version": "1.0.1",
    "description": "Iron elements are a set of visual and non-visual utility elements. They include elements for working with layout, user input, selection, and scaffolding apps.",
    "elementsByName": [
      "iron-a11y-announcer",
      "iron-a11y-keys",
      "iron-a11y-keys-behavior",
      "iron-ajax",
      "iron-autogrow-textarea",
      "iron-behaviors",
      "iron-collapse",
      "iron-component-page",
      "iron-doc-viewer",
      "iron-fit-behavior",
      "iron-flex-layout",
      "iron-form",
      "iron-form-element-behavior",
      "iron-icon",
      "iron-icons",
      "iron-iconset",
      "iron-iconset-svg",
      "iron-image",
      "iron-input",
      "iron-jsonp-library",
      "iron-localstorage",
      "iron-media-query",
      "iron-menu-behavior",
      "iron-meta",
      "iron-overlay-behavior",
      "iron-pages",
      "iron-range-behavior",
      "iron-resizable-behavior",
      "iron-selector",
      "iron-signals",
      "iron-test-helpers",
      "iron-validatable-behavior",
      "iron-validator-behavior"
    ],
    "guides": []
  }, {
    "name": "paper-elements",
    "title": "Paper Elements",
    "color": "#ffffff",
    "symbol": "Md",
    "tagline": "Material design elements",
    "version": "1.0.1",
    "description": "Paper elements are a set of visual elements that implement Google's Material Design.",
    "elementsByName": [
      "paper-behaviors",
      "paper-button",
      "paper-checkbox",
      "paper-dialog",
      "paper-dialog-behavior",
      "paper-dialog-scrollable",
      "paper-drawer-panel",
      "paper-fab",
      "paper-header-panel",
      "paper-icon-button",
      "paper-input",
      "paper-item",
      "paper-material",
      "paper-menu",
      "paper-progress",
      "paper-radio-button",
      "paper-radio-group",
      "paper-ripple",
      "paper-slider",
      "paper-spinner",
      "paper-styles",
      "paper-tabs",
      "paper-toast",
      "paper-toggle-button",
      "paper-toolbar",
      "paper-scroll-header-panel"
    ],
    "guides": []
  }, {
    "name": "google-web-components",
    "title": "Google Web Components",
    "color": "#64B5F6",
    "symbol": "Go",
    "tagline": "Components for Google's APIs and services",
    "version": "1.0.1",
    "description": "Google Web Components",
    "elementsByName": [
      "google-apis",
      "google-feeds",
      "google-map",
      "google-signin",
      "google-sheets",
      "google-youtube",
      "google-analytics",
      "google-calendar",
      "google-chart",
      "google-castable-video",
      "google-hangout-button",
      "google-url-shortener",
      "google-youtube-upload",
      "google-streetview-pano",
      "firebase-element"
    ],
    "guides": []
  }, {
    "name": "gold-elements",
    "color": "#ffb74d",
    "title": "Gold Elements",
    "symbol": "Au",
    "tagline": "Ecommerce Elements",
    "version": "1.0.1",
    "description": "The gold elements are built for e-commerce use-cases like checkout flows.",
    "elementsByName": [
      "gold-cc-cvc-input",
      "gold-cc-expiration-input",
      "gold-cc-input",
      "gold-email-input",
      "gold-phone-input",
      "gold-zip-input"
    ],
    "guides": []
  }, {
    "name": "neon-elements",
    "title": "Neon Elements",
    "color": "#a7ffeb",
    "symbol": "Ne",
    "tagline": "Animation and Special Effects",
    "version": "1.0.0",
    "description": "\"Neon elements implement special effects.\"",
    "elementsByName": [
      "neon-animation"
    ],
    "guides": []
  }, {
    "name": "platinum-elements",
    "title": "Platinum Elements",
    "color": "#cfd8dc",
    "symbol": "Pt",
    "tagline": "Offline, push, and more",
    "version": "1.0.1",
    "description": "Elements to turn your web page into a true webapp, with push, offline, and more.",
    "elementsByName": [
      "platinum-sw",
      "platinum-push-messaging"
    ],
    "guides": []
  }, {
    "name": "molecules",
    "title": "Molecules",
    "color": "#ffab91",
    "symbol": "Mo",
    "tagline": "Wrappers for third-party libraries",
    "version": "1.0.0",
    "description": "Molecules are elements that wrap other javascript libraries. More of these coming soon!",
    "elementsByName": [
      "marked-element"
    ],
    "guides": []
  }],
  "elements": [{
    "name": "firebase-element",
    "version": "1.0.1",
    "source": "GoogleWebComponents/firebase-element",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "tags": [],
    "demo": null,
    "active": null,
    "elementsByName": [
      "firebase-collection",
      "firebase-document",
      "firebase-auth"
    ],
    "behaviors": [
      "Polymer.FirebaseQueryBehavior"
    ]
  }, {
    "name": "gold-cc-cvc-input",
    "version": "1.0.2",
    "source": "PolymerElements/gold-cc-cvc-input",
    "target": "^1.0.0",
    "packageByName": "gold-elements",
    "description": "Provides an input field for a credit card cvc number",
    "tags": [
      "input"
    ],
    "hero": "/bower_components/gold-cc-cvc-input/hero.svg",
    "demo": null,
    "active": null,
    "elementsByName": [
      "gold-cc-cvc-input"
    ],
    "behaviors": []
  }, {
    "name": "gold-cc-expiration-input",
    "version": "1.0.2",
    "source": "PolymerElements/gold-cc-expiration-input",
    "target": "^1.0.0",
    "packageByName": "gold-elements",
    "description": "A validating input for a credit card expiration date",
    "tags": [
      "input"
    ],
    "hero": "/bower_components/gold-cc-expiration-input/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "gold-cc-expiration-input",
    "elementsByName": [
      "gold-cc-expiration-input",
      "date-input",
      "date-validator"
    ],
    "behaviors": []
  }, {
    "name": "gold-cc-input",
    "version": "1.0.4",
    "source": "PolymerElements/gold-cc-input",
    "target": "^1.0.0",
    "packageByName": "gold-elements",
    "description": "A credit card input field",
    "tags": [
      "input"
    ],
    "hero": "/bower_components/gold-cc-input/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "gold-cc-input",
    "elementsByName": [
      "gold-cc-input"
    ],
    "behaviors": []
  }, {
    "name": "gold-email-input",
    "version": "1.0.2",
    "source": "PolymerElements/gold-email-input",
    "target": "^1.0.0",
    "packageByName": "gold-elements",
    "description": "An email input field",
    "tags": [
      "input"
    ],
    "hero": "/bower_components/gold-email-input/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "gold-email-input",
    "elementsByName": [
      "gold-email-input",
      "email-validator"
    ],
    "behaviors": []
  }, {
    "name": "gold-phone-input",
    "version": "1.0.3",
    "source": "PolymerElements/gold-phone-input",
    "target": "^1.0.0",
    "packageByName": "gold-elements",
    "description": "A validating input for a phone number",
    "tags": [
      "input"
    ],
    "hero": "/bower_components/gold-phone-input/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "gold-phone-input",
    "elementsByName": [
      "gold-phone-input"
    ],
    "behaviors": []
  }, {
    "name": "gold-zip-input",
    "version": "1.0.1",
    "source": "PolymerElements/gold-zip-input",
    "target": "^1.0.0",
    "packageByName": "gold-elements",
    "description": "An input field for a zip code",
    "tags": [
      "input"
    ],
    "hero": "/bower_components/gold-zip-input/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "gold-zip-input",
    "elementsByName": [
      "gold-zip-input",
      "zip-validator"
    ],
    "behaviors": []
  }, {
    "name": "google-analytics",
    "version": "1.0.2",
    "source": "GoogleWebComponents/google-analytics",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Encapsulates Google Analytics dashboard features into web components",
    "tags": [
      "analytics",
      "dashboard"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-analytics-chart",
    "elementsByName": [
      "google-analytics-query",
      "google-analytics-chart",
      "google-analytics-view-selector",
      "google-analytics-date-selector",
      "google-analytics-dashboard",
      "google-analytics-loader"
    ],
    "behaviors": []
  }, {
    "name": "google-apis",
    "version": "1.0.2",
    "source": "GoogleWebComponents/google-apis",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Web components to load Google API libraries",
    "tags": [
      "apis"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-client-loader",
    "elementsByName": [
      "google-legacy-loader",
      "google-client-loader",
      "google-plusone-api",
      "google-maps-api",
      "google-realtime-api",
      "google-youtube-api",
      "google-js-api"
    ],
    "behaviors": []
  }, {
    "name": "google-calendar",
    "version": "1.0.1",
    "source": "GoogleWebComponents/google-calendar",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Web components for working with Google Calendar",
    "tags": [
      "calendar"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-calendar-list",
    "elementsByName": [
      "google-calendar-list",
      "google-calendar-busy-now"
    ],
    "behaviors": []
  }, {
    "name": "google-castable-video",
    "version": "1.0.1",
    "source": "GoogleWebComponents/google-castable-video",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "HTML5 Video Element with extended Chromecast functionality.",
    "tags": [
      "video",
      "chromecast"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-castable-video",
    "elementsByName": [
      "google-castable-video"
    ],
    "behaviors": []
  }, {
    "name": "google-chart",
    "version": "1.0.2",
    "source": "GoogleWebComponents/google-chart",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Encapsulates Google Charts into a web component",
    "tags": [
      "chart",
      "charts",
      "google-visualization"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-chart",
    "elementsByName": [
      "google-chart"
    ],
    "behaviors": []
  }, {
    "name": "google-feeds",
    "version": "1.0.1",
    "source": "GoogleWebComponents/google-feeds",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Google Feeds element for Polymer",
    "tags": [
      "feeds",
      "api"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-feeds",
    "elementsByName": [
      "google-feeds"
    ],
    "behaviors": []
  }, {
    "name": "google-hangout-button",
    "version": "1.0.1",
    "source": "GoogleWebComponents/google-hangout-button",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Google Hangout button web component",
    "tags": [
      "hangouts"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-hangout-button",
    "elementsByName": [
      "google-hangout-button"
    ],
    "behaviors": []
  }, {
    "name": "google-map",
    "version": "1.0.3",
    "source": "GoogleWebComponents/google-map",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Google Maps web components",
    "tags": [
      "apis",
      "maps"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-map",
    "elementsByName": [
      "google-map",
      "google-map-marker",
      "google-map-search",
      "google-map-directions"
    ],
    "behaviors": []
  }, {
    "name": "google-sheets",
    "version": "1.0.3",
    "source": "GoogleWebComponents/google-sheets",
    "target": "^1.0.1",
    "packageByName": "google-web-components",
    "description": "Web components to interact with Google Sheets",
    "tags": [
      "spreadsheets"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-sheets",
    "elementsByName": [
      "google-sheets"
    ],
    "behaviors": []
  }, {
    "name": "google-signin",
    "version": "1.0.2",
    "source": "GoogleWebComponents/google-signin",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Web components to authenticate with Google services",
    "tags": [
      "sign-in",
      "authentication"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-signin",
    "elementsByName": [
      "google-signin",
      "google-signin-aware"
    ],
    "behaviors": []
  }, {
    "name": "google-streetview-pano",
    "version": "1.0.1",
    "source": "GoogleWebComponents/google-streetview-pano",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Google Maps street view web component",
    "tags": [
      "streetview",
      "apis",
      "google-maps"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-streetview-pano",
    "elementsByName": [
      "google-streetview-pano"
    ],
    "behaviors": []
  }, {
    "name": "google-url-shortener",
    "version": "1.0.1",
    "source": "GoogleWebComponents/google-url-shortener",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Web component to shorten URLs with the Google URL Shortener API",
    "tags": [
      "url-shortener"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-url-shortener",
    "elementsByName": [
      "google-url-shortener"
    ],
    "behaviors": []
  }, {
    "name": "google-youtube",
    "version": "1.1.1",
    "source": "GoogleWebComponents/google-youtube",
    "target": "^1.1.0",
    "packageByName": "google-web-components",
    "description": "YouTube video playback web component.",
    "tags": [
      "youtube"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-youtube",
    "elementsByName": [
      "google-youtube"
    ],
    "behaviors": []
  }, {
    "name": "google-youtube-upload",
    "version": "1.1.2",
    "source": "GoogleWebComponents/google-youtube-upload",
    "target": "^1.0.0",
    "packageByName": "google-web-components",
    "description": "Upload videos to YouTube from your browser.",
    "tags": [
      "youtube",
      "upload"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "google-youtube-upload",
    "elementsByName": [
      "google-youtube-upload"
    ],
    "behaviors": []
  }, {
    "name": "iron-a11y-announcer",
    "version": "1.0.1",
    "source": "PolymerElements/iron-a11y-announcer",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "A singleton element that simplifies announcing text to screen readers.",
    "tags": [
      "a11y",
      "live"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-a11y-announcer",
    "elementsByName": [
      "iron-a11y-announcer"
    ],
    "behaviors": []
  }, {
    "name": "iron-a11y-keys",
    "version": "1.0.2",
    "source": "PolymerElements/iron-a11y-keys",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "A basic element implementation of iron-a11y-keys-behavior, matching the legacy core-a11y-keys.",
    "tags": [
      "a11y",
      "input"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-a11y-keys",
    "elementsByName": [
      "iron-a11y-keys"
    ],
    "behaviors": []
  }, {
    "name": "iron-a11y-keys-behavior",
    "version": "1.0.5",
    "source": "PolymerElements/iron-a11y-keys-behavior",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "A behavior that enables keybindings for greater a11y.",
    "tags": [
      "a11y",
      "input"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "IronA11yKeysBehavior",
    "elementsByName": [],
    "behaviors": [
      "IronA11yKeysBehavior"
    ]
  }, {
    "name": "iron-ajax",
    "version": "1.0.0",
    "source": "PolymerElements/iron-ajax",
    "target": "1.0.0",
    "packageByName": "iron-elements",
    "description": "Makes it easy to make ajax calls and parse the response",
    "tags": [],
    "demo": null,
    "active": null,
    "elementsByName": [
      "iron-ajax",
      "iron-request"
    ],
    "behaviors": []
  }, {
    "name": "iron-autogrow-textarea",
    "version": "1.0.2",
    "source": "PolymerElements/iron-autogrow-textarea",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "A textarea element that automatically grows with input",
    "tags": [
      "input",
      "textarea"
    ],
    "hero": "/bower_components/iron-autogrow-textarea/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-autogrow-textarea",
    "elementsByName": [
      "iron-autogrow-textarea"
    ],
    "behaviors": []
  }, {
    "name": "iron-behaviors",
    "version": "1.0.4",
    "source": "PolymerElements/iron-behaviors",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Provides a set of behaviors for the iron elements",
    "tags": [],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "Polymer.IronControlState",
    "elementsByName": [],
    "behaviors": [
      "Polymer.IronButtonState",
      "Polymer.IronControlState"
    ]
  }, {
    "name": "iron-collapse",
    "version": "1.0.2",
    "source": "PolymerElements/iron-collapse",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Provides a collapsable container",
    "tags": [
      "container"
    ],
    "hero": "/bower_components/iron-collapse/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-collapse",
    "elementsByName": [
      "iron-collapse"
    ],
    "behaviors": []
  }, {
    "name": "iron-component-page",
    "version": "1.0.5",
    "source": "PolymerElements/iron-component-page",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Turns a raw element definition into beautiful documentation",
    "tags": [
      "docs"
    ],
    "demo": null,
    "active": null,
    "elementsByName": [
      "iron-component-page"
    ],
    "behaviors": []
  }, {
    "name": "iron-doc-viewer",
    "version": "1.0.3",
    "source": "PolymerElements/iron-doc-viewer",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Elements for rendering Polymer component documentation.",
    "tags": [],
    "demo": {
      "desc": "Basic Demo",
      "path": "demo/index.html"
    },
    "active": "iron-doc-viewer",
    "elementsByName": [
      "iron-doc-viewer",
      "iron-doc-property"
    ],
    "behaviors": []
  }, {
    "name": "iron-fit-behavior",
    "version": "1.0.3",
    "source": "PolymerElements/iron-fit-behavior",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Fits an element inside another element",
    "tags": [
      "behavior"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "Polymer.IronFitBehavior",
    "elementsByName": [],
    "behaviors": [
      "Polymer.IronFitBehavior"
    ]
  }, {
    "name": "iron-flex-layout",
    "version": "1.0.2",
    "source": "PolymerElements/iron-flex-layout",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Provide flexbox-based layouts",
    "tags": [
      "layout"
    ],
    "demo": null,
    "active": null,
    "elementsByName": [],
    "behaviors": []
  }, {
    "name": "iron-form",
    "version": "1.0.3",
    "source": "PolymerElements/iron-form",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Makes it easier to manage forms",
    "tags": [],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-form",
    "elementsByName": [
      "iron-form"
    ],
    "behaviors": []
  }, {
    "name": "iron-form-element-behavior",
    "version": "1.0.1",
    "source": "PolymerElements/iron-form-element-behavior",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Enables a custom element to be included in an iron-form",
    "tags": [
      "form"
    ],
    "demo": null,
    "active": null,
    "elementsByName": [],
    "behaviors": []
  }, {
    "name": "iron-icon",
    "version": "1.0.2",
    "source": "PolymerElements/iron-icon",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "An element that supports displaying an icon",
    "tags": [
      "icon"
    ],
    "hero": "/bower_components/iron-icon/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-icon",
    "elementsByName": [
      "iron-icon"
    ],
    "behaviors": []
  }, {
    "name": "iron-icons",
    "version": "1.0.3",
    "source": "PolymerElements/iron-icons",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "A set of icons for use with iron-icon",
    "tags": [
      "icon"
    ],
    "demo": null,
    "active": null,
    "elementsByName": [],
    "behaviors": []
  }, {
    "name": "iron-iconset",
    "version": "1.0.2",
    "source": "PolymerElements/iron-iconset",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Represents a set of icons",
    "tags": [
      "icon"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-iconset",
    "elementsByName": [
      "iron-iconset"
    ],
    "behaviors": []
  }, {
    "name": "iron-iconset-svg",
    "version": "1.0.4",
    "source": "PolymerElements/iron-iconset-svg",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Manages a set of svg icons",
    "tags": [
      "icon"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-iconset-svg",
    "elementsByName": [
      "iron-iconset-svg"
    ],
    "behaviors": []
  }, {
    "name": "iron-image",
    "version": "1.0.2",
    "source": "PolymerElements/iron-image",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "An image-displaying element with lots of convenient features",
    "tags": [
      "media"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-image",
    "elementsByName": [
      "iron-image"
    ],
    "behaviors": []
  }, {
    "name": "iron-input",
    "version": "1.0.3",
    "source": "PolymerElements/iron-input",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "An input element with data binding",
    "tags": [
      "input"
    ],
    "hero": "/bower_components/iron-input/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-input",
    "elementsByName": [
      "iron-input"
    ],
    "behaviors": []
  }, {
    "name": "iron-jsonp-library",
    "version": "1.0.2",
    "source": "PolymerElements/iron-jsonp-library",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Loads jsonp libraries",
    "tags": [
      "behavior"
    ],
    "hero": "/bower_components/iron-jsonp-library/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "Polymer.IronJsonpLibraryBehavior",
    "elementsByName": [
      "iron-jsonp-library"
    ],
    "behaviors": [
      "Polymer.IronJsonpLibraryBehavior"
    ]
  }, {
    "name": "iron-localstorage",
    "version": "1.0.3",
    "source": "PolymerElements/iron-localstorage",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Provides access to local storage",
    "tags": [
      "storage"
    ],
    "hero": "/bower_components/iron-localstorage/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-localstorage",
    "elementsByName": [
      "iron-localstorage"
    ],
    "behaviors": []
  }, {
    "name": "iron-media-query",
    "version": "1.0.2",
    "source": "PolymerElements/iron-media-query",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Lets you bind to a CSS media query",
    "tags": [
      "media"
    ],
    "hero": "/bower_components/iron-media-query/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-media-query",
    "elementsByName": [
      "iron-media-query"
    ],
    "behaviors": []
  }, {
    "name": "iron-menu-behavior",
    "version": "1.0.1",
    "source": "PolymerElements/iron-menu-behavior",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Provides accessible menu behavior",
    "tags": [
      "behavior",
      "menu"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "Polymer.IronMenuBehavior",
    "elementsByName": [],
    "behaviors": [
      "Polymer.IronMenuBehavior"
    ]
  }, {
    "name": "iron-meta",
    "version": "1.0.3",
    "source": "PolymerElements/iron-meta",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Useful for sharing information across a DOM tree",
    "tags": [],
    "hero": "/bower_components/iron-meta/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-meta-query",
    "elementsByName": [
      "iron-meta",
      "iron-meta-query"
    ],
    "behaviors": []
  }, {
    "name": "iron-overlay-behavior",
    "version": "1.0.4",
    "source": "PolymerElements/iron-overlay-behavior",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Provides a behavior for making an element an overlay",
    "tags": [
      "behavior",
      "overlay"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "Polymer.IronOverlayBehavior",
    "elementsByName": [
      "iron-overlay-backdrop"
    ],
    "behaviors": [
      "Polymer.IronOverlayBehavior"
    ]
  }, {
    "name": "iron-pages",
    "version": "1.0.2",
    "source": "PolymerElements/iron-pages",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Organizes a set of pages and shows one at a time",
    "tags": [
      "container"
    ],
    "demo": null,
    "active": null,
    "elementsByName": [
      "iron-pages"
    ],
    "behaviors": []
  }, {
    "name": "iron-range-behavior",
    "version": "1.0.2",
    "source": "PolymerElements/iron-range-behavior",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Provides a behavior for something with a minimum and maximum value",
    "tags": [
      "behavior"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "Polymer.IronRangeBehavior",
    "elementsByName": [],
    "behaviors": [
      "Polymer.IronRangeBehavior"
    ]
  }, {
    "name": "iron-resizable-behavior",
    "version": "1.0.2",
    "source": "PolymerElements/iron-resizable-behavior",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Coordinates the flow of resizeable elements",
    "tags": [
      "behavior"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "Polymer.IronResizableBehavior",
    "elementsByName": [],
    "behaviors": [
      "Polymer.IronResizableBehavior"
    ]
  }, {
    "name": "iron-selector",
    "version": "1.0.2",
    "source": "PolymerElements/iron-selector",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Manages a set of elements that can be selected",
    "tags": [
      "selector"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-selector",
    "elementsByName": [
      "iron-selector"
    ],
    "behaviors": [
      "Polymer.IronMultiSelectableBehavior",
      "Polymer.IronSelectableBehavior"
    ]
  }, {
    "name": "iron-signals",
    "version": "1.0.2",
    "source": "PolymerElements/iron-signals",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Basic publish-subscribe functionality",
    "tags": [
      "signals"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "iron-signals",
    "elementsByName": [
      "iron-signals"
    ],
    "behaviors": []
  }, {
    "name": "iron-test-helpers",
    "version": "1.0.1",
    "source": "PolymerElements/iron-test-helpers",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Utility classes to help make testing easier",
    "tags": [
      "test"
    ],
    "demo": null,
    "active": null,
    "elementsByName": [],
    "behaviors": []
  }, {
    "name": "iron-validatable-behavior",
    "version": "1.0.2",
    "source": "PolymerElements/iron-validatable-behavior",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Provides a behavior for an element that validates user input",
    "tags": [
      "behavior"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "Polymer.IronValidatableBehavior",
    "elementsByName": [],
    "behaviors": [
      "Polymer.IronValidatableBehavior"
    ]
  }, {
    "name": "iron-validator-behavior",
    "version": "1.0.1",
    "source": "PolymerElements/iron-validator-behavior",
    "target": "^1.0.0",
    "packageByName": "iron-elements",
    "description": "Implements a input validator",
    "tags": [
      "behavior"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "Polymer.IronValidatorBehavior",
    "elementsByName": [],
    "behaviors": [
      "Polymer.IronValidatorBehavior"
    ]
  }, {
    "name": "marked-element",
    "version": "1.0.2",
    "source": "PolymerElements/marked-element",
    "target": "^1.0.0",
    "packageByName": "molecules",
    "description": "Element wrapper for the marked library",
    "tags": [
      "marked",
      "markdown",
      "container",
      "wrapper"
    ],
    "hero": "/bower_components/marked-element/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "marked-element",
    "elementsByName": [
      "marked-element"
    ],
    "behaviors": []
  }, {
    "name": "neon-animation",
    "version": "1.0.4",
    "source": "PolymerElements/neon-animation",
    "target": "^1.0.0",
    "packageByName": "neon-elements",
    "tags": [
      "web-animations"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "neon-animated-pages",
    "elementsByName": [
      "neon-animated-pages",
      "opaque-animation",
      "neon-animatable",
      "fade-in-animation",
      "hero-animation",
      "scale-up-animation",
      "scale-down-animation",
      "reverse-ripple-animation",
      "fade-out-animation",
      "slide-from-right-animation",
      "cascaded-animation",
      "slide-from-left-animation",
      "slide-right-animation",
      "slide-left-animation",
      "transform-animation",
      "slide-up-animation",
      "ripple-animation",
      "slide-down-animation"
    ],
    "behaviors": [
      "Polymer.NeonAnimationRunnerBehavior",
      "Polymer.NeonAnimatableBehavior",
      "Polymer.NeonAnimationBehavior",
      "Polymer.NeonSharedElementAnimatableBehavior",
      "Polymer.NeonSharedElementAnimationBehavior"
    ]
  }, {
    "name": "paper-behaviors",
    "version": "1.0.2",
    "source": "PolymerElements/paper-behaviors",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "Common behaviors across the paper elements",
    "tags": [
      "behavior"
    ],
    "demo": null,
    "active": null,
    "elementsByName": [],
    "behaviors": [
      "Polymer.PaperButtonBehaviorImpl"
    ]
  }, {
    "name": "paper-button",
    "version": "1.0.1",
    "source": "PolymerElements/paper-button",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "Material design button",
    "tags": [
      "button"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-button",
    "elementsByName": [
      "paper-button"
    ],
    "behaviors": []
  }, {
    "name": "paper-checkbox",
    "version": "1.0.3",
    "source": "PolymerElements/paper-checkbox",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design checkbox",
    "tags": [
      "checkbox",
      "control"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-checkbox",
    "elementsByName": [
      "paper-checkbox"
    ],
    "behaviors": []
  }, {
    "name": "paper-dialog",
    "version": "1.0.0",
    "source": "PolymerElements/paper-dialog",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A Material Design dialog",
    "tags": [
      "dialog",
      "overlay"
    ],
    "hero": "/bower_components/paper-dialog/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-dialog",
    "elementsByName": [
      "paper-dialog"
    ],
    "behaviors": []
  }, {
    "name": "paper-dialog-behavior",
    "version": "1.0.4",
    "source": "PolymerElements/paper-dialog-behavior",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "Implements a behavior used for material design dialogs",
    "tags": [
      "dialog",
      "overlay",
      "behavior"
    ],
    "hero": "/bower_components/paper-dialog-behavior/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "Polymer.PaperDialogBehavior",
    "elementsByName": [],
    "behaviors": [
      "Polymer.PaperDialogBehavior"
    ]
  }, {
    "name": "paper-dialog-scrollable",
    "version": "1.0.1",
    "source": "PolymerElements/paper-dialog-scrollable",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A scrollable area used inside the material design dialog",
    "tags": [
      "dialog",
      "overlay"
    ],
    "hero": "/bower_components/paper-dialog-scrollable/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-dialog-scrollable",
    "elementsByName": [
      "paper-dialog-scrollable"
    ],
    "behaviors": []
  }, {
    "name": "paper-drawer-panel",
    "version": "1.0.2",
    "source": "PolymerElements/paper-drawer-panel",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A responsive drawer panel",
    "tags": [
      "drawer",
      "responsive",
      "layout"
    ],
    "hero": "/bower_components/paper-drawer-panel/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-drawer-panel",
    "elementsByName": [
      "paper-drawer-panel"
    ],
    "behaviors": []
  }, {
    "name": "paper-fab",
    "version": "1.0.2",
    "source": "PolymerElements/paper-fab",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design floating action button",
    "tags": [
      "button"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-fab",
    "elementsByName": [
      "paper-fab"
    ],
    "behaviors": []
  }, {
    "name": "paper-header-panel",
    "version": "1.0.2",
    "source": "PolymerElements/paper-header-panel",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A header and content wrapper for layout with headers",
    "tags": [
      "layout"
    ],
    "hero": "/bower_components/paper-header-panel/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-header-panel",
    "elementsByName": [
      "paper-header-panel"
    ],
    "behaviors": []
  }, {
    "name": "paper-icon-button",
    "version": "1.0.2",
    "source": "PolymerElements/paper-icon-button",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design icon button",
    "tags": [
      "button",
      "icon",
      "control"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-icon-button",
    "elementsByName": [
      "paper-icon-button"
    ],
    "behaviors": []
  }, {
    "name": "paper-input",
    "version": "1.0.5",
    "source": "PolymerElements/paper-input",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "Material design text fields",
    "tags": [
      "input"
    ],
    "hero": "/bower_components/paper-input/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-input",
    "elementsByName": [
      "paper-input",
      "paper-input-error",
      "paper-input-container",
      "paper-input-char-counter",
      "paper-textarea"
    ],
    "behaviors": [
      "Polymer.PaperInputBehavior",
      "Polymer.PaperInputAddonBehavior"
    ]
  }, {
    "name": "paper-item",
    "version": "1.0.1",
    "source": "PolymerElements/paper-item",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material-design styled list item",
    "tags": [
      "item"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-item",
    "elementsByName": [
      "paper-item",
      "paper-icon-item",
      "paper-item-body"
    ],
    "behaviors": []
  }, {
    "name": "paper-material",
    "version": "1.0.0",
    "source": "PolymerElements/paper-material",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design container that looks like a lifted sheet of paper",
    "tags": [
      "container"
    ],
    "demo": null,
    "active": null,
    "elementsByName": [
      "paper-material"
    ],
    "behaviors": []
  }, {
    "name": "paper-menu",
    "version": "1.0.0",
    "source": "PolymerElements/paper-menu",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "Implements an accessible material design menu",
    "tags": [
      "menu"
    ],
    "hero": "/bower_components/paper-menu/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-menu",
    "elementsByName": [
      "paper-menu"
    ],
    "behaviors": []
  }, {
    "name": "paper-progress",
    "version": "1.0.0",
    "source": "PolymerElements/paper-progress",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design progress bar",
    "tags": [
      "progress"
    ],
    "hero": "/bower_components/paper-progress/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-progress",
    "elementsByName": [
      "paper-progress"
    ],
    "behaviors": []
  }, {
    "name": "paper-radio-button",
    "version": "1.0.3",
    "source": "PolymerElements/paper-radio-button",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design radio button",
    "tags": [
      "radio",
      "control"
    ],
    "hero": "/bower_components/paper-radio-button/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-radio-button",
    "elementsByName": [
      "paper-radio-button"
    ],
    "behaviors": []
  }, {
    "name": "paper-radio-group",
    "version": "1.0.3",
    "source": "PolymerElements/paper-radio-group",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A group of material design radio buttons",
    "tags": [
      "radio",
      "control"
    ],
    "hero": "/bower_components/paper-radio-group/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-radio-group",
    "elementsByName": [
      "paper-radio-group"
    ],
    "behaviors": []
  }, {
    "name": "paper-ripple",
    "version": "1.0.1",
    "source": "PolymerElements/paper-ripple",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "Adds a material design ripple to any container",
    "tags": [
      "ripple"
    ],
    "hero": "/bower_components/paper-ripple/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-ripple",
    "elementsByName": [
      "paper-ripple"
    ],
    "behaviors": []
  }, {
    "name": "paper-scroll-header-panel",
    "version": "1.0.4",
    "source": "PolymerElements/paper-scroll-header-panel",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A header bar with scrolling behavior",
    "tags": [
      "layout",
      "responsive"
    ],
    "hero": "/bower_components/paper-scroll-header-panel/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-scroll-header-panel",
    "elementsByName": [
      "paper-scroll-header-panel"
    ],
    "behaviors": []
  }, {
    "name": "paper-slider",
    "version": "1.0.3",
    "source": "PolymerElements/paper-slider",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design-style slider",
    "tags": [
      "slider",
      "control"
    ],
    "hero": "/bower_components/paper-slider/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-slider",
    "elementsByName": [
      "paper-slider"
    ],
    "behaviors": []
  }, {
    "name": "paper-spinner",
    "version": "1.0.1",
    "source": "PolymerElements/paper-spinner",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design spinner",
    "tags": [
      "spinner",
      "loading"
    ],
    "hero": "/bower_components/paper-spinner/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-spinner",
    "elementsByName": [
      "paper-spinner"
    ],
    "behaviors": []
  }, {
    "name": "paper-styles",
    "version": "1.0.7",
    "source": "PolymerElements/paper-styles",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "Common (global) styles for Material Design elements.",
    "tags": [
      "style"
    ],
    "demo": null,
    "active": null,
    "elementsByName": [],
    "behaviors": []
  }, {
    "name": "paper-tabs",
    "version": "1.0.0",
    "source": "PolymerElements/paper-tabs",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "Material design tabs",
    "tags": [
      "tabs",
      "control"
    ],
    "hero": "/bower_components/paper-tabs/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-tabs",
    "elementsByName": [
      "paper-tabs",
      "paper-tab"
    ],
    "behaviors": []
  }, {
    "name": "paper-toast",
    "version": "1.0.0",
    "source": "PolymerElements/paper-toast",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design notification toast",
    "tags": [
      "toast",
      "notification"
    ],
    "hero": "/bower_components/paper-toast/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-toast",
    "elementsByName": [
      "paper-toast"
    ],
    "behaviors": []
  }, {
    "name": "paper-toggle-button",
    "version": "1.0.3",
    "source": "PolymerElements/paper-toggle-button",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design toggle button control",
    "tags": [
      "toggle",
      "control"
    ],
    "hero": "/bower_components/paper-toggle-button/hero.svg",
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-toggle-button",
    "elementsByName": [
      "paper-toggle-button"
    ],
    "behaviors": []
  }, {
    "name": "paper-toolbar",
    "version": "1.0.2",
    "source": "PolymerElements/paper-toolbar",
    "target": "^1.0.0",
    "packageByName": "paper-elements",
    "description": "A material design toolbar that is easily customizable",
    "tags": [
      "toolbar",
      "layout"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/index.html"
    },
    "active": "paper-toolbar",
    "elementsByName": [
      "paper-toolbar"
    ],
    "behaviors": []
  }, {
    "name": "platinum-push-messaging",
    "version": "1.0.0",
    "source": "PolymerElements/platinum-push-messaging",
    "target": "~1.0.0",
    "packageByName": "platinum-elements",
    "description": "Subscribes for push messaging and handles notifications.",
    "tags": [
      "push",
      "messaging",
      "notification",
      "service-worker",
      "serviceworker"
    ],
    "demo": {
      "desc": "demo",
      "path": "demo/"
    },
    "active": "platinum-push-messaging",
    "elementsByName": [
      "platinum-push-messaging"
    ],
    "behaviors": []
  }, {
    "name": "platinum-sw",
    "version": "1.0.1",
    "source": "PolymerElements/platinum-sw",
    "target": "~1.0.1",
    "packageByName": "platinum-elements",
    "description": "Service worker helper elements.",
    "tags": [
      "caching",
      "offline",
      "service-worker",
      "serviceworker"
    ],
    "demo": {
      "desc": "An offline-capable eReader demo.",
      "path": "demo/index.html"
    },
    "active": "platinum-sw-register",
    "elementsByName": [
      "platinum-sw-cache",
      "platinum-sw-fetch",
      "platinum-sw-import-script",
      "platinum-sw-register"
    ],
    "behaviors": []
  }],
  "tags": {}
}

/*

    Add defualt packs in to have firebase generate keys

*/



/*

    Update the package.elements with firebase generated keys instead of elements name, matching the names

*/
observers: [
    '_addStock(packs, eles)'
  ],

  _addStock: function(p, e) {
    // console.log(this.packages, this.elements);

    for (i in _data.packages) {
      // console.log('adding package: ', _data.packages[i].name);
      // this.$.packages.add(_data.packages[i]);
    }

    for (ii in _data.elements) {
      // console.log('adding element: ', _data.elements[ii].name);
      // this.$.elements.add(_data.elements[ii]);
    }
    // FIN
    // this._updatePackagesKeys();
    // this._updateElementsKeys();
  },

  _updateElementsKeys: function() {

    for (var i = 0; i < this.elements.length; i++) {

      // console.log(i, this.elements[i].packageByName);
      var elementsPackageName = this.elements[i].packageByName
      for (var ii = 0; ii < this.packages.length; ii++) {
        // console.log(this.packages[ii].name);
        var currentPackageName = this.packages[ii].name;
        if (currentPackageName == elementsPackageName) {
          // console.log('Match! ', elementsPackageName);
          var currentPackage = this.packages[ii];
          var currentElement = this.elements[i];

          // console.log(currentPackage.__firebaseKey__);

          // console.log("this element: ", currentElement.name, " is in package: ", currentPackage.name);

          var packageRef = this.$.packages.query.child(currentPackage.__firebaseKey__ + "/elements/" + currentElement.__firebaseKey__);
          // console.log(objSave);
          // console.log(packageRef.set(true));

        }
      }
    }
  },
  _updatePackagesKeys: function() {

    for (var i = 0; i < this.elements.length; i++) {
      // console.log(i, this.elements[i].name);
      var elementsPackageName = this.elements[i].packageByName
      for (var ii = 0; ii < this.packages.length; ii++) {
        // console.log(this.packages[ii].name);
        var currentPackageName = this.packages[ii].name;
        if (currentPackageName == elementsPackageName) {
          // console.log('Match! ', elementsPackageName);
          var currentPackage = this.packages[ii];
          var currentElement = this.elements[i];
          // console.log(currentPackage.__firebaseKey__);

          // console.log("this element: ", currentElement.name, " is in package: ", currentPackage.name);

          var packageRef = this.$.elements.query.child(
            currentElement.__firebaseKey__ + "/packages/" + currentPackage.__firebaseKey__);

          // console.log(objSave);
          console.log(packageRef.set(true));
        }
      }
    }
  },
  _eles: function(e) {
    this.eles = true;
  },
  _packs: function(e) {
    this.packs = true;
  }
