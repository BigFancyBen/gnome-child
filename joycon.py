from pyjoycon import GyroTrackingJoyCon, get_R_id
from playsound import playsound
import time
import os
import requests
chopSound = os.path.abspath('public/sounds/tree-chop.wav')
while True:
  try:
    joycon_id = get_R_id()
    joycon = GyroTrackingJoyCon(*joycon_id)
  except Exception:
    print('retrying', Exception)
    pass
  else:
    xMax = joycon.direction[0]
    xMin = joycon.direction[0]
    yMax = joycon.direction[1]
    yMin = joycon.direction[1]
    zMax = joycon.direction[2]
    zMin = joycon.direction[2]

    for i in range(40):
        xMax = max(xMax, joycon.direction[0])
        yMax = max(yMax, joycon.direction[1])
        zMax = max(zMax, joycon.direction[2])

        xMin = min(xMin, joycon.direction[0])
        yMin = min(yMin, joycon.direction[1])
        zMin = min(zMin, joycon.direction[2])
        time.sleep(1/30)

    print(round(xMax-abs(xMin), 3),round(yMax+abs(yMin), 3),round(zMax+abs(zMin), 3))
    xChop = xMax-abs(xMin) > .5 if 1 else 0
    yChop = yMax+abs(yMin) > 1 if 1 else 0
    zChop = zMax+abs(zMin) > .5 if 1 else 0
    if( xChop + yChop + zChop >= 2):
      print('chop')
      playsound(chopSound)
      url = "http://localhost:6969/sendAction"
      payload = {"action": "CHOP"}
      headers = {"Content-Type": "application/json"}
      response = requests.request("POST", url, json=payload, headers=headers)
      print(response.text)