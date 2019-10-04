# CV

This is my resume.

### How to

Main tasks:

```
# Build the site at static/ and the pdf
npm run build

# Build  & watch the site at static/ and the pdf
npx nodemon -e js,ejs,yaml,css -w . -w static/ --exec 'npm run build'
```

Files are generated in a `static/` folder.
