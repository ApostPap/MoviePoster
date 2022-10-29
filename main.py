import cv2
import math
import time
from colorthief import ColorThief
import numpy as np
import matplotlib.pyplot as plt

video_file='Shrek.mp4'
final_image_height= 4320 
final_image_width= 7680

number_of_frames = 300
img_crop_around = 100

a_slice_width=math.ceil(final_image_width/number_of_frames)

#remove the last x seconds of credits
last_seconds_to_remove = (5*60)


cap = cv2.VideoCapture(video_file)
fps = cap.get(cv2.CAP_PROP_FPS)      # OpenCV2 version 2 used "CV_CAP_PROP_FPS"
frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = frame_count/fps

print('fps = ' + str(fps))
print('number of frames = ' + str(frame_count))
print('duration (S) = ' + str(duration))

minutes = int(duration/60)
seconds = duration%60
print('duration (M:S) = ' + str(minutes) + ':' + str(seconds))

cap.release()
