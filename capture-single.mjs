import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const url = 'https://new-insight.vercel.app/';
    console.log(`\nNavigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    console.log('Waiting 3 seconds...');
    await new Promise(r => setTimeout(r, 3000));

    console.log('Interacting with page...');
    await page.mouse.click(500, 500);
    await page.evaluate(() => window.scrollBy(0, 100));
    await new Promise(r => setTimeout(r, 1000));
    await page.evaluate(() => window.scrollBy(0, -100));

    // Try to click any "enter" or "start" buttons just in case there's an intro
    await page.mouse.click(720, 450);

    console.log('Waiting another 4 seconds just to be sure...');
    await new Promise(r => setTimeout(r, 4000));
    
    const destPath = path.join(process.cwd(), 'public', 'images', 'projects', 'new-insight.png');
    console.log(`Saving screenshot to ${destPath}`);
    await page.screenshot({ path: destPath });
    console.log(`Successfully captured New Insight!`);
  } catch (e) {
    console.error(`Failed to screenshot: ${e.message}`);
  } finally {
    await browser.close();
  }
})();
