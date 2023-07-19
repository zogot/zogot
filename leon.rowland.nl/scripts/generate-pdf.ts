import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });

  await page.locator('h1').evaluate((element) => element.style.marginTop = '-30px')
  await page.locator('#pdf-link').evaluate((element) => element.style.display = 'none')

  await page.pdf({
    path: 'public/LeonRowland-Resume-2023.pdf',
    margin: {
      top: '50px',
      bottom: '50px',
    },
    scale: 0.8,
    printBackground: false,
  });

  await browser.close();
})();