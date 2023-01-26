'use strict';

const modal = document.querySelector( '.modal' );
const overlay = document.querySelector( '.overlay' );
const btnClose = document.querySelector( '.close-modal' );
const btnOpen = document.querySelectorAll( '.show-modal' );
// console.log( btnOpen );

const removeHidden = () => {
    modal.classList.remove( 'hidden' );
    overlay.classList.remove( 'hidden' );
}
for ( let i = 0; i < btnOpen.length; i++ )
{
    btnOpen[ i ].addEventListener( 'click', removeHidden );
}

const closeModal = () => {
    modal.classList.add( 'hidden' );
    overlay.classList.add( 'hidden' );
}

btnClose.addEventListener( 'click', closeModal );

overlay.addEventListener( 'click', closeModal );

document.addEventListener( 'keydown', closeModal );
