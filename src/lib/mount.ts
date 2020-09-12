export type RawContainer = string | HTMLElement;

export default function mount(container: RawContainer) {
    const el = query(container);
    if (!el) throw Error('select a valid mount element');
    return el;
}

function query(container: RawContainer): HTMLElement | null {
    if (typeof container === 'string') return document.querySelector(container);
    else if (container && container instanceof HTMLElement) return container;
    return null;
}
