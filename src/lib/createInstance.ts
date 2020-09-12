import mount, { RawContainer } from './mount';
import createControllers, { Controller } from './createControllers';
import createEditor from './createEditor';
import CreateSelect from './createSelection';

export interface Context {
    root: HTMLElement;
    edit: HTMLElement;
    selection: CreateSelect;
}

export type InstanceOptions = Partial<{
    controllers: Controller[];
    controllerClassName: string;
    mutex: boolean;
}>;

const instanceUUID = Symbol('uuid');

/** 生成一个编辑器实例 */
export default function createInstance(container: RawContainer, rawOptions?: Partial<InstanceOptions>) {
    const root = mount(container);
    if (instanceUUID in root) {
        // @ts-ignore
        if (root[instanceUUID]) return;
        else root.innerHTML = '';
    }
    const { e } = createEditor();
    const context: Context = {
        root,
        edit: e,
        selection: new CreateSelect(),
    };
    const { c } = createControllers({ context, root: e, rawOptions });

    e.addEventListener('mouseleave', () => context.selection.saveRange());
    e.addEventListener('change', () => context.selection.saveRange());

    root.appendChild(c);
    root.appendChild(e);

    // @ts-ignore
    root[instanceUUID] = !!rawOptions?.mutex;

    return {
        root,
        head: c,
        body: e,
    };
}
