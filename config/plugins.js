module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "n_ZZ91zVkGMD4WLcr7a4vSaAZE6uecaVJ6hDIrf6BxY",
      sites: [
        {
          name: "Site 1",
          id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
          branch: "master", // optional
        },
      ],
    },
  },
});
