const fs = require('fs');
const https = require('https');
const path = require('path');
const { execSync } = require('child_process');

const envDir = path.join(__dirname, 'public', 'environments');
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    console.log('Downloading', url, 'to', dest);
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  try {
    // 1. Mall (AmbientCG)
    const mallZip = path.join(envDir, 'mall.zip');
    await download('https://ambientcg.com/get?file=IndoorEnvironmentHDRI009_2K-HDR.zip', mallZip);
    
    // Extract using PowerShell
    console.log('Extracting mall.zip...');
    execSync(`powershell -Command "Expand-Archive -Path '${mallZip}' -DestinationPath '${envDir}\\mall' -Force"`);
    
    // Move the hdr
    const hdrPath = path.join(envDir, 'mall', 'IndoorEnvironmentHDRI009_2K-HDR.hdr');
    if (fs.existsSync(hdrPath)) {
      fs.copyFileSync(hdrPath, path.join(envDir, 'mall.hdr'));
      console.log('Mall HDRI ready.');
    }

    // 2. Hospital (Polyhaven)
    await download('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/hospital_room_2k.hdr', path.join(envDir, 'hospital.hdr'))
      .catch(e => console.log('Hospital failed, using fallback.', e.message));

    // 3. Studio (Polyhaven)
    await download('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/photo_studio_01_2k.hdr', path.join(envDir, 'studio.hdr'))
      .catch(e => console.log('Studio failed.', e.message));

    console.log('Done downloading HDRIs!');
  } catch (err) {
    console.error(err);
  }
}

run();
