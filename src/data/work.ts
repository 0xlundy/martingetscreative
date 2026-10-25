// All work items, single source of truth.
// Categories (id): editorial, commissioned, street, conceptual
//   note: the 'street' category is labeled "Field Notes" on the site (observational work).
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
  pos?: string;       // thumbnail crop: CSS object-position, e.g. '40% 50%'
  zoom?: number;      // thumbnail crop: push in on the subject (1 = none)
}

export const categories: { id: Category; label: string }[] = [
  { id: 'commissioned', label: 'Commissioned' },
  { id: 'editorial',    label: 'Editorial' },
  { id: 'street',       label: 'Field Notes' },
  { id: 'conceptual',   label: 'Conceptual' },
];

export const work: WorkItem[] = [
  // ─── Commissioned ─────────────────────────────
  // Order is tuned so rows fill at 4 across: series of 3 + one single, pairs of 2.
  // Sneakers: Sotheby's + Adidas
  { src: '/images/product/21-dscf3670.jpg', alt: 'Gold Air Jordan 3s',             title: "Sotheby's", desc: "Spike Lee's Golden Jordan 3s", category: 'commissioned', shoot: 'sothebys', pos: '50% 45%', zoom: 1.18 },
  { src: '/images/product/22-dscf3694.jpg', alt: 'Nike Air Jordan 1s sole detail', title: "Sotheby's", desc: 'Jordan 1 Colette',             category: 'commissioned', shoot: 'sothebys', pos: '52% 45%', zoom: 1.18 },
  { src: '/images/product/24-b0000052.jpg', alt: 'Adidas Boston running shoes',        title: 'Adidas Boston',          desc: 'Product Campaign',    category: 'commissioned', shoot: 'adidas-boston', pos: '42% 55%' },
  { src: '/images/stories/18-cg2i8745.jpg', alt: 'Adidas Boston Marathon documentary', title: 'Adidas Boston Marathon', desc: '2019 Social Content', category: 'commissioned', shoot: 'adidas-boston', pos: '36% 50%' },

  // Rashad Floyd
  { src: '/images/portraits/DSCF4523_web.jpg', alt: 'Rashad Floyd raising his arms behind three Emmy statuettes', title: 'Rashad Floyd', desc: 'Emmy Portrait', category: 'commissioned', shoot: 'rashad-floyd-emmys' },
  { src: '/images/portraits/DSCF4601_web.jpg', alt: 'Rashad Floyd holding two Emmy statuettes',                   title: 'Rashad Floyd', desc: 'Emmy Portrait', category: 'commissioned', shoot: 'rashad-floyd-emmys' },
  { src: '/images/portraits/DSCF4640_web.jpg', alt: 'Overhead portrait of Rashad Floyd with his Emmys',          title: 'Rashad Floyd', desc: 'Emmy Portrait', category: 'commissioned', shoot: 'rashad-floyd-emmys', pos: '50% 50%', zoom: 1.15 },

  // PSU Football
  { src: '/images/commissioned/psu-football/psu-vika-coach-point.jpg',    alt: 'Coach in a PSU cap and black Vika hoodie pointing toward the camera on a grey studio cyc', title: 'PSU Football', desc: 'Vika Apparel Shoot', category: 'commissioned', shoot: 'psu-football' },
  { src: '/images/commissioned/psu-football/psu-vika-player-hoodie.jpg',  alt: 'Player in a black Vika hoodie and skull cap holding a football, looking off camera',      title: 'PSU Football', desc: 'Vika Apparel Shoot', category: 'commissioned', shoot: 'psu-football' },
  { src: '/images/commissioned/psu-football/psu-vika-two-players.jpg',    alt: 'Two players posing with Born for the Storm and PDX Football backpacks in a studio',        title: 'PSU Football', desc: 'Vika Apparel Shoot', category: 'commissioned', shoot: 'psu-football', pos: '42% 50%' },

  // Against the Code
  { src: '/images/stories/DSCF7135.jpg', alt: 'Subject writing at a desk beside a vintage TV glowing with static in a dark studio', title: 'Against the Code', desc: 'Concept Still', category: 'commissioned', shoot: 'against-the-code' },
  { src: '/images/stories/DSCF7297.jpg', alt: 'Two subjects reviewing papers on a brightly lit table in a dark studio',            title: 'Against the Code', desc: 'On Set',       category: 'commissioned', shoot: 'against-the-code' },
  { src: '/images/stories/DSCF7326.jpg', alt: 'Studio portrait of a subject in an ATC jacket holding a tablet',                     title: 'Against the Code', desc: 'Portrait',     category: 'commissioned', shoot: 'against-the-code', pos: '50% 40%' },

  // Trail Blazers HBCU
  { src: '/images/stories/16-dscf5004.jpg', alt: 'Trail Blazers HBCU activation, purple fraternity', title: 'Trail Blazers', desc: 'HBCU Activation', category: 'commissioned', shoot: 'trail-blazers-hbcu', pos: '56% 50%' },
  { src: '/images/stories/DSCF4570.jpg',    alt: 'HBCU classroom documentary photography',          title: 'Trail Blazers', desc: 'HBCU Activation', category: 'commissioned', shoot: 'trail-blazers-hbcu', pos: '46% 50%' },
  { src: '/images/stories/DSCF3302.jpg',    alt: 'HBCU fraternity documentary',                     title: 'Trail Blazers', desc: 'HBCU Activation', category: 'commissioned', shoot: 'trail-blazers-hbcu', pos: '50% 46%', zoom: 1.12 },

  // Mercury League
  { src: '/images/portraits/07-dscf6551.jpg', alt: 'Studio portrait, editorial photography',             title: 'Mercury League',                desc: 'Lookbook 2025',  category: 'commissioned', shoot: 'mercury-league' },
  { src: '/images/portraits/06-dscf6116.jpg', alt: 'Editorial portrait, soft lighting',                  title: 'Mercury League',                desc: 'Lookbook 2025',  category: 'commissioned', shoot: 'mercury-league' },
  { src: '/images/personal/DSCF3443.jpg',     alt: 'Street portrait, red flannel against graffiti wall', title: 'Mercury League, Individualist', desc: 'Editorial 2025', category: 'commissioned', shoot: 'mercury-league' },

  // National Ice Cream Day
  { src: '/images/product/National%20Ice%20Cream%20Day%20Shoot-083.jpg', alt: 'Assorted ice cream cups overhead', title: 'National Ice Cream Day', desc: 'Campaign Photography', category: 'commissioned', shoot: 'ice-cream-day' },
  { src: '/images/product/National%20Ice%20Cream%20Day%20Shoot-169.jpg', alt: 'Ice cream scoops on metal tray',   title: 'National Ice Cream Day', desc: 'Campaign Photography', category: 'commissioned', shoot: 'ice-cream-day' },
  { src: '/images/product/National%20Ice%20Cream%20Day%20Shoot-287.jpg', alt: 'Waffle cones scattered overhead',  title: 'National Ice Cream Day', desc: 'Campaign Photography', category: 'commissioned', shoot: 'ice-cream-day' },

  // Lord Knows + Wild Things
  { src: '/images/portraits/03-cg2i3851.jpg', alt: 'Studio portrait with directional lighting',             title: 'Lord Knows Clothing', desc: 'Tank Head, 2019', category: 'commissioned', shoot: 'lord-knows' },
  { src: '/images/portraits/04-dscf4385.jpg', alt: 'Portrait in black balaclava, dramatic studio lighting', title: 'Lord Knows Clothing', desc: 'Lookbook 2024',   category: 'commissioned', shoot: 'lord-knows', pos: '50% 40%' },
  { src: '/images/personal/DSCF1534.jpg', alt: 'Wild Things fashion shoot, zebra print pants, front view', title: 'Wild Things', desc: 'Lookbook 2024', category: 'commissioned', shoot: 'wild-things' },
  { src: '/images/personal/DSCF1684.jpg', alt: 'Wild Things fashion shoot, satin top, back view',          title: 'Wild Things', desc: 'Lookbook 2024', category: 'commissioned', shoot: 'wild-things' },

  // Singles (fill row ends, in this order)
  { src: '/images/commissioned/savemax-auto/savemax-auto-raptor-cowboy-hat.jpg', alt: 'Model in a cowboy hat sitting on the hood of a black Ford Raptor with its amber lights on, studio cyc', title: 'Save Max Auto', desc: 'Raptor Campaign', category: 'commissioned', shoot: 'savemax-auto', pos: '48% 55%' },
  { src: '/images/product/DSCF5603.jpg',      alt: 'Yellow and black racing motorcycle on a studio seamless backdrop', title: 'Superbike',          desc: 'Studio Product',            category: 'commissioned' },
  { src: '/images/product/26-ecascadia.jpg',  alt: 'Freightliner eCascadia electric truck',                            title: 'eCascadia',          desc: 'CES 2019 Promo',            category: 'commissioned' },
  { src: '/images/portraits/IG%20Post.5.jpg', alt: 'Full-length commercial portrait, utility vest and jeans', title: 'ILoveMakonnen',      desc: 'Press Photos 2025',         category: 'commissioned', pos: '50% 58%', zoom: 1.3 },
  { src: '/images/portraits/DSCF0576.jpg',    alt: 'Introspective studio portrait',                           title: 'Chi Duly',           desc: 'Press Photos',              category: 'commissioned' },
  { src: '/images/portraits/01-dscf3979.jpg', alt: 'Full-length editorial portrait',                          title: 'Editorial Portrait', desc: 'Commercial',                category: 'commissioned', pos: '62% 50%' },
  { src: '/images/portraits/02-dscf4314.jpg', alt: 'Close-up portrait with dramatic shadow',                  title: 'M A J I K  S T I C K', desc: 'Commercial Portrait, 2023', category: 'commissioned' },
  { src: '/images/portraits/DSCF3257.jpg',    alt: 'Portrait wearing goalie mask with layered chains',        title: 'Liba Racci',         desc: 'Cover Art, 2023',           category: 'commissioned' },

  // ─── Editorial ────────────────────────────────
  // Portland Timbers youth camp
  { src: '/images/editorial/timbers-camp/timbers-camp-autograph.jpg', alt: 'Kids crowding around a Portland Timbers player signing autographs on a grass field', title: 'Portland Timbers', desc: 'Youth Soccer Camp', category: 'editorial', shoot: 'timbers-camp' },
  { src: '/images/editorial/timbers-camp/timbers-camp-dribble.jpg',   alt: 'Kids in green camp jerseys dribbling soccer balls across a sunny park field',      title: 'Portland Timbers', desc: 'Youth Soccer Camp', category: 'editorial', shoot: 'timbers-camp' },
  { src: '/images/editorial/timbers-camp/timbers-camp-high-five.jpg', alt: 'Coach in a yellow shirt high-fiving two young campers holding soccer balls',        title: 'Portland Timbers', desc: 'Youth Soccer Camp', category: 'editorial', shoot: 'timbers-camp', pos: '56% 50%' },

  // First Ink
  { src: '/images/editorial/first-ink/first-ink-kylee-portrait.jpg', alt: 'Smiling tattoo artist pointing to the tattoos on her arm inside her studio',       title: 'First Ink', desc: 'Tattoo Studio Portrait', category: 'editorial', shoot: 'first-ink', pos: '56% 50%' },
  { src: '/images/editorial/first-ink/first-ink-otter-needle.jpg',   alt: 'Close-up of a gloved hand tattooing a fine-line otter and daisies on skin',       title: 'First Ink', desc: 'At the Needle',          category: 'editorial', shoot: 'first-ink', pos: '45% 50%' },
  { src: '/images/editorial/first-ink/first-ink-studio-wide.jpg',    alt: 'Wide view of an artist tattooing a client under a ring light in a warm, cluttered studio', title: 'First Ink', desc: 'In the Studio', category: 'editorial', shoot: 'first-ink' },

  // Portland Book Festival
  { src: '/images/stories/DSCF2509.jpg', alt: 'Portland Book Festival marquee glowing over the street crowd at dusk', title: 'Portland Book Festival', desc: 'Literary Arts',  category: 'editorial', shoot: 'portland-book-festival' },
  { src: '/images/stories/DSCF2588.jpg', alt: 'On-stage conversation under the Literary Arts backdrop',              title: 'Portland Book Festival', desc: 'Main Stage',     category: 'editorial', shoot: 'portland-book-festival' },
  { src: '/images/stories/DSCF2668.jpg', alt: 'Festival audience seated for a session',                              title: 'Portland Book Festival', desc: 'Festival Crowd', category: 'editorial', shoot: 'portland-book-festival' },
  { src: '/images/stories/DSCF2702.jpg', alt: 'Authors in conversation at the microphone during a panel',           title: 'Portland Book Festival', desc: 'Author Panel',   category: 'editorial', shoot: 'portland-book-festival' },

  // Portland Cocktail Week
  { src: '/images/stories/14-dscf6926.jpg', alt: 'Documentary portrait at cocktail event',           title: 'Portland Cocktail Week', desc: 'Palomar Activation', category: 'editorial', shoot: 'pdx-cocktail-week', pos: '40% 50%' },
  { src: '/images/stories/15-dscf7874.jpg', alt: 'Havana Club rum bar scene',                        title: 'Portland Cocktail Week', desc: 'Havana Club',        category: 'editorial', shoot: 'pdx-cocktail-week', pos: '56% 50%' },
  { src: '/images/product/27-dscf7695.jpg', alt: 'Pink cosmo cocktails on round table',              title: 'Portland Cocktail Week', desc: 'Palomar Activation', category: 'editorial', shoot: 'pdx-cocktail-week', pos: '56% 50%' },
  { src: '/images/product/23-dscf6693.jpg', alt: 'Cocktails in mason jars with citrus garnish',     title: 'Portland Cocktail Week', desc: 'Palomar Activation', category: 'editorial', shoot: 'pdx-cocktail-week' },

  // Sansei Sensibility + Pink Siifu
  { src: '/images/portraits/08-dscf7929.jpg', alt: 'Carol Takami Tolman, documentary interview portrait for Sansei Sensibility',                 title: 'Sensi Sensibility', desc: 'Carol Takami Tolman, Sansei',                                  category: 'editorial', shoot: 'sensi-sensibility' },
  { src: '/images/stories/20-dscf7092.jpg',   alt: 'Oregon Supreme Court Justice Lynn Nakamoto, documentary interview portrait', title: 'Sensi Sensibility', desc: 'Lynn Nakamoto, Oregon Supreme Court Justice', category: 'editorial', shoot: 'sensi-sensibility' },
  { src: '/images/personal/IG-Post.jpg',       alt: 'Rimowa suitcase with hooded leather jacket',             title: 'Pink Siifu', desc: 'BTS Music Video', category: 'editorial', shoot: 'pink-siifu-bts' },
  { src: '/images/portraits/05-ig-post-4.jpg', alt: 'Full-length fashion portrait, leather vest and bandana', title: 'Pink Siifu', desc: 'BTS Music Video', category: 'editorial', shoot: 'pink-siifu-bts', pos: '52% 52%', zoom: 1.3 },

  // Honcho day
  { src: '/images/stories/DSCF9436_look.jpg', alt: 'Rider on a red Vespa scooter at the Honcho One Moto opening party', title: 'Honcho', desc: 'One Moto Opening Party', category: 'editorial', shoot: 'honcho-day', pos: '62% 68%', zoom: 1.3 },
  { src: '/images/stories/DSCF9459_look.jpg', alt: 'Group portrait of the scooter crew at Honcho',                     title: 'Honcho', desc: 'One Moto Opening Party', category: 'editorial', shoot: 'honcho-day' },
  { src: '/images/stories/DSCF9489_look.jpg', alt: 'Crowd gathered among motorcycles at the Honcho party',            title: 'Honcho', desc: 'One Moto Opening Party', category: 'editorial', shoot: 'honcho-day' },

  // Honcho after dark
  { src: '/images/stories/DSCF9434_look.jpg',   alt: 'Detail of a customized scooter front end at Honcho',           title: 'Honcho', desc: 'One Moto Opening Party', category: 'editorial', shoot: 'honcho-night' },
  { src: '/images/stories/DSCF9472_look.jpg',   alt: 'Motorcycle on a red-lit stage with a dachshund walking past',  title: 'Honcho', desc: 'One Moto Opening Party', category: 'editorial', shoot: 'honcho-night' },
  { src: '/images/stories/honcho-set-2988.jpg', alt: 'Honcho stage set with motorcycles under red and blue lighting', title: 'Honcho', desc: 'One Moto Opening Party', category: 'editorial', shoot: 'honcho-night' },

  // Cine Rent West BTS
  { src: '/images/on-set/10-dscf2102.jpg', alt: 'Arriflex film camera on set', title: 'Cine Rent West',         desc: 'Behind the Scenes', category: 'editorial', shoot: 'crw-bts' },
  { src: '/images/on-set/DSCF2955.jpg',    alt: 'Film crew and talent on set', title: 'Cine Rent West',         desc: 'Behind the Scenes', category: 'editorial', shoot: 'crw-bts' },
  { src: '/images/on-set/12-dscf2988.jpg', alt: 'On-set photography production', title: 'Cine Rent West',       desc: 'Behind the Scenes', category: 'editorial', shoot: 'crw-bts' },
  { src: '/images/on-set/11-dscf2117.jpg', alt: 'Behind the scenes on film set', title: 'Fly Anakin Music Video', desc: 'BTS 2023',         category: 'editorial', shoot: 'crw-bts' },

  // Mother PAC BTS
  { src: '/images/editorial/mother-pac/mother-pac-interview-setup.jpg', alt: 'Wide behind-the-scenes view of a crew setting up an interview on a white studio cyc', title: 'Mother PAC', desc: 'Behind the Scenes', category: 'editorial', shoot: 'mother-pac' },
  { src: '/images/editorial/mother-pac/mother-pac-on-the-cyc.jpg',      alt: 'Woman in a white vest gesturing as she speaks on a white studio cyc',                  title: 'Mother PAC', desc: 'Behind the Scenes', category: 'editorial', shoot: 'mother-pac', pos: '50% 45%', zoom: 1.15 },
  { src: '/images/editorial/mother-pac/mother-pac-talent-prep.jpg',     alt: 'Crew member prepping talent in a pink tweed jacket beside the camera',                  title: 'Mother PAC', desc: 'Behind the Scenes', category: 'editorial', shoot: 'mother-pac', pos: '62% 50%' },

  // Olipop BTS
  { src: '/images/on-set/DSCF5220.jpg', alt: 'Behind the scenes, Olipop production', title: 'Olipop', desc: 'Behind the Scenes', category: 'editorial', shoot: 'olipop-bts' },
  { src: '/images/on-set/DSCF5218.jpg', alt: 'On-set portrait, blue background',     title: 'Olipop', desc: 'Behind the Scenes', category: 'editorial', shoot: 'olipop-bts', pos: '50% 50%', zoom: 1.7 },
  { src: '/images/on-set/DSCF5188.jpg', alt: 'BTS film production photography',      title: 'Olipop', desc: 'Behind the Scenes', category: 'editorial', shoot: 'olipop-bts' },

  // Singles
  { src: '/images/stories/13-dscf5257.jpg', alt: 'Documentary storytelling photography', title: 'Gregory Gourdet', desc: 'OXO and Amazon Set Photo', category: 'editorial', wide: true },
  { src: '/images/editorial/cash-money/bxby-shuut-cash-money-bts.jpg', alt: 'BXBY $HUUT in glasses and a cap, holding a stack of cash, posed on the hood of a white car under blue and pink light', title: 'BXBY $HUUT', desc: '"Cash Money" Music Video, Behind the Scenes', category: 'editorial', shoot: 'cash-money' },

  // ─── Field Notes ──────────────────────────────
  { src: '/images/personal/CG2I0590.jpg', alt: 'New York City skyline at dusk',                  title: 'New York',       desc: 'First Light from Dumbo, 2018', category: 'street' },
  { src: '/images/personal/CG2I0275.jpg', alt: 'Sandwich viewed through sticky notes wall',      title: 'Pho French Dip', desc: 'Bodega LES NYC, 2018',         category: 'street' },
  { src: '/images/personal/85320006.jpg', alt: 'Black and white 35mm film portrait, brick wall', title: 'Rasheed Jamal',  desc: '120mm, 2022',                  category: 'street', pos: '40% 50%' },
  { src: '/images/personal/DSCF8336.jpg', alt: 'Pink moon rising over forested hills at blue hour', title: 'Moonrise', desc: 'Blue Hour', category: 'street' },

  // ─── Conceptual ───────────────────────────────
  { src: '/images/personal/CG2I2330.jpg',                    alt: 'Single cherry on white background',         title: 'Maraschino Cherry',       desc: 'Macro Still Life',    category: 'conceptual' },
  { src: '/images/personal/ethereal%20cloud%20portrait.jpg', alt: 'Ethereal portrait against cotton candy sky', title: 'Ethereal Cloud Portrait', desc: 'Studio Concept',      category: 'conceptual', pos: '56% 50%' },
  { src: '/images/personal/DSCF5312.jpg',                    alt: 'RGB light painting',                        title: 'Spectrum Painting',       desc: 'Long Exposure Study', category: 'conceptual', pos: '70% 50%' },
  { src: '/images/personal/IMG_0022-1.jpg',                  alt: 'Fixed gear bicycle with spinning wheels',   title: 'Fixie Bike',              desc: 'Portland, 2019',      category: 'conceptual' },
  { src: '/images/personal/IG-Post-1.jpg',                   alt: 'Black vintage car with doors open',         title: 'Lincoln Continental',     desc: 'Suicide Doors 2024',  category: 'conceptual', pos: '35% 80%', zoom: 1.15 },
];
