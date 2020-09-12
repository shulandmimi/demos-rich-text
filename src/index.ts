import createInstance from './lib/createInstance';
import { bold, title, color } from '@/controller/command';
import { Controller } from './lib/createControllers';
import './global.css';

const controllers: Controller[] = [
    {
        name: 'bold',
        render: () => {
            return '<svg t="1599810489692" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="686" width="200" height="200"><path d="M320 825.088h202.752c125.184 0 220.416-52.992 220.416-167.424 0-76.8-45.312-119.808-106.752-134.4v-3.84c48.384-16.896 77.568-70.656 77.568-122.88C713.984 290.56 624.896 256 508.16 256H320v569.088z m113.664-337.152V343.552h67.584c68.352 0 102.144 19.968 102.144 69.888 0 45.312-31.488 74.496-103.68 74.496H433.664z m0 249.6V571.648h79.104c78.336 0 119.808 23.808 119.808 79.104 0 59.136-42.24 86.784-119.808 86.784H433.664z" fill="#000000" p-id="687"></path></svg>';
        },
        mounted(el, head, { command }) {
            el.addEventListener('click', () => {
                command(() => bold());
            });
        },
    },
    {
        name: 'title',
        render: () => {
            return '<svg t="1599810780265" class="icon" viewBox="0 0 1216 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1671" width="200" height="200"><path d="M285.803 419.24V155.595h87.328a23.73 23.73 0 1 0 0-47.461H142.945a23.73 23.73 0 1 0 0 47.46h87.328v263.673a27.765 27.765 0 0 0 55.53 0z m183.199-246.058c10.441 0 18.984-3.323 26.103-9.967s10.916-15.662 10.916-26.104-3.796-18.984-10.44-25.629a37.705 37.705 0 0 0-26.579-9.993c-10.441 0-18.984 3.323-26.104 9.967s-10.441 15.188-10.441 25.629 3.322 18.984 10.441 26.103c7.12 6.645 15.663 9.967 26.104 9.967z m27.053 246.797V228.685a27.053 27.053 0 1 0-54.106 0v191.267a27.053 27.053 0 1 0 54.106 0z m192.216 4.746a22.307 22.307 0 0 0-22.306-22.307h-9.967c-5.695 0-9.492-1.424-12.34-4.272-2.847-3.322-3.797-7.593-3.797-13.289V246.245h32.274a22.307 22.307 0 1 0 0-44.613H639.86v-73.09a27.053 27.053 0 1 0-54.105 0v73.116h-21.832a22.307 22.307 0 1 0 0 44.613h21.832v138.586c0 19.934 4.746 34.647 14.238 45.088 9.967 11.39 25.629 17.086 46.986 17.086h18.985a22.307 22.307 0 0 0 22.306-22.306z m105.364-4.746V128.542a27.053 27.053 0 1 0-54.106 0v291.437a27.053 27.053 0 1 0 54.106 0z m168.486 33.697c32.748 0 59.8-9.492 81.633-28.002a108.712 108.712 0 0 0 26.763-36.15c5.748-12.498 1.898-21.278-11.866-21.278h-23.07c-12.183 0-14.687 7.067-16.533 10.204a68.977 68.977 0 0 1-17.06 19.696c-10.441 7.594-23.73 11.391-40.342 11.391-19.459 0-34.646-6.17-45.087-18.035-10.442-11.865-16.612-29.426-18.51-52.207h158.598c10.125-0.264 26.315-2.716 23.705-27.264-3.375-31.377-12.789-56.847-28.055-76.2-21.358-27.528-52.207-40.817-92.549-40.817-36.545 0-65.496 12.34-86.379 37.494-21.832 24.68-32.273 55.054-32.273 91.6 0 40.816 11.39 72.615 34.172 95.87 21.357 22.307 50.308 33.698 86.853 33.698z m54.527-155.25H899.051c3.296-19.46 9.94-34.172 19.907-44.139 10.441-10.441 24.205-15.187 42.24-15.187 34.014 0 54.686 15.609 62.042 47.487 2.32 10.02 0.712 11.575-6.592 11.812z m45.563 252.808a26.367 26.367 0 0 1 3.059 52.55l-3.06 0.185H152.86a26.367 26.367 0 0 1-3.086-52.55l3.085-0.185h909.352z m0 158.203a26.367 26.367 0 0 1 3.059 52.55l-3.06 0.185H152.86a26.367 26.367 0 0 1-3.086-52.55l3.085-0.184h909.352zM798.539 867.641a26.367 26.367 0 0 1 3.059 52.55l-3.059 0.184H152.86a26.367 26.367 0 0 1-3.085-52.55l3.085-0.184h645.68z" p-id="1672"></path></svg>';
        },
        mounted(el, head, { command }) {
            const select = document.createElement('select');
            const fragment = document.createDocumentFragment();
            const placeholder = document.createElement('option');
            placeholder.textContent = '请选择标题';
            fragment.appendChild(placeholder);
            for (let i = 1; i < 7; i++) {
                const el = document.createElement('option');
                el.value = 'h' + i;
                el.textContent = 'h' + i;
                fragment.appendChild(el);
            }
            select.appendChild(fragment);
            select.style.display = 'none';
            el.style.cssText = `
                position: relative;
            `;
            el.appendChild(select);
            el.addEventListener('mouseenter', () => {
                select.style.cssText = `
                    display: inline-block;
                    position: absolute;
                    left: 0px;
                    top: 100%;
                `;
                el.addEventListener(
                    'mouseleave',
                    () => {
                        select.style.cssText = `
                        display: none;
                    `;
                    },
                    { once: true }
                );
            });
            select.addEventListener('change', () => {
                command(() => title(select.value));
            });
        },
    },
    {
        name: 'color',
        render: () => {
            return '<svg t="1599811009461" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2784" width="200" height="200"><path d="M519.483077 131.544615L380.219077 631.099077h278.528L519.483077 131.544615zM439.689846 15.202462h160.216616L898.756923 991.389538H762.092308l-71.916308-254.424615H348.16l-70.577231 254.424615H140.918154L439.689846 15.202462z" fill="#333333" p-id="2785"></path></svg>';
        },
        mounted(el, head, { command }) {
            el.addEventListener('click', () => {
                command(() => color('red'));
            });
        },
    },
];
createInstance('.root', {
    controllers,
});

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}
