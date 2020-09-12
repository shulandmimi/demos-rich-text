export default function createEditor() {
    const edi = document.createElement('div');
    edi.classList.add('ediatorable');
    edi.contentEditable = 'true';

    return {
        e: edi,
    };
}
