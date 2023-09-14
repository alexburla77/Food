import tabs from './modules/tabs';
import slider from './modules/slider';
import modal from './modules/modal';
import forms from './modules/forms';
import calculator from './modules/calculator';
import cards from './modules/cards'
import timer from './modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);


  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerId);
  forms('form', modalTimerId);
  calculator();
  cards();
  timer('.timer', '2023-09-30');
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArr: '.offer__slider-next',
    prevArr: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',

  });

});
