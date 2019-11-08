        'use strict';

        var link = document.querySelector('.item4__btn');
        var popup = document.querySelector('.popup-consultation__form');
        var close = popup.querySelector('.popup-consultation__close');
        var form = popup.querySelector('form');
        var tel = popup.querySelector('[name=tel]');
        var name = popup.querySelector('[name=name]');
        var message = popup.querySelector('[name=message]');
        var storage = localStorage.getItem('tel');
        var overlay = document.querySelector('.popup-consultation');


        link.addEventListener('click', function(event) {
            event.preventDefault();
            popup.classList.add('modal-content__login-show');
            overlay.classList.add('modal-content__overlay-show');
            
            if (storage) {
                tel.value = storage;
                name.focus();
            } else {
                tel.focus();
            }
        });

        close.addEventListener('click', function(event) {
            event.preventDefault();
            popup.classList.remove('modal-content__login-show');
            popup.classList.remove('modal-error');
            overlay.classList.remove('modal-content__overlay-show');
        });


        window.addEventListener('keydown', function(event) {
            if (event.keyCode === 27) {
                if (popup.classList.contains('modal-content__login-show')) {
                popup.classList.remove('modal-content__login-show');
                popup.classList.remove('modal-error');
                overlay.classList.remove('modal-content__overlay-show');
                }
            }
        })

    