import { connectToDb } from "../database";

import { createDog } from "../fixtures/createDog";
import { createPerson } from "../fixtures/createPerson";
import { createDogOwner } from "../fixtures/createDogOwner";
import { createPetShop } from "../fixtures/createPetShop";
import { createPetShopClient } from "../fixtures/createPetShopClient";

(async () => {

    await connectToDb();

    const dog = await createDog({ name: 'Blackie' });
    const person = await createPerson({ name: 'Charlinhos' });
    const dogOwner = await createDogOwner({ dog: dog._id, person: person._id });
    const petShop = await createPetShop({ dogs: [dog._id] });
    await createPetShopClient({
       petShop: petShop._id,
       dogOwner: dogOwner._id,
    });

    process.exit(0);

})();
