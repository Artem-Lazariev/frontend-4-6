import "./style.css"
import {products} from "./data";
import template from './products.hbs';
const renderedHtml = template({ products });
document.body.innerHTML = renderedHtml;