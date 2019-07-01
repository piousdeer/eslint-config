#!/usr/bin/env node
/* eslint-disable no-console */

const { existsSync: fileExists, writeFileSync: writeFile } = require('fs')
const { execSync: exec } = require('child_process')
const { resolve: resolvePath } = require('path')

const pkg = require('./package.json')

const cwd = process.cwd()
const inCwd = path => resolvePath(cwd, path)

const PACKAGE_MANAGERS = [{
  name: 'npm',
  lockfile: 'package-lock.json',
  command: 'npm install --save-dev'
}, {
  name: 'pnpm',
  lockfile: 'pnpm-lock.yaml',
  command: 'pnpm install --save-dev'
}, {
  name: 'yarn',
  lockfile: 'yarn.lock',
  command: 'yarn add --dev'
}]

const ESLINT_CONFIG_PATH = inCwd('.eslintrc')
const PACKAGE_JSON_PATH = inCwd('package.json')

const GENERATED_ESLINT_CONFIG = {
  extends: getEslintConfigName(pkg.name)
}

console.log('Running ESLint config auto installer.')

if (!fileExists(PACKAGE_JSON_PATH)) {
  throw Error("package.json doesn't exist, can't install.")
}

const installString = [
  `${pkg.name}@${pkg.version}`,
  ...Object.entries(pkg.peerDependencies || [])
    .map(([name, version]) => `${name}@${version}`)
].join(' ')

let pmToUse = PACKAGE_MANAGERS.find(pm => fileExists(pm.lockfile))

if (!pmToUse) {
  console.log('No lockfiles exist, using npm.')
  pmToUse = PACKAGE_MANAGERS.find(pm => pm.name === 'npm')
} else {
  console.log(`Lockfile ${pmToUse.lockfile} exists, using ${pmToUse.name}.`)
}

exec(`${pmToUse.command} ${installString}`)
console.log('Installed the package and its peer dependencies.')

if (!fileExists(ESLINT_CONFIG_PATH)) {
  writeFile(ESLINT_CONFIG_PATH, JSON.stringify(GENERATED_ESLINT_CONFIG), { flag: 'w' })
  console.log('Generated an ESLint config file.')
} else {
  console.log('ESLint config file already exists.')
}

function getEslintConfigName (pkgName) {
  const match = pkgName.match(/^(@[a-z0-9-~][a-z0-9-._~]*)\/eslint-config|eslint-config-([a-z0-9-._~]*)$/)
  return match[1] || match[2] || pkgName
}
