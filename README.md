# Repro for issue 6742

## Steps to reproduce

1. Run `firebase deploy --project <project_id>`
1. Access `PROJECT_ID.web.app/assets/test.json`
   - Results in redirect to `/index.html` (error)
     - Should result in 404
1. Access `PROJECT_ID.web.app/api/test.json`
   - Results in redirect to `/index.html` (error)
     - Should result in 404
