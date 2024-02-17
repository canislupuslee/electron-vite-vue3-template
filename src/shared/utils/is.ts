// 判断渲染进程
export function isRendererProcess() {
  // running in a web browser
  if (typeof process === 'undefined') return true

  // node-integration is disabled
  if (!process) return true

  // We're in node.js somehow
  if (!process.type) return false

  return process.type === 'renderer'
}

// 判断mac系统
export function isMac() {
  return process.platform === 'darwin'
}

// 判断windows系统
export function isWindows() {
  return process.platform === 'win32'
}

// 判断linux系统
export function isLinux() {
  return process.platform === 'linux'
}
