define(
    'edit', [],
    function() {
        var
            mainInput,
            adressInput,
            updInfo = {},
            updAdress = {
                'adress': {}
            };
        self.getParam = function(e) {
            index = getIndex();
            db = getDb();
            mainInput = $('.main_input');
            adressInput = $('.adress_input');
            for (var i = 0; i < mainInput.length; i++) {
                var k = mainInput[i].id;
                updInfo[k] = mainInput[i].value;
            }
            for (var j = 0; j < adressInput.length; j++) {
                var r = adressInput[j].id;
                updAdress.adress[r] = adressInput[j].value;
            }
            flag = getFlag();

            if (!flag) {
                updateInfo(index, updInfo, updAdress);
            } else {
                var newObj = $.extend(updInfo, updAdress);
                db.push(newObj);
                localStorage.setItem('dat', JSON.stringify(db));

            }
            main = getInfo();
            adr = getAdress();
            compileList(main, adr, $('#list-container'), elements.itemCont);
            hideModal();
            elements.table.show();
        };


        function updateInfo(index, updInfo, updAdress) {

            info[index] = updInfo;
            adress[index] = updAdress;
            db[index].name = updInfo.name;
            db[index].email = updInfo.email;
            db[index].telephone = updInfo.telephone;
            db[index].adress.city = updAdress.adress.city;
            db[index].adress.street = updAdress.adress.street;
            db[index].adress.state = updAdress.adress.state;
            db[index].adress.zip = updAdress.adress.zip;
            localStorage.setItem('dat', JSON.stringify(db));

        }









    }

);
