(function(menu) {
    
    const MenuFooter = function(seletor) {
        menu.call(this, seletor)
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

    const mfooter = new MenuFooter('.teste')
    mfooter.init();


})(window.ItemMenu)