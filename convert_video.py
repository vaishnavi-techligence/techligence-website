import subprocess
import imageio_ffmpeg
exe = imageio_ffmpeg.get_ffmpeg_exe()
print('Exe:', exe)
cmd = [
    exe,
    '-i', r'D:\Projects\Website\public\robot_new.mp4',
    '-c:v', 'libx264',
    '-preset', 'ultrafast',
    '-crf', '28',
    '-c:a', 'aac',
    '-movflags', '+faststart',
    r'D:\Projects\Website\public\robot_new_h264.mp4',
    '-y'
]
subprocess.run(cmd, check=True)
