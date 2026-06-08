import cv2
import numpy as np
import shutil
import os

ROBOTS = ["joy-a01", "t2-mini", "tella-s", "andy-r1", "t2-max", "nova-m1"]
VIEWS = ["front", "side", "back", "wave"]

def process_video():
    src = r"d:\Projects\Website\T2 max video.mp4"
    dst = r"d:\Projects\Website\public\robots\t2-max.mp4"
    
    # Ensure destination directory exists
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    
    if os.path.exists(src):
        shutil.copy(src, dst)
        print(f"Copied {src} to {dst}")
    else:
        print("T2 Max video not found in root directory!")

def remove_black_bg(img):
    # Convert to BGRA
    tmp = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    
    # Background mask (R, G, B all < 25)
    # Note: OpenCV reads as BGR, so indices 0, 1, 2 are B, G, R
    bg_mask = (tmp[:, :, 0] < 25) & (tmp[:, :, 1] < 25) & (tmp[:, :, 2] < 25)
    tmp[bg_mask, 3] = 0
    
    # Soften the edges (alpha blend) using NumPy vectorization
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Mask for softening: gray < 45 and not in bg_mask
    soften_mask = (gray < 45) & (~bg_mask)
    
    if np.any(soften_mask):
        # Calculate alpha: (gray / 45.0) * 255
        alphas = (gray[soften_mask].astype(float) / 45.0 * 255.0).astype(np.uint8)
        tmp[soften_mask, 3] = alphas
        
    return tmp

def remove_white_bg(img):
    tmp = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    # Background mask (R, G, B all > 235)
    bg_mask = (tmp[:, :, 0] > 235) & (tmp[:, :, 1] > 235) & (tmp[:, :, 2] > 235)
    tmp[bg_mask, 3] = 0
    return tmp

def slice_composites():
    for view in VIEWS:
        path = rf"d:\Projects\Website\public\robots\{view}.png"
        if not os.path.exists(path):
            print(f"Composite image {path} not found!")
            continue
        img = cv2.imread(path)
        h, w, c = img.shape
        col_w = w // 6
        for idx, robot in enumerate(ROBOTS):
            col_start = idx * col_w
            col_end = (idx + 1) * col_w if idx < 5 else w
            cropped = img[:, col_start:col_end]
            processed = remove_black_bg(cropped)
            out_path = rf"d:\Projects\Website\public\robots\{robot}-{view}.png"
            cv2.imwrite(out_path, processed)
            print(f"Saved sliced view {robot}-{view} to {out_path}")

def process_views_folder():
    mapping = {
        "andy back view.png": ("andy-r1", "back"),
        "andy side view.png": ("andy-r1", "side"),
        "joy 01 back view.jpeg": ("joy-a01", "back"),
        "joy a01 side view.jpeg": ("joy-a01", "side"),
        "joy a01 sidee vuew.jpeg": ("joy-a01", "side"),
        "nova back view.png": ("nova-m1", "back"),
        "nova side view.png": ("nova-m1", "side")
    }
    
    view_dir = r"d:\Projects\Website\view"
    for filename, (robot, view) in mapping.items():
        filepath = os.path.join(view_dir, filename)
        if not os.path.exists(filepath):
            print(f"File {filename} not found in views directory")
            continue
        img = cv2.imread(filepath)
        if img is None:
            print(f"Could not read image {filename}")
            continue
            
        # Detect background (compare average corner brightness)
        h, w, c = img.shape
        corners = [img[0, 0], img[0, w-1], img[h-1, 0], img[h-1, w-1]]
        avg_brightness = np.mean([np.mean(c) for c in corners])
        
        if avg_brightness > 127:
            # White background
            processed = remove_white_bg(img)
        else:
            # Black background
            processed = remove_black_bg(img)
            
        out_path = rf"d:\Projects\Website\public\robots\{robot}-{view}.png"
        cv2.imwrite(out_path, processed)
        print(f"Processed view folder image {filename} -> {out_path}")

if __name__ == "__main__":
    process_video()
    slice_composites()
    process_views_folder()
