define(
    'list', [],
    function() {
        $('.headmenu__link-list').on('click', showList);
        $('.headmenu__link-clear').on('click', clearAll);
        var
            el,
            index,
            flag,
            $overlay = $('.overlay');


        self.compileList = function compileList(data, adr, el, container) {
            var tmpl = el.html();
            tmpl = _.template(tmpl);

            container.html(tmpl({
                list: data,
                adr: adr
            }));
        };
        self.getIndex = function() {
            return index;
        };

        self.getFlag = function() {
            return flag;
        };

        function showList(e) {
            info = getInfo();
            adress = getAdress();
            e.preventDefault();
            compileList(info, adress, $('#list-container'), elements.itemCont);
            if (info.length === 0) {
                return;
            }
            elements.table.show();
        }

        self.showModal = function(e) {
            var topPosition;
            e.preventDefault();
            index = $(this).index();
            info = getInfo();
            adress = getAdress();
            $overlay.show();
            flag = $(e.toElement).hasClass('headmenu__link-create');

            if (!flag) {
                compileList(info[index], adress[index], $('#info-container'), $overlay);
                topPosition = e.clientY;
            } else {
                compileList('', '', $('#info-container'), $overlay);
                $('.btn-upd').html('Save');
                $('.btn-del').hide();

            }
            $('.modal_result').show();
            $('.modal_result').css('top', topPosition);
            $('.btn-cls').one('click', hideModal);
            $('.btn-upd').one('click', getParam);
            $('.btn-del').one('click', deleteItem);
        };
        self.hideModal = function() {
            $overlay.hide();
            $('.modal_result').hide();
        };
        $('.headmenu__link-create').on('click', showModal);
        $('.list').delegate('tr', 'click', showModal);
        function clearAll() {
            localStorage.clear();

        }
    }
);
