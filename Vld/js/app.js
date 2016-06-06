define(
    'app', [],
    function() {

        var self = this,
            db = [],
            info = [],
            adress = [];
        self.getDb = function() {
          if (db !== null) {
            db = JSON.parse(localStorage.getItem('dat'));
          } else {
            db = [];
          }
            return db;
        };

        self.getInfo = function() {
            info = [];
            db = JSON.parse(localStorage.getItem('dat'));
            _.forEach(db, function(value, key) {
                info[key] = _.pick(value, ['name', 'email', 'telephone']);
            });

            return info;
        };
        self.getAdress = function() {
            adress = [];
            db = JSON.parse(localStorage.getItem('dat'));
            _.forEach(db, function(value, key) {
                adress[key] = _.pick(value, 'adress');
            });
            return adress;
        };
        self.elements = {
            table: $('.table'),
            itemCont: $('.list')
        };

    }

);
