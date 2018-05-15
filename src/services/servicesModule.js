const services = angular.module("servicesModule",[]);

import factoryService from "./factoryService";
services.factory("factoryService",factoryService);

import wapperService from "./wapperService";
services.service("wapperService", wapperService);

export default services.name;