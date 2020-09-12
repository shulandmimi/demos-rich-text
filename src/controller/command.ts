import { Context } from '@/lib/createInstance';

const exec = document.execCommand.bind(document);

export const bold = () => exec('bold', true);

export const formatBlock = (tag: string) => exec('formatBlock', true, tag);

export const title = (tag: string) => formatBlock(tag);

export const color = (c: string) => exec('foreColor', true, c);

export const rawCommand = (selection: Context['selection']) => (handler: () => unknown) => {
    selection.restoreSelection();
    handler();
    selection.saveRange();
    selection.restoreSelection();
};
export type RawCommandReturn = ReturnType<typeof rawCommand>;
