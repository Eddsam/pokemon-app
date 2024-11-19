export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  sprites: Sprites;
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface Sprites {
  // back_default:       string;
  // back_female:        null;
  // back_shiny:         string;
  // back_shiny_female:  null;
  front_default: string;
  // front_female:       null;
  // front_shiny:        string;
  // front_shiny_female: null;
  other?: Other;
  // versions?:          Versions;
  // animated?:          Sprites;
}

export interface Other {
  // dream_world:        DreamWorld;
  // home:               Home;
  "official-artwork": OfficialArtwork;
  showdown: Sprites;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}
