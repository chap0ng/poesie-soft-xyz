
const PROJECTS_DATA = {
  interactionDesign: [
    {
      id: "burning-mule",
      disabled: true,
      title: "BURNING MULE IN THE MORDOR",
      year: "2023",
      institution: "HEAD–GENEVA : MASTER-MEDIA-DESIGN",
      institutionLink: "https://www.hesge.ch/head/en/programs-research/master-arts-media-design",
      collab: "",
      tags: "Prototype, Visual Coding, Processing",
      descriptionEn: "We designed an interactive application driven by mouse navigation. As the cursor moves, specific zones are detected and directly influence both sound and visuals. Clicking zooms into a zone and triggers a new audiovisual state. Each area unfolds through several effects that eventually loop into a final state. Once every zone reaches its final loop, the background image shifts to a new scene, with a structure of two to three scenes overall. The intention is to build a mystical atmosphere and a cyclical form of storytelling inspired by folktales and lived moments in Chamonix, then gradually let that world deteriorate as the user keeps exploring.",
      descriptionFr: "Un projet conçu en groupe d'une application interactive guidée par la navigation à la souris. Lorsque le curseur se déplace, des zones sont détectées et modifient directement les sons ainsi que les visuels. Un clic permet de zoomer dans une zone et déclenche un nouvel état audiovisuel. Chaque zone déploie plusieurs effets qui finissent par boucler sur un état final. Lorsque toutes les zones atteignent cette boucle finale, l'image de fond change pour passer à une nouvelle scène, avec une progression pensée en deux à trois scènes. L'intention est de recréer une atmosphère mystique et une narration cyclique, inspirées des contes et de l'expérience vécue à Chamonix, puis de laisser cet univers se dégrader progressivement au fil de la navigation.",
      images: [
        { src: "../Images/gameandinteractions/burningmule_Cover.jpg", alt: "Burning Mule image 1", width: "1200", height: "800" },
        { src: "../Images/gameandinteractions/burningmule_01.jpg", alt: "Burning Mule image 2", width: "1200", height: "800" }
      ]
    },
    {
      id: "suetone",
      title: "SUÈTONE",
      year: "2024",
      institution: "HEAD–GENEVA : MASTER-MEDIA-DESIGN",
      institutionLink: "https://www.hesge.ch/head/en/programs-research/master-arts-media-design",
      institution2: "CARAN D'ACHE",
      institutionLink2: "https://www.carandache.com/ch/fr/",
      collab: "Douglas and Pierre",
      collabLinks: [
      { name: "Douglas Edric Stanley", url: "https://abstractmachine.net/" },
      { name: "Pierre Rossel", url: "" },
      ],
      collabSeparator: " and ",
      commissionedBy: "",
      for: "",
      diffusion: [
        "2024: KIKK Festival, Namur",  
        "2024: Drawing Futures exhibition at Plateforme 10, Lausanne",
      ],
      medium: "ESP32, Wood, PLA Print",
      tags: "Sound, Object Design, Exhibition, Mixed-media, ESP32, Arduino, Max-MSP, Ableton live",
      descriptionEn: "Inspired by the shape of mountain rocks, Suetone is composed of three drawing objects designed to encourage the creation of free felt-tip patterns, and a hybrid generative music box combining handcrafted wood and 3D printing. It turns the colors used into generative musical scores, producing a sound texture that continuously evolves according to the shades chosen. By integrating Caran d'Ache products, Suetone combines artistic expression and sound creation in a free and introspective drawing practice. The project questions the link between the concrete and the unpredictable, between analog drawing methods and digital processes, revealing a use of generative sound design in support of a sensory experience.",
      descriptionFr: "Inspiré de la forme des rochers de montagne, Suètone se compose de trois objets de dessin, conçus pour encourager la création de motifs libres au feutre, et d'une boîte à musique générative hybride alliant bois artisanal et impression 3D. Celle-ci transforme les couleurs utilisées en partitions musicales génératives, produisant une texture sonore en perpétuelle évolution selon les nuances employées. Par l'intégration des produits Caran d'Ache, Suètone combine l'expression artistique et la création sonore dans une démarche libre et introspective du dessin. Ce projet questionne le lien entre le concret et l'imprévisible, entre les méthodes analogiques du dessin et les processus numériques, dévoilant une utilisation du design sonore génératif en faveur d'une expérience sensorielle.",
      video: "https://vimeo.com/1122178640?share=copy",  // OPTIONAL: video link
      images: [
        { src: "../Images/Interaction/Suetone_01.png", alt: "Suetone image 1", width: "1200", height: "800" },
        { src: "../Images/Interaction/Suetone_02.png", alt: "Suetone image 2", width: "1200", height: "800" },
      ]
    },
        {
      id: "creatune",
      title: "CREATUNE",
      year: "2025",
      institution: "HEAD–GENEVA : MASTER-MEDIA-DESIGN",
      institutionLink: "https://www.hesge.ch/head/en/programs-research/master-arts-media-design",
      collab: "Douglas Edric Stanley",
      collabLinks: [
      { name: "Douglas Edric Stanley", url: "https://abstractmachine.net/" },
      ],
      tags: "Sound, Object Design, Exhibition",
      descriptionEn: "CreaTune is a playful music-creation tool that turns a forest hike into an interactive, immersive sound exploration. The experience unfolds through a portable kit composed of three environmental sensors (light, humidity, temperature), an interactive web app, and a guidebook. Together they attract and interact with invisible musical creatures called CreaTunes. Each creature has its own sonic signature and only appears when specific natural conditions are met. The phone becomes a portal, translator and receptacle, allowing users to listen to and communicate with these ephemeral beings. Whether tapping a rhythm on a stump or singing, the creature responds and plays an adapted melody. Inspired by research on yōkai and local fairy myths, CreaTune offers a situated, narrative approach to musical composition. The project invites musicians, artists and curious visitors to experience a meditative, enchanted walk where nature becomes a playground for listening and creation.",
      descriptionFr: "CreaTune est un outil de création musicale ludique qui transforme la randonnée en forêt en une exploration sonore interactive et immersive. L’expérience se déploie à travers un kit nomade composé de trois capteurs environnementaux (lumière, humidité, température), d’une application web interactive et d’un livre- guide. Ensemble, ils permettent d’attirer et d’interagir avec des créatures musicales invisibles appelées CreaTunes. Chaque créature possède sa propre signature sonore et n’apparaît que lorsque des conditions naturelles spécifiques sont réunies. Le téléphone se transforme alors en portail, en traducteur et en réceptacle, permettant d’écouter et de communiquer avec ces êtres éphémères. Qu’il s’agisse de frapper un rythme sur une souche ou de chanter, la créature répond et se met à jouer une mélodie adaptée. Inspiré par mes recherches sur les Yōkai ainsi que par les mythes locaux, tels que ceux des fées, CreaTune propose une approche située et narrative de la composition musicale. Le projet invite musiciens, artistes et curieux à vivre une balade méditative et enchantée, où la nature devient un terrain de jeu, d’écoute et de création.",
      video: "https://vimeo.com/1122191081?share=copy",  // OPTIONAL: video link
      link: "",   // OPTIONAL: external link
      diffusion: [
        "2026: Hiflow - Hybridations Fertiles, Geneva",
        "2025: Design HEADS, Geneva",
        "2025: KIKK Festival, Namur"
      ],
      medium: "ESP32, PLA Print, Climbing Ropes",
      images: [
        { src: "../Images/Interaction/CREATUNE_01.jpg", alt: "CREATUNE image 1", width: "1200", height: "800" },
        { src: "../Images/Interaction/CREATUNE_02.jpg", alt: "CREATUNE image 2", width: "1200", height: "800" },
        { src: "../Images/Interaction/CREATUNE_03.jpg", alt: "CREATUNE image 3", width: "1200", height: "800" },
        { src: "../Images/Interaction/CREATUNE_04.jpg", alt: "CREATUNE image 4", width: "1200", height: "800" },
        { src: "../Images/Interaction/CREATUNE_06.jpg", alt: "CREATUNE image 5", width: "1200", height: "800" },
        { src: "../Images/Interaction/CREATUNE_07.jpg", alt: "CREATUNE image 7", width: "1200", height: "800" },
      ]
    },
    {
      id: "symbiosis",
      title: "SYMBIOSIS",
      year: "2025",
      institution: "HEAD–GENEVA : MASTER-MEDIA-DESIGN",
      institutionLink: "https://www.hesge.ch/head/en/programs-research/master-arts-media-design",
      collab: "",
      tags: "Speculative Design, Object Design, Exhibition, Unity, Generative, Installation",
      descriptionEn: "Symbiosis imagines Switzerland in 2050, where citizens have left cities to form eco-villages. At the heart of each community sits a ‘Land Mayor’, a symbiotic artificial intelligence that combines citizen contributions with mycorrhizal networks. It generates local micro-policies tailored to the climatic challenges surrounding each village. The installation questions the role of AI in governance and explores how it could foster new forms of coexistence. Visitors are invited to vote via the installation's touchscreens on various political proposals from this speculative universe, collectively shaping a narrative of participatory democracy between humans, nature, and technology.",
      descriptionFr: "Le projet Symbiosis imagine la Suisse en 2050, où les citoyens ont quitté les villes pour former des éco-villages. Au centre de chaque communauté siège un “Maire de terre”, une intelligence artificielle symbiotique qui combine contributions citoyennes et réseaux mycorhiziens. Celle-ci génère pour chaque village des micro-politiques locales adaptées aux enjeux climatiques environnants. Cette installation questionne le rôle de l'intelligence artificielle dans nos structures de gouvernance et explore comment celle-ci pourrait favoriser l'émergence de nouvelles formes de vivre ensemble. Le public est invité à voter, via les écrans tactiles de l’installation, sur différentes propositions politiques issues de cet univers spéculatif, imaginant ainsi le récit d’une nouvelle forme de démocratie participative entre humains, nature et technologie.",
      diffusion: [
        "2026: Hiflow - Hybridations Fertiles, Geneva",
        "2026: Mapping Festival, Geneva",
        "2025: Polit Forum, Bern",
        "2024: Democracy Week, Geneva"
      ],
      images: [
        { src: "../Images/Interaction/Symbiosis_01.png", alt: "SYMBIOSIS image 1", width: "1200", height: "800" },
        { src: "../Images/Interaction/Symbiosis_02.png", alt: "SYMBIOSIS image 2", width: "1200", height: "800" },
        { src: "../Images/Interaction/Symbiosis_03.png", alt: "SYMBIOSIS image 3", width: "1200", height: "800" },
        { src: "../Images/Interaction/Symbiosis_04.png", alt: "SYMBIOSIS image 4", width: "1200", height: "800" },        
        
      ]
    },
  ],

  fineArts: [
    {
      id: "after-party",
      title: "After Party",
      year: "2018",
      institution: "",
      institutionLink: "",
      collab: "",
      tags: "Photo",
      descriptionEn: "When night falls, objects that served their purpose during the day are left alone. This photographic series explores the secret life of these objects after dark, capturing their silent presence and the atmosphere of nocturnal spaces.",
      descriptionFr: "Lorsque la nuit tombe, les objets qui remplissaient leurs fonctions pendant la journée se retrouvent seuls. Cette série photographique explore la vie secrète de ces objets la nuit, capturant leur présence silencieuse et l'atmosphère des espaces nocturnes.",
      images: [
        { src: "../Images/fine-arts/After-Party-05.png", alt: "After Party image 1", width: "1200", height: "800" },
        { src: "../Images/fine-arts/After-Party-02.png", alt: "After Party image 2", width: "1200", height: "800" },
        { src: "../Images/fine-arts/After-Party-03.png", alt: "After Party image 3", width: "1200", height: "800" },
        { src: "../Images/fine-arts/After-Party-04.png", alt: "After Party image 4", width: "1200", height: "800" },
        { src: "../Images/fine-arts/After-Party-01.png", alt: "After Party image 5", width: "1200", height: "800" }
      ]
    },
    {
      id: "lincubateur",
      title: "L'incubateur",
      year: "2020",
      institution: "HEAD-GENEVA : BACHELOR-FINE-ARTS",
      institutionLink: "https://www.hesge.ch/head/formations-recherche/bachelor-en-arts-visuels",
      collab: "",
      tags: "Blender, Unity, Ableton live, Installation, Generative, Video, sound-design, OPZ, loop",
      descriptionEn: "L'incubateur is an interactive audiovisual installation created during my first year of Bachelor studies. It served as my first experimental gesture in the field of interactive installations, blending sound and visuals that respond to audience interaction with a central pad. Each sound effect influences the work, generating unique visual compositions.",
      descriptionFr: "L'incubateur est une installation audio-visuelle interactive réalisée lors de ma première année de Bachelor. Elle a constitué mon premier geste expérimental dans le domaine des installations interactives, mêlant sons et images activés par l'interaction du public avec un pad central. Chaque effet sonore influence l'œuvre et génère des compositions visuelles uniques.",
      video: "https://www.youtube.com/watch?v=IMkOtXBf3is",
      images: [
        { src: "../Images/fine-arts/incubateur-03.JPG", alt: "L'incubateur image 1", width: "1500", height: "800" },
        { src: "../Images/fine-arts/incubateur-04.JPG", alt: "L'incubateur image 2", width: "1200", height: "800" }
      ]
    },
    {
      id: "promenade",
      title: "Promenade",
      year: "2021",
      institution: "HEAD-GENEVA : BACHELOR-FINE-ARTS",
      institutionLink: "https://www.hesge.ch/head/formations-recherche/bachelor-en-arts-visuels",
      collab: "",
      tags: "Blender, Ableton live, After Effects, Acrylic paint",
      descriptionEn: "Promenade is my first 3D short film, exploring the connection between the tangible and digital worlds through narrative and the creation of physical artworks. The video was presented alongside paintings made with a wooden stick, which was also exhibited. This project sparked my fascination with the emptiness of 3D space and the narrative potential of minimal elements.",
      descriptionFr: "Promenade est mon premier court-métrage 3D, explorant le lien entre le monde tangible et digital à travers la narration et la création d'œuvres physiques. La vidéo a été présentée avec des peintures réalisées à l'aide d'un bâton en bois, également exposé. Ce projet a déclenché ma fascination pour le vide de la 3D et le potentiel narratif de quelques éléments.",
      video: "https://www.youtube.com/watch?v=7qh8TqIoj_Y&list=PLoIGnp970lk-Y-exsogpbwQeFUPreOixu&index=3&t=163s",
      images: [
        { src: "../Images/fine-arts/promenade-02.png", alt: "Promenade image 1", width: "1200", height: "800" },
        { src: "../Images/fine-arts/promenade-03.png", alt: "Promenade image 2", width: "1200", height: "800" },
        { src: "../Images/fine-arts/promenade-01.png", alt: "Promenade image 3", width: "1200", height: "800" },
        { src: "../Images/fine-arts/promenade-04.png", alt: "Promenade image 4", width: "1200", height: "800" }
      ]
    },
    {
      id: "Goutte à Pas",
      title: "Goutte à Pas",
      year: "2022",
      institution: "HEAD-GENEVA : BACHELOR-FINE-ARTS",
      institutionLink: "https://www.hesge.ch/head/formations-recherche/bachelor-en-arts-visuels",
      collab: "",
      tags: "Blender, Ableton live, Max-MSP, Installation, Generative, Video, sound-design, loop, unity",
      descriptionEn: "The humanoid figure animates step by step through a slow drip mechanism. Its body transforms as it moves forward and stops when the reservoir is exhausted. The 3D model becomes affected by the impacts of the liquid. The 'Goutte-à-pas' installation uses a low-rate drip divided into three nozzles; drops fall onto small plexiglass boxes arranged in a line parallel to the projection. Micro-contacts inside the boxes act as triggers on impact, randomly generating sound and deforming the projected 3D visuals.",
      descriptionFr: "Le personnage humanoïde s’anime pas-à-pas par le biais du goutte-à-goutte. Son corps se transforme, il avance et s’arrête quand le réservoir c’est épuisé. Le modèle 3D est parasité par les impacts du liquide. L’installation « Goutte-à-pas », comporte un goutte-à-goutte réglé à une cadence basse, séparé en trois embouts. Les gouttes tombent sur les petites boites en plexiglass. Elles sont disposées en une ligne parallèle à la projection. Des micro-contacts sont installés à l’intérieur des boites. Ceux-ci servent de déclencheurs lors de l’impact des gouttes sur le plexiglass, ce qui génère aléatoirement le son ainsi que la déformation du visuel 3D projeté.",
      images: [
        { src: "../Images/fine-arts/Gouttes_01.jpeg", alt: "Goutte à Pas image 1", width: "1200", height: "800" },
        { src: "../Images/fine-arts/Gouttes_02.jpeg", alt: "Goutte à Pas image 2", width: "1200", height: "800" },
        { src: "../Images/fine-arts/Gouttes_03.jpeg", alt: "Goutte à Pas image 3", width: "1200", height: "800" },
      ]
    },    
    {
      id: "spectral-terrarium",
      title: "Spectral Terrarium",
      year: "2022",
      institution: "HEAD-GENEVA : BACHELOR-FINE-ARTS",
      institutionLink: "https://www.hesge.ch/head/formations-recherche/bachelor-en-arts-visuels",
      collab: "",
      tags: "Blender, Ableton live, Max-MSP, Installation, Generative, Video, sound-design, Photography, loop",
      descriptionEn: "Spectral Terrarium is an audiovisual installation combining 3D animation, sound, and the analysis of a decomposing slice of bread. The bread, kept in a vacuum for a month, was documented photographically to observe its transformation. The work seeks to transcend the discomfort of decomposition and create a link between the real and virtual worlds, embracing randomness as part of the installation's presentation.",
      descriptionFr: "Spectral Terrarium est une installation audio-visuelle composée d'animation 3D, de son et de l'analyse d'une tranche de pain en décomposition. Conservée sous vide pendant un mois, la tranche a été documentée photographiquement pour observer sa transformation. L'œuvre cherche à dépasser le dégoût de la décomposition et à tisser un lien entre réel et virtuel, en laissant l'aléatoire guider la présentation.",
      images: [
        { src: "../Images/fine-arts/spectral-terrarium-04.jpeg", alt: "Spectral Terrarium image 1", width: "1200", height: "800" },
        { src: "../Images/fine-arts/spectral-terrarium-02.jpeg", alt: "Spectral Terrarium image 2", width: "1200", height: "800" },
        { src: "../Images/fine-arts/spectral-terrarium-06.jpeg", alt: "Spectral Terrarium image 3", width: "1200", height: "800" },
      ]
    },
    {
      id: "hello",
      title: "Hello",
      year: "2023",
      institution: "PLASMID COLLECTIVE, LA GRANGE 5.0",
      institutionLink: "https://www.instagram.com/plasmid_collective/",
      collab: "",
      tags: "installation, Loop, sound-design, max-msp, video-mapping, Ableton live",
      descriptionEn: "PLASMID is an association dedicated to promoting the creativity of artists from diverse backgrounds and disciplines. This installation explores looping sound design and video mapping as a means of collaborative artistic expression. The project present itself as a video mapping of a big sitted caracter inside the old boiler rooms of the farm. Creating as sense of unease and curiosity toward this caracter.",
      descriptionFr: "PLASMID est une association qui vise à promouvoir la créativité des artistes de tous horizons et de domaines variés. Cette installation explore le sound design en boucle et le video-mapping comme moyen d'expression artistique collaborative. Le projet se présente sous forme d'un video-mapping d'un grand personnage assis à l'intérieur des anciennes chaudières de la ferme, créant un sentiment de malaise et de curiosité envers ce personnage.",
      diffusion: [
        "2024, Plasmid - Grange 5.0, Rueyres"
      ],
      images: [
        { src: "../Images/fine-arts/Hello-01.png", alt: "Hello image 1", width: "1200", height: "800" },
        { src: "../Images/fine-arts/Hello-02.png", alt: "Hello image 2", width: "1200", height: "800" }
      ]
    }
  ],


//GAMES  
  games: [
//2025
    {
      id: "T3 19.9KM",
      title: "T3 19.9KM",
      year: "2025",
      institution: "HEAD–GENEVA : MASTER-MEDIA-DESIGN",
      institutionLink: "https://www.hesge.ch/head/en/programs-research/master-arts-media-design",
      collab: "Mathis and Ekaterina",
      collabLinks: [
      { name: "Mathis", url: "" },
      { name: "Ekaterina", url: "https://katerinabliznyuk.com/" }
      ],
      collabSeparator: " and ",
      tags: "3D, Blender, Polycam, Unity, VR, Puzzle",
      descriptionEn: "An introspective, multiple-choice ascent that invites the viewer to seek emotional harmony at the mountain's summit. Inspired by mountain hikes, this 'hiking simulator' carries the player through landscapes of thought. During the ascent the player passes several environments where they encounter symbols that shape the journey. Regardless of the route taken, the player ultimately reaches the summit where a bench, metaphor for emotional balance, invites them to sit and watch the golden hour of dusk. The ascent is conceived to evoke Heidi's journey from town to mountain, from stress to the calm of nature. The project was created as a proposal for the Swiss Pavilion at Expo 2025 Osaka.",
      descriptionFr: "Ascension introspective et métaphorique à choix multiples invitant le·la spectateur·rice à trouver l'harmonie émotionnelle au sommet de la montagne. Inspiré par les randonnées en montagne, ce « hiking simulator » nous fait voyager dans des paysages de pensée. Au fil de l'ascension, le·la spectateur·rice traverse plusieurs environnements où il·elle est confronté·e à des symboles qui influencent le parcours. Quel que soit le chemin choisi, on parvient finalement au sommet, où un banc, métaphore d'une harmonie émotionnelle, nous invite à s'asseoir et à contempler l'heure dorée du crépuscule. L'ascension est pensée pour évoquer le parcours de Heidi, de la ville à la montagne, du stress au calme de la nature. Le projet a été réalisé comme proposition pour le Pavillon suisse à l'Exposition universelle d'Osaka 2025.",
      images: [
        { src: "../Images/Games/T3_01.jpg", alt: "T3 19.9KM image 1", width: "1200", height: "800" },
        { src: "../Images/Games/T3_02.jpg", alt: "T3 19.9KM image 2", width: "1200", height: "800" },
        { src: "../Images/Games/T3_03.png", alt: "T3 19.9KM image 3", width: "1200", height: "800" },
        { src: "../Images/Games/T3_04.png", alt: "T3 19.9KM image 4", width: "1200", height: "800" },
        { src: "../Images/Games/T3_05.png", alt: "T3 19.9KM image 5", width: "1200", height: "800" },
        { src: "../Images/Games/T3_06.jpg", alt: "T3 19.9KM image 6", width: "1200", height: "800" },
      ]
    },
//2024
    {
      id: "save-the-goblins",
      title: "Save The Goblins",
      year: "2024",
      institution: "HEAD–GENEVA : MASTER-MEDIA-DESIGN",
      institutionLink: "https://www.hesge.ch/head/en/programs-research/master-arts-media-design",
      collab: "Enzo and Oceanne",
      collabLinks: [
      { name: "Enzo", url: "https://instagram.com/enzo.srr" },
      { name: "Oceanne", url: "https://instagram.com/at.zima" }
      ],
      collabSeparator: " and ",
      tags: "3D, Blender, Unity, AR, Puzzle",
      descriptionEn: "In the heart of the Forêhead, the mage Macintox has been exercising his influence over the goblins for several millennia. He uses them for evil purposes... Your companions Int, Bool, Var, and Float have fallen into his traps. Free them using the power of Cheatmove that you alone possess. Will you be able to thwart the great magician's mazes? Save the Goblins is an AR video game using machine learning as controllers. Simply scan the different posters to reveal the puzzles to be solved. There are two ways to solve the puzzles: alone by memorizing the sequences or by asking for help from someone else. Then, the player must perform the corresponding movements in the magic box in order to free one of his companions.",
      descriptionFr: "Au cœur du Forêhead, le mage Macintox exerce son influence sur les gobelins depuis plusieurs millénaires. Il les utilise à des fins maléfiques... Vos compagnons Int, Bool, Var et Float sont tombés dans ses pièges. Libérez-les en utilisant le pouvoir du Cheatmove que vous seul possédez. Serez-vous capable de déjouer les labyrinthes du grand magicien? Save the Goblins est un jeu vidéo AR utilisant l'apprentissage automatique comme contrôleurs. Scannez simplement les différentes affiches pour révéler les énigmes à résoudre. Il y a deux façons de résoudre les énigmes: seul en mémorisant les séquences ou en demandant de l'aide à quelqu'un d'autre. Le joueur doit ensuite effectuer les mouvements correspondants dans la boîte magique pour libérer l'un de ses compagnons.",
      images: [
        { src: "../Images/Games/Goblins_01.jpg", alt: "Save The Goblins image 1", width: "1200", height: "800" },
        { src: "../Images/Games/Goblins_03.jpg", alt: "Save The Goblins image 3", width: "1200", height: "800" },
        { src: "../Images/Games/Goblins_04.jpg", alt: "Save The Goblins image 4", width: "1200", height: "800" },
        { src: "../Images/Games/Goblins_02.jpg", alt: "Save The Goblins image 2", width: "1200", height: "800" },
      ]
    },


//2023
    {
      id: "1 min Goblins",
      title: "1 min Goblins",
      year: "2023",
      institution: "",
      institutionLink: "",
      collab: "",
      collabLinks: [
      ],
      collabSeparator: "",
      tags: "Pixel Art, 2D, Puzzle, Playdate",
      descriptionEn: "A 1 min puzzle game made with Playdate Pulp. The player has to find his way in order to escape a small dungeon.",
      descriptionFr: "Un jeu puzzle de 1 min réalisé avec Playdate Pulp. Le joueur doit trouver son chemin pour s'échapper d'un petit donjon.",
      images: [
        { src: "../Images/Games/OneMinGoblin_01.png", alt: "1 min Goblins image 1", width: "1200", height: "800" },
        { src: "../Images/Games/OneMinGoblin_02.png", alt: "1 min Goblins image 2", width: "1200", height: "800" },
        { src: "../Images/Games/OneMinGoblin_03.png", alt: "1 min Goblins image 3", width: "1200", height: "800" },

      ]
    },


//2022
    {
      id: "Sleep pARTy people",
      title: "Sleep pARTy people",
      year: "2022",
      institution: "HEAD-GENEVA : BACHELOR-FINE-ARTS",
      institutionLink: "https://www.hesge.ch/head/formations-recherche/bachelor-en-arts-visuels",
      collab: "",
      collabLinks: [
      ],
      collabSeparator: "",
      tags: "3D, Polycam, Unreal Engine, VR, Exhibition",
      collab: " Victoire Poinsot, Zoé Gronchi and Louna Passal",
      collabLinks: [
      { name: "Victoire Poinsot", url: "" },
      { name: "Zoé Gronchi", url: "" },
      { name: "Louna Passal", url: "" }
      ],
      collabSeparator: " / ",
      descriptionFr: "Lors de ma troisième année de Bachelor, j’ai eu l’occasion lors d’un exercice de faire la curation d’une exposition en collaboration avec les autres élèves de l’option Interaction. J’ai décidé de faire la mienne en réalité-virtuelle pour tester les possibilités et les limites de celle-ci. J’ai utilisé le logiciel « Unreal Engine 5 » et un casque « Oculus Quest 2 » pour réaliser cette exposition. J’ai nommé l’exposition « Sleep pARTy People » qui contient plusieurs scans 3D, divers objets modelés directement en 3D, des scans de dessins et peintures ainsi que plusieurs morceaux de musique qui accompagnent la balade.",
      descriptionEn: "During my third year of the Bachelor's program, I had the opportunity as part of an exercise to curate an exhibition in collaboration with the other students in the Interaction track. I decided to create mine in virtual reality to test its possibilities and limits. I used Unreal Engine 5 and an Oculus Quest 2 headset to realize this exhibition. I named the exhibition 'Sleep pARTy People', which includes several 3D scans, various objects modeled directly in 3D, scans of drawings and paintings, as well as several musical pieces that accompany the walk.",
      images: [
        { src: "../Images/Games/SleepPartyPeople_01.png", alt: "Sleep pARTy people image 1", width: "1200", height: "800" },
        { src: "../Images/Games/SleepPartyPeople_02.png", alt: "Sleep pARTy people image 2", width: "1200", height: "800" },
        { src: "../Images/Games/SleepPartyPeople_03.png", alt: "Sleep pARTy people image 3", width: "1200", height: "800" },
        { src: "../Images/Games/SleepPartyPeople_04.png", alt: "Sleep pARTy people image 4", width: "1200", height: "800" },
      ]
    }
  ],  

//3D Modeling, Short films and Renders
  threeD: [
    {
      id: "Ghost not in a Shell",
      title: "Ghost not in a Shell",
      year: "2025",
      institution: "RAW-COLLECTIVE",
      institutionLink: "https://www.instagram.com/espace28_/",
      collab: "",
      tags: "Short Film, Unreal Engine, Blender, Davinci Resolve, After Effects",
      descriptionEn: "This short film tells the absurd, dreamlike story of a garage ghost in the United Kingdom. With little else to do but haunt the place, its situation changes the day the garage owner drops off a stash of old UK garage vinyls. The film explores the author's love for this underground musical style and the way it blends melancholic, ghostly tones with memories of distant raves.",
      descriptionFr: "Ce court film raconte l'histoire absurde et onirique d'un fantôme de garage au Royaume‑Uni. N'ayant pas grand-chose d'autre à faire que de hanter les lieux, sa situation bascule le jour où le propriétaire du garage y dépose ses vieux vinyles de UK garage. Ce court-métrage raconte l'amour de l'auteur pour ce style musical underground et la façon dont il mélange des sons mélancoliques, fantomatiques et le souvenir de raves lointaines.",
      diffusion: [
        "2025, Espace 28 - Private Exhibition, Lausanne"
      ],
      images: [
        { src: "../Images/ThreeD/GH_Scene_01.jpeg", alt: "Ghost not in a Shell image 1", width: "1200", height: "800" },
        { src: "../Images/ThreeD/GH_Scene_02.jpeg", alt: "Ghost not in a Shell image 2", width: "1200", height: "800" },
        { src: "../Images/ThreeD/GH_Scene_03.jpeg", alt: "Ghost not in a Shell image 3", width: "1200", height: "800" },
        { src: "../Images/ThreeD/GH_Scene_04.jpeg", alt: "Ghost not in a Shell image 4", width: "1200", height: "800" },
        { src: "../Images/ThreeD/GH_Scene_05.jpeg", alt: "Ghost not in a Shell image 5", width: "1200", height: "800" },
        { src: "../Images/ThreeD/GH_Scene_06.jpeg", alt: "Ghost not in a Shell image 6", width: "1200", height: "800" },
      ]
    },
    {
      id: "Mushroom People",
      title: "Mushroom People",
      year: "2024",
      institution: "HEAD–GENEVA : MASTER-MEDIA-DESIGN",
      institutionLink: "https://www.hesge.ch/head/en/programs-research/master-arts-media-design",
      collab: "",
      tags: "Short Film, Unreal Engine, Blender, Davinci Resolve, After Effects",
      descriptionEn: "During a workshop on avatar creation and digital identity, I chose to transform hay into a character, a tiny cult of living mushrooms eager to give life back to dry herbs. In the sessions we explored how material, texture and rendering strategies produce identity. I built a small runner, a 'porteur de flamme', who dives into the haypile to reignite it and pass on a flame of life. I deliberately used pixelated renders, noise and degraded images so that abstraction and texture become the character. Glitches, grain and low‑res pixels are how this creature breathes and remembers",
      descriptionFr: "Lors d'un workshop sur la création d'avatars et l'identité numérique, j'ai choisi de transformer la paille en personnage, une petite communauté de champignons vivants heureuse de redonner vie aux herbes sèches. Pendant les séances, nous avons exploré comment la matière, la texture et les stratégies de rendu fabriquent l'identité. J'ai créé un petit coureur, un « porteur de flamme », qui plonge dans la meule de paille pour la ranimer et lui transmettre une flamme de vie. J'ai volontairement utilisé des rendus pixellisés, du bruit et des images dégradées pour faire de l'abstraction et de la texture le caractère. Glitches, grain et pixels basse résolution constituent la respiration de cette créature ainsi que ses souvenirs flous.",
      images: [
        { src: "../Images/ThreeD/InvokeYourInnerSelf_02.png", alt: "Mushroom People image 2", width: "1200", height: "800" },
        { src: "../Images/ThreeD/InvokeYourInnerSelf_03.png", alt: "Mushroom People image 3", width: "1200", height: "800" },
        { src: "../Images/ThreeD/InvokeYourInnerSelf_04.png", alt: "Mushroom People image 4", width: "1200", height: "800" },
        { src: "../Images/ThreeD/InvokeYourInnerSelf_01.jpg", alt: "Mushroom People image 1", width: "1200", height: "800" },        
      ]
    },             
    {
      id: "Encore Les Portes",
      title: "Encore Les Portes",
      year: "2023",
      institution: "HEAD–GENEVA : BACHELOR-FINE-ARTS",
      institutionLink: "https://www.hesge.ch/head/formations-recherche/bachelor-en-arts-visuels",
      collab: "",
      tags: "Short Film, Unreal Engine, Blender, Davinci Resolve, After Effects",
      descriptionEn: "Encore Les Portes is the final chapter of my diploma trilogy with Les Portes and Flip. I made this short film to extend their shared universe: the same characters in absurd, existential quests, moving through empty and liminal spaces, this time with more realistic and sanitized sets. It continues my exploration of disorientation, repetition, and absurd humor as a way to search for meaning.",
      descriptionFr: "Encore Les Portes est le dernier volet de ma trilogie de diplôme avec Les Portes et Flip. J'ai réalisé ce court métrage pour prolonger leur univers commun: les mêmes personnages pris dans des quêtes absurdes et existentielles, traversant des espaces vides et liminaux, cette fois dans des décors plus réalistes et aseptisés. Le film poursuit ma recherche autour de la perte de repères, de la boucle et de l'humour absurde comme manière de chercher du sens.",
      video: "https://www.youtube.com/watch?v=YbbB3tKGzjU&list=PLoIGnp970lk-Y-exsogpbwQeFUPreOixu&index=7",
      images: [
        { src: "../Images/ThreeD/EncorePorte_01.jpeg", alt: "Encore Les Portes image 1", width: "1200", height: "800" },
        { src: "../Images/ThreeD/EncorePorte_02.jpeg", alt: "Encore Les Portes image 2", width: "1200", height: "800" },
        { src: "../Images/ThreeD/EncorePorte_03.jpeg", alt: "Encore Les Portes image 3", width: "1200", height: "800" },
        { src: "../Images/ThreeD/EncorePorte_04.jpeg", alt: "Encore Les Portes image 4", width: "1200", height: "800" },
        { src: "../Images/ThreeD/EncorePorte_05.jpeg", alt: "Encore Les Portes image 5", width: "1200", height: "800" },
        { src: "../Images/ThreeD/EncorePorte_06.jpeg", alt: "Encore Les Portes image 6", width: "1200", height: "800" },
      ]
    },    
    {
      id: "Flip",
      title: "Flip",
      year: "2023",
      institution: "HEAD–GENEVA : BACHELOR-FINE-ARTS",
      institutionLink: "https://www.hesge.ch/head/formations-recherche/bachelor-en-arts-visuels",
      collab: "",
      tags: "Short Film, Unreal Engine, Blender, Davinci Resolve, After Effects",
      descriptionEn: "Flip is a character born from a figurine I sculpted in resin. He lives a simple life: his family runs a karaoke bar where he works. His parents want him to take over the karaoke one day, but after a deeply transformative dream, Flip discovers a new goal: to become a sea cucumber. While watching a documentary about sea cucumbers, he triggers the arrival of the sea cucumber deity, who motivates him and invites him to become one as well.",
      descriptionFr: "Flip est un personnage né d'une figurine que j'ai réalisée en résine. Il mène une vie simple: sa famille tient un karaoké dans lequel il travaille. Ses parents désirent le voir reprendre le karaoké, mais après un rêve d'une grande profondeur, Flip a un nouvel objectif: devenir un concombre de mer. En suivant un documentaire sur les concombres de mer, il déclenche la venue de la divinité des concombres de mer, qui le motive et l'invite à en devenir un lui aussi.",
      video: "https://vimeo.com/813617093?fl=pl&fe=sh",
      images: [
        { src: "../Images/ThreeD/Flip_01.png", alt: "Flip image 1", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Flip_02.png", alt: "Flip image 2", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Flip_03.png", alt: "Flip image 3", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Flip_04.png", alt: "Flip image 4", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Flip_05.png", alt: "Flip image 5", width: "1200", height: "800" },
          { src: "../Images/ThreeD/Flip_06.png", alt: "Flip image 6", width: "1200", height: "800" },
      ]
    },  

    {
      id: "Boucle",
      title: "Boucle",
      year: "2022",
      institution: "HEAD–GENEVA : BACHELOR-FINE-ARTS",
      institutionLink: "https://www.hesge.ch/head/formations-recherche/bachelor-en-arts-visuels",
      collab: "",
      tags: "Short Film, Blender, Cinema 4D, After Effects",
      descriptionEn: "I created a short horror story for this project to practice handheld camera movements. I also explored lighting setups and ambient fog techniques available in 3D software. The research focuses on the atmosphere of the building where the story takes place, as well as the main character and the character design of the monster that pursues them.",
      descriptionFr: "J'ai créé pour ce projet une petite histoire d'horreur dans le but de maîtriser les mouvements de caméra portée à la main. J'ai aussi exploré les mécanismes de luminosité et de brouillard ambiant que proposent les logiciels 3D. La recherche se concentre sur l'ambiance du bâtiment où se déroule l'histoire, ainsi que sur le personnage principal et le « character-design » du monstre qui le poursuit.",
      video: "Lien Vidéo :https://tinyurl.com/yc5abw6t",
      images: [
        { src: "../Images/ThreeD/Boucle_01.png", alt: "Boucle image 1", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Boucle_02.png", alt: "Boucle image 2", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Boucle_04.png", alt: "Boucle image 4", width: "1200", height: "800" },        
        { src: "../Images/ThreeD/Boucle_03.png", alt: "Boucle image 3", width: "1200", height: "800" },
      ]
    },        
    {
      id: "Les Portes",
      title: "Les Portes",
      year: "2022",
      institution: "HEAD–GENEVA : BACHELOR-FINE-ARTS",
      institutionLink: "https://www.hesge.ch/head/formations-recherche/bachelor-en-arts-visuels",
      collab: "",
      tags: "Short Film, Blender, After Effects",
      descriptionEn: "This short film tells the story of a meeting and the birth of a friendship between two characters trapped at the heart of the void, and their journeys through it. The film builds a world from simple, absurd scenes that emphasize the surrounding spaces. A door serves as a dimensional passage through several digital landscapes. Their simple quest to find a packet of chips leads them to a large 'clap-mou' concert with an unexpected denouement.",
      descriptionFr: "Ce court-métrage raconte l’histoire de la rencontre et de la naissance d’une amitié entre deux personnages prisonniers au cœur du vide ainsi que leurs parcours à travers celui-ci. L’idée est de créer un monde à partir de scènes simples et absurdes qui mettent l’emphase sur les espaces qui les entourent. La porte sert de passage dimensionnel à travers plusieurs paysages numériques. Leur quête simple de trouver un paquet de chips les emmènera à aller voir un grand concert de « clap-mou » au dénouement inattendu.",
      video: "https://vimeo.com/813612248",
      images: [
        { src: "../Images/ThreeD/Portes_01.png", alt: "Les Portes image 1", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Portes_02.png", alt: "Les Portes image 2", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Portes_03.png", alt: "Les Portes image 3", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Portes_04.png", alt: "Les Portes image 4", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Portes_05.png", alt: "Les Portes image 5", width: "1200", height: "800" },
        { src: "../Images/ThreeD/Portes_06.png", alt: "Les Portes image 6", width: "1200", height: "800" },
      ]
    },

  ],

  writings: [
    {
      id: "Community-driven cartography : designed by the metagame",
      title: "Community-driven cartography : designed by the metagame",
      year: "2025",
      institution: "HEAD–GENEVA : MASTER-MEDIA-DESIGN",
      institutionLink: "https://www.hesge.ch/head/en/programs-research/master-arts-media-design",
      collab: "Daniel Sciboz",
      collabLinks: [
      { name: "Daniel Sciboz", url: "" }
      ],
      link: "https://sonar.ch/global/documents/334504",
      tags: "Thesis, Media Design, 3D, Game Design, Community, Theory, Research",
      descriptionEn: "As a Master’s student in Media Design, (I seek through this thesis to explore how game design practices can relate to those of players. I want to view these practices as something more deeply intertwined, rather than as two distinct poles. In the context of the interaction between the realms of gaming and game design, I am particularly interested in the formation of these communities, their dynamics, how these maps are created, who creates them, and in what context.",
      descriptionFr: "En tant qu'étudiant en Master Media Design, je cherche, à travers ce mémoire, à explorer comment les pratiques du game design peuvent s'articuler avec celles des joueuses et joueurs. Je souhaite considérer ces pratiques comme profondément entremêlées plutôt que comme deux pôles distincts. Dans le cadre des interactions entre l'univers du jeu et celui du design de jeu, je m'intéresse particulièrement à la formation de ces communautés, à leurs dynamiques, à la manière dont ces cartographies sont créées, par qui elles le sont et dans quel contexte.",
      images: [
        { src: "../Images/Writings/DrivenCartography_01.png", alt: "Community-driven cartography image 1", width: "1200", height: "800" },
        { src: "../Images/Writings/DrivenCartography_02.png", alt: "Community-driven cartography image 2", width: "1200", height: "800" },
        { src: "../Images/Writings/DrivenCartography_03.png", alt: "Community-driven cartography image 3", width: "1200", height: "800" },
        { src: "../Images/Writings/DrivenCartography_04.png", alt: "Community-driven cartography image 4", width: "1200", height: "800" },
        { src: "../Images/Writings/DrivenCartography_05.png", alt: "Community-driven cartography image 5", width: "1200", height: "800" },
        { src: "../Images/Writings/DrivenCartography_06.png", alt: "Community-driven cartography image 6", width: "1200", height: "800" },
      ]
    },
    {
      id: "sonorite-des-mondes-3d-contemporains",
      title: "Sonorité des mondes 3D contemporains",
      year: "2023",
      institution: "HEAD–GENEVA : BACHELOR-FINE-ARTS",
      institutionLink: "https://www.hesge.ch/head/en/programs-research/master-arts-media-design",
      collab: "Jill Gasparina",
      collabLinks: [
      { name: "Jill Gasparina", url: "" }
      ],
      tags: "Thesis, Fine Arts, 3D, Sound Design, Theory, Research",
      descriptionEn: "(Text In French) Bachelor thesis exploring contemporary 3D worlds and their sonic imaginaries. The project combines research, visual analysis, and sound design to study how 3D environments shape narrative and perception.",
      descriptionFr: "(Texte en Français) Mémoire de Bachelor explorant les univers 3D contemporains et leurs imaginaires sonores. Le projet combine recherche, analyse visuelle et sound design pour étudier comment les environnements 3D façonnent la narration et la perception.",
      images: [
        { src: "../Images/Writings/Sonorite_3D_01.png", alt: "Sonorité des mondes 3D contemporains image 1", width: "1200", height: "800" },
        { src: "../Images/Writings/Sonorite_3D_02.png", alt: "Sonorité des mondes 3D contemporains image 2", width: "1200", height: "800" },
        { src: "../Images/Writings/Sonorite_3D_03.png", alt: "Sonorité des mondes 3D contemporains image 3", width: "1200", height: "800" },
        { src: "../Images/Writings/Sonorite_3D_04.png", alt: "Sonorité des mondes 3D contemporains image 4", width: "1200", height: "800" },
        { src: "../Images/Writings/Sonorite_3D_05.png", alt: "Sonorité des mondes 3D contemporains image 5", width: "1200", height: "800" },
      ]
    },
  ],

  artDungeon: [
    
  ]
};

