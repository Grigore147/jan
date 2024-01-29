import { _electron as electron } from 'playwright'
import { ElectronApplication, Page, expect, test } from '@playwright/test'

import {
  findLatestBuild,
  parseElectronApp,
  stubDialog,
} from 'electron-playwright-helpers'

let electronApp: ElectronApplication
let page: Page
const TIMEOUT: number = parseInt(process.env.TEST_TIMEOUT || "120000")

test.beforeAll(async () => {
  process.env.CI = 'e2e'

  const latestBuild = findLatestBuild('dist')
  expect(latestBuild).toBeTruthy()

  // parse the packaged Electron app and find paths and other info
  const appInfo = parseElectronApp(latestBuild)
  expect(appInfo).toBeTruthy()

  electronApp = await electron.launch({
    args: [appInfo.main], // main file from package.json
    executablePath: appInfo.executable, // path to the Electron executable
  })
  await stubDialog(electronApp, 'showMessageBox', { response: 1 })

  page = await electronApp.firstWindow({
    timeout: TIMEOUT
  })
})

test.afterAll(async () => {
  await electronApp.close()
  await page.close()
})

test('shows system monitor', async () => {
  await page.getByTestId('System Monitor').first().click({timeout: TIMEOUT})
  const systemMonitor = await page.getByTestId('testid-system-monitor')
  expect(systemMonitor).toBeVisible({timeout: TIMEOUT})
  //   More test cases here...
})
