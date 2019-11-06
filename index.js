const typeorm = require('typeorm'),
      pause = require('node-pause'),
      testEvent = require('./entity/Event'),
      testEventType = require('./entity/EventType');

typeorm.createConnection().then((connection) => {
    const eventTypeRepo = typeorm.getRepository(testEventType);
    const eventRepo = typeorm.getRepository(testEvent);
    
    eventRepo.find().then(async (events) => {
        if (!events.length) {
            // Initialize the database before the typeId column has been uncommented
            await eventTypeRepo.save([
                {
                    id: 0,
                    name: 'EventType0',
                    lastModified: 1573053282855
                },
                {
                    id: 1,
                    name: 'EventType0',
                    lastModified: 1573053514062
                },
            ]);
            await eventRepo.save([
                {
                    id: 0,
                    datetime: 1573053792758,
                    type: 0,
                    description: "before typeId uncommented"
                },
                {
                    id: 1,
                    datetime: 1573053976613,
                    type: 0,
                    description: "before typeId uncommented"
                },
                {
                    id: 2,
                    datetime: 1573053999362,
                    type: 1,
                    description: "before typeId uncommented"
                },
            ]);

            console.log('Database has been initialized. Please uncomment the definition for the ' +
                        'typeId column, and re-run this program.');
            return;
        } else {
            await eventRepo.save([
                {
                    id: 3,
                    datetime: 1573058818460,
                    type: 0,
                    description: "after typeId uncommented"
                },
                {
                    id: 4,
                    datetime: 1573058848889,
                    type: 0,
                    description: "after typeId uncommented"
                },
                {
                    id: 5,
                    datetime: 1573058863410,
                    type: 1,
                    description: "after typeId uncommented"
                },
            ]);
            const updatedEvents = await eventRepo.find();
            console.log('The results are in. Notice that the events added before the typeId ' +
                        'column was uncommented correctly show the id of the event type. ' + 
                        'Conversely the events added after typeId was uncommented show null ' + 
                        'where the id should be.');
            console.dir(updatedEvents, {compact: false});
            pause('Press any key to reset the database and exit.').then(async (key) => {
               await eventRepo.clear();
               await eventTypeRepo.clear();
               console.log("Database reset. Don't forget to re-comment the typeId column " +
                           "if you plan on re-running this test.");
            });
        }
    });
});
