import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
const isDev = process.env.NODE_ENV === "development";
console.log(isDev, "123");

import { setting } from "./src/config/setting";
import legacy from "@vitejs/plugin-legacy";
import { viteMockServe } from "vite-plugin-mock"; //mock模拟数据
import Components from "unplugin-vue-components/vite"; //vite项目组件库按需引入
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { svgBuilder } from "./src/plugin/svgBuilder";
const {
    base,
    publicDir,
    outDir,
    assetsDir,
    sourcemap,
    cssCodeSplit,
    host,
    port,
    strictPort,
    open,
    cors,
    brotliSize,
    logLevel,
    clearScreen,
    drop_console,
    drop_debugger,
    chunkSizeWarningLimit,
} = setting;

// https://vitejs.dev/config/
export default defineConfig({
    root: process.cwd(),
    base,
    publicDir,
    logLevel,
    clearScreen,
    plugins: [
        vue(),
        legacy({
            polyfills: ["es.promise.finally", "es/map", "es/set"],
            modernPolyfills: ["es.promise.finally"],
        }),
        viteMockServe({
            mockPath: "mock", //mock文件地址
            supportTs: false, //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
            localEnabled: isDev, // 开发打包开关
            prodEnabled: !isDev, // 生产打包开关
            injectCode: `
           import { setupProdMockServer } from './mockProdServer';
           setupProdMockServer();
         `,
        }),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: "sass",
                }),
            ],
        }),
        svgBuilder("./src/icons/svg/"),
    ],
    server: {
        host,
        port,
        cors,
        strictPort,
        open,
        fs: {
            strict: false,
        },
    },
    resolve: {
        // 设置别名
        alias: {
            views: path.resolve(__dirname, "src/views"),
            styles: path.resolve(__dirname, "src/styles"),
            "@": path.resolve(__dirname, "src"),
        },
    },
    css: {
        preprocessorOptions: {
            // 引入公用的样式
            scss: {
                additionalData: `@use "@/styles/index.scss" as *;`,
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    build: {
        target: "es2015",
        outDir,
        assetsDir,
        sourcemap,
        cssCodeSplit,
        brotliSize,
        // rollupOptions: {
        //   output: {
        //     // chunkFileNames: 'static/js/[name]-[hash].js',
        //     // entryFileNames: 'static/js/[name]-[hash].js',
        //     // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        //   },
        // },
        terserOptions: {
            compress: {
                keep_infinity: true,
                // 用于删除生产环境中的console
                drop_console,
                drop_debugger,
            },
        },
        chunkSizeWarningLimit,
    },
    optimizeDeps: {
        // 检测需要预构建的依赖项
        entries: [],
    },
});