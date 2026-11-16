from pathlib import Path
import json, shutil, zipfile
root=Path(__file__).resolve().parents[1]
assets=root/'.asset-cache'
with zipfile.ZipFile(root/'tarangita-portfolio-github-pages.zip') as archive:
    archive.extractall(assets)
for target, source in json.loads((root/'scripts/asset-paths.json').read_text()).items():
    dst=root/'public'/target
    dst.parent.mkdir(parents=True,exist_ok=True)
    shutil.copyfile(assets/source,dst)
shutil.copytree(assets/'media',root/'public/media',dirs_exist_ok=True)

# Include artwork added after the original site export.
if (root/'assets').is_dir():
    shutil.copytree(root/'assets',root/'public/artwork',dirs_exist_ok=True)
