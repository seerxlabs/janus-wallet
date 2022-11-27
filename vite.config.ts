import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {crx} from '@crxjs/vite-plugin'
import manifest from './manifest.json'
// import {resolve} from "path";


export default defineConfig({
    server:{
        hmr:{
            overlay:false
        }
    },
    plugins: [
        react(),
        crx({manifest}),
    ],
    // resolve: {
    //     alias: {
    //         '@': resolve(__dirname, 'src'),
    //     }
    // },
})
