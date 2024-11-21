const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html", // Quét file HTML chính
    "./src/**/*.{js,ts,jsx,tsx}", // Quét tất cả các file trong src với các phần mở rộng được hỗ trợ
    "./src/**/*.css", // Quét file CSS trong src
  ],
  theme: {
    extend: {}, // Dùng để mở rộng giao diện nếu cần
  },
  plugins: [
    require("@tailwindcss/forms"), // Plugin hỗ trợ form
  ],
});
