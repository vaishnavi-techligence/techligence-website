const fs = require('fs');
const path = require('path');

// Basic parser for GLTF JSON chunk
function getGLTFInfo(filePath) {
  const buffer = fs.readFileSync(filePath);
  const magic = buffer.toString('utf8', 0, 4);
  if (magic !== 'glTF') {
    console.log('Not a valid GLB file');
    return;
  }
  const version = buffer.readUInt32LE(4);
  const length = buffer.readUInt32LE(8);
  const chunkLength = buffer.readUInt32LE(12);
  const chunkType = buffer.toString('utf8', 16, 20);
  if (chunkType !== 'JSON') {
    console.log('First chunk is not JSON');
    return;
  }
  const jsonString = buffer.toString('utf8', 20, 20 + chunkLength);
  const gltf = JSON.parse(jsonString);
  
  console.log('--- MESHES ---');
  gltf.meshes.forEach((mesh, index) => {
    console.log(`Mesh ${index}: ${mesh.name}`);
    if (mesh.primitives) {
      mesh.primitives.forEach((prim, pIndex) => {
        let matName = 'None';
        if (prim.material !== undefined && gltf.materials && gltf.materials[prim.material]) {
           matName = gltf.materials[prim.material].name;
        }
        console.log(`  Primitive ${pIndex} - Material: ${matName}`);
      });
    }
  });
}

const file = process.argv[2];
if (file) {
  getGLTFInfo(file);
} else {
  console.log('Provide a file path');
}
