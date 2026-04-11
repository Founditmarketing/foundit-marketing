import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const url = 'https://new-insight.vercel.app/';
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    console.log('Waiting 3 seconds...');
    await new Promise(r => setTimeout(r, 3000));
    await page.mouse.click(720, 450);
    await page.evaluate(() => window.scrollBy(0, 100));
    await new Promise(r => setTimeout(r, 1000));
    await page.evaluate(() => window.scrollBy(0, -100));
    await new Promise(r => setTimeout(r, 4000));
    
    const dest = path.join(process.cwd(), '..', 'public', 'images', 'projects', 'new-insight.png');
    await page.screenshot({ path: dest });
    console.log(`Done! Saved to ${dest}`);
  } catch (e) {
    console.error(`Error: ${e.message}`);
  } finally {
    await browser.close();
  }
})();
