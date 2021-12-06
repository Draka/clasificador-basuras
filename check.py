#!/usr/bin/env python
# coding: utf-8
import tensorflow as tf
from tensorflow.keras.models import Sequential, load_model
import tensorflow.keras.applications.inception_v3 as inception
from tensorflow.keras.preprocessing import image
import numpy as np

IMG_WIDTH = 400
IMG_HEIGHT = 400
IMG_SIZE = (IMG_WIDTH, IMG_HEIGHT)

classes = ['battery',
           'biological',
           'brown-glass',
           'cardboard',
           'clothes',
           'green-glass',
           'metal',
           'paper',
           'plastic',
           'shoes',
           'trash',
           'white-glass'
]

# print(tf.version.VERSION) # Debe ser 2.7


filename = 'model.sav'
best_model = load_model(filename)

img = image.load_img('./public/images/upload', target_size=IMG_SIZE)

def preprocess_img(path):
  img = image.load_img(path, target_size=(400,400))
  input_img = image.img_to_array(img)
  input_img = np.expand_dims(input_img, axis=0)
  return input_img

input_img = preprocess_img('./public/images/upload')

pred = np.argmax(best_model.predict(input_img), axis=1)
pred_class = classes[pred[0]]

print(pred_class)


