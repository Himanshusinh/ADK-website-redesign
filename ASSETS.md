# Images — where everything lives

Every image the site uses is in **`public/`**, and nothing in `public/` is unused: all 334 files
are either referenced in the code or read from a folder listing at build time. There is no second
copy of anything anywhere in the project.

```
public/                                      66 MB
├── brand/        adk-logo.png (dark type) · adk-logo-light.png (white type, for dark headers)
├── home/         landing page only
│   ├── hero/         machine shots for the hero slides + the full-width statement photo
│   ├── industries/   the six portrait photos for "Industries we serve"
│   ├── what-we-do/   supply · install · spares cards
│   └── banners/      social-share image
├── products/
│   ├── series/<slug>/   one folder per machine — hero, feature shots, samples, spec art
│   └── thumbs/          catalogue photos used for cards, menus and list pages
├── shared/       used by more than one page
│   ├── applications/  the 20 industry photos (Application page + each machine page)
│   ├── about/         About page photography
│   ├── career/        job photos
│   ├── clients/       customer logos
│   ├── events/<dir>/  exhibition photos (folder name matches `events` in src/data/site.ts)
│   └── gallery/       gallery photos
├── video/        machine clips (GV series)
├── pdf/          the catalogue
└── favicon.ico
```

## Adding images

**Just drop the file in** — these three folders are read from disk, so anything you add is published:
`shared/clients`, `shared/gallery`, `shared/events/<event folder>`.

**Everywhere else**, the path is written in `src/data/site.ts` (or `src/data/series.ts` for machine
pages), so add the file and point the data at it.

## Replacing a photo

Keep the filename, drop the new file in, then bump `IMG_V` in `src/data/site.ts` and the matching
`search` value in `next.config.ts`. Without that, browsers and the image cache keep serving the old
picture.

## Originals

The client's full-size source material is **outside the project**, so it never ships:

- `~/Downloads/ADK client media/` — the original product photo drop (598 MB), in the client's own folders
- `~/Downloads/ADK image/` — the full-size application and landing-page photos

The old adkeng.com images that nothing referenced have been deleted.
