/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 核心品牌色：工业蓝
        primary: {
          DEFAULT: '#165DFF', // 主色
          dark: '#0F172A',    // 深邃背景
          light: '#3B82F6',   // 辅助蓝
        },
        // 行动转化色：琥珀橙
        accent: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
        },
        // 表面色
        surface: '#F8FAFC',
      },
      fontFamily: {
        // 力量感无衬线字体
        inter: ['Inter', 'sans-serif'],
      },
      // 自定义动画曲线
      transitionTimingFunction: {
        'bounce-sm': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    },
  },
  plugins: [],
}
