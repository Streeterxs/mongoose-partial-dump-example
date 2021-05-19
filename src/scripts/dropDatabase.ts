import { connectToDb } from "../database";

import mongoose from 'mongoose';

import Dog from "../models/DogModel";
import DogOwner from "../models/DogOwnerModel";
import DogToy from "../models/DogToyModel";
import Person from "../models/PersonModel";
import PetShopClient from "../models/PetShopClientModel";
import PetShop from "../models/PetShopModel";
import User from "../models/UserModel";

(async () => {

    await connectToDb();

    await Dog.deleteMany({});
    await DogOwner.deleteMany({});
    await DogToy.deleteMany({});
    await Person.deleteMany({});
    await PetShopClient.deleteMany({});
    await PetShop.deleteMany({});
    await User.deleteMany({});

    process.exit(0);

})();
