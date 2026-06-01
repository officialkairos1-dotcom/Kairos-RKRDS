// Site-wide constants for Kairos
export const ARTIST = {
  name: "KAIROS",
  tagline: "You're not early nor late — you're right on time.",
  bioShort:
    "Cinematic EDM producer building emotionally driven, festival-ready music — progressive house, big room energy, and atmospheric sound design, designed to feel immersive, powerful, and human.",
  bioLong: [
    "Kairos is a cinematic EDM producer crafting emotionally driven, festival-ready music built on storytelling, tension, and release. Blending progressive house, big room energy, and atmospheric sound design, his music is designed to feel immersive, powerful, and human.",
    "Born in Reedley, California on February 13, 2007, and shaped by life across the United States and Germany during his teenage years, Kairos combines global influences with a cinematic approach to create a distinct sonic identity. Inspired by artists like Alan Walker, Martin Garrix, Hardwell, Marshmello, and Tiësto, his sound moves between cinematic progressive house, mainstage big room, future bass, and electro house depending on the evolving lore of \u201CFraybounds\u201D — a world-building project expanding his music into a larger universe of visuals, emotion, and storytelling.",
  ],
  role: "Producer · Artist · Upcoming DJ",
  quote: "You're not early nor late — you're right on time.",
  location: "Coryell County · TX",
  influences: ["Alan Walker", "Martin Garrix", "Hardwell", "Marshmello", "Tiësto"],
};

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/officialkairos7/", id: "ig" },
  { label: "Spotify", href: "https://open.spotify.com/artist/6S0sRnNVWNCFNX0RqNcATp?si=jcVag5cwSkifLXUuEnY1Qg", id: "sp" },
  { label: "SoundCloud", href: "https://soundcloud.com/kairos-313600787", id: "sc" },
  { label: "TikTok", href: "https://www.tiktok.com/@officialkairos7", id: "tt" },
  { label: "Ko-fi", href: "https://ko-fi.com/kairosstudio7", id: "kf" },
];

// Spotify ARTIST embed (shows all Kairos's released music)
export const SPOTIFY_EMBED =
  "https://open.spotify.com/embed/artist/6S0sRnNVWNCFNX0RqNcATp?utm_source=generator&theme=0";

// SoundCloud widget for the user-provided artist URL
export const SOUNDCLOUD_EMBED =
  "https://w.soundcloud.com/player/?url=" +
  encodeURIComponent("https://soundcloud.com/kairos-313600787") +
  "&color=%2300e5ff&inverse=true&auto_play=false&show_user=true&visual=true";

export const RELEASES = [
  {
    title: "Kairos · Official Catalog",
    type: "All Releases",
    year: "2026",
    label: "Spotify · Streaming Everywhere",
    embed: SPOTIFY_EMBED,
    accent: "blue",
    height: 352,
  },
];

export const UNRELEASED = [
  {
    title: "From the Vault",
    note: "Unreleased · SoundCloud Exclusive",
    embed: SOUNDCLOUD_EMBED,
  },
];

export const SAMPLE_PACKS = [
  {
    name: "Studio Essentials Vol. 1",
    status: "Free · Serum Preset Pack",
    desc: "A free Serum preset pack for EDM producers — leads, basses, plucks, pads, and SFX. Royalty-free, ready for your tracks.",
    img: "https://storage.ko-fi.com/cdn/useruploads/display/d0061bdd-82b5-43a1-8123-e9592bcd4d23_img_89832.png",
    kofi: "https://ko-fi.com/s/260e482fb8",
    cta: "Free Download",
  },
  {
    name: "Studio Essentials Vol. 2",
    status: "$15+ · Premium EDM Presets",
    desc: "23 curated premium EDM presets — leads, basses, plucks, pads, and FX. Designed by Kairos Studio for festival-ready production.",
    img: "https://storage.ko-fi.com/cdn/useruploads/post/55eaa09e-32a3-4f20-9292-736f67ab7c8d_img_9006.png",
    kofi: "https://ko-fi.com/s/641357deef",
    cta: "Get on Ko-fi",
  },
  {
    name: "Blueberry Dreams Vol. 1",
    status: "$17 · Producer Pack",
    desc: "The first official sound pack in the Blueberry Dreams series — a dreamy, atmospheric collection for cinematic EDM production.",
    img: "https://storage.ko-fi.com/cdn/useruploads/post/ac3e3d44-8993-43e9-8506-1d024fb3b7f3_blueberrydreamsvol.1coverart.png",
    kofi: "https://ko-fi.com/s/8715437e5c",
    cta: "Get on Ko-fi",
  },
];

export const SHOWS = [
  { date: "TBA", city: "Looking for promoters", venue: "Mainstage slot wanted", status: "upcoming" },
  { date: "2025", city: "Studio Sessions", venue: "Producing the next era", status: "studio" },
];

export const IMG = {
  // Kairos's actual branded banner (Fraybounds Universe) — served from public/assets
  banner: "/assets/banner.png",
  // Personal studio photo of Kairos — served from public/assets
  portrait: "/assets/portrait.png",
  // Personal photos
  germany: "/assets/germany.jpg",
  austin: "/assets/austin.jpg",
  // Atmospheric backgrounds for non-portrait uses
  hero: "https://static.prod-images.emergentagent.com/jobs/95a3bd8a-87f4-44f6-ae96-40bd5303fddb/images/2a1b5ad7b70f9e72ff3812c23be9e8d1fadfb03a69a3b64514be8df583b415a0.png",
  live1: "https://images.unsplash.com/photo-1765738042644-a290f0a4a29f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxkaiUyMGNvbmNlcnQlMjBkYXJrJTIwYmx1ZSUyMGxpZ2h0aW5nfGVufDB8fHx8MTc3OTI5NDU2OHww&ixlib=rb-4.1.0&q=85",
  live2: "https://images.unsplash.com/photo-1639682687092-0264e96cbb71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxkaiUyMGNvbmNlcnQlMjBkYXJrJTIwYmx1ZSUyMGxpZ2h0aW5nfGVufDB8fHx8MTc3OTI5NDU2OHww&ixlib=rb-4.1.0&q=85",
  gear: "https://images.unsplash.com/photo-1574154768417-8bc39bb13178?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxkaiUyMGNvbmNlcnQlMjBkYXJrJTIwYmx1ZSUyMGxpZ2h0aW5nfGVufDB8fHx8MTc3OTI5NDU2OHww&ixlib=rb-4.1.0&q=85",
};
