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
