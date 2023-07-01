import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Album, AlbumDocument} from "./schemas/album.schema";
import {Model, ObjectId, Types} from "mongoose";
import {CreateAlbumDto} from "./dto/create-album.dto";
import {AddTrackInAlbumDto} from "./dto/add-track-in-album.dto";
import {Track, TrackDocument} from "../track/schemas/track.schema";

@Injectable()

export class AlbumService {
    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
                @InjectModel(Track.name) private trackModel: Model<TrackDocument>) {}

    async create(dto: CreateAlbumDto): Promise<Album> {
        const album = await this.albumModel.create({...dto})
        return album
    }

    async getAll(): Promise<Album[]> {
        const albums = await this.albumModel.find()
        return albums
    }

    async getOne(id: ObjectId): Promise<Album> {
        const album = await this.albumModel.findById(id).populate('tracks')
        return album
    }
    
    async delete(id: ObjectId): Promise<Types.ObjectId> {
        const album = await this.albumModel.findByIdAndDelete(id)
        return album._id
    }
    
    async addTrack(dto: AddTrackInAlbumDto) {
        const album = await this.albumModel.findById(dto.albumId)
        const track = await this.trackModel.findById(dto.trackId)
        album.tracks.push(track)
        await album.save()
        return album
    }
}