/**
 * USAGE INSTRUCTIONS:
 * 
 * To add a new project, copy this structure and add to the appropriate category:
 * {
 *   id: "unique-id",
 *   title: "PROJECT TITLE",
 *   year: "2025",
 *   institution: "Your Institution",
 *   institutionLink: "https://link-to-institution.com",
 *   collab: "Collaborators if any",
 *   collabLinks: [
 *     { name: "Person 1", url: "https://instagram.com/..." },
 *     { name: "Person 2", url: "https://instagram.com/..." }
 *   ],
 *   collabSeparator: " and ",  // OPTIONAL: text separator between links (default: ", ")
 *   // OPTIONAL FIELDS ADDED:
 *   commissionedBy: "Name of commissioner (if any)", // e.g. a gallery, institution or funder
 *   for: "Exhibition or commission name",
 *   diffusion: ["Exhibit 1", "Exhibit 2"], // exhibitions / presentations where the work was shown
 *   medium: "Formats / materials / software used (e.g. mp4, wood, Arduino, Max-MSP)",
 *   tags: "tag1, tag2, tag3",
 *   descriptionEn: "English description...",
 *   descriptionFr: "French description...",
 *   video: "https://youtube.com/watch?v=...",  // OPTIONAL: video link
 *   link: "https://external-website.com",      // OPTIONAL: project link
 *   images: [
 *     { src: "../Images/path/image.jpg", alt: "Description", width: "1200", height: "800" }
 *   ]
 * }
 * 
 * Then in your HTML page, add:
 * <link rel="stylesheet" href="styles/pages/portfolio.css">
 * <script src="../Js/projects-data.js"></script>
 * <script src="../Js/portfolio-renderer.js"></script>
 * 
 * And in the projects section:
 * <div class="projects-grid" id="projects-grid"></div>
 * 
 * Then add this script before closing body tag:
 * <script>
 *   document.addEventListener('DOMContentLoaded', () => {
 *     renderProjectsFromData('categoryName', 'projects-grid');
 *   });
 * </script>
 */
