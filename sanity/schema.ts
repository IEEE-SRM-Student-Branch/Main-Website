import { type SchemaTypeDefinition } from "sanity";
import corporate from "./schemas/corporate";
import wad from "./schemas/wad";
import comsoc from "./schemas/comsoc";
import publicity from "./schemas/publicity";
import rnd from "./schemas/rnd";
import mnc from "./schemas/mnc";
import ias from "./schemas/ias";
import pels from "./schemas/pels";
import wie from "./schemas/wie";
import alumini from "./schemas/alumini";
import sponsership from "./schemas/sponsership";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    corporate,
    wad,
    comsoc,
    publicity,
    sponsership,
    rnd,
    mnc,
    ias,
    pels,
    wie,
    alumini,
  ],
};
