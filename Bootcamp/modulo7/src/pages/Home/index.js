import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://cdn-images.farfetch-contents.com/13/40/43/66/13404366_21464080_300.jpg"
          alt="Tênis"
        />
        <strong>Balenciaga</strong>
        <span>R$6.952,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://cdn-images.farfetch-contents.com/13/40/43/66/13404366_21464080_300.jpg"
          alt="Tênis"
        />
        <strong>Balenciaga</strong>
        <span>R$6.952,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://cdn-images.farfetch-contents.com/13/40/43/66/13404366_21464080_300.jpg"
          alt="Tênis"
        />
        <strong>Balenciaga</strong>
        <span>R$6.952,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://cdn-images.farfetch-contents.com/13/40/43/66/13404366_21464080_300.jpg"
          alt="Tênis"
        />
        <strong>Balenciaga</strong>
        <span>R$6.952,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://cdn-images.farfetch-contents.com/13/40/43/66/13404366_21464080_300.jpg"
          alt="Tênis"
        />
        <strong>Balenciaga</strong>
        <span>R$6.952,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://cdn-images.farfetch-contents.com/13/40/43/66/13404366_21464080_300.jpg"
          alt="Tênis"
        />
        <strong>Balenciaga</strong>
        <span>R$6.952,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
