<script setup lang="ts">
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
const vue = $ref('Vue')
const typescript = $ref('TypeScript')
import { neteaseRequest } from '../../shared/service'

neteaseRequest({
  url: '/banner'
}).then((res) => {
  console.log(res)
})
</script>

<template>
  <div text-24 flex mb-8>
    <img src="../assets/electron.svg" w-24 mr-8 alt="Vite Electron" />
    <i-logos-vitejs mr-8 />
    <i-logos-typescript-icon-round mr-8 />
    <i-logos-vue />
  </div>
  <div class="creator">Powered by electron-vite {{ $t('name') }}</div>
  <div class="text">
    Build an Electron app with
    <span class="vue">{{ vue }}</span>
    and
    <span class="ts">{{ typescript }}</span>
  </div>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
  <div class="actions">
    <div class="action">
      <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
    </div>
  </div>
</template>
../../shared/service
