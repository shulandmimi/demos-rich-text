import { Context } from '@/lib/createInstance';

const exec = document.execCommand.bind(document);

/** 加粗 */
export const bold = () => exec('bold', true);

/** 生成tag */
export const formatBlock = (tag: string) => exec('formatBlock', true, tag);

/** 添加标题 */
export const title = (tag: string) => formatBlock(tag);

/** 改变颜色 */
export const color = (c: string) => exec('foreColor', true, c);

/** 普通执行命令exec使用 */
export const rawCommand = (selection: Context['selection']) => (handler: () => unknown) => {
    selection.restoreSelection();
    handler();
    selection.saveRange();
    selection.restoreSelection();
};
export type RawCommandReturn = ReturnType<typeof rawCommand>;
