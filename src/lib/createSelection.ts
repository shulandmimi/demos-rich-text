export default class CreateSelect {
    _current?: Range;
    constructor() {}

    get current() {
        return this._current;
    }

    set current(newVal) {
        this._current = newVal;
    }

    restoreSelection() {
        if (!this.current) return;
        var selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(this.current);
    }

    saveRange(range?: Range) {
        if (range) {
            this.current = range;
            return;
        }
        const selection = window.getSelection();

        if (selection?.rangeCount === 0) return;
        const rawRange = selection?.getRangeAt(0);

        this.current = rawRange;
    }
}
