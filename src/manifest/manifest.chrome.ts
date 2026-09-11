import {
    getBackgroundScript,
    getBaseManifest,
    getBrowserActionInfo,
    getCommonPermissions,
    getHostPermissions
} from "./shared";
import ManifestV3 = chrome.runtime.ManifestV3;
// import ManifestV2 = chrome.runtime.ManifestV2;

export function getManifestForChrome(): ManifestV3 {
    return {
        // as far as I know manifest version 3 does not allow request blocking
        manifest_version: 3,
        // stable extension id: chrome-extension://fldbjgjjcegglddjjkjccibcffggidjc/
        key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnJreDslTPceF/y9IR50QeU/4VzMlR124AfKLQnEK8X03zB/L3JMHoG9Vw2YqucCRg+uawpi4PEMq+IfVxXN2O452vOA5KhMUT0c7gaS9gVNjVmVPAe6sv4rXadySXosC7UJ9Rge5BiQYB22BQ1l0mV/zh7jIhiY7VnPUTdE3w0eE6WL9YieEqA9ivlzZoUDXyIIUizG+N+3bwlCvkO4On242bXrKosXdsUc/F2Lf47Brmiy+7mzPCY117QDe9DExoMlbkMrGB4cPganWhCeW1EOeUGkr3rbpwN4vPZ4HuMfQQF4FIs/m20tnXBxnFtib4k1j/7jbQT0+JZupTfRFowIDAQAB",
        ...getBaseManifest(),
        background: {
            service_worker: getBackgroundScript(),
        },
        action: getBrowserActionInfo(),
        host_permissions: getHostPermissions(),
        permissions: getCommonPermissions(),
    }
    /*return {
        manifest_version: 2,
        ...getBaseManifest(),
        background: {
            scripts: [getBackgroundScript()],
        },
        browser_action: getBrowserActionInfo(),
        permissions: [
            ...getHostPermissions(),
            ...getCommonPermissions(),
        ],
    }*/
}