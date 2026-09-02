# Bsale Technical Challenge — Frontend

Frontend solution for the Bsale technical challenge, built with **vanilla JavaScript** (no frameworks), as required by the challenge spec.

## ⚠️ Current status

This repo contains the **frontend only**. The corresponding backend is not currently deployed/running, so:

- The UI will render with **empty states** (no data to populate lists/views).
- Network requests to the API will return **404s** in the browser console — this is expected given the missing backend, not a frontend bug.

The frontend logic (rendering, event handling, DOM manipulation, fetch calls) is implemented and functional; it simply has no live data source to consume right now.

## Tech stack

- HTML5 / CSS3
- Vanilla JavaScript (ES6+), no frameworks or build tools, per challenge requirements

## Setup

```bash
# clone and open
git clone https://github.com/Khmlwugh/<repo-name>.git
cd <repo-name>
npx serve .
```

## Notes

This was built as a technical exercise for Bsale's hiring process. The backend counterpart is a separate/future effort.
