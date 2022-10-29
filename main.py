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


frames_got =[]

vidcap = cv2.VideoCapture(video_file)
count = 1
success = True
fps = int(vidcap.get(cv2.CAP_PROP_FPS))

frame_count = int(vidcap.get(cv2.CAP_PROP_FRAME_COUNT))
print('number of frames = ' + str(frame_count))
end_frames_to_remove = fps*last_seconds_to_remove
duration = (frame_count-end_frames_to_remove)/fps

every_x_frame = math.floor(duration/number_of_frames)
print(every_x_frame)
a =every_x_frame


start = time.time()

while success:
    print("a= "+ str(a))
    vidcap.set(cv2.CAP_PROP_POS_MSEC,(a*1000))    # added this line 
    success,image = vidcap.read()
    print ('Read a new frame: ', success)
    if(success):
        image_cropped = image[img_crop_around:(image.shape[0]-img_crop_around), img_crop_around:(image.shape[1]-img_crop_around)]
        cv2.imwrite('frames/frame%d.jpg'%count,image_cropped)
        frames_got.append('frames/frame'+str(count)+'.jpg')
        print('successfully written 10th frame')
        minutes = int(a/60)
        seconds = a%60
        print('duration (M:S) = ' + str(minutes) + ':' + str(seconds))
    
    a+=every_x_frame
    count+=1
    if count > number_of_frames:
        break









