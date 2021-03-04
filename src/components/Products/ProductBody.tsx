import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    faAngleRight,
    faCartPlus,
    faChevronLeft,
    faChevronRight,
    faHeart,
    faMinus,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {CartContext} from "../../contexts/Cart";
import {withRouter} from "react-router";

const ProductBody = (props: any) => {
    const {product} = props;

    return (
        <div>a</div>
    );
}

export default withRouter(ProductBody);
