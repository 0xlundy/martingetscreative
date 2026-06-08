// All work items, single source of truth.
// Categories: editorial, commissioned, street, conceptual
// Items with the same `shoot` slug render together as a row.
// Add new items here. The /work page picks them up automatically.

export type Category = 'editorial' | 'commissioned' | 'street' | 'conceptual';

export interface WorkItem {
  src: string;
  alt: string;
  title: string;
  desc: string;
  category: Category;
  shoot?: string;     // group images from the same shoot together
  featured?: boolean; // shows as full-width opener
  wide?: boolean;     // single image, full grid width instead of 1 column
}

export const categories: { id: Category; label: string }[] = [
  { id: 'editorial',    label: 'Editorial' },
  { id: 'commissioned', label: 'Commissioned' },
  { id: 'street',       label: 'Street' },
  { id: 'conceptual',   label: 'Conceptual' },
];

export const work: WorkItem[] = [
  // ─── Editorial (event + BTS) ─────────────────────────────
  // Top row: set photos / BTS (4)
  { src: '/images/on-set/10-dscf2102.jpg', alt: 'Arriflex film camera on set', title: 'Cine Rent West',         desc: 'Behind the Scenes', category: 'editorial', shoot: 'crw-bts' },
  { src: '/images/on-set/DSCF2955.jpg',    alt: 'Film crew and talent on set', title: 'Cine Rent West',         desc: 'Behind the Scenes', category: 'editorial', shoot: 'crw-bts' },
  { src: '/images/on-set/12-dscf2988.jpg', alt: 'On-set photography production', title: 'Cine Rent West',       desc: 'Behind the Scenes', category: 'editorial', shoot: 'crw-bts' },
  { src: '/images/on-set/11-dscf2117.jpg', alt: 'Behind the scenes on film set', title: 'Fly Anakin Music Video', desc: 'BTS 2023',         category: 'editorial', shoot: 'crw-bts' },

  // Olipop BTS (3)
  { src: '/images/on-set/DSCF5220.jpg', alt: 'Behind the scenes, Olipop production', title: 'Olipop', desc: 'Behind the Scenes', category: 'editorial', shoot: 'olipop-bts' },
  { src: '/images/on-set/DSCF5218.jpg', alt: 'On-set portrait, blue background',     title: 'Olipop', desc: 'Behind the Scenes', category: 'editorial', shoot: 'olipop-bts' },
  { src: '/images/on-set/DSCF5188.jpg', alt: 'BTS film production photography',      title: 'Olipop', desc: 'Behind the Scenes', category: 'editorial', shoot: 'olipop-bts' },

  // Pink Siifu BTS Music Video (2)
  { src: '/images/personal/IG-Post.jpg',       alt: 'Rimowa suitcase with hooded leather jacket',             title: 'Pink Siifu', desc: 'BTS Music Video', category: 'editorial', shoot: 'pink-siifu-bts' },
  { src: '/images/portraits/05-ig-post-4.jpg', alt: 'Full-length fashion portrait, leather vest and bandana', title: 'Pink Siifu', desc: 'BTS Music Video', category: 'editorial', shoot: 'pink-siifu-bts' },

  // Portland Cocktail Week (4)
  { src: '/images/stories/14-dscf6926.jpg', alt: 'Documentary portrait at cocktail event',           title: 'Portland Cocktail Week', desc: 'Palomar Activation', category: 'editorial', shoot: 'pdx-cocktail-week' },
  { src: '/images/stories/15-dscf7874.jpg', alt: 'Havana Club rum bar scene',                        title: 'Portland Cocktail Week', desc: 'Havana Club',        category: 'editorial', shoot: 'pdx-cocktail-week' },
  { src: '/images/product/27-dscf7695.jpg', alt: 'Pink cosmo cocktails on round table',              title: 'Portland Cocktail Week', desc: 'Palomar Activation', category: 'editorial', shoot: 'pdx-cocktail-week' },
  { src: '/images/product/23-dscf6693.jpg', alt: 'Cocktails in mason jars with citrus garnish',     title: 'Portland Cocktail Week', desc: 'Palomar Activation', category: 'editorial', shoot: 'pdx-cocktail-week' },

  // Sensi Sensibility (2)
  { src: '/images/portraits/08-dscf7929.jpg', alt: 'Sensi Sensibility set photo, Ontario Oregon', title: 'Sensi Sensibility', desc: 'Documentary Set',          category: 'editorial', shoot: 'sensi-sensibility' },
  { src: '/images/stories/20-dscf7092.jpg',   alt: 'Documentary portrait, candid editorial',     title: 'Sensi Sensibility', desc: 'Lynn Nakamoto, Set Photo', category: 'editorial', shoot: 'sensi-sensibility' },

  // Singles
  { src: '/images/stories/13-dscf5257.jpg', alt: 'Documentary storytelling photography', title: 'Gregory Gourdet', desc: 'OXO and Amazon Set Photo', category: 'editorial', wide: true },


  // ─── Commissioned (portraits / product / campaign / lookbook) ─────────
  // Mercury League (3)
  { src: '/images/portraits/07-dscf6551.jpg', alt: 'Studio portrait, editorial photography',             title: 'Mercury League',                desc: 'Lookbook 2025',  category: 'commissioned', shoot: 'mercury-league' },
  { src: '/images/portraits/06-dscf6116.jpg', alt: 'Editorial portrait, soft lighting',                  title: 'Mercury League',                desc: 'Lookbook 2025',  category: 'commissioned', shoot: 'mercury-league' },
  { src: '/images/personal/DSCF3443.jpg',     alt: 'Street portrait, red flannel against graffiti wall', title: 'Mercury League, Individualist', desc: 'Editorial 2025', category: 'commissioned', shoot: 'mercury-league' },

  // Lord Knows Clothing (2)
  { src: '/images/portraits/03-cg2i3851.jpg', alt: 'Studio portrait with directional lighting',             title: 'Lord Knows Clothing', desc: 'Tank Head, 2019', category: 'commissioned', shoot: 'lord-knows' },
  { src: '/images/portraits/04-dscf4385.jpg', alt: 'Portrait in black balaclava, dramatic studio lighting', title: 'Lord Knows Clothing', desc: 'Lookbook 2024',   category: 'commissioned', shoot: 'lord-knows' },

  // Wild Things Lookbook (2)
  { src: '/images/personal/DSCF1534.jpg', alt: 'Wild Things fashion shoot, zebra print pants, front view', title: 'Wild Things', desc: 'Lookbook 2024', category: 'commissioned', shoot: 'wild-things' },
  { src: '/images/personal/DSCF1684.jpg', alt: 'Wild Things fashion shoot, satin top, back view',          title: 'Wild Things', desc: 'Lookbook 2024', category: 'commissioned', shoot: 'wild-things' },

  // Sotheby's (2)
  { src: '/images/product/21-dscf3670.jpg', alt: 'Gold Air Jordan 3s',             title: "Sotheby's", desc: "Spike Lee's Golden Jordan 3s", category: 'commissioned', shoot: 'sothebys' },
  { src: '/images/product/22-dscf3694.jpg', alt: 'Nike Air Jordan 1s sole detail', title: "Sotheby's", desc: 'Jordan 1 Colette',             category: 'commissioned', shoot: 'sothebys' },

  // National Ice Cream Day (3)
  { src: '/images/product/National%20Ice%20Cream%20Day%20Shoot-083.jpg', alt: 'Assorted ice cream cups overhead', title: 'National Ice Cream Day', desc: 'Campaign Photography', category: 'commissioned', shoot: 'ice-cream-day' },
  { src: '/images/product/National%20Ice%20Cream%20Day%20Shoot-169.jpg', alt: 'Ice cream scoops on metal tray',   title: 'National Ice Cream Day', desc: 'Campaign Photography', category: 'commissioned', shoot: 'ice-cream-day' },
  { src: '/images/product/National%20Ice%20Cream%20Day%20Shoot-287.jpg', alt: 'Waffle cones scattered overhead',  title: 'National Ice Cream Day', desc: 'Campaign Photography', category: 'commissioned', shoot: 'ice-cream-day' },

  // Adidas Boston Marathon (2)
  { src: '/images/stories/18-cg2i8745.jpg', alt: 'Adidas Boston Marathon documentary', title: 'Adidas Boston Marathon', desc: '2019 Social Content', category: 'commissioned', shoot: 'adidas-boston' },
  { src: '/images/product/24-b0000052.jpg', alt: 'Adidas Boston running shoes',        title: 'Adidas Boston',          desc: 'Product Campaign',    category: 'commissioned', shoot: 'adidas-boston' },

  // Trail Blazers HBCU (3)
  { src: '/images/stories/16-dscf5004.jpg', alt: 'Trail Blazers HBCU activation, purple fraternity', title: 'Trail Blazers', desc: 'HBCU Activation', category: 'commissioned', shoot: 'trail-blazers-hbcu' },
  { src: '/images/stories/DSCF4570.jpg',    alt: 'HBCU classroom documentary photography',          title: 'Trail Blazers', desc: 'HBCU Activation', category: 'commissioned', shoot: 'trail-blazers-hbcu' },
  { src: '/images/stories/DSCF3302.jpg',    alt: 'HBCU fraternity documentary',                     title: 'Trail Blazers', desc: 'HBCU Activation', category: 'commissioned', shoot: 'trail-blazers-hbcu' },

  // Singles
  { src: '/images/portraits/01-dscf3979.jpg', alt: 'Full-length editorial portrait',                          title: 'Editorial Portrait', desc: 'Commercial',                category: 'commissioned' },
  { src: '/images/portraits/02-dscf4314.jpg', alt: 'Close-up portrait with dramatic shadow',                  title: 'M A J I K  S T I C K', desc: 'Commercial Portrait, 2023', category: 'commissioned' },
  { src: '/images/portraits/DSCF0576.jpg',    alt: 'Introspective studio portrait',                           title: 'Chi Duly',           desc: 'Press Photos',              category: 'commissioned' },
  { src: '/images/portraits/IG%20Post.5.jpg', alt: 'Full-length commercial portrait, utility vest and jeans', title: 'ILoveMakonnen',      desc: 'Press Photos 2025',         category: 'commissioned' },
  { src: '/images/portraits/DSCF3257.jpg',    alt: 'Portrait wearing goalie mask with layered chains',        title: 'Liba Racci',         desc: 'Cover Art, 2023',           category: 'commissioned' },
  { src: '/images/product/NE0A0560.jpg',      alt: 'Don Pancho Cilantro Lime Crema with street tacos',        title: 'Don Pancho',         desc: 'Product Photography',       category: 'commissioned' },
  { src: '/images/product/26-ecascadia.jpg',  alt: 'Freightliner eCascadia electric truck',                   title: 'eCascadia',          desc: 'CES 2019 Promo',            category: 'commissioned' },


  // ─── Street ──────────────────────────────────────────────
  { src: '/images/personal/CG2I0590.jpg', alt: 'New York City skyline at dusk',                  title: 'New York',       desc: 'First Light from Dumbo, 2018', category: 'street' },
  { src: '/images/personal/CG2I0275.jpg', alt: 'Sandwich viewed through sticky notes wall',      title: 'Pho French Dip', desc: 'Bodega LES NYC, 2018',         category: 'street' },
  { src: '/images/personal/85320006.jpg', alt: 'Black and white 35mm film portrait, brick wall', title: 'Rasheed Jamal',  desc: '120mm, 2022',                  category: 'street' },


  // ─── Conceptual ──────────────────────────────────────────
  { src: '/images/personal/ethereal%20cloud%20portrait.jpg', alt: 'Ethereal portrait against cotton candy sky', title: 'Ethereal Cloud Portrait', desc: 'Studio Concept',      category: 'conceptual' },
  { src: '/images/personal/CG2I2330.jpg',                    alt: 'Single cherry on white background',         title: 'Maraschino Cherry',       desc: 'Macro Still Life',    category: 'conceptual' },
  { src: '/images/personal/DSCF5312.jpg',                    alt: 'RGB light painting',                        title: 'Spectrum Painting',       desc: 'Long Exposure Study', category: 'conceptual' },
  { src: '/images/personal/IMG_0022-1.jpg',                  alt: 'Fixed gear bicycle with spinning wheels',   title: 'Fixie Bike',              desc: 'Portland, 2019',      category: 'conceptual' },
  { src: '/images/personal/IG-Post-1.jpg',                   alt: 'Black vintage car with doors open',         title: 'Lincoln Continental',     desc: 'Suicide Doors 2024',  category: 'conceptual' },
];
