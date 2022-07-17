import { Schema } from 'mongoose'

export const themeSchema = new Schema({
    _id: String,
    id: String,
    name: String,
    description: String,
    outcomes: [String],
    createdAt: Date,
    updatedAt: Date,
})
