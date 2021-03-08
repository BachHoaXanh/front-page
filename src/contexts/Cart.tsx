import React, {createContext, useEffect, useState} from 'react'

export const CartContext = createContext<any>({} as any);

export function CartProvider(props: any) {
    const [total, setTotal] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [clickedCart, setClickedCart] = useState(0);

    const isExists = (cartItems = [], item: any = {}) => {
        for (let cartItem of cartItems) {
            // @ts-ignore
            if (cartItem.id === item.id) return cartItem;
        }
        return false;
    }

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            setCartItems(JSON.parse(localStorage.getItem('cart') || '0'));
        }
        setTotal(JSON.parse(localStorage.getItem('total') || '0'));
    }, []);

    const addToCart = (product = {} as any, count: number) => {
        if (count) {
            setClickedCart(clickedCart + count);
            const virtualCart = [...cartItems] as any;
            if (cartItems.length === 0) {
                virtualCart.push({...product, count: count});
            } else {
                if (!isExists(cartItems, product)) {
                    virtualCart.push({...product, count: count});
                } else {
                    for (let i = 0; i < virtualCart.length; i++) {
                        if (virtualCart[i].id === product.id) {
                            virtualCart[i].count += count;
                            break;
                        }
                    }
                }
            }
            localStorage.setItem('cart', JSON.stringify(virtualCart));
            setCartItems(virtualCart);
            getTotal(virtualCart);
        } else {
            setClickedCart(clickedCart + 1);
            const virtualCart = [...cartItems] as any;

            if (cartItems.length === 0) {
                virtualCart.push({...product, count: 1});
            } else {
                if (!isExists(cartItems, product)) {
                    virtualCart.push({...product, count: 1});
                } else {
                    for (let i = 0; i < virtualCart.length; i++) {
                        if (virtualCart[i].id === product.id) {
                            virtualCart[i].count += 1;
                            break;
                        }
                    }
                }
            }
            localStorage.setItem('cart', JSON.stringify(virtualCart));
            setCartItems(virtualCart);
            getTotal(virtualCart);
        }
    }

    const getTotal = (arr: any[]) => {
        let virtualTotal = 0;

        arr.forEach((item) => virtualTotal += item.count * item.price);

        localStorage.setItem('total', JSON.stringify(virtualTotal));
        setTotal(virtualTotal);
    }

    const removeFromCart = (event: any) => {
        const id = event.target.id;
        const virtualCart = [...cartItems] as any;

        for (let i = 0; i < virtualCart.length; i++) {
            if (virtualCart[i].id === id) virtualCart.splice(i, 1);
        }

        localStorage.setItem('cart', JSON.stringify(virtualCart));
        setCartItems(virtualCart);
        getTotal(virtualCart);
    }

    const minusCount = (event: any) => {
        const id = event.target.id;
        const virtualCart = [...cartItems] as any;

        for (let i=0;i<virtualCart.length;i++) {
            if (virtualCart[i].id === id) {
                if (virtualCart[i].count > 1) {
                    virtualCart[i].count = virtualCart[i].count - 1
                }
            }
        }
        localStorage.setItem('cart', JSON.stringify(virtualCart))
        setCartItems(virtualCart)
        getTotal(virtualCart)
    }

    const plusCount = (event: any) => {
        const id = event.target.id;
        const virtualCart = [...cartItems] as any;

        for (let i = 0; i < virtualCart.length; i++) {
            if (virtualCart[i].id === id) virtualCart[i].count += 1;
        }

        localStorage.setItem('cart', JSON.stringify(virtualCart));
        setCartItems(virtualCart);
        getTotal(virtualCart);
    }

    const updateCount = (event: any) => {
        const id = event.target.id;
        const value = event.target.value;
        const virtualCart = [...cartItems] as any;

        for (let i = 0; i < virtualCart.length; i++) {
            if (virtualCart[i].id === id) virtualCart[i].count = Number(value);
        }

        localStorage.setItem('cart', JSON.stringify(virtualCart));
        setCartItems(virtualCart);
        getTotal(virtualCart);
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                clickedCart,
                removeFromCart,
                plusCount,
                updateCount,
                setTotal,
                setCartItems,
                total
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}
