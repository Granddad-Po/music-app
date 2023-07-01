import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {CreateAlbumDto} from "./dto/create-album.dto";
import {AlbumService} from "./album.service";
import {ObjectId} from "mongoose";
import {AddTrackInAlbumDto} from "./dto/add-track-in-album.dto";

@Controller('/albums')

export class AlbumController {
    constructor(private albumService: AlbumService) {
    }

    @Post()
    create(@Body() dto: CreateAlbumDto) {
        return this.albumService.create(dto)
    }

    @Get()
    getAll() {
        return this.albumService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.albumService.getOne(id)
    }
    
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.albumService.delete(id)
    }

    @Post('/track')
    addTrack(@Body() dto: AddTrackInAlbumDto) {
        return this.albumService.addTrack(dto)
    }
}