define(
    'delete', [],
    function() {

        self.deleteItem = function(e) {
            flag = getFlag();
            if (!flag) {
                index = getIndex();
                db = getDb();
                db.splice(index, 1);
                localStorage.clear();
                localStorage.setItem('dat', JSON.stringify(db));
                main = getInfo();
                adr = getAdress();
                compileList(main, adr, $('#list-container'), elements.itemCont);
            }
            hideModal();
            if (db.length === 0) {
                elements.table.hide();
            }
        };
    }
);
