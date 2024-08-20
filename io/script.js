var originalFetch = fetch;
fetch = function(...args){
    if(args[0]?.startsWith('/'))
    {
        args[0] = 'https://bloxd.io' + args[0];
    }
    if(args[0]?.url?.startsWith('/'))
    {
        args[0].src = 'https://bloxd.io' + args[0].src;
    }
    if(args[0].includes('/metrics/cookies'))
    {
        args[0] = 'https://bloxdmarketplace.com/api/POST?url=https://bloxd.io/metrics/cookies';
    }
    if(args[0].includes('/traffic-code'))
    {
        args[0] = 'https://bloxdmarketplace.com/api/POST?url=https://bloxd.io/traffic-code';
    }
    return originalFetch.apply(this, args);
}
var originalXMLHttpRequest = XMLHttpRequest;
XMLHttpRequest = function(...args){
    if(args[0]?.startsWith('/'))
    {
        args[0] = 'https://bloxd.io' + args[0];
    }
    if(args[0]?.url?.startsWith('/'))
    {
        args[0].src = 'https://bloxd.io' + args[0].src;
    }
    if(args[0].includes('/metrics/cookies'))
    {
        args[0] = 'https://bloxdmarketplace.com/api/POST?url=https://bloxd.io/metrics/cookies';
    }
    if(args[0].includes('/traffic-code'))
    {
        args[0] = 'https://bloxdmarketplace.com/api/POST?url=https://bloxd.io/traffic-code';
    }
    
    return originalXMLHttpRequest.apply(this, args);
}
Object.defineProperty(HTMLScriptElement.prototype, 'src', {
    set: function(value) {
        if (value?.startsWith?.('/')) {
            value = 'https://bloxd.io' + value;
        }
        this.setAttribute('src', value);
    },
    configurable: true,
    enumerable: true
});


Object.defineProperty(HTMLLinkElement.prototype, 'href', {
    set: function(value) {
        if (value?.startsWith?.('/')) {
            value = 'https://bloxd.io' + value;
        }
        this.setAttribute('href', value);
    },
    configurable: true,
    enumerable: true
});
