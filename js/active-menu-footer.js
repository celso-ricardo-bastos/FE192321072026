(function(menu) {
    const MenuFooter = function(seletor, underline) {
        menu.call(this, seletor, underline)

        if (!new.target) {
            return new MenuFooter(seletor, underline);
        }
    }
    MenuFooter.prototype = Object.create(menu.prototype);

    MenuFooter.prototype.addEventMouse = function() {
        const itemMenu = document.querySelectorAll(this.seletor);
        itemMenu.forEach((elementos, item) => {
            elementos.addEventListener('mouseover', event => {
                event.target.parentElement.classList.add('active')
                event.target.classList.add('color')
            });
            
            elementos.addEventListener('mouseout', event => {
                event.target.parentElement.classList.remove('active')
                event.target.classList.remove('color')
            });

        });
    }

    window.MenuFooter = MenuFooter;

})(window.ItemMenu)