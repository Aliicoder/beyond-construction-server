export default ({ env }) => ({
  upload: {
    config: {
      security: {
        maxFileSize: 10 * 1024 * 1024, // 10MB
        allowedMimeTypes: ["image/webp", "image/jpeg"],
      },
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
        secure: true,
      },
      actionOptions: {
        upload: {
          folder: "real-estates",
        },
        delete: {},
        uploadStream: {},
      },
    },
  },
});
