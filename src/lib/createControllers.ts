import { Context } from './createInstance';
import { rawCommand, RawCommandReturn } from '@/controller/command';
import { InstanceOptions } from './createInstance';

export interface CreateControllersParams {
    root: HTMLElement;
    context: Context;
    rawOptions?: InstanceOptions;
}
type ControllerRenderReturn = HTMLElement | string;

export interface Controller {
    name: string;
    render: ((root: HTMLElement) => HTMLElement | string) | string;
    mounted?: (el: { parent: HTMLElement; head: Element }, options: { options: CreateControllersParams; command: RawCommandReturn }) => void;
}

/** 生成控制器 */
export default function createControllers(options: CreateControllersParams) {
    const { context, rawOptions } = options;
    const { controllers = [], controllerClassName = '' } = rawOptions || {};

    const head = document.createElement('div');
    const container = document.createElement<'div'>('div');
    const command = rawCommand(context.selection);

    controllers.forEach(({ render, mounted }) => {
        let ele: ControllerRenderReturn;
        if (typeof render === 'function') ele = render(head);
        else ele = render;

        let el: Element | undefined;
        if (ele instanceof HTMLElement) el = ele;
        else if (typeof ele === 'string') {
            container.innerHTML = ele;
            if (container.children.length > 1) {
                const wrap = document.createElement('div');
                while (container.firstChild) {
                    wrap.appendChild(container.firstChild);
                }
                el = wrap;
            } else el = container.children[0] || undefined;
        }
        if (el instanceof Element) {
            const newEl = document.createElement('div');
            newEl.appendChild(el);
            el.classList.add('controllerItemInner');
            newEl.classList.add('controllerItem');
            controllerClassName && newEl.classList.add(controllerClassName);
            head.appendChild(newEl);
            mounted && mounted({ parent: newEl, head }, { options, command });
        }
    });

    return {
        c: head,
    };
}
