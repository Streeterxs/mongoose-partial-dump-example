import Dog from './src/models/DogModel';
import DogOwner from './src/models/DogOwnerModel';
import DogToy from './src/models/DogToyModel';
import Person from './src/models/PersonModel';
import PetShopClient from './src/models/PetShopClientModel';
import PetShop from './src/models/PetShopModel';
import User from './src/models/UserModel';

import config from './src/config';

export default {
    db: {
        url: config.db_url
    },
    models: [
        Dog,
        DogOwner,
        DogToy,
        Person,
        PetShopClient,
        PetShop,
        User,
    ],
    anonymize: {
        fields: [
            {
                field: 'name',
                type: 'name',
            }
        ]
    },
};
