import {Types} from "mongoose";

export class AddTrackInAlbumDto {
    readonly albumId: Types.ObjectId
    readonly trackId: Types.ObjectId
}