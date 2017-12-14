const { FuseBox, WebIndexPlugin, SassPlugin, CSSPlugin } = require("fuse-box");
const fuse = FuseBox.init({
  homeDir: "client",
  target: 'browser',
  sourceMaps: true,
  experimentalFeatures: true,
  output: "dist-fuse/$name.js",
  plugins: [
    WebIndexPlugin({ template: "client/src/index.html" }),
    [SassPlugin(), CSSPlugin()],
  ]
});

fuse.dev();
fuse.bundle("app").hmr().watch()
  .instructions(`>src/index.jsx`);


fuse.run()
