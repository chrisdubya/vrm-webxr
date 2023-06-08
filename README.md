# installation

`npm install`

## running

to run locally and test WebXR features you need to host on https:

- generate a key and cert `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
- `npm run dev`

if you don't need to test WebXR then `npm start` should work fine

Made with [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
