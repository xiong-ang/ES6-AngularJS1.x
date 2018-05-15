// import "./style/hideWindow.css";


import servicesModule from "./services/servicesModule";
import controllersModule from "./controllers/controllersModule";
import directivesModule from "./directives/directivesModule";
import componentsModule from "./components/componentsModule";

const myApp = angular.module('myApp', [
    servicesModule,
    controllersModule,
    directivesModule,
    componentsModule
]);