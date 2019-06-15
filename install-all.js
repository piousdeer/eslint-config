#!/usr/bin/env node
/* eslint-disable no-console */

const { existsSync: exists, writeFileSync: writeFile } = require('fs')
const { execSync: exec } = require('child_process')

const path = require('path')
const pkg = require('./package.json')
const cwd = process.cwd()

const inCwd = file => path.resolve(cwd, file)

const packageManagers = [{
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

const ESLINT_CONFIG_FILE = '.eslintrc'

const ESLINT_CONFIG_FILE_CONTENT = JSON.stringify({
  extends: getEslintConfigName(pkg.name)
}, null, 2)

if (!exists(inCwd('package.json'))) {
  throw Error(`package.json doesn't exist, can't install.`)
}

const installString =
  `${pkg.name}@${pkg.version} ` +
  Object.entries(pkg.peerDependencies)
    .map(([name, version]) => `${name}@${version}`)
    .join(' ')

void function () {
  let pm = packageManagers.find(
    ({ lockfile }) => exists(lockfile)
  )

  if (!pm) {
    console.log(`No lockfiles exist, using npm.`)
    pm = packageManagers.find(({ name }) => name === 'npm')
  } else {
    console.log(`Lockfile ${pm.lockfile} exists, using ${pm.name}.`)
  }

  exec(`${pm.command} ${installString}`)
  console.log(`Installed the package and its peer dependencies.`)

  if (!exists(inCwd(ESLINT_CONFIG_FILE))) {
    writeFile(inCwd(ESLINT_CONFIG_FILE), ESLINT_CONFIG_FILE_CONTENT, { flag: 'w' })
    console.log(`Generated an ESLint config file.`)
  } else {
    console.log(`ESLint config file already exists.`)
  }
}()

function getEslintConfigName (packageName) {
  const match = packageName.match(/^(@[a-z0-9-~][a-z0-9-._~]*)\/eslint-config|eslint-config-([a-z0-9-._~]*)$/)
  return match[1] || match[2] || packageName
}
