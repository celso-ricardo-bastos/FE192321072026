(function () {
    const ItemMenu = function(seletor) {
        this.seletor = seletor;
        
        if (!new.target) {
            return new ItemMenu(seletor);
        }
    }

    ItemMenu.prototype.init = function() {
        this.addEventMouse();
    }

    ItemMenu.prototype.addEventMouse = function() {
        const itemMenu = document.querySelectorAll(this.seletor);
        itemMenu.forEach((elementos, item) => {
            elementos.addEventListener('mouseover', event => {
                event.target.parentElement.classList.add('active')
            });
            
            elementos.addEventListener('mouseout', event => {
                event.target.parentElement.classList.remove('active')
            });

        });
     }


    window.ItemMenu = ItemMenu;

})()

