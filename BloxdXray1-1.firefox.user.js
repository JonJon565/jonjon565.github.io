// ==UserScript==
// @name Bloxd.io X-ray Firefox
// @namespace JonJon565
// @match https://bloxd.io/*
// @grant none
// @version 1.1
// @author JonJon565-Many-Thanks-To-HKR
// @description X-ray for Bloxd.io
// @run-at document-start
// @icon https://bloxd.io/favicon-32x32.png
// ==/UserScript==

(() => {
    const replacementsArr = ['stone', 'stone_andesite', 'stone_diorite', 'messy_stone','stone_granite'];

    let URL = null;

    function patchScript(event) {
        if (URL === null) {
            const thirdScriptSrc = document.querySelector('body script:nth-of-type(3)')?.src;

            if (!thirdScriptSrc) return;

            URL = thirdScriptSrc;
        }
        const script = event.target;
        const src = script?.src;

        if (src && src.includes(URL)) {
            event.preventDefault();

            fetch(src)
                .then(res => res.text())
                .then(text => {
                    replacementsArr.forEach(word => {
                        try {
                            const toReplace = `("${word}"),`;
                            const replacement = `${toReplace}transTex: !0,`;

                            text = text.replaceAll(toReplace, replacement);
                            text = text.replace('throw new Error("only md5 is supported in the browser");return new o', 'throw new Error("only md5 is supported in the browser");return new null')


                            console.log("Replacement Success!", word, toReplace, replacement);
                        } catch (e) {
                            console.error("Error With Replacement: ", word, e.message);
                        }
                    });

                    const newNode = document.createElement('script');

                    newNode.innerHTML = text;

                    document.body.appendChild(newNode);
                });
        }
    }

    document.addEventListener('beforescriptexecute', patchScript, true);
})();
