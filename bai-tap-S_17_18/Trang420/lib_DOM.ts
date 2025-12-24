
export function $(selector: string): HTMLElement {
    const el = document.querySelector(selector);

    if (!el) {
        throw new Error(`Không tìm thấy phần tử: ${selector}`);
    }

    return el as HTMLElement;
}
