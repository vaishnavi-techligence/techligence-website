const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  try {
    console.log('Navigating...');
    await page.goto('http://localhost:3000/configurator', { waitUntil: 'networkidle0' });
    console.log('Navigated, waiting 5 seconds for suspense/crash...');
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({ path: 'crash.png' });
    console.log('Screenshot saved to crash.png');
  } catch (err) {
    console.log('Nav error:', err);
  }
  
  await browser.close();
})();
