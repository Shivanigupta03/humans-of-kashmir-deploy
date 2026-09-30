export type StoryCategory = "story" | "business" | "voice";

export type Story = {
  slug: string;
  title: string;
  category: StoryCategory;
  location: string;
  district: string;
  lat: number;
  lng: number;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  tag: string;
};

export const categoryLabels: Record<StoryCategory, string> = {
  story: "Story",
  business: "Business",
  voice: "Voice",
};

export const stories: Story[] = [
  {
    slug: "the-last-papier-mache-master-of-srinagar",
    title: "The Last Papier-Mâché Master of Srinagar",
    category: "business",
    location: "Zaina Kadal, Srinagar",
    district: "Srinagar",
    lat: 34.0837,
    lng: 74.8090,
    date: "2026-02-14",
    author: "Recorded by Aamir Reshi",
    tag: "Craft & Heritage",
    excerpt:
      "“My grandfather taught my father, my father taught me. My son studies computers in Pune. I am not angry — I am the last page of a long book.”",
    content: [
      "Ghulam Nabi Bhat has been layering paper pulp and painting gold leaf onto papier-mâché boxes since he was nine years old. His workshop, a single room off a narrow lane near Zaina Kadal, still smells of glue, walnut oil paint, and the sawdust his father swept from this same floor sixty years ago.",
      "“People buy plastic boxes from China now and call them papier-mâché,” he says, turning a half-painted jewellery box over in his hands. “They do not know the difference until they hold the real one. The real one is light. It breathes.”",
      "Ghulam Nabi's order books are thinner than they used to be, but he still teaches two boys from the neighbourhood after school — not for the money, he says, but because a craft that stops being taught stops existing within a generation.",
      "“When I am gone, maybe this room becomes a shop for mobile covers,” he laughs. “But for now, it is still 1962 in here.”",
    ],
  },
  {
    slug: "keeper-of-the-chinar",
    title: "Keeper of the Chinar",
    category: "story",
    location: "Naseem Bagh, Srinagar",
    district: "Srinagar",
    lat: 34.1284,
    lng: 74.8354,
    date: "2026-01-22",
    author: "Recorded by Iqra Wani",
    tag: "Nature",
    excerpt:
      "“This tree is older than the country it stands in. I just make sure nobody nails a signboard into it while I am alive.”",
    content: [
      "Every autumn, Farooq Ahmad Dar walks the same half-kilometre loop under the Chinar trees of Naseem Bagh, picking up plastic wrappers and loose branches, exactly as his father did before him.",
      "The grove was planted, by local memory, in the sixteenth century. Farooq cannot read the Persian inscriptions on the old university gate nearby, but he can tell you which tree lost a limb in the 2014 flood and which one still bears an axe-scar from a winter forty years ago when firewood was scarce.",
      "“Tourists come for the photo in October when the leaves turn red,” he says. “They stay for four minutes. I have stayed here for forty years. The tree does not know the difference between four minutes and forty years — but I do.”",
    ],
  },
  {
    slug: "the-shikara-that-became-a-schoolroom",
    title: "The Shikara That Became a Schoolroom",
    category: "story",
    location: "Dal Lake, Srinagar",
    district: "Srinagar",
    lat: 34.1197,
    lng: 74.8465,
    date: "2025-11-03",
    author: "Recorded by Aamir Reshi",
    tag: "Education",
    excerpt:
      "“We did not have a building, so I decided the lake would be the building. Nobody can repossess a lake.”",
    content: [
      "When Yasmeen Jan could not find a landlord willing to rent a room for the free evening classes she ran for children of houseboat workers, she moved the entire school onto a shikara.",
      "For three years now, eleven children row out with her every evening after their parents finish work, notebooks wrapped in plastic bags against the lake spray, to study by lantern light on the water.",
      "“In winter it is very cold and my hands shake too much to write on the blackboard,” she says, “so now I just talk, and they write. My voice still works even when my hands do not.”",
      "Three of her first students have since finished school. One is training to be a nurse in Jammu. Yasmeen keeps a photograph of her on the boat's small wooden shelf, next to a jar of pens.",
    ],
  },
  {
    slug: "saffron-fields-of-pampore",
    title: "Saffron Fields of Pampore",
    category: "business",
    location: "Pampore, Pulwama",
    district: "Pulwama",
    lat: 33.9089,
    lng: 74.9273,
    date: "2025-10-29",
    author: "Recorded by Iqra Wani",
    tag: "Agriculture",
    excerpt:
      "“Each flower gives three threads. A whole kilo needs one hundred and fifty thousand flowers. Now you understand the price.”",
    content: [
      "For eighteen days every October, Abdul Rashid Mir's family and neighbours wake before sunrise to hand-pick purple crocus flowers before the sun opens them fully and weakens the saffron threads inside.",
      "“My grandfather sold saffron to traders who sold it to traders who sold it to someone in Delhi who put a French label on the tin,” Abdul says. “Today my daughter photographs the harvest and sells the same saffron directly, on her phone, to a family in Bangalore. Same flower, sixty years apart, completely different journey.”",
      "Climate has made the harvest less predictable — a warm November after a long summer can ruin a season entirely — but Abdul says the karewa soil of Pampore still produces a saffron that, he insists without much need for persuasion, has no real rival anywhere else on earth.",
    ],
  },
  {
    slug: "the-copper-smiths-of-zaina-kadal",
    title: "The Copper Smiths of Zaina Kadal",
    category: "business",
    location: "Zaina Kadal, Srinagar",
    district: "Srinagar",
    lat: 34.0822,
    lng: 74.8107,
    date: "2025-09-17",
    author: "Recorded by Aamir Reshi",
    tag: "Craft & Heritage",
    excerpt:
      "“The sound of the hammer used to be the sound of this whole street. Now I am often the only hammer left ringing.”",
    content: [
      "Bashir Ahmad Naqash has been shaping copper samovars and trami plates by hand for over four decades, in a workshop that used to be one of nearly thirty on the same lane.",
      "“Weddings still need the copper trami, the big one everyone eats wazwan from together,” he says. “That has not changed. What has changed is that people want it cheaper, and cheaper means machine-stamped, and machine-stamped means thinner metal and no soul in the engraving.”",
      "His two sons help him on order, though neither considers it their main trade. Bashir does not push them. “A craft should be chosen, not inherited like a debt,” he says, still hammering a rosette pattern into a plate destined for a wedding in November.",
    ],
  },
  {
    slug: "night-shift-at-the-apple-mandi",
    title: "Night Shift at the Apple Mandi",
    category: "voice",
    location: "Sopore, Baramulla",
    district: "Baramulla",
    lat: 34.2996,
    lng: 74.4722,
    date: "2025-09-02",
    author: "Recorded by Iqra Wani",
    tag: "Trade",
    excerpt:
      "“Sopore sleeps at ten and wakes up at midnight — but only the mandi. The rest of the town has no idea.”",
    content: [
      "Asia's largest fruit market for apples comes alive at midnight, when trucks from orchards across North Kashmir line up to unload crates before the morning auction.",
      "Manzoor Ahmad Sheikh has worked as a loader here since he was seventeen. “In a good season I lift maybe six hundred crates in a night,” he says, sitting on a stack of empty boxes during a rare pause. “In a bad season — flood, or the highway closes for landslide — the apples themselves rot before they leave the mandi, and there is no work for any of us.”",
      "He has three children in school in the town. “I want none of them to know what an apple crate weighs,” he says. “That is the whole plan. That is the only plan.”",
    ],
  },
  {
    slug: "the-woman-who-embroiders-winters",
    title: "The Woman Who Embroiders Winters",
    category: "story",
    location: "Kanihama, Budgam",
    district: "Budgam",
    lat: 34.0234,
    lng: 74.6198,
    date: "2025-08-11",
    author: "Recorded by Aamir Reshi",
    tag: "Craft & Heritage",
    excerpt:
      "“A good kani shawl takes a year and a half. I have been married for longer than some of my shawls have been alive.”",
    content: [
      "Haleema Bano learned the kani weaving technique — using small wooden bobbins called 'tojis' instead of a needle — from her mother-in-law, in a village that still produces some of the finest Kashmiri shawls in the world.",
      "A single elaborate shawl can take upward of eighteen months and pass through the hands of several weavers, each responsible for a section of the pattern that must match seamlessly with the next.",
      "“When it is finished, a shawl like this might travel to Paris or Tokyo,” Haleema says. “It will be the warmest thing in the room and nobody at that party will know it took longer to make than their own child took to be born.”",
    ],
  },
  {
    slug: "the-last-ferryman-of-wular",
    title: "The Last Ferryman of Wular",
    category: "voice",
    location: "Wular Lake, Bandipora",
    district: "Bandipora",
    lat: 34.3512,
    lng: 74.6102,
    date: "2025-07-04",
    author: "Recorded by Iqra Wani",
    tag: "Nature",
    excerpt:
      "“The lake used to be twice this size when I was a boy. I am not a scientist, but I have eyes, and I have counted.”",
    content: [
      "Ghulam Mohiuddin Bhat has ferried villagers, fishermen, and the occasional curious traveller across a narrow channel of Wular Lake, one of Asia's largest freshwater lakes, for over thirty years.",
      "He points out, without prompting, the willow plantations and encroaching reed beds that have shrunk the lake's open water over his lifetime. “Everyone talks about saving it in meetings in Srinagar,” he says, “but I am the one who rows over what used to be water and is now just soft mud with grass in it.”",
      "His son works in Srinagar now, in a mobile phone shop. Ghulam does not ask him to come back. “There is not enough lake left for two ferrymen,” he says quietly. “There was barely enough for one, this year.”",
    ],
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function getAllSlugs(): string[] {
  return stories.map((story) => story.slug);
}
