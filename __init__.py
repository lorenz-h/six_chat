import subprocess
import time 
import logging


import subprocess
from utils import projpath

class ChatModule:
    def __init__(self):
        self.npm_path = str(projpath("chat"))
        logging.info(f"Starting chat from {self.npm_path}")
        
        self.cmd = "npm start"
        self.kwargs = {
            "shell": True,
            "cwd": self.npm_path,
            "stdout": subprocess.PIPE
        }
    