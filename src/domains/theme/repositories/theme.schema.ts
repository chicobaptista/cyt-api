import { Schema } from 'mongoose'

export const themeSchema = new Schema({
    id: String,
    name: String,
    description: String,
    outcomes: [String],
    createdAt: Date,
    updatedAt: Date,
})
