import mount, { RawContainer } from './mount';
import createControllers, { Controller } from './createControllers';
import createEditor from './createEditor';
import CreateSelect from './createSelection';
import { RawCommandReturn } from '@/controller/command';

export interface Context {
    root: HTMLElement;
    edit: HTMLElement;
    selection: CreateSelect;
}

export type InstanceOptions = Partial<{
    controllers: Controller[];
    controllerClassName: string;
}>

export default function createInstance(container: RawContainer, rawOptions?: Partial<InstanceOptions>) {
    const root = mount(container);
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
    return root;
}
