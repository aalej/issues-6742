# Repro for issue 6742

## Steps to reproduce

1. Run `firebase deploy --project <project_id>`
1. In `test/webfetch.test.js`
   - Set a value for `PROJECT_ID`
   - Run `npm run test`
1. Access `PROJECT_ID.web.app/assets/test.json`
   - Results in redirect to `/index.html` (error)
     - Should result in 404
1. Access `PROJECT_ID.web.app/api/test.json`
   - Results in redirect to `/index.html` (error)
     - Should result in 404

## Notes:

Regex Patterns

OK - `^\/(([^a]|a[^sp]|(as[^s]|ap[^i])|(ass[^e]|api[^\/])|asse[^t]|asset[^s]|assets[^\/])).*$`

`(?:\/(?:[^a][^s][^s][^e][^t][^s]|\/[^a][^p][^i])[^\/]+)+`
