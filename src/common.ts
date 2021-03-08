export function slugify(str: string) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    const to = "aaaaaeeeeeiiiiooooouuuunc------";

    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;    // Trim - from end of text
}

export interface CategoryInterface {
    categoryId: (number | string);
    name: string;
    slug: string;
    count: number;
}

export const showPrice = (price: number) => price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const calculateSaleOffPrice = (price: number, saleOff: number) => showPrice(price - (price * (saleOff / 100)));

export const ERROR_MESSAGE = 'Something went wrong. Please try again later.';
export const ORDER_SUCCESS_MESSAGE = 'Thank you. Your order has been received.';
