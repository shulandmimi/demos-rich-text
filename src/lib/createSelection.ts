/** 生成一个selection实例，处理selection */
export default class CreateSelect {
    _current?: Range;
    constructor() {}

    get current() {
        return this._current;
    }

    set current(newVal) {
        this._current = newVal;
    }

    /** 重置 */
    restoreSelection() {
        if (!this.current) return;
        var selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(this.current);
    }

    /** 保存一个选择范围 */
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
