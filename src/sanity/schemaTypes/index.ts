import { type SchemaTypeDefinition } from 'sanity'
import catagory from './catagory'
import Chefs from './Chefs'
import Food from './Food'
import Order from './Order'
import recipe from './recipe'
import Menu from './Menu'
import Special from './SpecialMeal'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [catagory,Chefs,Food,Order,recipe, Special, Menu],
}
