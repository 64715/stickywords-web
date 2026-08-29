# stickywords-web

The website for **StickyWords 3**, served by GitHub Pages at
[stickywords.firstpush.dev](https://stickywords.firstpush.dev).

Plain static HTML and CSS — no build step, no dependencies, no package manager. Edit a
file, commit, push; GitHub Pages serves it.

```
index.html            landing page
privacy/index.html    privacy policy  →  /privacy/
404.html
assets/css/site.css   the whole stylesheet, light and dark
assets/js/note.js     cycles the words in the hero note; the page works without it
assets/img/           logo and screenshots
CNAME                 stickywords.firstpush.dev
.nojekyll             serve files verbatim, no Jekyll processing
```

## Preview locally

```
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. Any static file server will do; there is nothing to
compile.

## Adding the screenshots

Four placeholders sit in the "A look inside" section of `index.html`. Each one is a
`<div class="shot-ph">` with the intended filename and pixel size printed on it, and an
HTML comment directly above holding the finished `<img>` tag. Drop the PNG into
`assets/img/`, then delete the `div` and uncomment the `img`. The frame reserves its
aspect ratio either way, so the page does not shift when a real image arrives.

## Replacing the logo

`assets/img/favicon.svg` is a placeholder drawn in this repo. Swap it for the licensed
Freepik note mark (keeping the filename, or updating the three references to it in
`index.html`, `privacy/index.html` and `404.html`).

## Publishing a download

The Download button points at
`https://github.com/64715/stickywords-web/releases/latest`, which always resolves to the
newest release and needs no editing when you ship a new version.

To publish a build: **Releases → Draft a new release**, tag it `v3.0.0`, and attach the
zip as a release asset. Release assets live outside the git history (up to 2 GB each), so
the app itself can stay in its own repository — only the built zip is uploaded here.

## The Microsoft Store button

Both copies of the Store button (hero and download section) ship disabled, each marked
with a `TODO` comment. When the listing is live, paste its URL into `href` and delete
`aria-disabled="true"` and the `is-pending` class.

## Deployment

Settings → Pages → *Deploy from a branch*, then pick the branch and the `/` root folder.
For the custom domain, point DNS at GitHub Pages **before** enabling it in Settings,
otherwise the `CNAME` file fails validation.
