(function () {
    // "use strict"
    const ItemMenu = function(seletor, underline = true) {
        this.seletor = seletor;
        this.underline = underline;
        
        if (!new.target) {
            return new ItemMenu(seletor, underline);
        }

        this.init();
    }

    ItemMenu.prototype.init = function() {
        this.addEventMouse();
    }

    ItemMenu.prototype.addEventMouse = function() {
        const itemMenu = document.querySelectorAll(this.seletor);
        itemMenu.forEach((elementos, item) => {
            elementos.addEventListener('mouseover', event => {
                if (event.target.nodeName.toLowerCase() !== 'img') {
                    event.target.parentElement.classList.add('active')
                }
            });
            
            elementos.addEventListener('mouseout', event => {
                event.target.parentElement.classList.remove('active')
            });

        });
     }

    window.ItemMenu = ItemMenu;

})()

