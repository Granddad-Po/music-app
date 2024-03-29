import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {AlbumModule} from "./album/album.module";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://root:18062023@music-app-db.cx7bplv.mongodb.net/music-app?retryWrites=true&w=majority'),
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        TrackModule,
        AlbumModule,
        FileModule,
        
    ]
})
export class AppModule {}
