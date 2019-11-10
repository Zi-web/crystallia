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


       'use strict';

        var link2 = document.querySelector('#newMessage');
        var popup2 = document.querySelector('.popup-consultation__message');
        var close2 = popup2.querySelector('.message__close');
        /*var form = popup.querySelector('form');
        var tel = popup.querySelector('[name=tel]');
        var name = popup.querySelector('[name=name]');
        var message = popup.querySelector('[name=message]');
        var storage = localStorage.getItem('tel');*/
        var overlay2 = document.querySelector('.modal-content__message');


        link2.addEventListener('click', function(event) {
            event.preventDefault();
            popup2.classList.add('modal-content__login-show2');
            overlay2.classList.add('modal-content__overlay-show2');
            
            /*if (storage) {
                tel.value = storage;
                name.focus();
            } else {
                tel.focus();
            }*/
        });

        close2.addEventListener('click', function(event) {
            event.preventDefault();
            popup2.classList.remove('modal-content__login-show2');
            popup2.classList.remove('modal-error');
            overlay2.classList.remove('modal-content__overlay-show2');
        });


        window.addEventListener('keydown', function(event) {
            if (event.keyCode === 27) {
                if (popup2.classList.contains('modal-content__login-show2')) {
                popup2.classList.remove('modal-content__login-show2');
                popup2.classList.remove('modal-error');
                overlay2.classList.remove('modal-content__overlay-show2');
                }
            }
        })

    