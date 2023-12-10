import Rooms from "../models/rooms.js";

export const getAllRooms = async () => {
    return await Rooms.findAll();
}

export const createRoom = async (name, price, area, guest, bed, balcony, description) => {
    return await Rooms.create({ name, price, area, guest, bed, balcony, description });
};