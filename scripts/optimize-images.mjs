import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(here, '..', 'public', 'images');

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error(`Image folder not found at: ${inputDir}`);
        return;
    }

    files.forEach(file => {
        if (file.endsWith('.webp')) {
            const inputPath = path.join(inputDir, file);
            const tempPath = path.join(inputDir, file.replace('.webp', '.optimized.webp'));

            sharp(inputPath)
                .resize({ width: 600 })
                .webp({ quality: 60 })
                .toFile(tempPath)
                .then(() => {
                    fs.unlink(inputPath, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error(`Delete failed: ${file}`, unlinkErr);
                            return;
                        }

                        fs.rename(tempPath, inputPath, (renameErr) => {
                            if (renameErr) {
                                console.error(`Rename failed: ${file}`, renameErr);
                            } else {
                                console.log(`Optimized: ${file}`);
                            }
                        });
                    });
                })
                .catch(err => console.error(`Error optimizing ${file}:`, err));
        }
    });
});
