import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const currentDir = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(currentDir, 'index.html'),
        instructor: resolve(currentDir, 'pages/instructor.html'),
        login: resolve(currentDir, 'pages/login.html'),
        signup: resolve(currentDir, 'pages/signup.html'),
        student: resolve(currentDir, 'pages/student.html'),
        studentLogin: resolve(currentDir, 'pages/student-login.html'),
        studentSignup: resolve(currentDir, 'pages/student-signup.html'),
        report: resolve(currentDir, 'pages/report.html'),
        dashboard: resolve(currentDir, 'pages/dashboard.html'),
      },
    },
  },
});
