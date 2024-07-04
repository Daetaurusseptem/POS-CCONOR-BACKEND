import mongoose, { Schema, Document } from 'mongoose';

export interface ProductDocument extends Document {
  name: string;
  description?: string;
  marca: string;
  supplier: Schema.Types.ObjectId;
  company: Schema.Types.ObjectId;
  categories: Schema.Types.ObjectId[];
  isComposite: boolean;
  recipe?: Schema.Types.ObjectId; // Referencia a la receta si es un producto compuesto
}

const productSchema = new Schema<ProductDocument>({
  name: { type: String, required: true },
  description: { type: String },
  marca: { type: String, required: true },
  supplier: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true }],
  isComposite: { type: Boolean, required: true },
  recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' }
});

export default mongoose.model<ProductDocument>('Product', productSchema);
