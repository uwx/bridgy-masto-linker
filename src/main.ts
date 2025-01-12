console.log('hello masto linker world');

const processedElements = new WeakSet();

function findFiberByProps(element: Element, condition: (props: Record<string, any>) => boolean): any {
    const elAny = element as any;
    const fiberKey = Object.keys(elAny).find(k => k.startsWith('__reactFiber$'))!;
    let fiber = elAny[fiberKey];
    do {
        if (condition(fiber.memoizedProps)) return fiber;
        fiber = fiber.return;
    } while (fiber);

    console.warn('did not find fiber!');
    return undefined;
}

function addStyle(aCss: string) {
    const head = document.head ?? document.getElementsByTagName('head')[0];
    if (head) {
        const style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.textContent = aCss;
        head.appendChild(style);
        return style;
    }
    return null;
};

addStyle(`
.maxine-masto-button {
    background: none;
    border: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
    line-height: 32px;
}
.maxine-masto-button:hover {
    background: rgb(20, 27, 35);
    border-radius: 50%;
}
`);

// document.querySelector('[data-testid^="postThreadItem-by-"]').__reactFiber$9oo16v5l9w.return.return.memoizedProps.record.bridgyOriginalUrl
// document.querySelector('[data-testid="feedItem-by-fedi.eblu.space"]').__reactFiber$en58sxiacu8.return.return.return.return.return.return.return.memoizedProps.record.bridgyOriginalUrl

setInterval(() => {
    const newElements = [...document.querySelectorAll('[data-testid^="feedItem-"], [data-testid^="postThreadItem-"]')].map(e => {
        return {
            element: e,
            buttons: e.querySelector('[aria-label="Open post options menu"]')?.parentElement!.parentElement!.parentElement,
        };
    });

    for (const { element, buttons } of newElements) {
        if (processedElements.has(element)) {
            continue;
        }

        processedElements.add(element);

        const fiber = findFiberByProps(element, props => props?.record?.$type === 'app.bsky.feed.post');
        if (!fiber) continue;

        const originalUrl = fiber.memoizedProps.record.bridgyOriginalUrl;
        if (!originalUrl) continue;

        const button = document.createElement('button');
        button.textContent = '🌐';
        button.className = 'maxine-masto-button';
        button.onclick = e => {
            e.stopPropagation();
            e.preventDefault();

            document.location.href = originalUrl;
        };

        if (!buttons) continue;

        buttons.append(button);
    }
}, 250);