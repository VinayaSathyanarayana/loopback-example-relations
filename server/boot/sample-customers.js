// Copyright IBM Corp. 2015,2017. All Rights Reserved.
// Node module: loopback-example-relations
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function (app) {
  var Customer = app.models.Customer;
  var Order = app.models.Order;
  var Keycount = app.models.Keycount;
  var searchableentity = app.models.searchableentity;
  
  // var Customerstat = app.models.customerstat;

  // define a custom scope
  Customer.scope('youngFolks', {
    where: {
      age: {
        lte: 22
      }
    }
  });
  app.dataSources.db.automigrate('Customer', function (err) {
    if (err) throw err;

    var customers = [{
        name: 'Customer A',
        age: 21
      },
      {
        name: 'Customer B',
        age: 22
      },
      {
        name: 'Customer C',
        age: 23
      },
      {
        name: 'Customer D',
        age: 24
      },
      {
        age: 25
      }
    ];
    var orders = [{
        description: 'First order by Customer A',
        date: '01-01-2015'
      },
      {
        description: 'Second order by Customer A',
        date: '02-01-2015'
      },
      {
        description: 'Order by Customer B',
        date: '03-01-2015'
      },
      {
        description: 'Order by Customer C',
        date: '04-01-2015'
      },
      {
        description: 'Order by Anonymous',
        date: '05-01-2015'
      }
    ];
    var neworders = [{
      description: 'Kateel Durga  First order by Customer A',
      date: '01-01-2015',
      lifetimelikecount: 10,
      lifetimesharecount: 10,
      lifetimeregcount: 10,
      lifetimedonationamount: 10,
      weeklikecount: 10,
      weeksharecount: 10,
      weekregcount: 10,
      weekdonationamount: 10
    }];
    var stats = [{
      lifetimelikecount: 10,
      lifetimesharecount: 10,
      lifetimeregcount: 10,
      lifetimedonationamount: 10,
      weeklikecount: 10,
      weeksharecount: 10,
      weekregcount: 10,
      weekdonationamount: 10
    }];
    var se = [{
        "sgobjecttype": "NGO",
        "sgsubobjecttype": "string",
        "sgObjectId": "NGO1",
        "name": "Fun NGO",
        "tagline": "string",
        "starttimestamp": "2019-08-16T07:38:27.088Z",
        "endtimestamp": "2019-08-16T07:38:27.088Z",
        "location": {
          "lat": 0,
          "lng": 0
        },
        "causes": [
          "string"
        ],
        "sdgs": [
          "string"
        ],
        "permaUrl": "string",
        "extUrl": "string",
        "oembedUrl": "string",
        "Address": {
          "street": "string",
          "city": "string",
          "state": "string",
          "zipCode": "string",
          "country": "string"
        }
      },
      {
        "sgobjecttype": "NGO",
        "sgsubobjecttype": "string",
        "sgObjectId": "NGO2",
        "name": "NGO University",
        "tagline": "string",
        "starttimestamp": "2019-08-16T07:38:27.088Z",
        "endtimestamp": "2019-08-16T07:38:27.088Z",
        "location": {
          "lat": 0,
          "lng": 0
        },
        "causes": [
          "string"
        ],
        "sdgs": [
          "string"
        ],
        "permaUrl": "string",
        "extUrl": "string",
        "oembedUrl": "string",
        "Address": {
          "street": "string",
          "city": "string",
          "state": "string",
          "zipCode": "string",
          "country": "string"
        }
      },
      {
        "sgobjecttype": "CSR",
        "sgsubobjecttype": "string",
        "sgObjectId": "CSR1",
        "name": "SLJ University",
        "tagline": "string",
        "starttimestamp": "2019-08-16T07:38:27.088Z",
        "endtimestamp": "2019-08-16T07:38:27.088Z",
        "location": {
          "lat": 0,
          "lng": 0
        },
        "causes": [
          "string"
        ],
        "sdgs": [
          "string"
        ],
        "permaUrl": "string",
        "extUrl": "string",
        "oembedUrl": "string",
        "Address": {
          "street": "string",
          "city": "string",
          "state": "string",
          "zipCode": "string",
          "country": "string"
        }
      },
      {
        "sgobjecttype": "CSR",
        "sgsubobjecttype": "string",
        "sgObjectId": "CSR2",
        "name": "SLJ Startup",
        "tagline": "string",
        "starttimestamp": "2019-08-16T07:38:27.088Z",
        "endtimestamp": "2019-08-16T07:38:27.088Z",
        "location": {
          "lat": 0,
          "lng": 0
        },
        "causes": [
          "string"
        ],
        "sdgs": [
          "string"
        ],
        "permaUrl": "string",
        "extUrl": "string",
        "oembedUrl": "string",
        "Address": {
          "street": "string",
          "city": "string",
          "state": "string",
          "zipCode": "string",
          "country": "string"
        }
      }

    ];
    // Create Searchable Entities
    searchableentity.create(se[0], function (err, instance) {
    });
    searchableentity.create(se[1], function (err, instance) {
    });
    searchableentity.create(se[2], function (err, instance) {
    });
    searchableentity.create(se[3], function (err, instance) {
    });
    
    // Create customers and orders
    Customer.create(customers[0], function (err, instance) {
      if (err) return console.error(err);
      console.log('Customer created: ', instance);
      orders[0].customerId = instance.id;
      neworders[0].customerId = instance.id;
      orders[1].customerId = instance.id;
      stats[0].customerId = instance.id;
      console.log('Stats:', JSON.stringify(stats[0]));
      //    if (!Customerstat) console.log('customerstat is invalid');
      //    if (!Customerstat.create) console.log('customerstat create function is invalid');
      // Customerstat.create(stats[0], function (err, instance) {
      //   if (err) return console.error(err);
      //   console.log('Customer Stat created: ', instance);
      // });
      Order.create(orders[0], function (err, instance) {
        if (err) return console.error(err);
        console.log('Order created: ', instance);
      });
      Order.create(orders[1], function (err, instance) {
        if (err) return console.error(err);
        console.log('Order created: ', instance);
      });
      Keycount.create(neworders[0], function (err, instance) {
        if (err) return console.error(err);
        console.log('Keycount Stat created: ', instance);
      });

    });
    Customer.create(customers[1], function (err, instance) {
      if (err) return console.error(err);
      console.log('Customer created: ', instance);
      orders[2].customerId = instance.id;
      Order.create(orders[2], function (err, instance) {
        if (err) return console.error(err);
        console.log('Order created: ', instance);
      });
    });
    Customer.create(customers[2], function (err, instance) {
      if (err) return console.error(err);
      console.log('Customer created: ', instance);
      orders[3].customerId = instance.id;
      Order.create(orders[3], function (err, instance) {
        if (err) return console.error(err);
        console.log('Order created: ', instance);
      });
    });
    Customer.create(customers[3], function (err, instance) {
      if (err) return console.error(err);
      console.log('Customer created: ', instance);
      instance.orders.create(orders[4], function (err, instance) {
        if (err) return console.error(err);
        console.log('Order created: ', instance);
        instance.shipments.create({
            date: new Date(),
            description: 'Shipment'
          },
          function (err, instance) {
            if (err) return console.error(err);
            console.log('Shipment created: ', instance);
          });
      });
    });
  });
};
