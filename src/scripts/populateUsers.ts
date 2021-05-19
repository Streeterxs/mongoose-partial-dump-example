import User from "../models/UserModel";
import { connectToDb } from "../database";

(async () => {

    await connectToDb();

    const user = new User({
        name: 'user',
    });

    const clientCreated = await user.save({});

    console.log('clientCreated: ', clientCreated);

    process.exit(0);

})();
