var db = require('./dbservices')

var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];

// db.insertDBMany("details", myobj);
// db.findDB("details",{address:{$eq:"Lowstreet 4"}});
// db.findDB("details",{},{projection:{_id:0, name:1, address:1}});
// db.deleteDB("details",{name:"Viola"});
// db.updateDB("details",{name:"John"},{$set:{name:"Jonathan",address:"Highway 17"}});
// db.updateDBMany("details",{name:"Jonathan"},{$set:{address:"Highway 711"}});
