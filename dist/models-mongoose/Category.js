"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CategorySchema = new mongoose_1.default.Schema({
    company: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String
    }
}, { timestamps: true });
const Category = mongoose_1.default.model('Category', CategorySchema);
exports.default = Category;
