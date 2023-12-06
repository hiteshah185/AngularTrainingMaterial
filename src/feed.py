import logging
import datetime

def log_data(data):
    # Create a logger object
    logger = logging.getLogger('data_logger')
    logger.setLevel(logging.INFO)

    # Create a handler to write logs to a file
    handler = logging.FileHandler('pr_log.txt')
    handler.setFormatter(logging.Formatter('%(asctime)s - %(message)s'))

    # Add the handler to the logger
    logger.addHandler(handler)

    # Log the data
    current_time = datetime.datetime.now()
    logger.info(f"{current_time}: {data}")

data = "Pull Request Merged."
log_data(data)
