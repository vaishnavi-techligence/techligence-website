import zipfile
import sys
import os
import shutil

docx_path = r"C:\Users\hp\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\06AC7D1F0A11D382AADBE923286633E2FD2ECD4E\transfers\2026-28\Blog1_ _How AI Reception Robots Are Changing the Way Businesses Welcome Visitors_.docx"
dest_dir = r"d:\Projects\Website\public\blogs"

os.makedirs(dest_dir, exist_ok=True)

z = zipfile.ZipFile(docx_path)
media_files = [m for m in z.namelist() if m.startswith('word/media/')]

extracted = []
for idx, m in enumerate(media_files):
    filename = os.path.basename(m)
    ext = os.path.splitext(filename)[1]
    new_filename = f"blog1_image_{idx+1}{ext}"
    dest_path = os.path.join(dest_dir, new_filename)
    with open(dest_path, "wb") as f:
        f.write(z.read(m))
    extracted.append(new_filename)

print("Extracted images:", extracted)
