import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://root:admin@music-app-db.tn9tzsr.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule
    ]
})
export class AppModule {
    
}